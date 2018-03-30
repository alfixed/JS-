    // Молодец что сделал задание, но можно было и попроще примеры привести
    'use strict';
    
    //Example 1 - generators
    function* generateFoo() {
      yield 1;
      yield 2;
      return 3;
    }
    
    let generator = generateFoo();
    let one = generator.next();
    
    console.log(JSON.stringify(one)); //{"value":1,"done":false}
    
    generator.next();
    let second = generator.next();
    
    console.log(JSON.stringify(second)); //{"value":3,"done":true}
    
    //Expamle 2 - class
    class Hello{

      constructor(name) {
        this.name = name;
      }
    
      sayHi() {
        console.log(`Hello, ${this.name}`);
      }
    
    }
    
    let hello = new Hello("Vasilii");
    hello.sayHi();
    
    //Example 3 - super
    'use strict';

    class Human {
      constructor(name) {
        this.name = name;
      }
    
      walk() {
        console.log("I walk to work: " + this.name);
      }
    }
    
    class Developer extends Human {
      walk() {
        super.walk();
        console.log("...and write code!");
      }
    }
    
    new Developer("Artur").walk();