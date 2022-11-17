#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

varying vec2 vUv;
varying vec3 vecPos;
varying vec3 vecNormal;
 
uniform float lightIntensity;

struct PointLight {
  vec3 color;
  vec3 position; // light position, in camera coordinates
  float distance; // used for attenuation purposes. Since
                  // we're writing our own shader, it can
                  // really be anything we want (as long as
                  // we assign it to our light in its
                  // "distance" field
};

uniform PointLight pointLights[NUM_POINT_LIGHTS];
 
void main(void) {

  // Pretty basic lambertian lighting...
  vec4 addedLights = vec4(0.0,
                          0.0,
                          0.0,
                          1.0);
  for(int l = 0; l < NUM_POINT_LIGHTS; l++) {
      vec3 lightDirection = normalize(vecPos
                            - pointLights[l].position);
      addedLights.rgb += clamp(dot(-lightDirection,
                               vecNormal), 0.0, 1.0)
                         * pointLights[l].color
                         * lightIntensity;
  }
//  gl_FragColor = vec4 (0.25, 0.0, 0.5, 1.0)
//                 * addedLights;


	vec2 color = vec2(sin(u_time * 0.20f), cos(u_time * 0.20f));
	gl_FragColor = vec4(color, 0.5, 1.0)
                 * addedLights;
}
