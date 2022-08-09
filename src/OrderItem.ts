export default class OrderItem {

    constructor(readonly idItem: number, readonly priceItem: number, readonly quantity: number) {
        if (quantity <= 0) throw new Error("Invalid Quantity")
    }

    getTotalPrice(): number {
        return this.priceItem * this.quantity;
    }
}