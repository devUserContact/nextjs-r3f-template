#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
void main() {
	float y = gl_FragCoord.y / 125.0;
	vec3 color = vec3(cos(y), cos(y), sin(y));
	gl_FragColor = vec4(color, 1.0);
}
