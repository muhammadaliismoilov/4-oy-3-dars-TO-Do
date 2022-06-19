const dollars = [20, 500, 300, 100]

// console.log(dollars.find(dollar => dollar >= 250));


const animals = [
  {
    id: 0,
    name: "Bobik",
    type: "dog"
  },

  {
    id: 1,
    name: "Najim",
    type: "cat"
  },

  {
    id: 2,
    name: "Balu",
    type: "fish"
  }
]

// console.log(animals.find(animal => animal.type === "fish"));

// console.log(animals.findIndex(animal => animal.id === 5));

//OPTIONAL CHAINING:
let user = {
  address: "Tashkent"
}; // a user without "address" property

// console.log(user.address.street?.house);