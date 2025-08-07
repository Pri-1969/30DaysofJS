// 1. Create an empty object called dog
const dog = {};

// 2. Print the dog object on the console
console.log("Empty Dog Object:", dog);

// 3. Add properties to the dog object
dog.name = "Rocky";
dog.legs = 4;
dog.color = "brown";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};

// 4. Get values from the dog object
console.log("Dog Name:", dog.name);
console.log("Dog Legs:", dog.legs);
console.log("Dog Color:", dog.color);
console.log("Dog Age:", dog.age);
console.log("Dog Bark:", dog.bark());

// 5. Add new properties: breed and getDogInfo
dog.breed = "German Shepherd";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs. It is ${this.age} years old and says "${this.bark()}".`;
};

// Test getDogInfo
console.log("Dog Info:", dog.getDogInfo());
