var fruits = ['Apple','Banana','Orange'];
console.log(fruits.indexOf('Banana'));
var elements =fruits[1];
fruits[1] = 'Mango';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);

// 2. Grading System

var myScore = 85;
var TomScore = 66;
var JaneScore = 95;
var PeterScore = 85;
var JohnScore = 40;

if(myScore >= 80){
    console.log('He/She got A');
}
else if(TomScore >= 60){
    console.log('He/She got B');
}
else if(TomScore >= 50){
    console.log('He/She got C');
}
else if(TomScore >= 40){
    console.log('He/She got D');
}

else{
    console.log('He/She should take retake');
}

// 3. Find largest number

var firstNumber = 13;
var secondNumber = 79;
var thirdNumber = 45;

if(firstNumber> secondNumber && firstNumber>thirdNumber){
    console.log('The first number is large')
}
else if(secondNumber>firstNumber && secondNumber>thirdNumber){
    console.log('The second number is large')
}
else{
    console.log('The third number is large')
}

// 4. Check triangle is isosceles or not?

var triangleSideA = 9;
var triangleSideB = 8;
var triangleSideC = 9;
if(triangleSideA==triangleSideB && triangleSideB==triangleSideC){
    console.log('Equilateral Triangle')
}
else if(triangleSideA == triangleSideB || triangleSideB==triangleSideC || triangleSideA==triangleSideC){
    console.log('Isosceles Triangle')
}
else{
    console.log('Scalene Triangle')
}