import { ItemHit } from "../../types/global";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: ItemHit;
  onImageClick: (id: string) => void;
}

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
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
