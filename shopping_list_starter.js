/********************************************************************
 *                                                                  
 *  Team Edge Array Mini-project: THE SHOPPING LIST HELPER
 * 
 *  This project prompts users using readline_sync to prompt users
 *  to add (or remove) items from a shopping list. It starts empty
 *  and each time the program is run it asks you to either add or 
 *  remove an item from the list. It also updates the user of its
 *  contents. The shopping list also checks to see if an item 
 *  is already present in the array and prevents you from adding it
 *  again, giving feedback along the way. 
 * 
 * ***************************************************************/

const READLINE = require("readline-sync");

let active = true

console.log("Welcome to: ")

console.log(`
 __..                    .        ,   
(__ |_  _ ._ ._ *._  _   |   * __-+-  
.__)[ )(_)[_)[_)|[ )(_]  |___|_)  |   
          |  |      ._|               

`)

let welcomeMessage = `Hi! I'm your shopping assistant. Let me take your order. \n
You can type 'add milk' to add milk to your shopping list. \n 
or you can type 'remove milk' to remove it. \n`

console.log(welcomeMessage)


//-->Todo: declare a shoppingList array

let shoppingList = []
let reply = ""

while (active == true) {

    checkAnswer(promptUser()) //this makes the program continously prompt and check response while the boolean 'active' returns true

}

function promptUser() {

    let reply = READLINE.question("What do you want to add or remove? (no more items? input 'end list')  >>  ").toLowerCase

    return reply

}

function checkAnswer(reply) {
    let answer = reply.split(" ")
    console.log(answer)
    if (answer[0] != "remove" && answer[0] != "add") {
        console.log("*invalid action*")
        active = true
    } else if (anwer[1] == undefined) {
        console.log("*You have given no item to add or remove*")
        active = truee
    } else if (answer[0] == "end" && anserw[1] == "list") {
        active = false
    }
}


function addItem() {
    let item = reply.split;
    item.shift();
    reply.push
}

function removeItem() {
    reply.includes()

}
