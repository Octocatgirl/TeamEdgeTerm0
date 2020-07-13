/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

  const READLINE = require("readline-sync");

  /* -------------------------------------------- 
  
  Part 1:
  Let's start by asking taking the order of the group(you and two friends). What did each person order?
  
  Write a function that will take the group's order:
  - Prompt the user to enter the price of each item they ordered
  - Return the cost 
  
  Remember! Functions are meant to be reusable, so write a function that will work when called for each person!
  
  c
  -------------------------------------------- */
  
  // Menu //
  console.log("\n🌟🌸 Welcome to SHAYLEE FOOD PALACE 🌸🌟\n Here is the menu")
  console.log("MENU: \n 🍟Fries $5   🍔Cheese Burger $11   🍔Hamburger $10 \n 🥬Veggie Burger $12   🥗Salad $15  🥤Small Soda $1.99\n  🥤Large Soda $3.99  🍨Ice Cream $4  🥤Milkshake $6")
  
  var total = 0
  var TotalOfFOOD = ""
  let isStop = false
  
  function FirstOrder() {
	  var food = READLINE.question('\nWhat would you like to order today?  ').toLowerCase()
	  food = food.replace(/ +/g, "");
	  if (food === "fries") {
		  c = 5
	  } else if (food === "cheeseburger") {
		  c = 11
	  } else if (food === "hamburger") {
		  c = 10
	  } else if (food === "veggieburger") {
		  c = 12
	  } else if (food === "milkshake") {
		  c = 6
	  } else if (food === "largesoda") {
		  c = 3.99
	  } else if (food === "smallsoda") {
		  c = 1.99
	  } else if (food === "icecream") {
		  c = 4
	  } else if (food === "salad") {
		  c = 15
	  } else if ((food !== "fries") || (food !== "cheeseburger") || (food !== "hamburger") || (food !== "veggieburger") || (food !== "milkshake") || (food !== "smallsoda") || (food !== "icecream") || (food !== "largesoda") || (food !== "salad")) {
		  console.log('Sorry I did not understand what you said... ')
		  food = ""
		  c = 0
	  }
	  TotalOfFOOD += food + "$" + c + "\n"
	  total = total + c
	  console.log(`Charge: ${c}`)
  }
  
  function ExtraOrder() {
	  var food = READLINE.question('Would you like anything else?  ').toLowerCase()
	  food = food.replace(/ +/g, "");
	  let c = 0
	  if (food === "fries") {
		  c = 5
	  } else if (food === "cheeseburger") {
		  c = 11
	  } else if (food === "hamburger") {
		  c = 10
	  } else if (food === "veggieburger") {
		  c = 12
	  } else if (food === "milkshake") {
		  c = 6
	  } else if (food === "largesoda") {
		  c = 3.99
	  } else if (food === "smallsoda") {
		  c = 1.99
	  } else if (food === "icecream") {
		  c = 4
	  } else if (food === "salad") {
		  c = 15
	  } else if (food === "no") {
		  isStop = true
		  c = 0
	  } else if ((food !== "fries") || (food !== "cheeseburger") || (food !== "hamburger") || (food !== "veggieburger") || (food !== "milkshake") || (food !== "smallsoda") || (food !== "icecream") || (food !== "largesoda") || (food !== "salad")) {
		  console.log('Sorry I did not understand what you said...   ')
		  food = ""
		  c = 0
	  }
	  if (food != "no") {
		  TotalOfFOOD += food + "$" + c + "\n"
	  }
	  console.log(`Charge: ${c}`)
	  return c
  }
  
  function calculatePrice() {
	  tax();
	  TIP();
	  total = total + priceWithTax + TotalTip
  }
  
  function tax() {
	  priceWithTax = total * 0.09
	  return priceWithTax
  }
  
  function TIP() {
	  tipPercentage = tip * 0.01
	  TotalTip = total * tipPercentage
	  return TotalTip
  }
  
  function ORDERS() {
	  FirstOrder()
	  do {
		  let c = ExtraOrder()
		  total = total + c
	  } while (isStop == false)
  }
  
  function Printreceipt() {
	  if (receipt == "yes") {
		  console.log(`HERE IS YOUR RECEIPT \n \n \n🌸 SHAYLEE FOOD PALACE 🌸\n______________________\n${TotalOfFOOD}\n______________________\nTOTAL: ${total}\n______________________\n TAX: ${priceWithTax}\n TIP: ${TotalTip}\n THANK YOU!!\n`)
	  } else { console.log("Thank you enjoy your day!") }
  }
  
  ORDERS();
  tip = READLINE.question('How much tip would you like to pay? \n *please give the number of the percent\n ex: 10% -> 10 \n Tip: ')
  calculatePrice();
  console.log(`Total: $${total}`)
  receipt = READLINE.question('Would you like a receipt? ').toLowerCase()
  Printreceipt();
  
  /* things to fix: When asked again what your order is it does not charge the item (temperarly fixed)
					The outragously long decicmal number
  
  
  
  */
  
  /* --------------------------------------------
  
  Part 2:
  Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).
  
  Write a function that will calculate the cost of each person's order, including:
  - Cost of all of their ordered items
  - Tax (Look up the sales tax of your city)
  - Tip (Give the user the option to enter how much they want to tip)
  
  Remember! Functions are meant to be reusable, so write a function that will work when called for each person!
  
  -------------------------------------------- */
  
  
  
  
  
  
  
  
  
  
  
  
  /* --------------------------------------------
  
  Part 3:
  Let's print out a receipt for each person.
  
  Write a function that will take the values of each person's order and total cost and print it out in an appealing way.
  
  The receipt should include:
  - Cost of each item
  - Total cost for each person
  
  Remember! Functions are meant to be reusable, so write a function that will work when called for each person!
  
  -------------------------------------------- */
  
  
  
  
  
  
  
  
  
  
  /* --------------------------------------------
  
  Part 4: Upchallenges!
  
  How many of these upchallenges can you implement?
  
  - Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter.
  - The displayed prices should only have two decimal places.
  - Can you adjust your program to account for any shared items ordered for the group?
  - Display the tax and tip values
  - Implement a rewards system (stamp cards, buy one get one, etc)
  
  -------------------------------------------- */
  