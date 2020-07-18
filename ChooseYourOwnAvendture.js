//MY OWN FILE LE GASP! :O

console.log("\n\n This is a Shaylee Game, all rights go to Shaylee Coulter™ © ")

const READLINE = require("readline-sync");
let inputMsg = ""
let gameIsOn = true
let currentRoom = []
let backpack = []
let performedLookUP = false
let itemLocation = []
// let notebook = [] might include a note book later

//-------------------------------------------------------------------------------------------
let allRooms = []
class Room {

    constructor(name, doors, description, items, needsKey) {
        this.name = name;
        this.doors = doors;
        this.items = items;
        this.description = description;
        this.needsKey = needsKey
        allRooms.push(this)

    }
}
//-------------------------------------------------------------------------------------------
let allItems = []
class item {
    constructor(name, canTake, description, location, items, storeItems) {
        this.name = name
        this.canTake = canTake
        this.location = location
        this.description = description
        this.items = items
        this.storeItems = storeItems
        allItems.push(this)
    }
}
//-------------------------------------------------------------------------------------------
let phone = new item()
phone.canTake = true
phone.location = "bedroom"
phone.examined = false
if (phone.examined == true) {
    phone.name = "phone"
    phone.description = `
                           【ＰＨＯＮＥ】
_______________________________________________________________________________
You mess with the phone in your hands. Hoping it will burst to life. The phone 
is still off..
_______________________________________________________________________________
`
} else {
    phone.description = `
                    【ＢＬＡＣＫ　ＯＢＪＥＣＴ】
_______________________________________________________________________________
You look at the black flat object. It feels familar in your hands. Then it hits
you. This is a phone! Hit the buttons you note that it's off. If you can some
how charge it maybe you can call for help. 
_______________________________________________________________________________
`
    phone.name = "blackobject"
}
phone.items = []



//-------------------------------------------------------------------------------------------
let bedroom = new Room()
bedroom.name = "bedroom"
bedroom.doors = ["bathroom", "hallway1"]
bedroom.items = ["clock", phone.name]  //black object is a phone. Player won't know it's a phone till they interact with it
bedroom.needsKey = false
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
bathroom.needsKey = false
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
//-------------------------------------------------------------------------------------------
let hallway1 = new Room()
hallway1.name = "hallway1"
hallway1.doors = ["bedroom", "bigroom", "kitchen"]
hallway1.items = ["drawer"]
hallway1.needsKey = false
hallway1.description = `
                        【ＨＡＬＬＷＡＹ　１】
_______________________________________________________________________________

You enter a hallway. The floor is white marble with some brown splatter in some 
spots. It is empty of furniture except on lone table. Looking at the table it 
has a drawer. 

[Items: ${hallway1.items}] [Doors: ${hallway1.doors}]                          

_______________________________________________________________________________
`
// Search drawer action will be avaible in on in this room. Doing the action allows you to accesse certian items
//-------------------------------------------------------------------------------------------
let kitchen = new Room()
kitchen.name = "kitchen"
kitchen.doors = ["hallway1", "dinningroom"]
kitchen.items = ["knife", "Shadow"]
kitchen.needsKey = false
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
dinningroom.needsKey = false
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
greenhouse.needsKey = false
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
hallway2.needsKey = false
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
bigroom.needsKey = false
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
hallway3.needsKey = false
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
ballroom.needsKey = false
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
hallway4.needsKey = false
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
hallway5.doors = ["lockeddoor"]
hallway5.items = []
hallway5.needsKey = false
hallway5.description = `
                        【ＨＡＬＬＷＡＹ　５】
_______________________________________________________________________________

You enter another hallway. You notice a puddle of liquided leaking under from 
the closed door. You try to open the door, it's locked. 

[Items: N/A] [Doors: ${hallway5.doors} ]  
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let lockedDoor = new Room()
lockedDoor.name = "hallway5"
lockedDoor.doors = []
lockedDoor.needsKey = true
lockedDoor.items = ["Diary#2", "Charger"]
lockedDoor.description = `
                  【ＭＡＳＴＥＲ　ＢＥＤＲＯＯＭ】
_______________________________________________________________________________

The room looks like a Master Bedroom. Your heart stops at the sight of
a mangle body on the king sized bed. It is too dark to see the corspes face, 
but you do see another diary in the corspes hands. *BANG* The door behind you 
shuts, trapping you in the room. Startled you trip on a cord which turns out
to be a charger. 

[Items: ${lockedDoor.items}] [Doors: N/A ]                          

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let clock = new item()
clock.name = "clock"
clock.canTake = false
clock.location = "bedroom"
clock.items = []
clock.storeItems = false
clock.description = `
                            【ＣＬＯＣＫ】
_______________________________________________________________________________
Looking at the clock on the night stand it displays the time '3:33'. You 
stand there staring at for minute. The time doesn't change. Huh... it must be
broken.  
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let mirror = new item()
mirror.name = "mirror"
mirror.canTake = false
mirror.location = "bathroom"
mirror.items = []
mirror.storeItems = false
mirror.description = `
                           【ＭＩＲＲＯＲ】
_______________________________________________________________________________
You walk up to the mirror. Your reflection shocks you. Who is this person? An
unfamilar face stares back at you. Dead eyes, large bags, thin face, and blood 
soaked hair. You stumble back. That can't be you... can it? You look like a 
corspe... Besides looking dead you notice that your face looks very feminine
and your hair was cut to sholder length. 
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let pen = new item()
pen.name = "pen"
pen.canTake = true
pen.location = "drawer"
pen.items = []
pen.storeItems = false
pen.description = `
                                 【ＰＥＮ】
_______________________________________________________________________________
Looking at the pen it seems to be brand new. You make a little scribble in 
your notebook. Good it works. You can use this to write things, but what would
you write...
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let paper = new item()
paper.name = "paper"
paper.canTake = true
paper.location = "paper"
paper.items = []
paper.storeItems = false
paper.description = `
                                 【ＰＡＰＥＲ】
_______________________________________________________________________________
The paper is yellow note with age, but what looks like coffe stains. Looking
closer there seems to be a message on the piece of paper. In neat swirly 
handwriting it says:
  __________________________________________________________________________
 | Dear Jordan,                                                             |
 | I need your help. He's getting more controlling. The kids are scared, I  |
 | don't know what to do. Please help me leave this monster so we can be    |
 | together. I love you so much. It hurt me that we can't be together. I    | 
 | will be waiting for you.                                                 | 
 |                      Sincerly,                                           | 
 |                        Catrina Klaus                                     | 
 |__________________________________________________________________________|

_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let drawer = new item()
drawer.name = "drawer"
drawer.canTake = false
drawer.location = "hallway1"
drawer.items = ["pen", "paper"]
drawer.storeItems = true
drawer.description = `
                                【ＤＲＡＷＥＲ】
_______________________________________________________________________________
You head towards the lone table. Gripping the drawer handle you pull. It's 
stuck. You pull agian. Harder. The drawer gives and it opens revealing it's
contents.

[Items: ${drawer.items}]
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let note = new item()
note.name = "note"
note.canTake = true
note.location = "chair"
note.items = []
note.storeItems = false
note.description = `
                                【ＮＯＴＥ】
_______________________________________________________________________________
The note is a small pink paper. The handwritting looks messy and rushed:
  __________________________________________________________________________
 | Dear Catrina,                                                            |
 |  I doing what I can to get you out of there. We should report him to the |
 |  police. Don't worry he can't hurt me. I'm trying to get you out as soon |
 |  as possible. I'll get you away from him and then we can live happily    | 
 |  together like we dreamed.                                               | 
 |                      Sincerly,                                           | 
 |                        Jordan Williams                                   | 
 |__________________________________________________________________________| 
_______________________________________________________________________________
`//-------------------------------------------------------------------------------------------
let chair = new item()
chair.name = "chair"
chair.canTake = false
chair.location = "bigroom"
chair.items = ["note"]
chair.storeItems = true
chair.description = `
                              【ＣＨＡＩＲ】
_______________________________________________________________________________
The chair looks worn and old. It must of been sat on alot. The cushion is 
almost nonexistant with the lack of stuffing. You pull the chair cushion off. 

[Items: ${chair.items}]
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let table = new item()
table.name = "table"
table.canTake = false
table.location = "bigroom"
table.items = ["sandwhich"]
table.storeItems = true
table.description = `
                              【ＴＡＢＬＥ】
_______________________________________________________________________________
You approuch the table. It looks very fancy and antique. 

[Items: ${table.items}]
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let sandwhich = new item()
sandwhich.name = "sandwhich"
sandwhich.canTake = true
sandwhich.location = "table"
sandwhich.items = []
sandwhich.storeItems = false
sandwhich.description = `
                              【ＳＡＮＤＷＨＩＣＨ】
_______________________________________________________________________________
The sandwhich doesn't look like a sandwhich. The break covered in mold and 
the contents inside destroyed by ants and time.  
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let shadow = new item()
shadow.name = "shadow"
shadow.canTake = false
shadow.location = "kitchen"
shadow.items = []
shadow.storeItems = false
shadow.description = `
                              【ＳＨＡＤＯＷ】
_______________________________________________________________________________
You slowly approuch behind the trash can. You gasp at the sight of small, 
beady, black eye's staring back at you. It was a racoon. It looked dirty and 
malonurished. How did it even get in here?
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let knife = new item()
knife.name = "knife"
knife.canTake = true
knife.location = "kitchen"
knife.items = []
knife.storeItems = false
knife.description = `
                              【ＫＮＩＦＥ】
_______________________________________________________________________________
The knife is heavy in your hands. There is what seems to be dried out blood 
covering it. Who's blood is that?
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let pictures = new item()
pictures.name = "pictures"
pictures.canTake = false
pictures.location = "dinningroom"
pictures.items = []
pictures.storeItems = false
pictures.descriptionLookedatMirror = `
                         【ＰＩＣＴＵＲＥＳ】
_______________________________________________________________________________
There are multiple pictures hanging on the wall. The first one is of a women 
and man. They are standing next to each other in fancy attier. There are more
pictures of the same women and man. The women has long brown hair and tanned
skin. The man with orange hair and creamy white skin. Some of the pictures
are containing some kids, one girl and one boy. But what caugh your eye was a picture of another women. She looked
oddly familar. She looked like your reflection...
_______________________________________________________________________________
`
pictures.description = `
                              【ＰＩＣＴＵＲＥＳ】
_______________________________________________________________________________
There are multiple pictures hanging on the wall. The first one is of a women 
and man. They are standing next to each other in fancy attier. There are more
pictures of the same women and man. The women has long brown hair and tanned
skin. The man with orange hair and creamy white skin. Some of the pictures
are containing some kids, one girl and one boy. Both of them look very similar 
to the man and women. There was also this other women. She had her hair cut to
her sholders and was wearing pants and a shirt. 
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let darkmirror = new item()
darkmirror.name = "darkmirror"
darkmirror.canTake = false
darkmirror.location = "hallway2"
darkmirror.items = []
darkmirror.storeItems = false
darkmirror.description = `
                              【ＤＡＲＫ　ＭＩＲＲＯＲ】
_______________________________________________________________________________
You slowy approuch the mirror, it's dark aura making you cautious. You look
at your reflection and scream. You quickly scramble away from the mirror.
Gasping. You greedly gulp up air into your lungs. You try to forget 
what you just saw, but now it haunts your mind. 
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let diary = new item()
diary.name = "diary"
diary.canTake = true
diary.location = "hallway3"
diary.items = []
diary.storeItems = false
diary.description = `
                              【ＤＩＡＲＹ】
_______________________________________________________________________________
Holding the warn leather in your hands you open the old pages of the diary. 
Most entries are cover in a dark brown, which you realized is dried blood.
Your read the entries written in neat swirly handwritting:

~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~

July/15/xxxx

Me and Dave had gotten married today. I'm suppose to be happy, but I'm not. I
wish Jordan was here. I suppose I can deal with Dave. He doesn't seem so bad.
He a lovely necklace that looked like it cost a fortune. 

September/29/xxxx

I am pregnant with my first child. I didn't want to carry a child from Dave,
but Dave insisted we have a child. He told me how can we be married and not
have a child. I am thinking of names for the baby. Dave want to name 'him'
Henry, but I think it will be a girl. 

~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~*~~
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let key = new item()
key.name = "key"
key.canTake = true
key.location = "hallway4"
key.items = []
key.storeItems = false
key.description = `
                              【ＫＥＹ】
_______________________________________________________________________________
At the end of the string there is a key. It looks like any other key. Small,
metal, relativly flat. 
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let chandelier = new item()
chandelier.name = "chandelier"
chandelier.canTake = false
chandelier.location = "ballroom"
chandelier.items = []
chandelier.storeItems = false
chandelier.description = `
                              【ＣＨＡＮＤＥＬＩＥＲ】
_______________________________________________________________________________
You notice that there is somthing under the mess of crystals and metal of what
used to be chandelier. You gasp there you find the mangled body of a women. She
has long brown hair and tanned skin. You quickly turn away wanting to look at
somthing else.
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let diary2 = new item()
diary2.name = "diary2"
diary2.canTake = true
diary2.location = "masterbedroom"
diary2.items = []
diary2.storeItems = false
diary2.description = `
                              【ＤＩＡＲＹ　＃２】
_______________________________________________________________________________
You feel the peeling cover of the small book in your hands. It looks new, but
not well taken care of causing it to look old and worn. Opening it, in harshly
written letters it says:

I am done with all this. Catrina seems to be ignoring me. She's my wife she's
suppose to love me. I had to take away her phone to make sure that she wasn't 
seeing anyone else. She always seems depressed. Is it becuase I made her have 
kids? If she doesn't want the kids I'll take care of them. They were taking 
up space anyways. But why does she seem so happy when the nanny comes...
_______________________________________________________________________________
`
//-------------------------------------------------------------------------------------------
let charger = new item()
charger.name = "charger"
charger.canTake = true
charger.location = "masterbedroom"
charger.items = []
charger.storeItems = false
charger.charging = `
                        【ＣＨＡＲＧＥＲ　ａｎｄ　ＰＨＯＮＥ】
_______________________________________________________________________________
You plug the charger into the wall. Then you plug the other end into your 
phone. After a few seconds the phone's screen bursts to life. The bright light
temporarly blinds you. After your eyes adjust you look at the screen. The time
is 3:33 am. Opening the phone you open the pictures. Scrolling through you see
many pictures of a women with short hair and and women with long brown hair.
They seemed very happy and close in the pictures. You open the text messages 
next. There is a chat between the phone user and someone named Catrina. The 
most recent messages say:

Catrina: I'm afriad we won't be able to text each other anymore :-:  

                                               Why?! Is it him! >:(  <<
                                              I swear I'll kill him! <<

Catrina: Yes it is him. He's taking away my phone. I won't be able to 
         text with out him noticing.

           Don't worry I find some other way to communicate with you <<
                                           I love you! Stay safe :-: <<

Catrina: I love you too Jordan <3  

Finding that there is nothing else significant on the phone. You turn it off
_______________________________________________________________________________
`
charger.description = `
                              【ＣＨＡＲＧＥＲ】
_______________________________________________________________________________
The charger is long and black. You see an outlet in the wall that you can 
plug it into. The end of the charger seems to be the perfect fit for a phone.
_______________________________________________________________________________
`

let ItemsItems = [pen,paper,note,sandwhich]

function promptUser() {
    let action = READLINE.question("\nWhat would you like to do player >>  ").toLowerCase()
    return action
}
function nameCheck(itemName) {
    for (let item of allItems) {
        if (item.name == itemName) {
            return item
        }
    }
}
function checkingADrawer(itemName) {
    for (let item of ItemsItems) {
        if (item.name == itemName) {
            return item
        }
    }
}

function roomNameCheck(roomName) {
    for (let room of allRooms) {
        if (room.name == roomName) {
            return room
        }
    }
}

function checkAnswer(action) {
    inputMsg = action
    console.log("\n")
    inputMsg = inputMsg.split(" ");
    // Examine item action
    if (inputMsg[0] == "examine" && inputMsg[1] != undefined && inputMsg[2] == undefined) {
        if (currentRoom[0].items.includes(inputMsg[1])) {
            let item = nameCheck(inputMsg[1]);
            console.log(item.description)
            if (item == "blackobject") {
                phone.examined = true
                console.log(phone.name)
            }
            if (item.canTake) {
                index = currentRoom[0].items.indexOf(item)
                currentRoom[0].items.slice(index, 1)
                backpack.push(item)
                console.log(`You have now acquired a [${item.name}]`)
            } else if (item.storeItems) {
                itemLocation.pop()
                itemLocation.push(item)
            }
        }
        else if (itemLocation[0].items.includes(inputMsg[1])) {
            let item = checkingADrawer(inputMsg[1])
            console.log(item.description)
            if (item.canTake) {
                index = currentRoom[0].items.indexOf(item)
                currentRoom[0].items.slice(index, 1)
                backpack.push(item.name)
                item.location = backpack
                console.log(`You have now acquired a [${item.name}]`)
            }
        }
        else if (!currentRoom[0].items.includes(inputMsg[1]) && !currentRoom[0].items.includes(inputMsg[1])) {
            console.log("\n [ Invalid Item ] \n")
        }
    }

    // Examine room action
    if (inputMsg[0] == "examine" && inputMsg[1] == "room") {
        console.log(currentRoom[0].description)
    }
    // help action
    else if (inputMsg[0] == "help" && inputMsg[1] == undefined) {
        console.log(`
        You don't know what to do player? Here are some actions avaible to you:

        'Examine Room' >> gives you a description of the current room you are in. The description also provides 
                          information about what items you can examine and what rooms you can move to. 

        'Examine {item}' >> Type examine and then type  what ever item you want to examine. Items that you can examine 
                            is in the Room description. There are also some items that contain items. You can examine 
                            those too. 
        
        'MoveTo {Room}' >> Type MoveTo and then the room you want to move to. When you move to a room, you will automatically 
                           see the room description. Room's that you can access is listed in room description under
                           doors. 
        
        'Check Backpack' >> List items that you have in your backpack. When checking your backpack you can exaimine the items
                            in it. 
 
        'Quit Game' >> Ends the game. If you end the game all your progress won't be saved and you have to start over. 

        'Guess name' >> This action is the most important. To win the game you have to say (type) in your name. You only
                        have one chance to do this, so don't do this action too early in the game. 

        `)
    }
    // MoveTo room action
    else if (inputMsg[0] == "moveto" && inputMsg[2] == undefined) {

        if (currentRoom[0].doors.includes(inputMsg[1])) {
            let room = roomNameCheck(inputMsg[1])
            currentRoom.pop()
            currentRoom.push(room)
            console.log(currentRoom[0].description)
        } else {
            console.log(" \n [ Invaid Room ]\n ")
        }
    // quit game action
    }
    else if (inputMsg[0] == "quit" && inputMsg[1] == "game" && inputMsg[2]==undefined) {
        let areYousure = READLINE.question("Are you sure you want to end the game? >> ").toLowerCase()
        if (areYousure = "yes") {
            console.log("\n           [ ENDING GAME ]\n")
            gameIsOn = false
        } else { console.log("\n      [ CONTNUING GAME ] \n") }
    }
    // check backpack action
    else if( inputMsg[0]== "check" && inputMsg[1]=="backpack" && inputMsg[2]==undefined){
        // make backpack = names of items in backpack
        console.log(`Items in your backpack are: ${backpack}`)
        doYou = READLINE.queston("Do you want to examine any items in your backpack? >> ").toLowerCase()
        if (doYou == "yes"){
            itemToexamine = READLINE.question("Which item do you wish to examine? >>")
            if (backpack.includes(itemToexamine)){
                let item = nameCheck(intemToexamine);
                console.log(item.description)
            }
        }
    }
}



function start() {
    READLINE.question(`
~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * 
Hello Player and Welcome to Amnesia. The goal of this game is to learn your name. You 
will discover clues to help you guess your name by traveling around and examining items.
To see what actions you can do type 'help'. ENJOY~ 
~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * 
(hit enter to continue)`)
    READLINE.question(`
    
All you see is darkness. You don’t know who you are, where you are, you don’t even 
know if you are alive. What you do know is that you can’t see a thing. Unexpectedly 
you hear a voice in your head. “wElcOmE pLaYeR”, the scratchy voice whispers in your
head, “TeLl Me YoU nAmE aNd tHe tRuTh sHaLL bE rEVeAled.” Your name?? But you don’t
know your name! You don’t know anything!! “i cAn sEe YoUr nOt REadY, I WiLL CoMe 
wHeN AgAin WhEn YoU ARe PReParED. I aM wAiTinG pLAyEr~”. The voice in your head recedes. 
 
                       It was then you just realized you have...  
                       
(hit enter to continue)
                    

 `);
    READLINE.question(`
 ▄▄▄       ███▄ ▄███▓ ███▄    █ ▓█████   ██████  ██▓ ▄▄▄      
 ▒████▄    ▓██▒▀█▀ ██▒ ██ ▀█   █ ▓█   ▀ ▒██    ▒ ▓██▒▒████▄    
 ▒██  ▀█▄  ▓██    ▓██░▓██  ▀█ ██▒▒███   ░ ▓██▄   ▒██▒▒██  ▀█▄  
 ░██▄▄▄▄██ ▒██    ▒██ ▓██▒  ▐▌██▒▒▓█  ▄   ▒   ██▒░██░░██▄▄▄▄██ 
  ▓█   ▓██▒▒██▒   ░██▒▒██░   ▓██░░▒████▒▒██████▒▒░██░ ▓█   ▓██▒
  ▒▒   ▓▒█░░ ▒░   ░  ░░ ▒░   ▒ ▒ ░░ ▒░ ░▒ ▒▓▒ ▒ ░░▓   ▒▒   ▓▒█░
   ▒   ▒▒ ░░  ░      ░░ ░░   ░ ▒░ ░ ░  ░░ ░▒  ░ ░ ▒ ░  ▒   ▒▒ ░
   ░   ▒   ░      ░      ░   ░ ░    ░   ░  ░  ░   ▒ ░  ░   ▒   
       ░  ░       ░            ░    ░  ░      ░   ░        ░  ░
                                                                                    

~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * 
(hit enter to continue)
 `)
    READLINE.question(`
Cracking your eyes open you see that you are in a dimly lit room. You realized that you are 
laying on a bed. Quickly getting up you take a deep breath and examine yourself. You are wearing 
a dirty worn out t-shirt, that looks to be the color blue with a white stripe across your chest. 
Some rough jeans, that are dark navy blue almost black in color with some rips in them (the rips
don’t look to be for fashion, but from something tearing the jeans). For your shoes you are wearing 
the generic tennis shoes that are black. Noticing your laces are untied you tie them. Done examining 
yourself you look around the room you are in.

~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * 
(hit enter to continue)`) // what's with the detailed clothes description... it's useless 
    currentRoom.push(bedroom)
    console.log(currentRoom[0].description)

    while (gameIsOn) {

        checkAnswer(promptUser())

    }
}

start(); // STARTS EVERYTHING 0-0


