class CustomArray{

  constructor(element){
    this.num = element;
      }     
 
  method1(){                     //Добавление элемента в начало массива
    let myass = [this.num];
    myass.unshift(this.num);
    console.log(this.num);
    console.log(myass);
  }
  method2(){                      //Добавление элемента в конец массива
    let myass = [this.num];
    myass.push(this.num);
    console.log(this.num);
    console.log(myass);
  }
  method3(){                      //Удаление последнего элемента
    let myass = [this.num];
    myass.pop();
    console.log(myass);
  }
}

let numer1 = new CustomArray(5);
numer1.method1();

let numer2 = new CustomArray(6);
numer2.method2();

let numer3 = new CustomArray(7);
numer3.method3();
