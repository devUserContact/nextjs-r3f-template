#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

varying vec4 pos;

varying vec3 vPos;
varying vec3 vNormal;

void main() {

  vPos = (modelMatrix * vec4(position, 1.0 )).xyz;
  vNormal = normalMatrix * normal;
// gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

	vec4 modelPosition = modelMatrix * vec4(position.x * 1.5, position.y * 1.5, position.z * 0.5, 1.0);
//
//	pos = modelPosition;
//
	modelPosition.y -= 1.25*sin((modelPosition.x)/4.0 + u_time) * 2.0;
	modelPosition.y -= 1.25*sin((modelPosition.z)/8.0 + u_time) * 4.0;
	modelPosition.xy -= 0.50*cos((modelPosition.x)*2.0 + u_time) * 1.0;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectedPosition = projectionMatrix * viewPosition;

	gl_Position = projectedPosition;
}
