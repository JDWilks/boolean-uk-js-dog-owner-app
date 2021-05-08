// i'm basically watching Nico's video from this morning and following along as my code was not correct - i've not copyed and pasted his code - i'm writing it and trying to understand.

console.log(data)

// ********** the below are the 'bridges' to the html **********

const dogListEl = document.querySelector(".dogs-list")
const dogSectionEl = document.querySelector(".main__dog-section")

// ************** creates a single list item ******************
// ************** function take a single dog ******************

function createDogListItem (dog){

    const liEl = document.createElement ("li")
    liEl.setAttribute("class", "dogs-list__button")
    liEl.innerText = dog.name
    dogListEl.append(liEl)

    liEl.addEventListener("click", function(){
        dogSectionEl.innerHTML = ""
        renderDog(dog)
    })
    
}
// ************** creates multiple list items **********
// ************** function loops through array of all dogs **********

function createDogListItems (dogs){

    for(const dog of dogs){
        createDogListItem(dog)
    }
}

// ************** function to create/render dog card **********

function renderDog (dog){

const titleEl = document.createElement("h2")
titleEl.innerText = dog.name

const imgEl = document.createElement("img")
imgEl.setAttribute("src", dog.image)
imgEl.setAttribute("alt", "dog.name")

const dogDesEl = document.createElement("div")
dogDesEl.setAttribute("class", "main__dog-section__desc")
  
const bioEl = document.createElement("h3")
bioEl.innerText = "Bio"

const introEl = document.createElement("p")
introEl.innerText = dog.bio

dogDesEl.append(bioEl, introEl)

const naughtyEl = document.createElement("p")

const naughtyEmEl = document.createElement("em")
naughtyEmEl.innerText = "is naughty?"

naughtyEl.append(naughtyEmEl, !dog.isGoodDog ? " Yes!" : " No!")

const goodDogBttn = document.createElement("button")
goodDogBttn.innerText = !dog.isGoodDog ? "Bad Dog" : " Good Dog!"

dogSectionEl.append(titleEl, imgEl, dogDesEl, naughtyEl, goodDogBttn)

}

// **************** calling functions **********************

createDogListItems(data)

renderDog(data[1])




// *******************************************************

// js cheat sheet

//question - how is dog linked to the data array

// this finds an element in the html - it is the 'bridge' - its stored in a variable
// const dogListEl = document.querySelector(".dogs-list")

// this creates an element within JS (div / main / li / ul)
//const liEl = document.createElement ('li')

// this sets an attribute - in this case a class
//liEl.setAttribute("class", "dogs-list__button")

// this changes the text within an element
//liEl.innerText = "Mr Bonkers"

// this appends leEl to dogListEl (nests it)
// dogListEl.append(liEl)

// this addEventListener in the below adds a click and then function
// liEl.addEventListener("click", function(){
   // console.log(dog)

// this set attribure is syntax for images
//   imgEl.setAttribute("src", "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg")