import React from 'react'

export const IndividualAnnouncement = ({individualAnnouncement}) => {
  //     let modalBtn = document.getElementById("modal-btn")
// let modal = document.querySelector(".modal")
// let closeBtn = document.querySelector(".close-btn")
// modalBtn.onclick = function(){
//   modal.style.display = "block"
// }
// closeBtn.onclick = function(){
//   modal.style.display = "none"
// }
// window.onclick = function(e){
//   if(e.target === modal){
//     modal.style.display = "none"
//   }
// }

  return (
    <div class="card-body">
        <h4 class="card-title h5 h4-sm"><em class="fas fa-caret-right" aria-hidden="true"></em>
          <span>{individualAnnouncement.date}</span><em class="fas fa-caret-right" aria-hidden="true"></em>
          <span>{individualAnnouncement.time}</span> </h4>
        <p class="card-text">{individualAnnouncement.title}</p>
        <button id="modal-btn"> Read more</button>
    </div>
    )
}