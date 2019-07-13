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
.then (data =>  { makeArts(data.data.articles)
   return wait;} )
 .catch (data => { console.log('data error',data)})}
 getData();

  function makeArts(articles) {
    let artKeys = Object.keys(articles)
    let artEntries =  Object.entries(articles)
const cards = document.querySelectorAll('.cards-container');
for(i=0;i<artKeys.length;i++)
{
  for(j=0;j<artEntries[i][1].length;j++)
  {
    let divCard = document.createElement('div')
      let divHead = document.createElement('div')
      let divAuth = document.createElement('div')
      let divImg = document.createElement('div')
      let img = document.createElement('img')
      let span = document.createElement('span')
      divCard.setAttribute('class','card')
      divHead.setAttribute('class','headline')
      divImg.setAttribute('class','img-container')
      divHead.innerHTML = artEntries[i][1][j]['headline']
      img.src = artEntries[i][1][j]['authorPhoto']
      span.innerHTML = 'By ' + artEntries[i][1][j]['authorName']
      cards[0].appendChild(divCard)
      divCard.appendChild(divHead)
      divCard.appendChild(divAuth)
      divAuth.appendChild(divImg)
      divImg.appendChild(img)
      divAuth.appendChild(span)
      img.style = 'height: 50px;'}}}
