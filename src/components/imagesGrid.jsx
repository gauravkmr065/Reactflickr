import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import Card from "./imageCard";

const CardGrid = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");

  const showImageModal = (imageSrc, imageAlt) => {
    setModalOpen(!modalOpen);
    setModalImage(imageSrc);
    setModalImageAlt(imageAlt);
  };

  return (
    <>
      {modalOpen && (
        <MDBModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <MDBModalBody>
            <img
              className="img-fluid mx-auto d-block"
              src={modalImage}
              alt={modalImageAlt}
              style={{ borderRadius: "10px" }}
            />
          </MDBModalBody>
        </MDBModal>
      )}
      <div className="mx-5 my-5 row row-cols-1 row-cols-md-3 g-4">
        {images.map((_image) => (
          <Card
            imageSrc={`https://live.staticflickr.com/${_image.server}/${_image.id}_${_image.secret}_w.jpg`}
            imageAlt={_image.title}
            showImageModal={showImageModal}
            key={_image.id + Math.floor(Math.random() * 100000)}
          />
        ))}
      </div>
    </>
  );
};

CardGrid.propTypes = {
  images: PropTypes.instanceOf(Array).isRequired,
};

export default CardGrid;
