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
To add and item you can type 'add {item}'. \n
For example,'add milk' to add milk to your shopping list. \n 
To remove an item you can typ you can type 'remove {item}. \n
For example, 'remove milk' to remove milk form your shopping list. \n
To check your list type 'check list' and you can see what you currently have on your list. \n
To end your list input 'end list'. \n`

console.log(welcomeMessage)


let shoppingList = []
let reply = ""

while (active == true) {
    checkAnswer(promptUser())
}

function promptUser() {

    reply = READLINE.question("What do you want to add or remove? (no more items? type 'end list')  >>  ").toLowerCase()
    return reply

}


function checkAnswer() {
    let answer = reply.split(" ")

    if (answer[0] != "remove" && answer[0] != "add" && answer[0] != "end" && answer[0] != "check" && answer[1] != "list") {
        console.log("*invalid action*")
        active = true
    } else if (answer[1] == undefined) {
        console.log("*You have given no item to add or remove*");
        active = true;
    } else if (answer[0] == "end" && answer[1] == "list") {
        Currentlist()
        ending = READLINE.question(`\n\nAre you sure you want to end your list? Do you have everything your want in your list? : `).toLowerCase()
        if (ending == "yes") {
            console.log("\n< ending list >\n");
            endList();
        } else if (ending == "no") {
            console.log("\n Did you realized that you need to add somthing else? That's fine take your time.\nNo need to rush, make sure your list is complete. :)\n")
            active = true;
        } else if (ending != "no" && ending != "yes") {
            console.log("\nSorry I don't understand your answer. \nI'm just going to assume that you want to continue your list.\n")
            active = true
        }
    } else if (answer[0] == "add" && answer[1] != undefined && answer[1] != "list" && answer[2] == undefined) {
    addItem()
} else if (answer[0] == "remove" && answer[1] != undefined && answer[1] != "list" && answer[2] == undefined) {
    removeItem()
} else if (answer[0] == "check" && answer[1] == "list") {
    Currentlist();
} else if (answer[2] != undefined) {
    console.log("Too many items please input items 1 at a time. \nIf the item contains two words please put them together with no space. \nFor Example: 'Potatoe chips' would be written as 'PotatoeChips'. \n")
};
};

function addItem() {
    let item = reply.split(" ");
    item.shift();
    shoppingList.push(item[0])
    console.log(`\n < [${item}] has been added > \n`)
}

function removeItem() {
    let item = reply.split(" ");
    item.shift()
    index = shoppingList.indexOf(item[0]);
    if (index >= 0) {
        shoppingList.splice(index, 1)
        console.log(`\n < [${item}] has been removed >\n`)
    } else {
        console.log(`[${item}] does not exist in your list. \nThere is nothing to remove.\n`)
    }

}

function endList() {
    shoppingListjoined = shoppingList.join("\n- ")
    console.log("\nThank You for using our services!\nHere is your list:\n______________________________\n\n- " + shoppingListjoined + "\n\nHave a nice day!")
    active = false
}

function Currentlist() {
    if (shoppingList.length == 0) { console.log("\nYou have nothing in your list, you need to add something.\nTry typing 'add chips'.\n"); } else {
        shoppingListjoined = shoppingList.join("\n- ");
        console.log("Your current shopping list: \n- " + shoppingListjoined);
    }
}

