import axios from "axios";

let sum = function (a, b) {
  return Number(a) + Number(b);
};
let tobe_Null = function () {
  return null;
};
let someFunc = (obj) => {
  return obj;
};
function greetWorld(greetingFn) {
  return greetingFn("world");
}
let getUser = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.data)
    .catch((err) => "Error");
};
//tests
describe("sample testing", () => {
  test("addition should return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("addition should return 6", () => {
    expect(sum(4, 2)).not.toBe(3);
  });
  test(" should return an object", () => {
    expect(someFunc({ id: 1 })).toEqual({ id: 1 });
  });
  test(" to contain the element in array ", () => {
    expect(someFunc([1, 2, 3, 4])).toContain(4);
  });

  test(" should be Null", () => {
    expect(tobe_Null()).toBeNull();
  });

  test("Got data and name should be Leanne Graham", () => {
    return getUser().then((result) =>
      expect(result.name).toEqual("Leanne Graham")
    );
  });
  test("greetWorld calls the greeting function properly", () => {
    const greetImplementation = (name) => `Hey, ${name}!`;
    const mockFn = jest.fn(greetImplementation);
    const value = greetWorld(mockFn);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith("world");
    expect(value).toBe("Hey, world!");
  });
});
