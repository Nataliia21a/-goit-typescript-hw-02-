export default function ImageCard({
  imageSrc,
  imagesAlt,
  imageModalSrc,
  openModal,
}) {
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
