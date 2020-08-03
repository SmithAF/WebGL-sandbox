import { getContext } from "./WebGL";

const { ELEMENT_ARRAY_BUFFER, STATIC_DRAW } = WebGL2RenderingContext;
export class IndexBuffer {
  /**
   *`
   * @param {BufferSource} data
   */
  constructor(data) {
    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(ELEMENT_ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(ELEMENT_ARRAY_BUFFER, data, STATIC_DRAW);
  }

  bind() {
    this.gl.bindBuffer(ELEMENT_ARRAY_BUFFER, this.buffer);
  }
  unbind() {
    this.gl.bindBuffer(ELEMENT_ARRAY_BUFFER, 0);
  }

  delete() {
    this.gl.deleteBuffer(this.buffer);
  }

  get gl() {
    return getContext();
  }
}
