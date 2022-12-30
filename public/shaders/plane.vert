#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec3 vecPos;
varying vec3 vecNormal;

uniform float u_time;

void main() {
	vUv = uv;
	vecPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
	vecNormal = (modelViewMatrix * vec4(normal, 0.0)).xyz;

	vec4 modelPosition = modelMatrix * vec4(position.x * 1.0, position.y * 1.0, position.z * 0.05, 1.0);

	modelPosition.y -= sin((modelPosition.x) * 1.0 + u_time) * 0.40;
	modelPosition.y -= sin((modelPosition.z) * 2.0 + u_time) * 0.40;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectedPosition = projectionMatrix * viewPosition;
	gl_Position = projectedPosition;
}
