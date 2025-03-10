import PassThroughVertexSource from './shaders/triangle.vertex'
import { debounceAnimationFrame } from './utils'

export function createFragmentProgram(canvas:HTMLCanvasElement, fragment_source:string) {
	const gl = canvas.getContext("webgl2", { premultipliedAlpha: false })
	if (!gl) throw new Error('Unable to get WebGL context.')

	const device_pixel_ratio = window.devicePixelRatio || 1

	// Create screen covering triangle
	let triangle_buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, triangle_buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ -1, 3,  3,-1,  -1,-1 ]), gl.STATIC_DRAW)

	// Create shaders
	const passthrough_vertex_shader = createShader(gl, gl.VERTEX_SHADER, PassThroughVertexSource) // We aren't doing anything with vertices so this is just a kind of no-op thing
	const gradient_fragment_shader = createShader(gl, gl.FRAGMENT_SHADER, fragment_source) // This shader actually generates the gradient based on the component curve

	// Create program
	const program = createProgram(gl, passthrough_vertex_shader, gradient_fragment_shader)

	// Set up common program uniforms
	const setResolution = createUniform(gl, program, '2fv', 'resolution')

	// Make sure the gl context is using the gradient program
	gl.useProgram(program)

	// Create resize observer on the canvas to re-render it as it moves around
	const resize_observer = new ResizeObserver((entries) => debounceAnimationFrame(render))
	resize_observer.observe(canvas)

	// This function runs the webgl program
	function render() {
		if (!gl) return

		// Resize viewport to DOM resolution and set resolution uniform
		const canvas_rect = canvas.getBoundingClientRect()
		const width = canvas.width = canvas_rect.width * device_pixel_ratio
		const height = canvas.height = canvas_rect.height * device_pixel_ratio

		gl.viewport(0, 0, width, height)
		setResolution([width, height])

		gl.drawArrays(gl.TRIANGLE_FAN, 0, 3) // Draw
	}

	function destroy() {
		if (!gl) return

		let ext = gl.getExtension('WEBGL_lose_context')
		if (ext) ext.loseContext()
	}

	return {
		createUniform: (type:WebGLUniformType, name:string) => createUniform(gl, program, type, name),
		render: debounceAnimationFrame(render),
		destroy
	}
}

export function createShader(gl:WebGL2RenderingContext, type:number, source:string) {
	let shader = gl.createShader(type)
	if (!shader) throw new Error('Unable to create shader1')

	gl.shaderSource(shader, source)
	gl.compileShader(shader)

	let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
	if (!success) throw new Error('Unable to create shader2')


	return shader
}

export function createProgram(gl:WebGL2RenderingContext, vertex_shader:WebGLShader, fragment_shader:WebGLShader) {
	let program = gl.createProgram()
	if (!program) throw new Error('Unable to create program')

	gl.attachShader(program, vertex_shader)
	gl.attachShader(program, fragment_shader)
	gl.linkProgram(program)

	let success = gl.getProgramParameter(program, gl.LINK_STATUS)
	if (!success) throw new Error('Unable to create program')

	return program
}

export type WebGLUniformType = '1f'|'1fv'|'1i'|'1iv'|'1ui'|'1uiv'|'2f'|'2fv'|'2i'|'2iv'|'2ui'|'2uiv'|
															 '3f'|'3fv'|'3i'|'3iv'|'3ui'|'3uiv'|'4f'|'4fv'|'4i'|'4iv'|'4ui'|'4uiv'|
															 'Matrix2fv'|'Matrix2x3fv'|'Matrix2x4fv'|
															 'Matrix3fv'|'Matrix3x2fv'|'Matrix3x4fv'|
															 'Matrix4fv'|'Matrix4x2fv'|'Matrix4x3fv'

export function createUniform(gl:WebGL2RenderingContext, program:WebGLProgram, type:WebGLUniformType, name:string) {
	let location = gl.getUniformLocation(program, name)
	return function setUniform(...args) {
		return gl[`uniform${type}`](location, ...args)
	}
}