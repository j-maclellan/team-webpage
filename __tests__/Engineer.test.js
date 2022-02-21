const Engineer = require("../lib/Engineer");

jest.mock("../lib/Engineer");

test("creates a new engineer object", () => {
    const engineer = new Engineer("");

    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toStrictEqual(expect.any(String));
    expect(engineer.role).toBe("Engineer")
    expect(engineer.github).toStrictEqual(expect.any(String));
});

console.log(new Engineer());