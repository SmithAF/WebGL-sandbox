import { getContext } from "./WebGL";

export class VertexBuffer {
  /**
   *
   
   * @param {BufferSource} data
   */
  constructor(data) {
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  bind() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
  }
  unbind() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, 0);
  }

  delete() {
    this.gl.deleteBuffer(this.buffer);
  }

  get gl() {
    return getContext();
  }
}
