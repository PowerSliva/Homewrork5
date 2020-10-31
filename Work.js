let myass = [];
class CustomArray{
  constructor(element){
    this.num = element; 
  }                 
  method1(){                     //Добавление элемента в начало массива
    myass.unshift(this.num);
    console.log(this.num);
    console.log(myass);
  }
  method2(){                      //Добавление элемента в конец массива
    myass.push(this.num);
    console.log(this.num);
    console.log(myass);
  }
  method3(){                      //Удаление последнего элемента
    myass.pop();
    console.log(myass);
  }
}

let numer1 = new CustomArray("Гав-Гав");
numer1.method1();

let numer2 = new CustomArray("2 раза");
numer2.method2();

let numer3 = new CustomArray("Мяу-мяу");
numer3.method2();

let numer4 = new CustomArray("256 раз");
numer4.method2();

let numer5 = new CustomArray("Здрастье, ой, извиняюсь не туда");
numer5.method2();
numer5.method3();