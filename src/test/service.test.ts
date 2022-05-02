describe("testing for services", () => {
  test("testing if the function returs an array", () => {
    const mockFn = jest.fn(() => [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
    ]);
    const mockFn2 = jest.fn((id) => mockFn().find((user) => user.id === id));
    expect(mockFn2(1)).toEqual({ id: 1 });
  });
});
