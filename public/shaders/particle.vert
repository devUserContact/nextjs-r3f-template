uniform float u_time;
varying float vDistance;

void main() {


	vec3 pos = vec3(position.xyz);
	vec4 modelPosition = modelMatrix * vec4(position.x, position.y, position.z, 1.0);
	modelPosition.y -= sin((modelPosition.x) * 0.20 + u_time) * 2.50;

	float distanceFactor = pow(5.0 - distance(modelPosition.xyz, vec3(0.0)), 0.50);
	vDistance = distanceFactor;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectedPosition = projectionMatrix * viewPosition;
	gl_Position = projectedPosition;
	gl_PointSize = 10.0;
}
