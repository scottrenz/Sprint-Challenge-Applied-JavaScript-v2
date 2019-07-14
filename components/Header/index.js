// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {

    div = document.createElement('div')
    spanDate = document.createElement('span')
    h1 = document.createElement('h1')
    spanTemp = document.createElement('span')
    dhead = document.querySelectorAll('.header-container')
    div.appendChild(spanDate)
    div.appendChild(h1)
    div.appendChild(spanTemp)
    dhead[0].appendChild(div)
    div.classList.add('header')
    spanDate.classList.add('date')
    spanTemp.classList.add('temp')

    spanDate.innerHTML = 'SMARCH 28, 2019'
    h1.innerHTML = 'Lambda Times'
    spanTemp.innerHTML = '98°'
}
Header();

function sizerHead() {
    if (window.innerWidth < 660)
    {h1.style = 'font-size: 26px;'}
    else
    {h1.style = ''}
}
sizerHead();
window.addEventListener('resize', function() { sizerHead.call(this);}, false);
