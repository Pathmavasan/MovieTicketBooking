import { AbstractControl, ValidatorFn } from '@angular/forms';
export function CardValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const cardNumber = value.replace(/\D/g, '');
    if (!isValidLuhn(cardNumber)) {
      return { creditCard: true };
    }
    return null;
  };
}
function isValidLuhn(cardNumber: string): boolean {
  let sum = 0;
  let tempNumber = false;
  const len = cardNumber.length;
  for (let i = len - 1; i >= 0; i--) {
    let num = parseInt(cardNumber.charAt(i), 10);
    if (tempNumber) {
      num *= 2;
      if (num > 9) {
        num = (num % 10) + 1;
      }
    }
    sum += num;
    tempNumber = !tempNumber;
  }
  return sum % 10 === 0;
}
