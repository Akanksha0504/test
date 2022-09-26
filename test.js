console.log("test")
// Answer 2
// sum of odd number 
let sum=0
for(let i=1;i<=100;i++){
    if(i%2==1){
        sum+=i
    }
}
console.log(sum)
// sum of even number 
let sumOfEvenNumber=0
for(let i=1;i<=100;i++){
    if(i%2==0){
       sumOfEvenNumber+=i
    }
}
console.log(sumOfEvenNumber)


// Answer 5 
let arr;
arr=[1,2,3,4,5,6,7,8,9]

// add item 
arr.push(7)
console.log(arr)

// delete idem 

arr.shift()
console.log(arr)

// deleting at particular index 

arr.splice(2,1)
console.log(arr)

// adding 
arr.splice(3,1,23)
console.log(arr)

// Answer 3 

let number=prompt("write your number")
let num=Number.parseInt(number)
const result=(num%2==1)?"Odd":"Even";
console.log('Your number is ',result)

// answer 1
const a=parseInt(prompt("Enter your number"))


    let num1=0
    let num2=1
    let rNum;
    console.log(num1)
    console.log(num2)
    rNum=num1+num2
    while(rNum<=a){
        console.log(rNum)
        num1=num2;
        num2=rNum
        rNum= num1+num2
    }




  

