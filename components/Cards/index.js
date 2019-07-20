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

// * Setup axios promise to GET request to address. 
const articlesEntry = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(ltArticleData => {
        console.log(`Lambda Times Article Data`, ltArticleData.data.articles)
        for(let [type, articles] of Object.entries(ltArticleData.data.articles)){
            // console.log(type,articles)
            articles.forEach(article => {
                articlesEntry.appendChild(createArticle(article))
            })
        }
    })
    .catch(error => {
        console.log(`Lambda Time Articles not available.`, error)
    })

// * Check DOM
// const cards = document.querySelector('.cards-container')
// cards.appendChild(createArticle())


function createArticle (articleObj){
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
    cardAuthorImg.src = articleObj.authorPhoto
    cardAuthorName.alt = `Image of Author.`

    // * Setup text content 
    cardHeadline.textContent = articleObj.headline
    cardAuthorName.textContent = `By: ${articleObj.authorName}`

    return card
}