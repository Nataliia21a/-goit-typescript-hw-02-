import css from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            imageSrc={image.urls.small}
            imagesAlt={image.alt_description}
            imageModalSrc={image.urls.regular}
            openModal={openModal}
          />
          {/* <div>
            <img src={image.urls.small} alt={image.alt_description} />
          </div> */}
        </li>
      ))}
    </ul>
  );
}
