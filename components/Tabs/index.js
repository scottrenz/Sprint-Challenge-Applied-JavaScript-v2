// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

async function getData() {
    let wait;
  wait = await axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then (data =>   
      {
     makeTabs(data.data.topics)
     return wait;}
  )
    .catch (data => { 
      console.log('data error',data)
            }
             )
    }
  getData();

  tops = document.querySelectorAll('.title')
  let tabs=[];

  function makeTabs(topics) {
 
 for(i=0;i<topics.length;i++)
 {
     tabs[i] = document.createElement('div')
     tabs[i].classList.add('tab')
     tabs[i].innerHTML = topics[i].toUpperCase() 
     tabs[i].addEventListener('click', function() { getDataX.call(this);}, false);
     tops[0].appendChild(tabs[i])
     if(i == topics.length - 1)
     {
  i++
  tabs[i] = document.createElement('div')
  tabs[i].classList.add('tab')
  tabs[i].innerHTML = 'ALL' 
  tabs[i].addEventListener('click', function() { getDataX.call(this);}, false);
  tops[0].appendChild(tabs[i])

     }
  
    }
    sizerTab()
 }

function sizerTab() {
  if (window.innerWidth > 680)
  {tops[0].style = 'width: 10%;display: flex;width: 80%;justify-content: space-between;align-items: center;padding: 1.0rem;height: 5.8rem;'

  for(i=0;i<tabs.length;i++)
  {
      tabs[i].style = 'height: 20px;'
     }
}
  else
  {tops[0].style = 'position: relative; top: 50%;left: 20%;display: flex;flex-direction: column;width: 100px;justify-content: space-evenly;margin-: 100px;align-items: center;padding: 1.0rem;height: 100%;'

  for(i=0;i<tabs.length;i++)
  {
      tabs[i].style = 'height: 10px;'
     }
}
}
window.addEventListener('resize', function() { sizerTab.call(this);}, false);

let topicName = ''
  
   function getDataX() {
let tpc = this.innerHTML
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then (data =>  { 
      makeArtsX(data.data.articles,tpc)
      } )
     .catch (data => { console.log('data error',data)})}
    
   function   makeArtsX(articles,tpc) {
    let k = 0;
    let artKeys = Object.keys(articles)
    let artEntries =  Object.entries(articles)

    const cards = document.querySelectorAll('.cards-container');
    xxx = [{}];
    for(i=0;i<artKeys.length;i++)
    {
      for(j=0;j<artEntries[i][1].length;j++)
      {
    xxx[k] = {topic: artEntries[i][0], headline: artEntries[i][1][j]['headline']}
    k = k + 1
        }}
        let headlines = xxx;

        if(tpc != 'ALL')
       {headlines = xxx.filter(obj =>   tpc.toLowerCase().startsWith(obj.topic));}
let headlineX = '';
headlines.forEach(function(item) {
  headlineX = headlineX + item.headline + "\r \n"
})
alert(headlineX)
const headClass = document.querySelectorAll('.headline')

headClass.forEach( 
  function(currentValue) { 
    currentValue.parentElement.style = 'display: none'
  });

headClass.forEach( 
  function(currentValue) { 
 for(i=0;i<headlines.length;i++)
 {
  if(headlines[i].headline == currentValue.innerHTML)
     { currentValue.parentElement.style = 'display: flex'
    }
 }
    })
} 
