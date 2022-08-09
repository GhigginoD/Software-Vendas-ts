export default class Dimension{
    constructor(readonly width:number,readonly height:number,readonly length:number,readonly weight:number){
        if (this.isInvalidDimension()) throw new Error("Invalid Dimension");
    }
    isInvalidDimension():boolean{
        if((this.width<0) || (this.height<0) || (this.length<0) || (this.weight<0) ) return true;
        return false;
    }
    getVolume():number{
        return(this.height * this.width * this.length)/100

    }

    getDensity():number{
        if (this.getVolume() === 0) return 0;
        return this.weight/this.getVolume()
    }
}