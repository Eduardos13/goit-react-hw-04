import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.ImageModal}
      overlayClassName={s.Overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
