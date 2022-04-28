"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../functions/functions");
// describe("abcd", () => {
//   test("testing", () => {
//     expect(1).toBe(1);
//   });
// });
test("addition should return 3", () => {
    expect((0, functions_1.sum)(1, 2)).toBe(3);
});
// describe("sample testing", () => {
//   // test("testing", () => {
//   //   expect(1).toBe(1);
//   // });
//   // test("addition should return 6", () => {
//   //   expect(sum(4, 2)).not.toBe(3);
//   // });
//   // test(" should be Null", () => {
//   //   expect(tobe_Null()).toBeNull();
//   // });
//   // test("greetWorld calls the greeting function properly", () => {
//   //   const greetImplementation = (name) => `Hey, ${name}!`;
//   //   const mockFn = jest.fn(greetImplementation);
//   //   const value = greetWorld(mockFn);
//   //   expect(mockFn).toHaveBeenCalled();
//   //   expect(mockFn).toHaveBeenCalledWith("world");
//   //   expect(value).toBe("Hey, world!");
//   // });
// });
