#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec3 vecPos;
varying vec3 vecNormal;

//uniform float u_time;

void main() {
  vUv = uv;
  // Since the light is in camera coordinates,
  // I'll need the vertex position in camera coords too
  vecPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
  // That's NOT exacly how you should transform your
  // normals but this will work fine, since my model
  // matrix is pretty basic
  vecNormal = (modelViewMatrix * vec4(normal, 0.0)).xyz;
  gl_Position = projectionMatrix *
                vec4(vecPos, 1.0);

//	vec4 modelPosition = modelMatrix * vec4(position.x * 1.5, position.y * 1.5, position.z * 0.5, 1.0);
//
//	modelPosition.y -= 1.25*sin((modelPosition.x)/4.0 + u_time) * 2.0;
//	modelPosition.y -= 1.25*sin((modelPosition.z)/8.0 + u_time) * 4.0;
//	modelPosition.xy -= 0.50*cos((modelPosition.x)*2.0 + u_time) * 1.0;
//
//	vec4 viewPosition = viewMatrix * modelPosition;
//	vec4 projectedPosition = projectionMatrix * viewPosition;
//
//	gl_Position = projectedPosition;
}
