import React from 'react'

export const IndividualAnnouncements = ({IndividualAnnouncements}) => {
    let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target === modal){
    modal.style.display = "none"
  }
}

    return (
<div class="modal">
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <p>this is the text inside the modal</p>
  </div>
</div>
    )
}