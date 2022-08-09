export default class Coupon{
    constructor(readonly code:string, readonly percentage:number, readonly expiredDate:Date){  
    }
    isExpired(): boolean{
        const today = new Date();
        return this.expiredDate.getTime() < today.getTime();
    }
    getDiscount(total:number):number {
        if (this.isExpired()) return 0
        return (total * this.percentage)/100;
    }

}
