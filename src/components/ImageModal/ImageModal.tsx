import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { ItemHit } from "../../types/global";

interface ImageModalProps {
  isOpen: boolean;
  image: ItemHit;
  onRequestClose: () => void;
}

const ImageModal = ({ isOpen, image, onRequestClose }: ImageModalProps) => (
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
          src={image.urls.regular}
          alt={image.description}
          className={s.fullImage}
        />
      </div>
    )}
  </Modal>
);

export default ImageModal;
