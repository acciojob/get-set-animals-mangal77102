//complete this code
class Animal {
 constuctor (name)
	{
		this.name=name;
	}
	get name ()
	{
		return this.name;
	}

	makesound()
	{
		console.log(`The ${this.name} make a sound`);
	}
}

class Dog extends Animal {
	constuctor(name)
	{
		super(name);
	}
	
	bark()
	{
		console.log("woof");
	}
	
}

class Cat extends Animal {
	constuctor(name)
	{
		super(name);
	}
	
	purr()
	{
		console.log("purr");
	}
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
