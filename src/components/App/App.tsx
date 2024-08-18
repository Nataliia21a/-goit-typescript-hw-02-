import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import { fetchImages } from "../../gallery-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [totalPages, setTotalPages] = useState(999);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAltText, setSelectedAltText] = useState("");

  const handleSearch = async (newTopic: string) => {
    setImages([]);
    setPage(1);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages() {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchImages(topic, page);
        setTotalPages(data.total_pages);
        setImages((prewImages) => {
          return [...prewImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [page, topic]);

  function openModal(imageModalUrl: string, imageAltText: string): void {
    setSelectedImage(imageModalUrl);
    setSelectedAltText(imageAltText);
  }

  function closeModal(): void {
    setSelectedImage(null);
    setSelectedAltText("");
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loader && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={true}
          selectedImageUrl={selectedImage}
          altText={selectedAltText}
          onRequestClose={closeModal}
        />
      )}
    </>
  );
}
