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


async function getData() {
    let wait;
  wait = await axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then (data =>   
      {
          console.log(data)
      makeArts(data.data.articles)
     return wait;}
  
  )
  
    .catch (data => { 
      console.log('data error',data)
            }
             )
    }
    getData();


  tops = document.querySelectorAll('.title')

  function makeArts(articles) {
    console.log(articles)
    console.log(Object.keys(articles));
artKeys = Object.keys(articles)
artEntries =  Object.entries(articles)
    //  let tabs=[];

//  tabsAll = document.createElement('div')
//  tabsAll.setAttribute('data-tab','all')
//  tabsAll.classList.add('tab')
//  tabsAll.innerHTML = 'ALL' 
//  tops[0].appendChild(tabsAll)

 for(i=0;i<artKeys.length;i++)
 {
    console.log('key',artKeys[i])
    console.log('entry',artEntries[i])
    for(j=0;j<artEntries[i][1].length;j++)
    {
        console.log('entry array headline',artEntries[i][1][j]['headline'])
        console.log('entry array authorName',artEntries[i][1][j]['authorName'])
        console.log('entry array authorPhoto',artEntries[i][1][j]['authorPhoto'])
    }
    //      tabs[i] = document.createElement('div')
//      tabs[i].setAttribute('data-tab',topics[i])
//      tabs[i].classList.add('tab')
//      tabs[i].innerHTML = topics[i].toUpperCase() 
//      tops[0].appendChild(tabs[i])
 }

 }
