import React from 'react'
import Modal from 'react-modal';



export const IndividualAnnouncement = ({individualAnnouncement}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  Modal.setAppElement('#root');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
   let more = false
  const handlereserve=()=>{
} 
  const open=()=>{
    more=true;
  }

  const close=()=>{
    more = false;
  }
  return (
    <div className="card-body">
        <h4 className="card-title h5 h4-sm"><em className="fas fa-caret-right" aria-hidden="true"></em>
          <span>{individualAnnouncement.date}</span><em className="fas fa-caret-right" aria-hidden="true"></em>
          <span>{individualAnnouncement.time}</span> </h4>
        <p className="card-text">{individualAnnouncement.title}</p>
          <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{individualAnnouncement.title}</h2>
        <div>{individualAnnouncement.date}, {individualAnnouncement.time}</div>
        <div>{individualAnnouncement.description}</div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
}