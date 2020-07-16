//MY OWN FILE :O LE GASP!

const READLINE = require("readline-sync");

class Room {

    constructor(name, doors, description, items) {
        this.name = name;
        this.doors = doors;
        this.items = items;
        this.description = description;

    }
}
//-------------------------------------------------------------------------------------------
class item {
    constructor(name, canTake, description, location) {
        this.name = name
        this.canTake = canTake
        this.location = location
        this.description = description
    }
}
//-------------------------------------------------------------------------------------------
let phone = new item()
phone.name = "blackobject"
phone.canTake = true
phone.location = "bedroom"
phone.examined = false
if (phone.examined == true) {
    phone.name = "phone"
}
phone.Description = `
【ＢＬＡＣＫ　ＯＢＪＥＣＴ】
_______________________________________________________________________________
You look at the black flat object. It feels familar in your hands. Then it hits
you. This is a phone! Hit the buttons you note that it's off. If you can some
how charge it maybe you can call for help. 

[You can take phone] 
_______________________________________________________________________________
`
 phone.Firstdescription =`
                    【ＢＬＡＣＫ　ＯＢＪＥＣＴ】
_______________________________________________________________________________
You look at the black flat object. It feels familar in your hands. Then it hits
you. This is a phone! Hit the buttons you note that it's off. If you can some
how charge it maybe you can call for help. 

[You can take phone] 
_______________________________________________________________________________
`


//-------------------------------------------------------------------------------------------
let bedroom = new Room()
bedroom.name = "bedroom"
bedroom.doors = ["bathroom", "hallway1"]
bedroom.items = ["clock", phone.name]  //black object is a phone. Player won't know it's a phone till they interact with it
bedroom.description = `                   
                         【ＢＥＤＲＯＯＭ】
_______________________________________________________________________________

You are in a bedroom. There are no windows in the room, the only light source
is coming from one iridecent light bulb hanging above your head. In the middle
of the room there is a full sized bed. The sheets on the bed are greasy and 
stained with with somthing that looks like dirt. You see a clock on the 
nightstand besides the bed. You notice a thin black object on the bed. 

[Items: ${bedroom.items}] [Doors: ${bedroom.doors}]

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let bathroom = new Room()
bathroom.name = "bathroom"
bathroom.doors = ["bedroom"]
bathroom.items = ["mirror"]
bathroom.LookUpDecription = `
                    【ＢＡＴＨＲＯＯＭ　ＣＩＥＬＩＮＧ】
_______________________________________________________________________________

You look up... you feel terror shiver down your spine. There is blood leaking 
through the ceiling panels dripping down to the floors. 'drip' 'drip' 'drip'
You don't want to know where the blood is coming from. Immediately you look 
back down.                       

_______________________________________________________________________________
`
// after performing lookUp action make it unavaible to do again. After being provided description go back to bathroom description.
bathroom.description = `
                         【ＢＡＴＨＲＯＯＭ】
_______________________________________________________________________________

You are in a bathroom. 'drip' 'drip' 'drip . The sound of driping liquid hits 
your ears. At first you think its a leaky faucet. Looking around for the source 
of the sound you notice something wet on your face. Ahead of you there is the 
bathroom  mirror. 

[Items: ${bathroom.items}] [Doors: ${bathroom.doors}] [Actions: Look up]                              

_______________________________________________________________________________
`
// Look up action will be avaible in certain rooms. They only give you a continuation of room decription, nonthing else.
//-------------------------------------------------------------------------------------------
let hallway1 = new Room()
hallway1.name = "hallway1"
hallway1.doors = ["bedroom", "bigroom", "kitchen"]
hallway1.items = ["pen", "paper"]
hallway1.description = `
                        【ＨＡＬＬＷＡＹ　１】
_______________________________________________________________________________

You enter a hallway. The floor is white marble with some brown splatter in some 
spots. It is empty of furniture except on lone table. Looking at the table it 
has a drawer. 

[Items: N/A] [Doors: ${hallway1.doors}] [Actions: Search drawer]                           

_______________________________________________________________________________
`
// Search drawer action will be avaible in certain rooms. Doing the action allows you to accesse certian items
//-------------------------------------------------------------------------------------------
let kitchen = new Room()
kitchen.name = "kitchen"
kitchen.doors = ["hallway1", "dinningroom"]
kitchen.items = ["knife", "Shadow"]
kitchen.description = `
                           【ＫＩＴＣＨＥＮ】
_______________________________________________________________________________

You enter the Kitchen. You notice familar brown stains on the counter tops. A
pungent smell of rotting food wafts through the room. In the coner of your 
vision you see shadow quickly scurry behind the trash can. You notice there is
a knife block on the counter next to you. 

[Items: ${kitchen.items}] [Doors: ${kitchen.doors}]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let dinningroom = new Room()
dinningroom.name = "dinningroom"
dinningroom.doors = ["kitchen", "greenhouse"]
dinningroom.items = ["pictures"]
dinningroom.description = `
                    【ＤＩＮＮＩＮＧ　ＲＯＯＭ】
_______________________________________________________________________________

You enter the Dinning Room. The table is a mess. Dishes and food splayed all 
over the table. It look like someone just tossed everything all over the place.
You nocite a cup miraculously still up right contain what look to be some red 
drink. There are flies hovering over the cup. There are pictures hanging on 
the walls.

[Items: ${dinningroom.items}] [Doors: ${dinningroom.doors}]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let greenhouse = new Room()
greenhouse.name = "greenhouse"
greenhouse.doors = ["hallway2", "dinningroom"]
greenhouse.items = []
greenhouse.description = `
                    【ＧＲＥＥＮ　ＨＯＵＳＥ】
_______________________________________________________________________________

You enter the Green House. There are plants everywhere. Even though it's a
green house you can't see outside. There is no natural light coming in, all 
the light is coming from light bulbs. The look well maintained. In fact it 
looks like someone watered them recently. You wonder who...

[Items: N/A] [Doors: ${greenhouse.doors}]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let hallway2 = new Room()
hallway2.name = "hallway2"
hallway2.doors = ["greenhouse", "bigroom"]
hallway2.items = ["darkmirror"]
hallway2.description = `
                       【ＨＡＬＬＷＡＹ　２】
_______________________________________________________________________________

You enter a second Hallway. This one is different from the first hallway you
entered. It's shorter and only leads to one room. You notice brown splatters on
the walls. There is a dark aura coming from an object in the middle of the 
hallway. Looking at it closer you realize it's a mirror. 

[Items: ${hallway2.items}] [Doors: ${hallway2.doors} ]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let bigroom = new Room()
bigroom.name = "bigroom"
bigroom.doors = ["hallway1", "hallway3", "hallway2"]
bigroom.items = ["chair", "table"]
bigroom.description = `
                        【ＢＩＧ　ＲＯＯＭ】
_______________________________________________________________________________

You enter a very big room. Your not sure what type of room it is, but you do
know it's very big. In the middle of the room there are couches and tables.
It looks like this was a place to socialize and drink some tea. There is a 
chair with it's cushion out place and a table with a sandwhich on it. 

[Items: ${bigroom.items}] [Doors: ${bigroom.doors} ]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let hallway3 = new Room()
hallway3.name = "hallway3"
hallway3.doors = ["ballroom"]
hallway3.items = ["diary#1"]
hallway3.FirstEnter = `
                       【ＨＡＬＬＷＡＹ　３】
_______________________________________________________________________________

You enter into the hallway. It's completely dark except for the light coming 
from the door ways. It's like one of those secnce in movies where you are in
a dark tunnel and there is only light at the end of the tunnel. Walking around 
the dark hallway your foot hits something. It looks to be some sort of book.
*BANG* You turn around to find the door to the big room has been shut. You run
up to the door to see if you can open it. The door is lock.

< Door to the Big Room has been locked. You cannot enter the Big Room >

[Items: ${hallway3.items}] [Doors: ${hallway3.doors}]                          

_______________________________________________________________________________
`
hallway3.description = `
                        【ＨＡＬＬＷＡＹ　３】
_______________________________________________________________________________

You enter into the hallway. It's completely dark except for the light coming 
from the door way behind you. It's like one of those secnce in movies where 
you are in a dark tunnel and there is only light at the end of the tunnel.
Checking to make sure, you find that the door to the big room is still locked.

[Items: ${hallway3.items}] [Doors: ${hallway3.doors}]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let ballroom = new Room()
ballroom.name = "ballroom"
ballroom.doors = ["hallway3", "hallway4", "hallway5"]
ballroom.items = ["chandelier"]
ballroom.description = `
                          【ＢＡＬＬＲＯＯＭ】
_______________________________________________________________________________

You enter into the Ballroom. It looks like there was a party that was abadoned.
There is a broken chandelier in the middle of the room. It's delicate crystals
shattered all over the floor. There seems to be the same brown stains you have 
been seeing under the broken chandelier. 

[Items: ${ballroom.items} ] [Doors: ${ballroom.doors}  ]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let hallway4 = new Room()
hallway4.name = "hallway4"
hallway4.doors = ["ballroom"]
hallway4.items = ["key"]
hallway4.description = `
                          【ＢＡＬＬＲＯＯＭ】
_______________________________________________________________________________

You enter another hallway. Seriouly this house has too many hallways! There is
nothing, but a string at the end of hallway. 

[Items: ${hallway4.items} ] [Doors: ${hallway4.doors} ]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let hallway5 = new Room()
hallway5.name = "hallway5"
hallway5.doors = ["masterbedroom"]
hallway5.items = []
hallway5.description = `
                        【ＨＡＬＬＷＡＹ　５】
_______________________________________________________________________________

You enter another hallway. You notice a puddle of liquided leaking under from 
the closed door. You try to open the door, it's locked. 

[Items: N/A] [Doors: ${hallway5.doors} ]  
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let masterbedroom = new Room()
masterbedroom.name = "hallway5"
masterbedroom.doors = []
masterbedroom.items = ["Diary#2", "Charger"]
masterbedroom.description = `
                  【ＭＡＳＴＥＲ　ＢＥＤＲＯＯＭ】
_______________________________________________________________________________

You enter a what looks like a Master Bedroom. Your heart stops at the sight of
a mangle body on the king sized bed. Its to dark to see the corspes face, but 
you do see another diary in the corspes hands. *BANG* The door behind you 
shuts, trapping you in the room. Startled you trip on a cord which turns out
to be a charger. 

[Items: ${masterbedroom.items}] [Doors: N/A ]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------

