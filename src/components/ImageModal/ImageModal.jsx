import Modal from "react-modal";
import s from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ isOpen, image, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Image preview"
    className={s.modalContent}
    overlayClassName={s.modalOverlay}
    shouldCloseOnOverlayClick={true}
  >
    {image.urls.regular && (
      <div className={s.imageContainer}>
        <img
          style={customStyles}
          src={image.urls.regular}
          alt={image.description}
          className={s.fullImage}
        />
      </div>
    )}
  </Modal>
);

export default ImageModal;
