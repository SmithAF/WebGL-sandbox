import { getContext } from "./WebGL";

/**
 * Util function to build and link a shader program
 *
 * @param {string} vert vertacy shader program source
 * @param {string} frag fragment/pixel shader program source
 * @returns {WebGLProgram} compiled web gl program
 */
export function createShaderProgram(vert, frag) {
  const gl = getContext();
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vert);
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS))
    throw new Error(gl.getShaderInfoLog(vertexShader));

  // Compile the fragment shader.
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, frag);
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS))
    throw new Error(gl.getShaderInfoLog(fragmentShader));

  // Link and use the program.
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  return program;
}
