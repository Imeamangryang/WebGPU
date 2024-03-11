(()=>{"use strict";const e=" struct TransformData {\r\n    model: mat4x4<f32>,\r\n    view: mat4x4<f32>,\r\n    projection: mat4x4<f32>,\r\n};\r\n@binding(0) @group(0) var<uniform> transformUBO: TransformData;\r\n \r\n struct Fragment {\r\n    @builtin(position) Position : vec4<f32>,\r\n    @location(0) Color : vec4<f32>\r\n };\r\n\r\n @vertex\r\n fn vs_main(@location(0) vertexPosition: vec3<f32>, @location(1) vertexColor: vec3<f32>) -> Fragment {\r\n    var output : Fragment;\r\n\r\n    output.Position = transformUBO.projection * transformUBO.view * transformUBO.model * vec4<f32>(vertexPosition, 1.0);\r\n    output.Color = vec4<f32>(vertexColor, 1.0);\r\n\r\n    return output;\r\n }\r\n\r\n @fragment\r\n fn fs_main(@location(0) Color: vec4<f32>) -> @location(0) vec4<f32> {\r\n    return Color;\r\n }";class t{constructor(e){const t=new Float32Array([0,0,.5,1,0,0,0,-.5,-.5,0,1,0,0,.5,-.5,0,0,1]),r=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,i={size:t.byteLength,usage:r,mappedAtCreation:!0};this.buffer=e.createBuffer(i),new Float32Array(this.buffer.getMappedRange()).set(t),this.buffer.unmap(),this.bufferLayout={arrayStride:24,attributes:[{shaderLocation:0,format:"float32x3",offset:0},{shaderLocation:1,format:"float32x3",offset:12}]}}}var r=1e-6,i="undefined"!=typeof Float32Array?Float32Array:Array;function n(){var e=new i(16);return i!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});var o=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))};const a=document.getElementById("gfx-main"),s=new class{constructor(e){this.render=()=>{this.t+=.1,this.t>2*Math.PI&&(this.t-=2*Math.PI);const e=n();!function(e,t,r,i,n){var o,a=1/Math.tan(t/2);e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=n&&n!==1/0?(o=1/(i-n),e[10]=(n+i)*o,e[14]=2*n*i*o):(e[10]=-1,e[14]=-2*i)}(e,Math.PI/4,800/600,.1,10);const t=n();var i,o,a,s,u,f,c,h,d,l,v,m,p,g,y,b,M,P,B,x,w,U,A;i=t,y=(o=[-2,0,2])[0],b=o[1],M=o[2],P=(s=[0,0,1])[0],B=s[1],x=s[2],w=(a=[0,0,0])[0],U=a[1],A=a[2],Math.abs(y-w)<r&&Math.abs(b-U)<r&&Math.abs(M-A)<r?function(e){e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1}(i):(v=y-w,m=b-U,p=M-A,u=B*(p*=g=1/Math.hypot(v,m,p))-x*(m*=g),f=x*(v*=g)-P*p,c=P*m-B*v,(g=Math.hypot(u,f,c))?(u*=g=1/g,f*=g,c*=g):(u=0,f=0,c=0),h=m*c-p*f,d=p*u-v*c,l=v*f-m*u,(g=Math.hypot(h,d,l))?(h*=g=1/g,d*=g,l*=g):(h=0,d=0,l=0),i[0]=u,i[1]=h,i[2]=v,i[3]=0,i[4]=f,i[5]=d,i[6]=m,i[7]=0,i[8]=c,i[9]=l,i[10]=p,i[11]=0,i[12]=-(u*y+f*b+c*M),i[13]=-(h*y+d*b+l*M),i[14]=-(v*y+m*b+p*M),i[15]=1);const C=n();!function(e,t,i,n){var o,a,s,u,f,c,h,d,l,v,m,p,g,y,b,M,P,B,x,w,U,A,C,G,F=n[0],q=n[1],O=n[2],I=Math.hypot(F,q,O);I<r||(F*=I=1/I,q*=I,O*=I,o=Math.sin(i),s=1-(a=Math.cos(i)),u=t[0],f=t[1],c=t[2],h=t[3],d=t[4],l=t[5],v=t[6],m=t[7],p=t[8],g=t[9],y=t[10],b=t[11],M=F*F*s+a,P=q*F*s+O*o,B=O*F*s-q*o,x=F*q*s-O*o,w=q*q*s+a,U=O*q*s+F*o,A=F*O*s+q*o,C=q*O*s-F*o,G=O*O*s+a,e[0]=u*M+d*P+p*B,e[1]=f*M+l*P+g*B,e[2]=c*M+v*P+y*B,e[3]=h*M+m*P+b*B,e[4]=u*x+d*w+p*U,e[5]=f*x+l*w+g*U,e[6]=c*x+v*w+y*U,e[7]=h*x+m*w+b*U,e[8]=u*A+d*C+p*G,e[9]=f*A+l*C+g*G,e[10]=c*A+v*C+y*G,e[11]=h*A+m*C+b*G,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]))}(C,C,this.t,[0,0,1]),this.device.queue.writeBuffer(this.uniformBuffer,0,C),this.device.queue.writeBuffer(this.uniformBuffer,64,t),this.device.queue.writeBuffer(this.uniformBuffer,128,e);const G=this.device.createCommandEncoder(),F=this.context.getCurrentTexture().createView(),q=G.beginRenderPass({colorAttachments:[{view:F,clearValue:{r:.5,g:0,b:.25,a:1},loadOp:"clear",storeOp:"store"}]});q.setPipeline(this.pipeline),q.setVertexBuffer(0,this.triangleMesh.buffer),q.setBindGroup(0,this.bindGroup),q.draw(3,1,0,0),q.end(),this.device.queue.submit([G.finish()]),requestAnimationFrame(this.render)},this.canvas=e,this.t=0}Initialize(){return o(this,void 0,void 0,(function*(){yield this.setupDevice(),this.createAssets(),yield this.makePipeline(),this.render()}))}setupDevice(){var e,t;return o(this,void 0,void 0,(function*(){this.adapter=yield null===(e=navigator.gpu)||void 0===e?void 0:e.requestAdapter(),this.device=yield null===(t=this.adapter)||void 0===t?void 0:t.requestDevice(),this.context=this.canvas.getContext("webgpu"),this.format="bgra8unorm",this.context.configure({device:this.device,format:this.format,alphaMode:"opaque"})}))}makePipeline(){return o(this,void 0,void 0,(function*(){this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}}]});this.bindGroup=this.device.createBindGroup({layout:t,entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]});const r=this.device.createPipelineLayout({bindGroupLayouts:[t]});this.pipeline=this.device.createRenderPipeline({vertex:{module:this.device.createShaderModule({code:e}),entryPoint:"vs_main",buffers:[this.triangleMesh.bufferLayout]},fragment:{module:this.device.createShaderModule({code:e}),entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"},layout:r})}))}createAssets(){this.triangleMesh=new t(this.device)}}(a);s.Initialize()})();