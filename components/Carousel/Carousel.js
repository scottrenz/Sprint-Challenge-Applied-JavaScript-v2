/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let divCar = document.createElement('div')
let divBtnL = document.createElement('div')
let img0 = document.createElement('img')
let img1 = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')
let divBtnR = document.createElement('div')
let caro = document.querySelectorAll('.carousel-container')
caro[0].appendChild(divCar)
divCar.appendChild(divBtnL)
divCar.appendChild(img0)
divCar.appendChild(img1)
divCar.appendChild(img2)
divCar.appendChild(img3)
divCar.appendChild(divBtnR)
divCar.classList.add('carousel')
divBtnL.classList.add('left-button')
divBtnL.classList.add('xbtn')
divBtnR.classList.add('right-button')
divBtnR.classList.add('xbtn')
img0.src='./assets/carousel/mountains.jpeg'
img1.src='./assets/carousel/computer.jpeg'
img2.src='./assets/carousel/trees.jpeg'
img3.src='./assets/carousel/turntable.jpeg'
divBtnL.innerHTML = '<'
divBtnR.innerHTML = '>'
divBtnL.setAttribute('data-btn','L')
divBtnR.setAttribute('data-btn','R')

class Carousel {
  constructor(element){
    this.element =  element;
    this.btnData = this.element.dataset.btn

     this.element.addEventListener('click', () => {this.moveImg()});
  }

  moveImg(){
    const arr = Array.from(imgs)
    let current = 0;
    arr.forEach(function(thing,idx) {
      if(imgs[idx].style.display === 'flex')
          {current = idx}
     })

     if(this.btnData === 'L') {   
      if (current === 0)
       {current = imgs.length - 1}
      else
       {current = current - 1}
    }
     
      if(this.btnData === 'R') {
      if (current === (imgs.length-1))
       {current =  0 }
      else
       {current = current + 1}
    }

    arr.forEach(function(thing,idx) {
      if(idx === current)
      {imgs[idx].style = 'display: flex'}
      else
      {imgs[idx].style = 'display: none'}
     })

  }
}
let btns = document.querySelectorAll('.xbtn');
let imgs = document.querySelectorAll('.carousel img');

btns.forEach(one => new Carousel(one))

for ( i = 0; i < (imgs.length - 1); i++)
 { imgs[i].style = 'display: none'}
imgs[0].style = 'display: flex'
