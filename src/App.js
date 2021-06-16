import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [result, setResult] = useState();
  const scrollDiv = useRef();
  const displayLastElement = useRef();

  const refArray = useRef([]);

  const handleScroll = () => {
    refArray.current[result - 1].scrollIntoView({ behavior: "smooth" });
  };

  function checkInView(elem, partial) {
    var container = scrollDiv.current;

    var contHeight = container.offsetHeight;

    var elemSelector = ReactDOM.findDOMNode(refArray.current[elem.id - 1]);

    var elemTop =
      elemSelector.getBoundingClientRect().top -
      container.getBoundingClientRect().top;

    var elemBottom = elemTop + elemSelector.offsetHeight;

    var isTotal = elemTop >= 0 && elemBottom <= contHeight;

    var isPart =
      ((elemTop < 0 && elemBottom > 0) ||
        (elemTop > 0 && elemTop <= contHeight)) &&
      partial;

    return isTotal || isPart;
  }

  const myFunction = () => {
    let result;
    refArray.current.forEach((el, i, x) => {
      if (checkInView(el, true)) {
        result = i + 1;
      }
    });

    displayLastElement.current.textContent = result;
    setResult(result);
  };

  return (
    <div>
      <button onClick={handleScroll}> Hit ME!!!! </button>
      part: <div id="kk" ref={displayLastElement} />
      <div className="scrollable" onScroll={myFunction} ref={scrollDiv}>
        <p ref={(ref) => (refArray.current[0] = ref)} id="1">
          item1
        </p>
        <p ref={(ref) => (refArray.current[1] = ref)} id="2">
          item2
        </p>
        <p ref={(ref) => (refArray.current[2] = ref)} id="3">
          item3
        </p>
        <p ref={(ref) => (refArray.current[3] = ref)} id="4">
          item4
        </p>
        <p ref={(ref) => (refArray.current[4] = ref)} id="5">
          item5
        </p>
        <p ref={(ref) => (refArray.current[5] = ref)} id="6">
          item6
        </p>
        <p ref={(ref) => (refArray.current[6] = ref)} id="7">
          item7
        </p>
        <p ref={(ref) => (refArray.current[7] = ref)} id="8">
          item8
        </p>
      </div>
    </div>
  );
}

export default App;
