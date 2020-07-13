

/* -------------------------------------------- 
Day 2 Challenges
-------------------------------------------- */

let message = `Welcome to Day 2
Today we are learning about conditionals. 
Let's practice writing some conditionals of our own!`;
console.log(message);

const READLINE = require("readline-sync");

console.log("------------------- Challenge 1 -------------------")
/* Can you drive?
    Prompt the user to enter their age.
    Write conditional statements that print out whether you can drive in your city. */
    
    var age = READLINE.question(`How old are you?? `);

      if (age >= 16){
        console.log("You can drive! AMAZING 0-0");
      }
       else {
          console.log(`Too bad you can't drive :I`);
          }
      

/* -------------------------------------------- */

console.log("------------------- Challenge 2 -------------------") 

/* Who placed first?
    Write conditional statements that checks which is the highest and prints the highest score. 
    Hint: Create three variables and assign them random scores. */
console.log("It's time for a competition let's see who win's! Will it be Abby, Bobby or Charles? Abby is number 1, Bobby is number 2, and Charles is number 3.")

var bet = READLINE.question(`Who do you bet will win?? Please give number of the contestant you are betting on: `);
console.log(bet)


var personA = Math.floor((Math.random() * 20) + 1);

var personB = Math.floor((Math.random() * 20) + 1);

var personC = Math.floor((Math.random() * 20) + 1);


if (bet== 3){
  bet= personC
};

console.log(bet)
if (bet== 2){
  bet= personB
};

console.log(bet)
if (bet==1){
  bet= personA
};

console.log(bet)
if (personC>personB && personC>personA) {
  console.log(`The winner is Charles with a score of ${personC}!`);
  if(bet= personC){
     var pc=77
   }
}else {
      var pc=31}
console.log(bet)
if (personB>personC && personB>personA) {
  console.log(`The winner is Bobby with a score of ${personB}!`);
    if(bet= personB){
      var pb=77
    }
}else {
      var pb=31}

console.log(bet)
if (personA>personB && personA>personC) {
  console.log(`The winner is Abby with a score of ${personA}!`);
   if(bet= personA){
      var pa=77
  }
}else {
      var pa=31} 


console.log(`Abby: ${personA}`)
console.log(`Bobby: ${personB}`)
console.log(`Charles: ${personC}`)

if (bet=personA){
  if (pa=77){
  console.log("Good guess! You just got lucky!")
}
}else {
  console.log("HAHAHAHA! Good luck next time!")
}

if (bet=personB){
  if (pb=77){
  console.log("Good guess! You just got lucky!")
}
}else {
  console.log("HAHAHAHA! Good luck next time!")
}
console.log(bet)
if (bet=personC){
  if (pc=77){
  console.log("Good guess! You just got lucky!")
}
}else {
  console.log("HAHAHAHA! Good luck next time!")
}

console.log(bet)
 
 





/* -------------------------------------------- */

console.log("------------------- Challenge 3 -------------------")

/* One of the most common parts of our daily routine is checking the weather. 
   Our outfit and accessories are dependent on the temperature and conditions outside. 
   ie. We're probably not going to wear shorts out when it's snowing...


**** Challenge 3: Part 1 ****
   Write a conditional statement that checks the value of the weather variable 
   and prints out a weather report based on the current weather:
   Rainy: Bring an umbrella
   Sunny: Wear a hat and sunglasses
   Snowing: Wear gloves and a scarf */

//Here's a variable to get you started:
l
const READLINE = require("readline-sync");


console.log("Hello folks! Today we bring you your daily wheather report.")


var weather = READLINE.question(`Now I have a guesse today who's gonna tell us what the weather will be. What weather will it be today our esteemed guest? (rainy, snowing or sunny) `).toLowerCase()

let temp; 

 if (weather == "rainy"){
   console.log("It looks like its gonna be rainy today folks bring an umbrella!");
    temp= Math.floor(Math.random() * (60)) + 30;
 };
 // The random number is sometimes out of range

 if (weather== "snowing"){
   console.log("It looks like its gonna be snowing today folks be prepared for a snow lota fun! ;)")
    temp= Math.floor((Math.random() * 20) + 0);
 };
 
 if (weather== "sunny") {
   console.log("It looks like its gonna be sunny today folks a great day for swiming if you ask me!")
    temp= Math.floor((Math.random() * 100) + 70)
 };
 
 
 if (60>=temp && temp>=45){
   console.log(`Just becuase it's raining its not too cold folk, it's ${temp}℉. A light jacket should be enough to protect you from the weather`)
 };

 if (44>=temp && temp >=30){
   console.log(`The tempurature is ${temp}℉. Bring a thick jacket folks it going to be very cold and wet.`)
 };

 if (20>=temp && temp>=10){
   console.log(`The temperuature is ${temp}℉. It's gonna be chilly but not too chilly folks!`)
 };

 if (9>=temp && temp >=0){
   console.log(`The tempurature is ${temp}℉. Bundly up in blakets and jackets. It's gonna be freezing today`)
 };

 if (100>=temp && temp>=85){
   console.log(`The temperuature is ${temp}℉. Whoa I don't know who's hotter you or the wheather! ;)`)
 };

 if (84>=temp && temp >=70){
   console.log(`The tempurature is ${temp}℉. It's a great day to hang out outside`)
 };
 

 








//Tip: Try changing the value of the weather variable to test your other conditions.

/**** Challenge 3: Part 2 ****
   Now that you've written conditions for specific weather forecasts, let's also add in temperature! 
   You can't dress accordingly if you only know that it's raining outside but not how cold it is!
   For example:
      If it's raining and 60 degrees, you might want to bring your umbrella and wear a light jacket.
      However, if it's raining and 30 degrees, you might want to break out a warmer jacket with your umbrella instead. 
    
   Add to your conditional statements above and modify your weather reports to also take into account the temperature. 
   Make sure to account for at least three different temperatures!
   Hint: You will need another variable to keep track of the temperature.
*/











/* -------------------------------------------- */

console.log("------------------- Challenge 4 -------------------")

/* Prompt the user to enter the day of the week (1-7 representing Monday - Sunday)
    Write a set of conditionals that will take a number from 1 to 7 
    and print out the corresponding day of the week. 
    Make sure to add a statement that accounts of any numbers out of range! */











/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/* A leap year is a calendar year that contains an additional day added 
    to keep the calendar year synchronized with the astronomical year or seasonal year.
    To calculate if a specific year is/was a leap year, you can follow the following steps:
      1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
      2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
      3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
      4. The year is a leap year (it has 366 days).
      5. The year is not a leap year (it has 365 days).

  Those are a lot of conditions...

  Your challenge is to translate the steps above into conditionals which will evaluate if the 
  year stored in a variable is/was a leap year.*/







