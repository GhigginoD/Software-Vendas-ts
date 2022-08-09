export default class Cpf {
    private value: string;
    DIGIT_1_FACTOR = 10;
    DIGIT_2_FACTOR = 11;
    
    constructor (value:string){
        if (!this.validate(value)) throw new Error("Cpf Inválido");
        this.value = value;
    }

    validate(cpf:string):boolean {
        if (!cpf) return false;
        cpf = this.clean_punctuation(cpf);
        if (this.verify_repeat_number(cpf)) return false;
        if (this.verify_valid_length(cpf)) return false;
        const digito_1 = this.calculate_digit(cpf,this.DIGIT_1_FACTOR);
        const digito_2 = this.calculate_digit(cpf,this.DIGIT_2_FACTOR); 
        const digito_verific = this.get_digit_verified(cpf);
        return this.verify_digits(
            digito_verific,`${digito_1}${digito_2}`
        )
    }

    clean_punctuation(cpf: string): string {
        return cpf.replace(/\D+/g,''); 
    }
    verify_repeat_number(cpf: string): boolean{
        return (cpf.split("").every(c => c === cpf[0]));
    }
    verify_valid_length(cpf:string){
        return cpf.length !== 11 ? true : false;
    }
    calculate_digit(cpf:string, factor:number):number{
        let total = 0;
        for (const digit of cpf){
            if (factor > 1){
                total += parseInt(digit) * factor--;
            }
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : 11 - rest;
    }
    verify_digits(result_digit: string, verify_digit:string) {  
        return verify_digit === result_digit;
    }
    get_digit_verified(cpf: string):string {
        return cpf.slice(-2);
    }   
}