import fsSource from './shaders/frag.glsl';
import vsSource from './shaders/vert.glsl';
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2');
canvas.width = 640;
canvas.height = 480;
gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

// Compile the vertex shader.
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vsSource);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS))
  throw new Error(gl.getShaderInfoLog(vertexShader));

// Compile the fragment shader.
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fsSource);
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS))
  throw new Error(gl.getShaderInfoLog(fragmentShader));

// Link and use the program.
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS))
  throw new Error(gl.getProgramInfoLog(program));
gl.useProgram(program);

// Define the positions (as vec2, in normalized coordinates) of the square that covers the canvas.
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array([-1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0]),
  gl.STATIC_DRAW
);

// Bind the position buffer to the position attribute.
const positionAttribute = gl.getAttribLocation(program, 'a_position');
gl.enableVertexAttribArray(positionAttribute);
gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);

// Draw the square!
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
