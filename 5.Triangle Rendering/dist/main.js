(()=>{"use strict";const e=" struct Fragment {\r\n    @builtin(position) Position : vec4<f32>,\r\n    @location(0) Color : vec4<f32>\r\n };\r\n\r\n @vertex\r\n fn vs_main(@builtin(vertex_index) v_id: u32) -> Fragment {\r\n\r\n    var positions = array<vec2<f32>, 3> (\r\n        vec2<f32>(0.0, 0.5),\r\n        vec2<f32>(-0.5, -0.5),\r\n        vec2<f32>(0.5, -0.5),\r\n    );\r\n\r\n    var colors = array<vec3<f32>, 3> (\r\n        vec3<f32>(1.0, 0.0, 0.0),\r\n        vec3<f32>(0.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 1.0),\r\n    );\r\n\r\n    var output : Fragment;\r\n\r\n    output.Position = vec4<f32>(positions[v_id], 0.0, 1.0);\r\n    output.Color = vec4<f32>(colors[v_id], 1.0);\r\n\r\n    return output;\r\n }\r\n\r\n @fragment\r\n fn fs_main(@location(0) Color: vec4<f32>) -> @location(0) vec4<f32> {\r\n    return Color;\r\n }";var n,r;r=function*(){var n;const r=document.getElementById("gfx-main"),t=yield null===(n=navigator.gpu)||void 0===n?void 0:n.requestAdapter(),o=yield null==t?void 0:t.requestDevice(),i=r.getContext("webgpu"),a="bgra8unorm";i.configure({device:o,format:a,alphaMode:"opaque"});const c=o.createBindGroupLayout({entries:[]}),u=o.createBindGroup({layout:c,entries:[]}),v=o.createPipelineLayout({bindGroupLayouts:[c]}),l=o.createRenderPipeline({vertex:{module:o.createShaderModule({code:e}),entryPoint:"vs_main"},fragment:{module:o.createShaderModule({code:e}),entryPoint:"fs_main",targets:[{format:a}]},primitive:{topology:"triangle-list"},layout:v}),s=o.createCommandEncoder(),d=i.getCurrentTexture().createView(),f=s.beginRenderPass({colorAttachments:[{view:d,clearValue:{r:.5,g:0,b:.25,a:1},loadOp:"clear",storeOp:"store"}]});f.setPipeline(l),f.setBindGroup(0,u),f.draw(3,1,0,0),f.end(),o.queue.submit([s.finish()])},new((n=void 0)||(n=Promise))((function(e,t){function o(e){try{a(r.next(e))}catch(e){t(e)}}function i(e){try{a(r.throw(e))}catch(e){t(e)}}function a(r){var t;r.done?e(r.value):(t=r.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}a((r=r.apply(void 0,[])).next())}))})();