import React, { useEffect, useState } from "react";
import Slide from "./Slide";

import "./Slider.css";

const AUTOPLAY_TIMER = 5000;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Add keyup listener to navigate using left/right arrows
  useEffect(() => {
    const onKeyUp = ({ keyCode }) => {
      if (keyCode === 37) {
        setCurrent(current === 0 ? length - 1 : current - 1);
      } else if (keyCode === 39) {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }
    };

    window.addEventListener("keyup", onKeyUp);

    // Clear listener
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [current, length]);

  // Set autoplay timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((current + 1) % length);
    }, AUTOPLAY_TIMER);

    return () => {
      clearTimeout(timeout);
    };
  }, [current, length]);

  return (
    <div className="slider-wrapper">
      <div className="slider">
        {slides.map((data, index) => {
          return (
            <div className="image" key={index}>
              {index === current && <Slide {...data} />}
            </div>
          );
        })}

        <div role="group" className="pagination">
          {new Array(length).fill().map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={"rect" + (index === current ? " active" : "")}
                aria-label={`Switch to slider number ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
