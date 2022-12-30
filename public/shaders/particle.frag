uniform float u_time;
varying float vDistance;

void main() {

	vec4 color1 = vec4(0.25, 0.0, 0.5, 1.0);
	vec4 color2 = vec4(0.85, 0.0, 0.5, 1.0);
	
	vec4 fColor= mix(color1, color2, vDistance); 
	gl_FragColor = fColor;

}
