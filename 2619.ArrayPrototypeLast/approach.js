Array.prototype.last = function () {
  if (this.length) {
    return this[this.length - 1];
  }
  return -1;
};

let a = [1, 2, 3, 4, 5];
console.log("Get the last element", a.last());
