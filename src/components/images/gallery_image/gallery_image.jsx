import css from './gallery_image.module.css';
import { GalleryImageItem } from '../gallery_image_item/gellary_image_item';

export const GalleryImage = ({ images, setModalImage }) => {
  return (
    <ul className={css.GalleryImage}>
      {images.map(image => (
        <GalleryImageItem
          key={image.id}
          image={image}
          setModalImage={setModalImage}
        />
      ))}
    </ul>
  );
};
