uniform float u_time;
void main() {

	vec4 modelPosition = modelMatrix * vec4(position.x, position.y, position.z, 1.0);
	modelPosition.y -= sin((modelPosition.x) * 0.20 + u_time) * 1.50;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectedPosition = projectionMatrix * viewPosition;
	gl_Position = projectedPosition;
	gl_PointSize = 50.0;
}
