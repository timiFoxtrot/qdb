const inventory2 = [
    { name: 'Apple', price: 2, quantity: 30 },
    { name: 'Banana', price: 1, quantity: 50 },
    { name: 'Orange', price: 3, quantity: 20 },
    { name: 'Mango', price: 4, quantity: 15 }
];

// Double the price of all items
for(let i = 0; i < inventory2.length; i++) {
    const item = inventory2[i]
    item.price = item.price * 2
}
console.log({inventory2})

// Reduce quantity of each item by 5
let index = 0
while(index < inventory2.length) {
    inventory2[index].quantity = inventory2[index].quantity - 5
    index++
}
console.log({inventory2})

// Find items under a specific price
const priceLessThan5 = []
for(let item of inventory2) {
    if(item.price < 5) {
        priceLessThan5.push(item)
    }
}
console.log({priceLessThan5})

// Count total items in inventory
let total = 0
for (let item of inventory2) {
    for(let key in item) {
        if (key == 'quantity') {
            total += item[key]
        }
    }
}
console.log({total})

// Recreate inventory
for(let i = 0; i < inventory2.length; i++) {
    const item  = inventory2[i]
    item.name = `${item.name} (New)`
    item.price = Number((item.price * 1.1).toFixed(1))
}
console.log(inventory2)