// export(модуль) автоматичемк делает код в строгом режиме


'use strict'

mistypeVaraible = 17;

console.log(mistypeVaraible)  // если убрать use strict, то интерпритатор выбросит Reference Error, так как не обяьвлена глобальная переменная

NaN = 24 // защищает от присваивания зарезервированным слова

// Присваивание значения свойству, защищённому от записи
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // выдаст TypeError

// Присваивание значения свойству, доступному только для чтения
var obj2 = { get x() { return 17; } };
obj2.x = 5; // выдаст TypeError

// Задание нового свойства нерасширяемому объекту
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // выдаст TypeError

var o = { p: 1, p: 2 }; // !!! синтаксическая ошибка, в сериализованном обьекте ключи не дублируются (имена свойств)

function sum(a, a, c) { // !!! синтаксическая ошибка дублирование аргументов 
  "use strict";
  return a + a + c; // ошибка, если код был запущен
}

"use strict";
var sum = 015 + // !!! синтаксическая ошибка, ноль перед цифрой может определить число восьмеричной системой счисления (octal)
          197 +
          142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16


(function() { // не дает устанавливать свойства примитивным значениям. Без него будет просто игнорирование NO-OP
  'use strict';
  
  false.true = '';         // TypeError
  (14).sailing = 'home';   // TypeError
  'with'.you = 'far away'; // TypeError
  
  })();