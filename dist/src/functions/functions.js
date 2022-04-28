"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetWorld = exports.tobe_Null = exports.arr_fun = exports.sum = void 0;
const ArrayProvider_1 = require("../Providers/ArrayProvider");
let sum = function (a, b) {
    return Number(a) + Number(b);
};
exports.sum = sum;
let arr_fun = function (arr) {
    return arr;
};
exports.arr_fun = arr_fun;
let tobe_Null = function () {
    return null;
};
exports.tobe_Null = tobe_Null;
function greetWorld(greetingFn) {
    return greetingFn("world");
}
exports.greetWorld = greetWorld;
arr_fun(ArrayProvider_1.arr);
