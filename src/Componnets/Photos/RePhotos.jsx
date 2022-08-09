import React from "react";
import AlertDialogSlide from "../Dialog/Dialog";
import "./rePhotos.css";

const RePhotos = ({ photos }) => {
  return (
    <div className="photos_card">
      <span>
        <AlertDialogSlide photo={photos} />
      </span>
      <div className="main_photos">
        <div className="title_photo">{photos.title}</div>
        <div className="photo">
          <img src={photos.url} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default RePhotos;
