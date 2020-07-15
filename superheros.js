 
/********************************************************************
 *                                                                  
 *  Team Edge objects: SUPERHERO CHALLENGES 
 * 
 *   In this challenge you are going to modify this code to do the
 *   the following below. Before you begin, walkthrough the code 
 *   with your coaches.
 *   
 *   1. Change both superhero and nemesis using same class.
 *   2. Change the constants to modify gameplay and see how it affects
 *      the game outcomes.
 *   3. Make any improvements you think would make this game better.
 *   4. Complete all the comments to demonstrate you understand the code
 *      Be specific about what each code block is doing.
 *     
 * 
 * ***************************************************************/

console.log("-------------------  SUPERHERO !!  -------------------")

const DELAY = 1000
const DAMAGE_LIMIT = 5
const MAJOR_BLOW = DAMAGE_LIMIT -2
const LIVES_TOP_RANGE = 20
const LIVES_BOTTOM_RANGE = 10
let rounds = 1
let gameIsOn = true

//COMMENT 1: Gives the constants and variables. The constants stay the same throughout the code
class Superhero {

    constructor(name, isAlive, friends, hitPoints, isGood , attackPower) {
       this.name = name;
       this.isAlive = isAlive;
       this.taunts=[]
       this.cries=[]
       this.lives = []
       // Comment 2: these are variables that everything in the Superhero class has. All objects in the Superhero class are isAlive
     } attack(enemy){
        
        
        if(this.isAlive && enemy.isAlive){  
          
            console.log("  \n   ")
            let damage = randomInteger(0,DAMAGE_LIMIT)         
            enemy.lives.splice(0, damage)
            
            if(damage >= MAJOR_BLOW){

                console.log(` ⚔️⚔️⚔️  Major Blow! ⚔️⚔️⚔️  \n`)
                 
            }

             //COMMENT 3: This function attacks the enemy when the the enemy is alive and the object(superhero) is alive. The damage is a random number between 0 and the damge_limit (which is a constanstant)
             //Takes the number from the damage to splice out that number of hearts. There is an if statement to check if the damage is a major blow
            console.log(`${this.name} 💬 : ${this.taunts[randomInteger(0,this.taunts.length-1)]} \n`)
            console.log(`${this.name}  💥X ${damage} ${enemy.name}  ${enemy.lives} : ${enemy.lives.length} \n`)
            // what I added in
            if (damage > 0){
            console.log(`${enemy.name} 💬: ${enemy.cries[randomInteger(0,enemy.cries.length-1)]}\n `)
            } else {
                console.log(`${enemy.name} 💬: ${enemy.taunts[randomInteger(0,enemy.taunts.length-1)]}\n `)
            }
            // This make them say their cries when hit and taunt if they got "hit" but damage was zero
            if(enemy.lives.length <= 0){
               
                //COMMENT 4: This runs when the enemy has zero hearts, The enemy then becomes dead and the game is over. It also ends the timer. 
                enemy.isAlive=false
                gameIsOn =false
                console.log(`💀💀💀💀💀💀 ${enemy.name} has been slain!!! 💀💀💀💀💀 `)
                console.log(` GAME OVER `)
                clearInterval(timer)
            }
            if(this.lives.length <= 0  ){

                this.isAlive = false
                gameIsOn =false
                console.log(`💀💀💀💀💀💀 ${this.name} has been slain!!! 💀💀💀💀💀`)
                console.log(` GAME OVER `)
                clearInterval(timer);

            }

        } 

     }

     fillHealth(){
          //COMMENT 5: This chooses a randome num between the values inputed in for LIVES_BOTTOM_RANGE and LIVES_TOP_RANGE. 
          //It then pushes that amount of heart emojies into the lives array. 
          let amt = randomInteger(LIVES_BOTTOM_RANGE, LIVES_TOP_RANGE)
           
            for(let i = 0; i <= amt ; i++){

                this.lives.push("💙")
            }

    }
 }

//COMMENT 6: This makes the an Oject under the super hero class called batman. HE has his own taunts, cries, and name. It calles on batman.fillHealth to get the health amount. ITs the same with joker.
let batman = new Superhero()
batman.name="Batman 🦸‍♂️"
batman.isAlive = true 
batman.lives=[]
batman.taunts=["The Dark Knight always wins!" , "You can't hang with the bat man" , "Meet my fist, scumbag" , "You Suck!"]
batman.cries=["Ouch!" , "UFF!" , "Gaaaaaaa" , "No!!!!!"]
batman.fillHealth()
 
let joker = new Superhero()
joker.name = "Joker 🦹‍♂️"
joker.isAlive = true
joker.lives=[]
joker.taunts =["You are a schmemer" , "Don't mess with the Joker!" , "Pick your face off the ground, you might need it!", "Getting tired of the beatings?"]
joker.cries = ["Aaaa!" , "Goh!" , "Hmph!" ,"You will pay for this"]
joker.fillHealth()


console.log(`${joker.name} :  ${joker.lives} - ${joker.lives.length}`)
console.log(`${batman.name} : ${batman.lives} -  ${batman.lives.length} `)
console.log(`${batman.name} 💬 ${batman.taunts[1]}  \n `)
console.log(`${joker.name} 💬 ${joker.taunts[1]}  \n `)


//COMMENT 7: This is making a function that makes two objects perform the attack function on eachother and add one to rounds
function fight(a, b){
    console.log(" ------------- ROUND -------------> " + rounds)
    
    a.attack(b)
    b.attack(a)
    rounds ++

}

//This helper function returns a random number between a given min and max value, and is used various times in this game.
function randomInteger(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min 
  }


  //COMMENT 8: this timer makes a delay between each round. The if statment r
  let timer = setInterval(function() {

    if(gameIsOn){
        
        fight(batman,joker) 
        console.log(" \n")


    }
}, DELAY);