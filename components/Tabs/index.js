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
 }

 } 
tops[0].style = 'width: 10%;display: flex;justify-content: space-between;align-items: center;padding: 1.0rem;height: 5.8rem;'
let topicName = ''
  
   function getDataX() {
let tpcx = this.innerHTML.toLowerCase()
let tpc = ''
for (i=0;i<tpcx.length;i++)
{
  if (tpcx[i] === ' ' || tpcx[i] === '.')
  {i = tpcx.length}
  else
{tpc = tpc + tpcx[i] }     
 }
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
let headlines = xxx.filter(obj => obj.topic === tpc);
let headlineX = '';
headlines.forEach(function(item) {
  headlineX = headlineX + item.headline + "\r \n"
})
alert(headlineX)
   } 
