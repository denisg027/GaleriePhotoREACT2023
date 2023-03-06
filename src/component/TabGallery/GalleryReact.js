import React, { useState } from "react";
import "../TabGallery/GalleryReact.css";
import galleryPhotos from "./gallery.js";

const GalleryReact = () => {
  const [items, setItems] = useState(galleryPhotos);

  const filterItem = (categItem) => {
    const updatedItems = galleryPhotos.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        ~***~ Galerie Photo - Charles Cantin ~***~
      </h1>
      <hr />

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Mariage")}
          >
            Mariage
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Grossesse")}
          >
            Grossesse
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Bébé")}
          >
            Bébé
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Famille")}
          >
            Famille
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Baptême")}
          >
            Baptême
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Couple")}
          >
            Couple
          </button>
          <button
            className="btn btn-warning"
            onClick={() => setItems(galleryPhotos)}
          >
            Tout
          </button>
        </div>
      </div>

      {/* my main items section  */}
      <div className="menu-items container-fluid mt-5">
        <div className="col-12 mx-auto">
          <div className="row my-5">
            {items.map((elem) => {
              const { id, name, image } = elem;

              return (
                <div className="Item-inside col-12 col-md-4 col-lg-4 col-xl-3 my-5">
                  {/* for images */}

                  <img src={image} alt={name} className="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
