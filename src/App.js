import React, { useState, useRef, createRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
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

  const refArray = useRef([]);

  // const handleScroll = () => {
  //   console.log('firstElement.current', firstElement.current);
  //   switch (result) {
  //     case 1:
  //       firstElement.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 2:
  //       secondElement.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 3:
  //       thirdElement.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 4:
  //       fourthElement.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 5:
  //       fifthElement.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 6:
  //       sixthElement.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 7:
  //       seventhElement.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //     case 8:
  //       eightElement.current.scrollIntoView({ behavior: 'smooth' });
  //       break;
  //   }
  // };

  const handleScroll = () => {
    console.log('refArray[0]', refArray[0]);
    refArray.current[result-1].scrollIntoView({ behavior: 'smooth' });
    // switch (result) {
    //   case 1:
    //     refArray.current[0].scrollIntoView({ behavior: 'smooth' });
    //     break;
    //   case 2:
    //     refArray.current[1].scrollIntoView({ behavior: 'smooth' });
    //     break;
    //   case 3:
    //     refArray.current[2].scrollIntoView({ behavior: 'smooth' });
    //     break;
    //   case 4:
    //     refArray.current[3].scrollIntoView({ behavior: 'smooth' });
    //     break;
    //   case 5:
    //     refArray.current[4].scrollIntoView({ behavior: 'smooth' });
    //     break;
    //   case 6:
    //     refArray.current[5].scrollIntoView({ behavior: 'smooth' });
    //     break;
    //   case 7:
    //     refArray.current[6].scrollIntoView({ behavior: 'smooth' });
    //     break;
    //   case 8:
    //     refArray.current[7].scrollIntoView({ behavior: 'smooth' });
    //     break;
    // }
  };

  function checkInView(elem, partial) {
    // console.log('elem@@@@@@@@@@@@#!#!', JSON.stringify(elem.attributes));
    console.log('elem$$$$$$$$$$$$$$$$$$$$', elem);
    console.log('elem@@@@@@@@@@@@#!#!', elem.id);
    var container = scrollDiv.current;

    var contHeight = container.offsetHeight;

    var contTop = container.clientTop;

    // var elemSelector = document.getElementById(elem.id);
    var elemSelector = ReactDOM.findDOMNode(refArray.current[elem.id-1]);

    console.log("elemSelector",elemSelector)
    // let reactElement = ReactDOM.findDOMNode(myFunction.current);
    // console.log('reactElement', reactElement);

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

  // const myFunction = () => {
  //   const elements = scrollDiv.current.querySelectorAll('p');
  //   // console.log('refArray', refArray);
  //   let result;
  //   let reactElement = ReactDOM.findDOMNode(elements.current);
  //   // let reactElement = scrollDiv.current;
  //   // console.log('reactElement', reactElement);
  //   elements.forEach((el, i, x) => {
  //     if (checkInView(el, true)) {
  //       result = i + 1;
  //     }
  //   });

  //   displayLastElement.current.textContent = result;
  //   setResult(result);
  // };

  const myFunction = () => {
    // const elements = scrollDiv.current.querySelectorAll('p');
    // console.log('refArray', refArray);
    let result;
    let reactElement = ReactDOM.findDOMNode(scrollDiv.current);
    // reactElement = scrollDiv.current;
    console.log('reactElement@@@@@@@@@', refArray);
    // console.log('reactElement', reactElement);
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
        <p ref={ref => (refArray.current[0] = ref)} id="1">
          item1
        </p>
        <p ref={ref => (refArray.current[1] = ref)} id="2">
          item2
        </p>
        <p ref={ref => (refArray.current[2] = ref)} id="3">
          item3
        </p>
        <p ref={ref => (refArray.current[3] = ref)} id="4">
          item4
        </p>
        <p ref={ref => (refArray.current[4] = ref)} id="5">
          item5
        </p>
        <p ref={ref => (refArray.current[5] = ref)} id="6">
          item6
        </p>
        <p ref={ref => (refArray.current[6] = ref)} id="7">
          item7
        </p>
        <p ref={ref => (refArray.current[7] = ref)} id="8">
          item8
        </p>
      </div>
      {/* <div className="scrollable" onScroll={myFunction} ref={scrollDiv}>
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
      </div> */}
    </div>
  );
}

export default App;
