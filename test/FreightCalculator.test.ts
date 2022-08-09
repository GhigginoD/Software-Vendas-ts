import Dimension from "../src/Dimension";
import FreightCalculator from "../src/FreightCalculator"
import Item from "../src/Item"

test("Deve calcular a taxa de frete de um item",function(){
    const item = new Item(1,'notebook',1000, new Dimension(100,30,10,3));
    const freight =  FreightCalculator.calculate(item);
    expect(freight).toBe(30);
})
test('Deve calcular a taxa minima de frete',() => {
    const item = new Item(1,'notebook',1000, new Dimension(1,1,10,0.5));
    const freight = FreightCalculator.calculate(item);
    expect(freight).toBe(10);
})