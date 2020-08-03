/**
 * Global shared GL context
 * @type {WebGL2RenderingContext}
 */
let gl = null;

/**
 * @returns {WebGL2RenderingContext}
 */
export const getContext = () => gl;

/**
 *
 * @param {WebGL2RenderingContext} _gl
 */
export const setContext = (_gl) => ((gl = _gl), void 0);
