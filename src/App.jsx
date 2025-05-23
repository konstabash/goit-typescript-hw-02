import "./App.css";
import { useEffect, useState } from "react";
import { fetchHits } from "./services/api";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const newImages = await fetchHits(query, page);
        setHits((prev) => [...prev, ...newImages.results]);
        setTotalPages(newImages.total_pages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query.trim()) {
      getData();
    }
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter your request");
      return;
    }
    setQuery(newQuery);
    setHits([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (id) => {
    const img = hits.find((i) => i.id === id);
    if (img) {
      setSelectedImage(img);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <Toaster position="top-right" />
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          image={selectedImage}
          onRequestClose={closeModal}
        />
      )}
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <ImageGallery images={hits} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {hits.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
