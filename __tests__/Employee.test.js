const Employee = require("../lib/Employee");

jest.mock("../lib/Employee");

test("creates a new player object", () => {
    const employee = new Employee("Steve");

    expect(employee.name).toBe("Steve");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
    expect(employee.role).toBe("Employee");
});

console.log(new Employee());