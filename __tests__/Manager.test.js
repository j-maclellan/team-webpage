const Manager = require("../lib/Manager");

jest.mock("../lib/Manager");

test("creates new mangager object", () => {
    const manager = new Manager("");

    expect(manager.name).toBe("Chris");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toStrictEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe("Manager");
});

console.log(new Manager());