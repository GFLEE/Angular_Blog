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
var data:string[]=['one','two','three'];
data.forEach(function(datas){
    console.log(datas);
})