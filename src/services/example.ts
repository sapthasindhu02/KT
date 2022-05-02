let sum = function (a, b) {
  return Number(a) + Number(b);
};
let tobe_Null = function () {
  return null;
};
let someFunc = (obj) => {
  return obj;
};
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters are invalid");
  }
  return a * b;
}
function doSomeWork(func, a, b) {
  return Number(func(a, b)) + Number(1);
}
function returnNumber() {
  return new Promise((resolve, reject) => {
    resolve(2);
  });
}
function testString(str) {
  return str;
}
export {
  testString,
  returnNumber,
  doSomeWork,
  multiply,
  someFunc,
  sum,
  tobe_Null,
};
