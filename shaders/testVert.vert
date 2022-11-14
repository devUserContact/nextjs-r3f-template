#ifdef GL_ES
precision mediump float;
#endif

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);

	modelPosition.x += sin(modelPosition.z) * 1.0;
	modelPosition.y += sin(modelPosition.x) * 2.0;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectedPosition = projectionMatrix * viewPosition;

	gl_Position = projectedPosition;
}
