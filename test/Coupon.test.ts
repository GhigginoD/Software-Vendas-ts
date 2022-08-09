import Coupon from "../src/Coupon"

test("Deve criar um cupom",function(){
    const coupom = new Coupon("VALE50",50, new Date("2023-07-01T20:00:00"));
    const discount = coupom.getDiscount(1000);
    expect(discount).toBe(500);
});

test("Deve criar um cupom de desconto expirado", (): void=>{
    const coupom = new Coupon("VALE50",50, new Date("2022-07-01T20:00:00"));
    const isExpired = coupom.isExpired();
    const discount = coupom.getDiscount(1000);
    expect(isExpired).toBe(true);
    expect(discount).toBe(0);
});