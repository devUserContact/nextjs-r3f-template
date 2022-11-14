#ifdef GL_ES
precision mediump float;
#endif

void main() {
	float y = gl_FragCoord.y / 100.0;
	vec3 color = vec3(sin(y * 3.0));
	gl_FragColor = vec4(color, 1.0);
}
