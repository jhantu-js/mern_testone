// Product Management

let products = [
  {
    id: 18,
    name: "Virat",
    price: 180000000,
    stock: 1,
  },
  {
    id: 18,
    name: "Rajat",
    price: 130000000,
    stock: 1,
  },
  {
    id: 18,
    name: "Salt",
    price: 110000000,
    stock: 1,
  },
  {
    id: 18,
    name: "Tim",
    price: 40000000,
    stock: 1,
  },
  {
    id: 18,
    name: "Padikkal",
    price: 80000000,
    stock: 1,
  },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 1000) {
    console.log(" ID : ", products[i].id);
    console.log(" Name : ", products[i].name);
    console.log(" Price : ", products[i].price);
    console.log("Stock : ", products[i].stock);
  }
}
