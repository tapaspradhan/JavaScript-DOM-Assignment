// 1
// function greet(){
//     console.log("Hello There");
//     console.log("Hii Every One");
// }
// greet();

// 2
// function square(x){
//     console.log(x*x);
//     return;
// }

// const dataValue=square(5);
// console.log(dataValue);

// 3
// function passMessage(){
//     return "Hello every i purches the PW Skills Full stack webdevelopment"
// }

// const newMessage=passMessage();
// // console.log(newMessage);

// const pushMessage=newMessage+"Thanks PW";
// console.log(pushMessage);

// 4
// function hey(x=15,y=15){
//     return x+y;
// }
// console.log(hey(15,90));

//5
// function arr([num1,num2]){
//     return num1+num2;  
// }

// const newArr=[10,5];
// const addArr=arr(newArr);
// console.log(addArr);

//6
// function sumOfAllParamiters(){
//     sum =0;
//     for (let i=0;i<arguments.length;i++) sum +=arguments[i];
//     return sum;
// }
// const result=sumOfAllParamiters(1,2,3,4,5,6);
// console.log(result);

// 7
const sngParameter=(x)=>x*x;

const mltParameter=(x,y)=>x*y;

const mltStatement=(x,y)=>{
    console.log(`adding ${x} and ${y}`);
    return x+y;
};

const sumAddDifference=(x,y)=>({sum:x+y , difference:x-y});

const sngOne=sngParameter(10);
const mltTwo=mltParameter(5,6);