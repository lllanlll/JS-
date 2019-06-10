var imgCollection = [
  {
    id: 1,
    src: '../img/AsunaOne.jpg'
  },
  {
    id: 2,
    src: '../img/AsunaTwo.jpg'
  },
  {
    id: 3,
    src: '../img/AsunaThree.jpg'
  },
  {
    id: 4,
    src: '../img/AsunaFour.jpg'
  }
] //设置图片数据为对象数组

window.onload = function() {
  var par = document.getElementById('inner')
  for (let i = 0; i < imgCollection.length; ++i) {
    var chil = document.createElement('img')
    chil.setAttribute('src', imgCollection[i].src)
    chil.setAttribute('alt', i)
    chil.setAttribute('id', i + 1)
    par.appendChild(chil)
  }
} //在页面加载前先将图片加载至inner盒子内

var cur = 1
var distance = 500

function changeNext() {
  var inn = document.getElementById('inner')
  cur++
  if (cur == 5) {
    cur = 1
    inn.style.left = distance * (1 - cur) + 'px'
  } else {
    inn.style.left = distance * (1 - cur) + 'px'
  }
} //切换下一张

function changePrev() {
  var inn = document.getElementById('inner')
  cur--
  if (cur == 0) {
    cur = 4
    inn.style.left = distance * (1 - cur) + 'px'
  } else {
    inn.style.left = distance * (1 - cur) + 'px'
  }
} //切换上一张
