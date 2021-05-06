// Instructions

// - You'll find a variable called data in the console.log. That's your list of dogs

// - Render the top list of dogs using the list item template you'll find on the 
// HTML file

// - Each list item should be clickable. When you click on an item, the selected 
// dog should display on the main card

// - The main card should contain all the information from the selected dog. 
// Follow the template for the main card that you'll find on the HTML file.

// - There should be only one card at the time on the screen

// - The card should have a button that toggles for the selected dog between 
// good dog/ bad dog

// Tips
// - Take advantage of scope in JS to have access to the data you need

// - Remember you can add event listeners to any element on the page

console.log(data);

// This is the structure for the list


// const header = document.createElement("header")
// header.setAttribute("class", "header")

// const showOff = document.createElement("h1")
// showOff.innerText = "The Show Off Dog Owner's App"
// header.append(showOff)

// const unOrderedList = document.createElement("ul")
// unOrderedList.setAttribute("class", "dogs-list")
// header.append(unOrderedList)

// const orderedList = document.createElement("li")
// orderedList.setAttribute("class", "dogs-list__button dogs-list__button--add")
// unOrderedList.append(orderedList)

// console.log(header)

// This is a template for the dog list item

// bridge to the html

const navListEl = document.querySelector(".dogs-list")

function createDogNav (dog){
    
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "dogs");
    listItem.innerText = dog.name
    navListEl.append(listItem)
}
createDogNav(data[0])


// query selctor

// This is a template for the main dog card

function createDogCard (dog){

const mainSection = document.createElement("main");
mainSection.setAttribute("class", "main");

console.log(mainSection)


const dogSection = document.createElement("section");
dogSection.setAttribute("class", "main__dog-section");
mainSection.append(dogSection);


const dogName = document.createElement("h2");
dogName.innerText = dog.name
dogSection.append(dogName)

console.log(dogName)

const dogImage = document.createElement("img");
const imageSource = dog.image
dogImage.setAttribute("src", imageSource);
dogSection.append(dogImage)

console.log(dogImage)


const dogDecription = document.createElement("div")
dogDecription.setAttribute("class", "main__dog-section__desc")
dogSection.append(dogDecription)

const dogBioHeader = document.createElement("h3")
dogBioHeader.innerText = "Bio"
dogDecription.append(dogBioHeader)

console.log(dogBioHeader)

const dogBio = document.createElement("p")
dogBio.innerText = dog.bio
dogDecription.append(dogBio)

console.log(dogBio)

const dogButtonSection = document.createElement("div")
dogButtonSection.setAttribute("class","main__dog-section__btn")
dogSection.append(dogButtonSection)

const isNaughty = document.createElement("p")
isNaughty.innerText = dog.isGoodDog
dogButtonSection.append(isNaughty)

console.log(isNaughty)

const goodDogButton = document.createElement("button")
dogButtonSection.append(goodDogButton)

}



for (let i = 0; i < data.length; i++) {
    const dog = data[i]
    createDogCard(dog)
  }


// Challenge :: This is a template for the add dog form
