import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { ItemHit } from "../../types/global";

interface ImageGalleryProps {
  images: ItemHit[];
  onImageClick: (id: string) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li className={s.imgContainer} key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
