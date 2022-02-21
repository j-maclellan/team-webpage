const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("Ryan");

    expect(intern.name).toBe("Ryan");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toStrictEqual(expect.any(String));
    expect(intern.school).toStrictEqual(expect.any(String));
    expect(intern.role).toBe("Intern");
});

console.log(new Intern());