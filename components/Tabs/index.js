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

  function makeTabs(topics) {
 let tabs=[];

 for(i=0;i<topics.length;i++)
 {
     tabs[i] = document.createElement('div')
     tabs[i].setAttribute('data-tab',topics[i])
     tabs[i].classList.add('tab')
     tabs[i].innerHTML = topics[i].toUpperCase() 
     tops[0].appendChild(tabs[i])
 }

 } 
tops[0].style = 'width: 10%;display: flex;justify-content: space-between;align-items: center;padding: 1.0rem;height: 5.8rem;'
