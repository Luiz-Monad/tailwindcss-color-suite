"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./app.main-uUcSgEB4.js"),c=e.defineComponent({setup(){const{settings:t}=e.useSettingsService();return{settings:t}}}),i={class:"__cs-p-4 __cs-space-y-4"},_={class:"__cs-flex __cs-items-center __cs-space-x-2"},u={class:"__cs-flex __cs-items-center __cs-space-x-2"},p={class:"__cs-p-4 __cs-space-y-4"},V={class:"__cs-flex __cs-items-center __cs-space-x-2"},m={class:"__cs-flex __cs-items-center __cs-space-x-2"},g={class:"__cs-flex __cs-items-center __cs-space-x-2"};function N(t,s,l,a,r,d){const n=e.resolveComponent("toggle");return e.openBlock(),e.createElementBlock("section",null,[s[10]||(s[10]=e.createBaseVNode("div",{class:"__cs-p-2 __cs-bg-gray-800"},[e.createBaseVNode("h3",{class:"__cs-font-bold"},"Panel Settings")],-1)),e.createBaseVNode("div",i,[e.createBaseVNode("label",_,[e.createVNode(n,{modelValue:t.settings.open_button,"onUpdate:modelValue":s[0]||(s[0]=o=>t.settings.open_button=o)},null,8,["modelValue"]),s[5]||(s[5]=e.createBaseVNode("div",null,"Show color suite button",-1))]),e.createBaseVNode("label",u,[e.createVNode(n,{modelValue:t.settings.float_panel,"onUpdate:modelValue":s[1]||(s[1]=o=>t.settings.float_panel=o)},null,8,["modelValue"]),s[6]||(s[6]=e.createBaseVNode("div",null,"Float over content",-1))])]),s[11]||(s[11]=e.createBaseVNode("div",{class:"__cs-p-2 __cs-bg-gray-800"},[e.createBaseVNode("h3",{class:"__cs-font-bold"},"Palette Settings")],-1)),e.createBaseVNode("div",p,[e.createBaseVNode("label",V,[e.createVNode(n,{modelValue:t.settings.include_transparent,"onUpdate:modelValue":s[2]||(s[2]=o=>t.settings.include_transparent=o)},null,8,["modelValue"]),s[7]||(s[7]=e.createBaseVNode("div",null,"Include transparent color",-1))]),e.createBaseVNode("label",m,[e.createVNode(n,{modelValue:t.settings.include_current,"onUpdate:modelValue":s[3]||(s[3]=o=>t.settings.include_current=o)},null,8,["modelValue"]),s[8]||(s[8]=e.createBaseVNode("div",null,"Include currentColor color",-1))]),e.createBaseVNode("label",g,[e.createVNode(n,{modelValue:t.settings.include_inherit,"onUpdate:modelValue":s[4]||(s[4]=o=>t.settings.include_inherit=o)},null,8,["modelValue"]),s[9]||(s[9]=e.createBaseVNode("div",null,"Include inherit color",-1))])])])}const f=e._export_sfc(c,[["render",N]]),B=e.defineComponent({components:{SettingsEditor:f},setup(){return{}}});function b(t,s,l,a,r,d){const n=e.resolveComponent("settings-editor");return e.openBlock(),e.createElementBlock(e.Fragment,null,[s[0]||(s[0]=e.createBaseVNode("div",{class:"__cs-p-2 __cs-bg-gray-700 __cs-text-white"},[e.createBaseVNode("h2",{class:"__cs-text-lg __cs-font-semibold"},"Settings")],-1)),e.createVNode(n)],64)}const v=e._export_sfc(B,[["render",b]]);exports.default=v;