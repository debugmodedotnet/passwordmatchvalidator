import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export const  defaultPriceValidator : ValidatorFn =  (control: AbstractControl): ValidationErrors | null =>{

    const price = control.get('price');
    const defaultprice = control.get('defaultPrice');
        let parray = price?.value.split(",");       
        let defaulrPricevalue = defaultprice?.value;

        console.log(defaulrPricevalue);

        if(parray.includes(defaulrPricevalue) || defaulrPricevalue == " "){
            console.log("hey");
            return null; 
        }
        return {"wrongdefaultvalue":true};

}