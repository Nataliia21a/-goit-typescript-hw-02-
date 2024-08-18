import css from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

type Props = {
  images: {
    id: string;
    urls: { small: string; regular: string };
    alt_description: string;
  }[];
  openModal: (imageModalUrl: string, imageAltText: string) => void;
};

export default function ImageGallery({ images, openModal }: Props) {
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
        </li>
      ))}
    </ul>
  );
}
