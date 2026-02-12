//completclass Animal {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  makeSound() {   // ✅ fixed
    console.log(`The ${this.name} makes a sound`);  // ✅ fixed
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

