import React, { useState } from "react";
import ImageLink from "../assets/Link/ImageLink";

const ImageSlider = () => {
  const [index, setActiveStep] = useState(0);
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % ImageLink.length);
  };
  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? ImageLink.length - 1 : prevActiveStep - 1
    );
  };
  return (
    <>
      <h2 className="text-center">Image Slider Page</h2>
      <div className="flex flex-col items-center">
        <img
          src={ImageLink[index].imgPath}
          alt={ImageLink[index].label}
          className="w-full h-100 object-contain rounded shadow"
        />
        <p className="mt-2">{ImageLink[index].label}</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={goToPrevPicture}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Prev
          </button>

          <button
            onClick={goToNextPicture}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
