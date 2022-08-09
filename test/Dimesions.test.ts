import Dimension from "../src/Dimension"

test("Não deve ter largura negativa", () => {
    expect(() => new Dimension(-1,0,0,0)).toThrow(new Error("Invalid Dimension"))
})
test("Não deve ter altura negativa", () => {
    expect(() => new Dimension(0,-1,0,0)).toThrow(new Error("Invalid Dimension"))
})
test("Não deve ter cumprimento negativa", () => {
    expect(() => new Dimension(0,0,-1,0)).toThrow(new Error("Invalid Dimension"))
})
test("Não deve ter peso negativa", () => {
    expect(() => new Dimension(0,0,0,-1)).toThrow(new Error("Invalid Dimension"))
})