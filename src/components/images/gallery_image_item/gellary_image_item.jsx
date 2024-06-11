import css from './gallery_image_item.module.css';

export const GalleryImageItem = ({ image, setModalImage }) => {
  return (
    <li className={css.GalleryImageItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={css.GalleryImageItemImage}
        onClick={() => setModalImage(image)}
      />
    </li>
  );
};
