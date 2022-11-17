// // //inner function 

// // function getRandom(max)
// // {
// //     var hamada  = Math.random() * max;
// //     function getCeil ()
// //     {
// //         var little_hamada = Math.ceil(hamada)
// //         return little_hamada;
// //     } 

// //     var new_hamada = getCeil().little_hamada;

// //     return new_hamada ;



// // }


// // // console.log(getRandom(5))





// // // factory function 


// // var crs1 = {name: "Java" , hours : 16 }
// // var crs2 = {name: "c++" , hours : 500 }


// // function course (name , hours)
// // {
// //     return {
// //         _name : name,
// //         _hours : hours
// //     }
// // }
// // console.log(course("omar",22))

// // console.log(course("java",55))



// // function tell_me_your_name(name,funct)
// // {
// //     return " my name is " + name; 
// // }

// // class omar 
// // {
// // omar(name) {
// //     return " fuck you " + name
// // } 
// //     tell_me_your_name_in_class(name )
// //     {
// //         return " my name is " + name
// //     }

// // }


// //  var Omar = new omar("omar");
 
  
// //  console.log(Omar)

// //  var name  = tell_me_your_name_in_class("omar")

// // console.log(tell_me_your_name)
// // console.log(telling_my_name_incalss)






// // inner function and outer function 
// // lexical scoping


// // function  outer()
// // {
// //     var nameee =  " Omarrrr "

// //    return function()
// //     {
// //         console.log(nameee);
// //     }
     

// // }






// // const add5 = outer()
// // // console.log(add5())

// // function init() {
// //     const name = 'omar';
  
// //     function displayName() {
// //       console.log(name);
// //     }
// //     displayName();
// //   }

// // init()

// // function makeFunc() {
// //     const name = 'Mozilla';
  
// //     function displayName() {
// //       console.log(name);
// //     }
// //     return displayName;
// //   }
  
// //   const myFunc = makeFunc();
// //   myFunc();

// // javaScript there is function scope and global 



// // function makefun()
// // {
// //     const name = "omar ";
// //     function say_may_name()
// //     {
// //         return "omar"
// //     }

// //    return say_may_name();
// // }


// // var makeFun = makefun();
// // console.log(makeFun)


// function add() {
//     function plus() {
//         let counter = 0;
//        counter ++;
     
//       return counter;  
         

//     }
   
//    return plus()   
//   }


// console.log(add());



// // const add = (function () {
// //     let counter = 0;
// //     return function () {counter += 1; return counter}
// //   })


// //   var add1 = add();

// //   console.log(add1());
// //   console.log(add1());
// //   console.log(add1());
// //   console.log(add1());





function spinWords(words){
  return words.split(' ').map(function (word) {
    return 
      (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

