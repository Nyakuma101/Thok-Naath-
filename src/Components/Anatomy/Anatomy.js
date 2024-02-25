import "./Anatomy.scss";
import ProgressBar40 from "../ProgressBar40/ProgressBar40";
import { useEffect, useState, useTransition } from "react";
import axios from "axios";

import BNumbersPicture from "../BNumbersPicture/BNumbersPicture";
import { compileString } from "sass";
import BBox from "../BBox/BBox";
import BNext from "../BNext/BNext";

import BNumbersPictureGreen from "../BNumbersPictureGreen/BNumbersPictureGreen";

export default function Anatomy() {
  const [anatomyList, setAnatomyList] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);

  const [currentQuestions, setCurrentQuestion] = useState(0);

  // ............................................................
  const getAnatomy = async () => {
    try {
      const anatomyResponse = await axios.get("http://localhost:5050/anatomy");
      setAnatomyList(anatomyResponse.data);
      console.log(anatomyResponse.data);
    } catch (error) {
      console.error("this is an error", error);
    }
  };
  useEffect(() => {
    getAnatomy();
  }, []);

  // CORRECT
  // ............................................................
  const correctAnswer = () => {
    setShowCorrect(true);
  };
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestions + 1);
    setShowCorrect(false);
  };
  const inCorrectAnswer = () => {
    setShowCorrect(false);
  };
  // //WRONG = RED
  //.............................................................

  // if (!showCorrect) {
  //   return (
  //     <div className="anatomy">
  //       <ProgressBar40 />
  //       <div className="anatomy__box">
  //         <p className="anatomy__title">ANATOMY</p>
  //       </div>
  //       <BNumbersPictureGreen src={anatomyList[currentQuestions]?.image} />
  //       <section className="anatomy__content">
  //         <div className="anatomy__communication">
  //           <p className="anatomy__thokNaath">
  //             {anatomyList[currentQuestions]?.thokNaath}
  //             <p className="anatomy__thokNaathPronunciation">
  //               {anatomyList[currentQuestions]?.thokNaath_pronunciation}
  //             </p>
  //           </p>
  //         </div>
  //         <div className="anatomy__next">
  //           <BNext text="NEXT" onClick={nextQuestion} />
  //         </div>
  //       </section>
  //       <div className="anatomy__AllBox">
  //         <BBox
  //           // className="anatomy__greenBox"
  //           text={anatomyList[currentQuestions]?.english_correct}
  //           className="box__squares box__squares--correct"
  //           onClick={correctAnswer}
  //         />
  //         <BBox
  //           className="box__squares box__squares--incorrect"
  //           text={anatomyList[currentQuestions]?.english_one}
  //         />
  //         <BBox
  //           className="box__squares box__squares--incorrect"
  //           text={anatomyList[currentQuestions]?.english_two}
  //         />
  //         <BBox
  //           className="box__squares box__squares--incorrect"
  //           text={anatomyList[currentQuestions]?.english_three}
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  // ............................................................
  //RIGHT = GREEN
  if (showCorrect) {
    return (
      <div className="anatomy">
        <ProgressBar40 />
        <div className="anatomy__box">
          <p className="anatomy__title">ANATOMY</p>
        </div>
        <BNumbersPictureGreen src={anatomyList[currentQuestions]?.image} />
        <section className="anatomy__content">
          <div className="anatomy__communication">
            <p className="anatomy__thokNaath">
              {anatomyList[currentQuestions]?.thokNaath}
              <p className="anatomy__thokNaathPronunciation">
                {anatomyList[currentQuestions]?.thokNaath_pronunciation}
              </p>
            </p>
          </div>
          <div className="anatomy__next">
            <BNext text="NEXT" onClick={nextQuestion} />
          </div>
        </section>
        <div className="anatomy__AllBox">
          <BBox
            // className="anatomy__greenBox"
            text={anatomyList[currentQuestions]?.english_correct}
            className="box__squares box__squares--correct"
            onClick={correctAnswer}
          />
          <BBox
            className="box__squares "
            text={anatomyList[currentQuestions]?.english_one}
          />
          <BBox
            className="box__squares"
            text={anatomyList[currentQuestions]?.english_two}
          />
          <BBox
            className="box__squares"
            text={anatomyList[currentQuestions]?.english_three}
          />
        </div>
      </div>
    );
  }

  // ............................................................

  // ...........................................................
  return (
    <div className="anatomy">
      <ProgressBar40 />
      <div className="anatomy__box">
        <p className="anatomy__title">ANATOMY</p>
      </div>
      <BNumbersPicture />
      <section className="anatomy__content">
        <div className="anatomy__communication">
          <p className="anatomy__thokNaath">
            {anatomyList[currentQuestions]?.thokNaath}
            <p className="anatomy__thokNaathPronunciation">
              {anatomyList[currentQuestions]?.thokNaath_pronunciation}
            </p>
          </p>
        </div>
      </section>
      <div className="anatomy__AllBox">
        <BBox
          className="box__squares"
          /**className="anatomy__individualBox"*/
          text={anatomyList[currentQuestions]?.english_correct}
          onClick={correctAnswer}
        />
        <BBox
          className="box__squares"
          text={anatomyList[currentQuestions]?.english_one}
          onClick={inCorrectAnswer}
        />
        <BBox
          className="box__squares"
          text={anatomyList[currentQuestions]?.english_two}
        />
        <BBox
          className="box__squares"
          text={anatomyList[currentQuestions]?.english_three}
        />
      </div>
    </div>
  );
}
