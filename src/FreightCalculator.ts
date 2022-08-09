import Item from "./Item";

export default class FreightCalculator{

    static                                                                                                                                                                                                              calculate(item:Item):number{
        if (item.getVolume() === 0) return 0;
        return Math.max(1000 * item.getVolume() * (item.getDensity()/100), 10)
    }
}