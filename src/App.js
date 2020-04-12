import React, { useState, useEffect } from "react";
import { fadeOutDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

function App() {
  let audio = new Audio("https://www.soundjay.com/button/beep-26.mp3");
  const [list, setList] = useState(["", "", "", "huevo", "", "", ""]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {}, [list, animate]);
  const styles = {
    fadeOutDown: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeOutDown, "fadeOutDown"),
    },
  };
  const handleEggClick = (index) => {
    setAnimate(true);
    audio.play();
    const timer = setTimeout(() => {
      setAnimate(false);
      let newList = [...list];
      newList[index] = "";
      let newindex = Math.floor(Math.random() * list.length);
      newList[newindex] = "huevo";
      setList(newList);
    }, 1000);
    return () => clearTimeout(timer);
  };
  return (
    <main className="container-fluid">
      <div className="row">
        {list.map((el, index) => (
          <div className={"col-6 " + el}>
            {el !== "" && (
              <StyleRoot>
                <img
                  alt={index}
                  src={
                    "http://maternalrayuela.com/pascuas/huevo" + index + ".jpg"
                  }
                  onClick={() => {
                    handleEggClick(index);
                  }}
                  style={animate ? styles.fadeOutDown : undefined}
                />
              </StyleRoot>
            )}
          </div>
        ))}
        <div className="col-6 rabbit">
          <img src="http://maternalrayuela.com/pascuas/conejo.jpg" />
        </div>
      </div>
    </main>
  );
}

export default App;
