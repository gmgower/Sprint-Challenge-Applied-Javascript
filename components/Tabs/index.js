// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// * Setup axios promise to GET request to address. 
const topicsEntry = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(ltData => {
        console.log(`Lambda Times Data`, ltData.data.topics)
        ltData.data.topics.forEach(topic => {
            topicsEntry.appendChild(createTab(topic))
        })
    })
    .catch(error => {
        console.log(`Lambda Times not avaliable`, error)
    })



// * Check Dom
// const tabEntry = document.querySelector('.topics')
// tabEntry.appendChild(createTab())


function createTab (topicObj){
    // * Define elements
    const tabs = document.createElement('div')

    // * Setup classes
    tabs.classList.add('tab')

    // * Setup text content
    tabs.textContent = topicObj

    return tabs
}