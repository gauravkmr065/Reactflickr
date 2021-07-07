import React from "react";
import PropTypes from "prop-types";

const Card = ({ imageSrc, imageAlt, showImageModal }) => (
  <>
    <div className="col">
      <div
        className="card mx-3 my-3"
        style={{ border: "none", borderRadius: "10px" }}
      >
        <img
          src={imageSrc}
          className="img-fluid card-img-top"
          alt={imageAlt}
          style={{ borderRadius: "10px", boxShadow: "4px 8px 8px gray" }}
          onClick={() => showImageModal(imageSrc, imageAlt)}
        />
      </div>
    </div>
  </>
);

Card.defaultProps = {
  imageAlt: "alt image title",
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  showImageModal: PropTypes.func.isRequired,
  imageAlt: PropTypes.string,
};

export default Card;
