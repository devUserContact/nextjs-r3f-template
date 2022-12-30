#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

varying vec2 vUv;
varying vec3 vecPos;
varying vec3 vecNormal;

uniform vec3 diffuse;
uniform float lightIntensity;

struct PointLight {
  vec3 color;
  vec3 position; 
//  float distance;
};

uniform PointLight pointLights[NUM_POINT_LIGHTS];

void main(void) {

  vec4 addedLights = vec4(0.1, 0.0, 0.0, 1.0);
  for(int l = 0; l < NUM_POINT_LIGHTS; l++) {
    vec3 lightDirection = normalize(vecPos - pointLights[l].position);
    addedLights.rgb += clamp(dot(-lightDirection, vecNormal), 0.0, 1.0) * pointLights[l].color * lightIntensity;
  }

  vec4 fColor;
  fColor = mix(vec4(diffuse.xyz, 1.0), addedLights, vec4(vec3(0.6), 1.0));
  gl_FragColor = fColor;
}
