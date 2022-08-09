import Coupon from "../src/Coupon";
import Cpf from "../src/Cpf";
import Item from "../src/Item";
import Order from "../src/Order";

test("Deve criar um pedido", function () {
    const cpf = new Cpf("99194914036")
    const order = new Order(cpf);
    const total = order.getQuantityItems();
    expect (total).toBe(0);
})

test("Deve criar um pedido com quantidade negativa", function(){
        const order = new Order(new Cpf("99194914036"));
        expect (() => order.addItem(new Item(1, 'computer', 500), -1)).toThrow(new Error("Invalid Quantity"));
});

test("Deve criar um pedido com 2 itens", () => {
        const order = new Order(new Cpf("99194914036"));
        order.addItem(new Item(1, 'computer', 500), 1);
        order.addItem(new Item(2, 'mouse', 50), 1);
        expect(order.getQuantityItems()).toBe(2);
})
test("Deve gerar um erro ao pedir com 2 itens iguais", () => {
        const order = new Order(new Cpf("99194914036"));
        const computer = new Item(1, 'mouse', 50);
        order.addItem(computer,1);
        expect (() => order.addItem(computer, 1)).toThrow(new Error("Duplicated Item"));
        
})
test("Deve retornar o total do pedido", (): void => {
        const order = new Order(new Cpf("99194914036"));
        order.addItem(new Item(1, 'computer', 500), 1);
        order.addItem(new Item(2, 'mouse', 50), 2);
        expect(order.getTotal()).toBe(600);
})
test("Deve adicionar 1 cupom no pedido", (): void => {
        const order = new Order(new Cpf("99194914036"));
        order.addItem(new Item(1, 'computer', 500), 1);
        order.addItem(new Item(2, 'mouse', 50), 2);
        order.addCoupon(new Coupon("VALE10",10,new Date("2023-02-18T23:59:00")));
        expect(order.getTotal()).toBe(540);
})
test("Deve gerar um erro ao adicionar 2 cupons no pedido", (): void => {
        const order = new Order(new Cpf("99194914036"));
        order.addItem(new Item(1, 'computer', 500), 1);
        order.addItem(new Item(2, 'mouse', 50), 2);
        order.addCoupon(new Coupon("VALE10",10, new Date("2023-02-18T23:59:00")));
        expect(() => order.addCoupon(new Coupon("VALE10",10,new Date("2023-02-18T23:59:00")))).toThrow(new Error("Pedido já contém um cupom!"));
})
