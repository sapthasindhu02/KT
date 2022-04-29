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
  return a * b;
}
function greetWorld(func) {
  return func("world");
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
//tests
describe("sample testing", () => {
  test("addition should return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("addition should return 6", () => {
    expect(sum(4, 2)).not.toBe(3);
  });
  test("addition function is defined", () => {
    expect(sum).toBeDefined();
  });
  test(" should return an object", () => {
    expect(someFunc({ id: 1 })).toEqual({ id: 1 });
  });
  test(" to contain the element in array ", () => {
    expect(someFunc([1, 2, 3, 4])).toContain(4);
  });
  test("there is james in james cameron", () => {
    expect(testString("james cameron")).toMatch(/james/);
  });
  test(" should be Null", () => {
    expect(tobe_Null()).toBeNull();
  });

  test("example exception returns an error", () => {
    if (multiply(2, 10) !== 20) {
      throw new Error("the result should be 15");
    }
  });

  test("async example", async () => {
    const result = await returnNumber();
    expect(result).toBe(2);
  });

  test("greetWorld calls the greeting function properly", () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce(2);
    const value = mockFn();
    expect(value).toBe(2);
    expect(mockFn).toBeCalledTimes(1);
  });

  test("should return 6", () => {
    const mockfn = jest.fn((x, y) => x + y);
    const result = doSomeWork(mockfn, 2, 3);
    expect(result).toBe(6);
    expect(mockfn).toBeCalledWith(2, 3);
  });
});
