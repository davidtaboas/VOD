// Helper function for get the last item of an array
/* eslint-disable */
if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
}
/* eslint-enable */
