#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

uniform vec3 diffuse;
uniform vec3 pointLightColor[ NUM_POINT_LIGHTS ];
uniform vec3 pointLightPosition[ NUM_POINT_LIGHTS ];
uniform float pointLightDistance[ NUM_POINT_LIGHTS ];

varying vec3 vPos;
varying vec3 vNormal;

void main() {

  vec4 addedLights = vec4(0.0,0.0,0.0, 1.0);
  for(int l = 0; l < NUM_POINT_LIGHTS; l++) {
    vec3 lightDirection = normalize(vPos - pointLightPosition[l]);
    addedLights.rgb += clamp(dot(-lightDirection, vNormal), 0.0, 1.0) * pointLightColor[l];
  }
  gl_FragColor = mix(vec4(diffuse.x, diffuse.y, diffuse.z, 1.0), addedLights, addedLights);


//	vec2 color = vec2(sin(u_time * 0.20f), cos(u_time * 0.20f));
//	gl_FragColor = vec4(color, 0.25, 1.0);
}
