const btnlike1 = document.getElementById("btnLike1")
const btnlike2 = document.getElementById("btnLike2")
const countlikes1 = document.getElementById("countlikes1")
const countlikes2 = document.getElementById("countlikes2")

function hitLikes() {
  let totalLikes1 = parseInt(countLikes1.value) +1
  countLikes1.textContent = totalLikes1.toString()
  
}
btnLike1.addEventListener("click",hitLikes1)
