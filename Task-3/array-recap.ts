const inventory = [
    { name: "Apple", price: 2, quantity: 30 },
    { name: "Banana", price: 1, quantity: 50 },
    { name: "Orange", price: 3, quantity: 20 },
  ];
  
  
  // Task 1
  inventory.push({
      name: "Mango", price: 4, quantity: 15
  })
  console.log(inventory)
  
  // Task 2
  const inventoryMinusBanana = inventory.filter(item => item.name !== 'Banana')
  console.log(inventoryMinusBanana)
  
  // Task 3
  const updatedInventoryOrangeQty = inventoryMinusBanana.map(item => {
      if (item.name === 'Orange') {
          item.quantity -= 10
      }
      return item
  })
  updatedInventoryOrangeQty
  
  // Task 4
  const findApple = inventory.find(item => item.name === 'Apple')
  console.log(findApple)
  
  // Task 5
  const filteredItemsWithPriceGreaterThan2 = inventory.filter(item => item.price > 2)
  console.log(filteredItemsWithPriceGreaterThan2)
  
  // Task 6
  let totalInventory = 0
  for (let item of updatedInventoryOrangeQty) {
      totalInventory += (item.price * item.quantity) 
  }
  console.log(totalInventory)