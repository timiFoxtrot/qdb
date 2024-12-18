import promptSync from "prompt-sync";
const prompt = promptSync();

const price: number = Number(prompt("Enter the price: "));
const discount = Number(prompt("Enter the discount: ")) || undefined;

const calculateDiscount = (price: number, discount: number = 10) => {
    if(!price) return 'Price must be a number greater than 0'
    const discountedPrice = price - (price * (discount/100))
    return `Discounted price is ${discountedPrice}`
}

console.log(calculateDiscount(price, discount))