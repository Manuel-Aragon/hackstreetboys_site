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
    <div className="card-body">
        <h4 className="card-title h5 h4-sm"><em className="fas fa-caret-right" aria-hidden="true"></em>
          <span>{individualAnnouncement.date}</span><em className="fas fa-caret-right" aria-hidden="true"></em>
          <span>{individualAnnouncement.time}</span> </h4>
        <p className="card-text">{individualAnnouncement.title}</p>
        <button id="modal-btn"> Read more</button>
    </div>
    )
}