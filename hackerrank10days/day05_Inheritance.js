// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }

Rectangle.prototype.area = function () {
  return this.w * this.h;
};
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}
