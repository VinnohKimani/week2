/**
 * Objects
 */

const order = {
  cost: "700",
  customer: {
    name: "Kimani",
    phone: "0701804607",
    email: "kimani@gmail.com",
    location:"Thika",
  },
  items: [
    {
      name: "fries",
      price: "100",
      quantity: "2",
      isAdult: false,
    },
    {
      name: "choma",
      price: "500",
      quantity: "2kg",
      isAdult: true,
    },
  ],
  colors: ["Black", "White"],
  7: "CR",
};

// Access values in objects
console.log(order);
console.log(order[`cost`]);
// no difference
console.log(order[`customer`].name);
// A matter of preference and syntax
console.log(order.customer.name);

console.log(order.customer.phone);
console.log(order.customer.email);
console.log(order.customer.location);
console.log(order.items[1].isAdult);
console.log(order.items[1].name);
console.log(order.items[0].name);
console.log(order.items[0].quantity);

console.log(order.colors[0]);
console.log(order.colors[1]);
console.log(order.colors[0], order.items[0].name);
console.log(order.colors[1], order.items[1].name);
console.log(order[7]);
console.log(Object.keys(order));
console.log(Object.values(order));
console.log(Object.entries(order));
console.log("SPACE BETWEEN");
// Object iteration using for ____in
for (const key in order) {
     console.log(key);
     console.log(order[key]);
}

const total = order.items.reduce(
  (prev, curr) => prev + curr.price * curr.quantity,
  0
);
console.log(total);
// Adds since the key does not exist
order[`table 9`] = " Table 9";
order.table = " Table 8";
console.log(order.table);
console.log(order[`table 9`]);

// updates 
order.cost = "1000";
console.log(order.cost);
// deleting
delete order["7"];
console.log(order[`7`]);

const prices = order.items.map((item) => ({ itemPrice: item.price }));
console.log(prices);
console.log("Life is Good you're right");
