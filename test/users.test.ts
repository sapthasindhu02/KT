import {
  testString,
  returnNumber,
  doSomeWork,
  multiply,
  someFunc,
  sum,
  tobe_Null,
} from "../src/services/example";
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
    let mul;
    try {
      mul = multiply("a", 1);
    } catch (err) {
      mul = err;
    }
    expect(mul).toBeInstanceOf(Error);
    expect(mul.message).toBeDefined();
    expect(mul.message).toBe("parameters are invalid");
    // if (multiply(2, 10) !== 20) {
    //   throw new Error("the result should be 15");
    // }
  });

  test("async example", async () => {
    const result = await returnNumber();
    expect(result).toBe(2);
  });

  test(" using mock function ", () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce(2);
    const value = mockFn();
    expect(value).toBe(2);
    expect(mockFn).toBeCalledTimes(1);
  });

  test("should return 6", () => {
    const mockfn = jest.fn((x, y) => x + y);
    const result = doSomeWork(mockfn, 2, 3);
    expect(mockfn.mock.calls[0]).toEqual([2, 3]);
    expect(result).toBe(6);
    expect(mockfn).toBeCalledWith(2, 3);
  });
});
