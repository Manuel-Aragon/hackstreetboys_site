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
    subtitle.style.color = '#00FF0B';
  }

  function closeModal() {
    setIsOpen(false);
  }




  return (
    <div class="card flex-row">
      <div className="card-body">
        <h4 className="card-title h5 h4-sm"><em className="fas fa-caret-right" aria-hidden="true"></em>
          <span>{individualAnnouncement.date}</span><em className="fas fa-caret-right" aria-hidden="true"></em> </h4>
        <p className="card-text">{individualAnnouncement.title}</p>
        <div className='btn btn-success btn-md'button onClick={openModal}>Read More</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="article modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{individualAnnouncement.title}</h2>
        <div>{individualAnnouncement.date}</div>
        <div className="content" dangerouslySetInnerHTML={{__html: individualAnnouncement.description}}></div>


        <div className='btn btn-danger btn-md'button onClick={closeModal}>close</div>
      </Modal>
      </div>
    </div>
  )
}

