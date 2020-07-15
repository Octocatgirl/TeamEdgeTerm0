/****************************************************************************
 *                                                                  
 *  Team Edge objects: OBJECTS CHALLENGES 
 * 
 *  For this activity, you will be building an object and with properties
 *  and methods. You will access the properties, set new values, and use
 *  the methods to change your object state. What object? Ask your coach.
 * 
 *  1. DEFINE: Make an object and set its properties, logging changes in between.
 *  2. MODIFY: Add 2 new properties and assing values. Change existing values,
 *     including adding or updating values inside arrays
 *  3. METHODS: Now its time to make some methods. Then can simply make a change
 *     to your values, like a boolean, or they can console log something about
 *     the object. Nothing fancy, unless you fancy it.
 *  4. LITERALLY: Use string literals to put it all together in one statement.
 * 
 * *************************************************************************/

console.log("------------------- CHALLENGE 1 : DEFINE    -------------------")

//Below is a simple example of an object implementaion. 
//-->TODO: Add at least 3 comments to the object below to demonstrate you understand its usage

let object = {
    name: "box",
    isEmpty: true,
    fillMe() {
        this.isEmpty = false
    },
    emptyMe() {

        this.isEmpty = true
    }
}
//working with the object:
object.length = 12
object.width = 8
object.contents = ["thing 1", "thing 2", "thing 3"]
console.log(`${object.name} is ${object.length}  x ${object.width} `)
object.contents.push("thing 4")
console.log(`${object.name} has ${object.contents} `)
console.log(object)



//-->TODO: Declare a new object and set at least 4 properties to it including: string, boolean, number, array

//*********************************  MY OBJECT *************************** */
let dog = {
    name: "Cookie",
    breed: "Shih Tzu",
    color: ["white", "ligh brown", "Dark brown"],
    age: 1,
    sex: "male",
    bark() {
        console.log("Insert anoying dog bark")
    },
    ageingOneYear() {
        this.age = this.age + 1;
        console.log("Cookie was " + this.age + " years old");
    },
    colorChange() {
        this.color.pop();
        console.log("Cookie had grown up, and the dark brown spots in his disappear. :O");
        this.ageingOneYear();
    }
}




// //************************************************************************* */



// console.log("------------------- CHALLENGE 2 : MODIFY   -------------------")

// //-->TODO: Log your object you created above

// //console.log(dog)

// //-->TODO: Update the object you just created  by adding new properties and values, including array elements, in this section.
// //dog.furCut = false

// //-->TODO: Log your object again and observe changes

// console.log(dog)

// console.log("------------------- CHALLENGE 3 : METHOD   -------------------")

// //-->TODO: Add at least two methods (object functions) to your object defined in Challenge 1 and invoke them here.
// //          Make your methods update your variables, or add a random number to an array, etc.
// console.log("I'm not running the functions becuase I'm running them for my story. If I run them here is will ruin the story")
// //dog.ageingOneYear()
// //dog.colorChange()

// console.log("------------------- CHALLENGE 4 : LITERALLY   -------------------")

//-->TODO: Put it all together using a string literal to tell the story of your object!

message = "Hello! I'm Shaylee and this is my dog " + dog.name + " He is a " + dog.breed + ". When I first got " + dog.name + ", he was\n" + dog.age + " years old. His fur was " + dog.color + ". One day I noticed somthing "

messagePart2 = " now."
console.log(message)
dog.colorChange()
console.log(messagePart2)