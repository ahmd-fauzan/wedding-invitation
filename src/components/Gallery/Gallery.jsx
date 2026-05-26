import { useState } from "react";
import "./Gallery.css";

const Gallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery-section">
        <p className="title">Gallery</p>
        <div className="gallery">
          {data.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default Gallery;
