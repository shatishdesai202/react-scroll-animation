import React, { useState, useRef, createRef } from "react";
import "./App.css";
// import $ from "jquery";
// window.$ = $;

function App() {
  const [result, setResult] = useState();

  const firstElement = useRef();
  const secondElement = useRef();
  const thirdElement = useRef();
  const fourthElement = useRef();
  const fifthElement = useRef();
  const sixthElement = useRef();
  const seventhElement = useRef();
  const eightElement = useRef();
  const scrollDiv = useRef();
  const displayLastElement = useRef();

  const handleScroll = () => {
    switch (result) {
      case 1:
        firstElement.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        secondElement.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        thirdElement.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        fourthElement.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 5:
        fifthElement.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 6:
        sixthElement.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 7:
        seventhElement.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 8:
        eightElement.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  function checkInView(elem, partial) {
    // var container = $(".scrollable");
    // var container = document.getElementsByClassName("scrollable")[0];
    var container = scrollDiv.current;

    // var contHeight = container.height();
    var contHeight = container.offsetHeight;
    // var contTop = container.scrollTop();
    var contTop = container.clientTop;
    console.log(contTop);
    // var contBottom = contTop + contHeight;

    // var elemTop = $(elem).offset().top - container.offset().top;
    var elemSelector = document.getElementById(elem.id);

    var elemTop =
      elemSelector.getBoundingClientRect().top -
      container.getBoundingClientRect().top;
    // var elemBottom = elemTop + $(elem).height();
    var elemBottom = elemTop + elemSelector.offsetHeight;

    var isTotal = elemTop >= 0 && elemBottom <= contHeight;
    // var isPart =
    //   ((elemTop < 0 && elemBottom > 0) ||
    //     (elemTop > 0 && elemTop <= container.height())) &&
    //   partial;
    var isPart =
      ((elemTop < 0 && elemBottom > 0) ||
        (elemTop > 0 && elemTop <= contHeight)) &&
      partial;

    return isTotal || isPart;
  }

  const myFunction = () => {
    const elements = scrollDiv.current.querySelectorAll("p");
    console.log("elements", elements);
    let result;
    elements.forEach((el, i, x) => {
      console.log("el -----------> ", el);
      console.log("i -----------> ", i);
      if (checkInView(el, true)) {
        result = i + 1;
      }
    });

    // document.getElementById("kk").textContent = result;
    displayLastElement.current.textContent = result;
    console.log(result);
    setResult(result);
  };

  return (
    <div>
      <button onClick={handleScroll}> Hit ME!!!! </button>
      part: <div id="kk" ref={displayLastElement}></div>
      <div className="scrollable" onScroll={myFunction} ref={scrollDiv}>
        <p ref={firstElement} id="1">
          item1
        </p>
        <p ref={secondElement} id="2">
          item2
        </p>
        <p ref={thirdElement} id="3">
          item3
        </p>
        <p ref={fourthElement} id="4">
          item4
        </p>
        <p ref={fifthElement} id="5">
          item5
        </p>
        <p ref={sixthElement} id="6">
          item6
        </p>
        <p ref={seventhElement} id="7">
          item7
        </p>
        <p ref={eightElement} id="8">
          item8
        </p>
      </div>
    </div>
  );
}

export default App;
