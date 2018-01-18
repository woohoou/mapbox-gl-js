// @flow

/**
 * An index array stores Uint16 indices of vertexes in a corresponding vertex array. We use
 * three kinds of index arrays: arrays storing groups of three indices, forming triangles;
 * arrays storing pairs of indices, forming line segments; and arrays storing single indices,
 * forming a line strip.
 * @private
 */
module.exports = {
    LineIndexArray: require('./array_types').LineIndexArray,
    TriangleIndexArray: require('./array_types').TriangleIndexArray,
    LineStripIndexArray: require('./array_types').LineStripIndexArray
};
