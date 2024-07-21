import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <li className={s.ImageCard} onClick={() => onImageClick(image)}>
      <div>
        <img src={image.urls.small} alt={image.alt_description} />
        <div className={s.infoWraper}></div>
      </div>
    </li>
  );
};

export default ImageCard;
