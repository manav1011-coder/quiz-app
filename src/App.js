import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QuestionList from './QuestionList';

function App() {
  const[quesNo,setQuesNo]=useState(1);
  const[showScore,setShowScore]=useState(false);
  const onSubmit = () =>{
    if(quesNo<QuestionList.length)
      setQuesNo(quesNo+1);
    else
      setShowScore(true);
      

  }
  const[score,setScore]=useState(0);
  const scoreHandler =(correct) =>{
     if(correct)
       setScore(score+1);
    console.log(score);
      
  }
  return (
    <div className="main-div">
      <div className='center-div'>
      {showScore ?(<div className='result'><div className='status'>Completed!</div><div className='score-display'>Your Score:{score}/{QuestionList.length}</div></div>):(<><div className='question-count'>
          Question {quesNo} of 5
        </div>
        <div className='question'>
          {QuestionList[quesNo-1].question}
        </div>
        <div className='answer-section'>
         {
           QuestionList[quesNo-1].answerList.map((answerElem) =>{
               return(
                 <li className='answer-list'>
                   <button className='answer-button' onClick={() =>{scoreHandler(answerElem.isCorrect)}}>{answerElem.answer}</button>
                 </li>
                 
               )
           })
         }
        
        
        </div>
        <button class="next" onClick={onSubmit}>Next</button></>)}
        
      </div>
    </div>
  );
}

export default App;
