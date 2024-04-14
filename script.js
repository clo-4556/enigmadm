const prev = document.getElementByClass('prev-btn')
const next = document.getElementByClass('next-btn')
const list = document.getElementByClass('item-list') 

const itemWidth = 150
const padding = 10

prev.addEventListener('click',() => {
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',() =>{
  list.scrollLeft += itemWidth + padding
})