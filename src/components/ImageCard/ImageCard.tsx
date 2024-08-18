type Props = {
  imageSrc: string;
  imagesAlt: string;
  imageModalSrc: string;
  openModal: (imageModalSrc: string, imagesAlt: string) => void;
};

export default function ImageCard({
  imageSrc,
  imagesAlt,
  imageModalSrc,
  openModal,
}: Props) {
  return (
    <div>
      <img
        src={imageSrc}
        alt={imagesAlt}
        onClick={() => openModal(imageModalSrc, imagesAlt)}
      />
    </div>
  );
}
