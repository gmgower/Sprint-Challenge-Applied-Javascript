// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// * Check DOM
const cards = document.querySelector('.cards-container')
cards.appendChild(createArticle())


function createArticle (){
    // * Define elements
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthorContainer = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const cardAuthorImg = document.createElement('img')
    const cardAuthorName = document.createElement('span')

    // * Setup structure
    card.appendChild(cardHeadline)
    card.appendChild(cardAuthorContainer)
    cardAuthorContainer.appendChild(cardImgContainer)
    cardAuthorContainer.appendChild(cardAuthorName)
    cardImgContainer.appendChild(cardAuthorImg)

    // * Setup classes
    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthorContainer.classList.add('author')
    cardImgContainer.classList.add('img-container')

    // * Setup attributes
    cardAuthorImg.scr = `url of authors image`
    cardAuthorNamealt = `Image of Author.`

    // * Setup text content 
    cardHeadline.textContent = `Headline of article`
    cardAuthorName.textContent = `By: authors name`
    
    return card
}