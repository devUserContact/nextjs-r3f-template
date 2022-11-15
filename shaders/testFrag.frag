#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
void main() {
	vec2 color = vec2(sin(u_time * 0.20f), cos(u_time * 0.20f));
	gl_FragColor = vec4(color, 0.25, 1.0);
}
