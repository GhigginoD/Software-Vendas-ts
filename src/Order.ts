import Coupon from "./Coupon";
import Cpf from "./Cpf";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import OrderItem from "./OrderItem";
export default class Order {

    orderItems: OrderItem[];
    coupon?: Coupon;
    freightPrice: number = 0;

    constructor(readonly cpf:Cpf) {
    this.orderItems = []
    }

    getQuantityItems(): number {
        return this.orderItems.length;
    }
    getTotal(): number {
        let total =  this.orderItems.reduce((total, orderItem): number => {
            total += orderItem.getTotalPrice();
            return total;
        }, 0);
        if (this.coupon)
            return total - this.coupon.getDiscount(total)
        total = total + this.freightPrice
        return total
    }
    addItem(item:Item, quantity:number):void {
        if (this.orderItems.some(orderItem => orderItem.idItem === item.idItem)) throw new Error ("Duplicated Item")
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
        this.freightPrice += FreightCalculator.calculate(item)
    }
    addCoupon(coupon:Coupon):void {
        if (this.coupon) throw new Error("Pedido já contém um cupom!")
        this.coupon = coupon;
    }
}