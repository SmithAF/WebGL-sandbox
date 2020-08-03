import { setContext } from "./WebGL";
import fsSource from "./shaders/frag.glsl";
import vsSource from "./shaders/vert.glsl";
import { createShaderProgram } from "./util";
import { IndexBuffer } from "./IndexBuffer";
import { VertexBuffer } from "./VertexBuffer";
const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl2");
setContext(gl);
canvas.width = 640;
canvas.height = 480;
gl.clearColor(0, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

// Create Shader Program
const program = createShaderProgram(vsSource, fsSource);

// Get position atribute
const a_position = gl.getAttribLocation(program, "a_position");

// Create a new Vertext Buffer of float 32 to hold each vertex
const vb = new VertexBuffer(
  new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5])
);
// Create a new Index buffer that points to vertex indecies required to build a square
const ib = new IndexBuffer(new Int16Array([0, 1, 2, 2, 3, 0]));

// Tell GL to use the program
gl.useProgram(program);

// Enable the a_position attribute
gl.enableVertexAttribArray(a_position);

// Tell it how it should handle the vertex data
gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);

// Tell it to draw based on the index buffer
gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
