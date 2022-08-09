import Dimension from "./Dimension";

export default class Item {
    constructor(readonly idItem:number, description: string, readonly price: number, readonly dimensions:Dimension = new Dimension(0,0,0,0)){
    }

    getVolume():number{
        return this.dimensions.getVolume()
    }

    getDensity():number{
        return this.dimensions.getDensity()
    }
}