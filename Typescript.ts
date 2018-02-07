// var age:number=23;
// var marrige:boolean=true;
// console.log(age,marrige);
// var numbers:number[]=[1,2,3,4,5]
// console.log(numbers);
// enum man {sex,age=3,like};
// var lee_age=man.age;
// console.log(lee_age);

// 


// class Report{

//     data:string[];

//     constructor(data:string[]){
//         this.data=data;
//     }

//      run():void{
//           this.data.forEach(function(d){
//               console.log(d)
              
//           })
//      }

// }


//===========================================

// class TabReport extends Report{

//     headers:string[];

//     constructor(headers:string[],values:string[]){
//         super(values);
//        this.headers=headers;
//     }

//     run():void{
//       console.log(this.headers);
//       super.run();
//     }

// }

// var tab=new TabReport(['Headers'],['extends']);

// tab.run();

//==============================
// var data:string[]=['one','two','three'];
// data.forEach(function(datas){
//     console.log(datas);
// })

// data.forEach((m)=>console.log(m));    //快速书写函数,一个参数时，m的括号可省略

// var numbers:number[]=[1,2,3,4,5];
// numbers.map((m)=>{
//     m=m+1;console.log(m)
// }); //Map方法，返回经过操作后的数组
//而且=>语法和外部代码拥有同样的this；


// var man={
//     name:"lee",
//     age:20,
//     like:'guitar',
//     guitars:['taylor','martin'],
    
//     get:function(){
//         this.guitars.forEach(function(g){
//             var self=this;
//             console.log(g);
//             console.log(self.age)
            
//         })  //this 即不是指代man，显示undefined,this是function()自己
//    },
//      get_name:function(){
//           this.guitars.forEach((g)=>{
//               console.log(g)
//               console.log(this.name)
//               console.log(this);
//             }
             
//             )  //this指向函数的调用者， 即指代man
//      }

// }

// man.get();
// man.get_name();


//箭头函数是处理内联函数的好办法。这也让我们在JavaScript中更容易使用高阶函数。

//=============================
//模板字符串，类似于jsp中的
var Name:string='lee';
console.log(`hello ${Name}`)  //使用  ``  而不是 '',可多行插入

