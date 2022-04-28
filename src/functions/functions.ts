import { arr } from "../Providers/ArrayProvider";

let sum = function (a, b) {
  return Number(a) + Number(b);
};
let arr_fun = function (arr: Array<Number>) {
  return arr;
};
let tobe_Null = function () {
  return null;
};
function greetWorld(greetingFn: any) {
  return greetingFn("world");
}

arr_fun(arr);
export { sum, arr_fun, tobe_Null, greetWorld };
