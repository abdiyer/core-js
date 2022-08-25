
function Student(name,age) {
    this.name = name;
    this.age = age;
   }
   var stu1 = new Student("John", 50);
     
   // Ubject have proto property 
   stu1
     
   // Also if apply strict equal to check 
   // if both point at the same 
   // location then it will return true.
   console.log( Student.prototype === stu1._proto_)

   console.log(Student.prototype,"here");

   console.log(stu1._proto_);

   // ФУНКЦИЯ В JS Испульзуется только в 2 видах : для вызова итд как обычно и в виде конструктора класса

let Fn = function(tmp){
    this.a = tmp
}
Fn.prototype.b = 10

let inst1 = new Fn(2)
let inst2 = new Fn(4)

console.log(Fn.prototype, "I AM");

// Prototype есть только у функций а __proto__ есть у всех обьектов 


const pointMethods = {
    move(x,y){
        this.x += x
        this.y += y
    },
    toString(){
        return `[${this.x}, ${this.y}]`
    }
}

const point = {
    x : 10,
    y : 20
}

//пройтись дальше у Шемсединова

