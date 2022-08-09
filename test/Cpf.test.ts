import Cpf from "../src/Cpf";

test("Deve verificar se os valores da string são numeros", function () {
    expect(() => new Cpf("abc")).toThrow(new Error("Cpf Inválido"));
})
test("Deve verificar se um valor em branco", function () {
    expect(() => new Cpf(" ")).toThrow(new Error("Cpf Inválido"));
})
test("Deve verificar se os valores da string são todos iguais", function () {
    expect(() => new Cpf("111.111.111-11")).toThrow(new Error("Cpf Inválido"));
})
test("Deve verificar se os valores ultrapassa o tamanho", function () {
    expect(() => new Cpf("123.456.789-123")).toThrow(new Error("Cpf Inválido"))
})
test("Deve verificar se é um cpf inválido", function () {
    expect(() => new Cpf("123.456.789-10")).toThrow(new Error("Cpf Inválido"))
})
test("Deve verificar se é um cpf válido sem pontuação", function () {
    const cpf = new Cpf("99194914036");
    expect (cpf).toBeDefined();
})
test("Deve verificar se é um cpf válido com pontuação", function () {
    const cpf = new Cpf("100.849.430-50");
    expect (cpf).toBeDefined();
})