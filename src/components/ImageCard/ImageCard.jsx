import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div onClick={() => onImageClick(image.id)}>
      <img
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
