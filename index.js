function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return getFirstSelector('#nested').querySelector('.target')
}
function deepestChild() {
  return document.querySelector("#grand-node").lastElementChild
}
function increaseRankBy(numberToIncreaseBy) {
  
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for (let topIndex = 0; topIndex < rankedLists.length; topIndex++) {
    for (let lowerIndex = 0; lowerIndex < rankedLists[topIndex].querySelectorAll('li').length; lowerIndex++) {
      
      let updatedRank = parseInt(document.querySelectorAll('.ranked-list')[topIndex].querySelectorAll('li')[lowerIndex].textContent) + numberToIncreaseBy
      
      document.querySelectorAll('.ranked-list')[topIndex].querySelectorAll('li')[lowerIndex].textContent = updatedRank
      
    }
  }
}