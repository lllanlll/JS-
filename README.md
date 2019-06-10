# JS-
一个简单的轮播图实现
具体实现步骤:

1 创建一个外部div:outer 用来设置轮播图在网页上的位置并设置overflow: hidden将多余图片先隐藏
2 创建一个内部div:inner 用来存放图片并设置position: absolute以便之后通过设置left值来改变位置以显示图片
3 并且设置transition: all 1s可以使图片切换跟顺畅
4 在JS中创建一个对象数组imgCollection保存图片的src数据
5 然后在JS中动态创建img元素使用 var chil = document.createElement(‘img’)
6 并设置其属性
chil.setAttribute(‘src’, imgCollection[i].src)
chil.setAttribute(‘alt’, i)
chil.setAttribute(‘id’, i + 1)
7 然后将其添加为inner的子元素 par.appendChild(chil)
8 最后创建两个click函数来完成切换功能
