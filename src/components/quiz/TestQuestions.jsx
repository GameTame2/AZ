import React, { useState } from 'react';
import '../../styles/quiz.css';


function TestQuestions() {
  // State to store answers for each question
  const [answers, setAnswers] = useState({
    question3: '',
    question8: '',
    question9: '',
    question14: '',
    question20: '',
    question33: '',
    question34: '',
    question36: '',
    question38: '',
    question44: '',
    question56: '',
    question58: '',
    question62: '',
    question64: '',
    question66: '',
    question77: '',
    question80: '',
    question91: '',
    question98: '',
    question100: '',
    question102: '',
    question103: '',
    question113: '',
    question115: '',
    question117: '',
    question121: '',
    question125: '',
    question129: '',
    question134: '',
    question137: '',
    question138: '',
    question139: '',
    question141: '',
    question144: '',
    question148: '',
    question150: '',
    question168: '',
    question170: '',
    question172: ''
  });

  // Handle change when a radio button is selected
  const handleAnswerChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the answers in JSON format
    console.log(JSON.stringify(answers, null, 2));
  };

  return (
    <div className="form-container">

      

      <form onSubmit={handleSubmit} className="quiz-grid-2">
      <div id="quiz-box-44" className="quiz-box">
          <p>Широки или тесни вежди.</p>
          <label>
            <input
              type="radio"
              name="question44"
              value="a"
              checked={answers.question44 === 'a'}
              onChange={() => handleAnswerChange('question44', 'a')}
            />
             Широки
          </label>
          <label>
            <input
              type="radio"
              name="question44"
              value="b"
              checked={answers.question44 === 'b'}
              onChange={() => handleAnswerChange('question44', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question44"
              value="c"
              checked={answers.question44 === 'c'}
              onChange={() => handleAnswerChange('question44', 'c')}
            />
             тесни
          </label>
        </div>

        <div id="quiz-box-56" className="quiz-box">
          <p>Тънки или дебели ресници?</p>
          <label>
            <input
              type="radio"
              name="question56"
              value="a"
              checked={answers.question56 === 'a'}
              onChange={() => handleAnswerChange('question56', 'a')}
            />
             Тънки
          </label>
          <label>
            <input
              type="radio"
              name="question56"
              value="b"
              checked={answers.question56 === 'b'}
              onChange={() => handleAnswerChange('question56', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question56"
              value="c"
              checked={answers.question56 === 'c'}
              onChange={() => handleAnswerChange('question56', 'c')}
            />
             дебели
          </label>
        </div>

        <div id="quiz-box-58" className="quiz-box">
          <p>Прикрита или виждаща се гънка на горния клепач?</p>
          <label>
            <input
              type="radio"
              name="question58"
              value="a"
              checked={answers.question58 === 'a'}
              onChange={() => handleAnswerChange('question58', 'a')}
            />
             Прикрита
          </label>
          <label>
            <input
              type="radio"
              name="question58"
              value="b"
              checked={answers.question58 === 'b'}
              onChange={() => handleAnswerChange('question58', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question58"
              value="c"
              checked={answers.question58 === 'c'}
              onChange={() => handleAnswerChange('question58', 'c')}
            />
             виждаща се
          </label>
        </div>

        <div id="quiz-box-62" className="quiz-box">
          <p>Висока или ниска основа на носа?</p>
          <label>
            <input
              type="radio"
              name="question62"
              value="a"
              checked={answers.question62 === 'a'}
              onChange={() => handleAnswerChange('question62', 'a')}
            />
             Висока
          </label>
          <label>
            <input
              type="radio"
              name="question62"
              value="b"
              checked={answers.question62 === 'b'}
              onChange={() => handleAnswerChange('question62', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question62"
              value="c"
              checked={answers.question62=== 'c'}
              onChange={() => handleAnswerChange('question62', 'c')}
            />
             ниска
          </label>
        </div>

        <div id="quiz-box-64" className="quiz-box">
          <p>Основа на носа - с или без вдлъбнатина?</p>
          <label>
            <input
              type="radio"
              name="question64"
              value="a"
              checked={answers.question64 === 'a'}
              onChange={() => handleAnswerChange('question64', 'a')}
            />
             с вдлъбнатина
          </label>
          <label>
            <input
              type="radio"
              name="question64"
              value="b"
              checked={answers.question64 === 'b'}
              onChange={() => handleAnswerChange('question64', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question64"
              value="c"
              checked={answers.question64 === 'c'}
              onChange={() => handleAnswerChange('question64', 'c')}
            />
             без вдлъбнатина
          </label>
        </div>
        
        <div id="quiz-box-66" className="quiz-box">
          <p>Липсващ или изразен ъгъл между челото и носа?</p>
          <label>
            <input
              type="radio"
              name="question66"
              value="a"
              checked={answers.question66 === 'a'}
              onChange={() => handleAnswerChange('question66', 'a')}
            />
             Липсващ
          </label>
          <label>
            <input
              type="radio"
              name="question66"
              value="b"
              checked={answers.question66 === 'b'}
              onChange={() => handleAnswerChange('question66', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question66"
              value="c"
              checked={answers.question66 === 'c'}
              onChange={() => handleAnswerChange('question66', 'c')}
            />
             изразен
          </label>
        </div>

        <div id="quiz-box-77" className="quiz-box">
          <p>С или без извивка на гърбицата на носа?</p>
          <label>
            <input
              type="radio"
              name="question77"
              value="a"
              checked={answers.question77 === 'a'}
              onChange={() => handleAnswerChange('question77', 'a')}
            />
             С извивка на гърбицата
          </label>
          <label>
            <input
              type="radio"
              name="question77"
              value="b"
              checked={answers.question77 === 'b'}
              onChange={() => handleAnswerChange('question77', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question77"
              value="c"
              checked={answers.question77 === 'c'}
              onChange={() => handleAnswerChange('question77', 'c')}
            />
             без извивка на гърбицата
          </label>
        </div>
        
        <div id="quiz-box-80" className="quiz-box">
          <p>Гънки на страните на носа?</p>
          <label>
            <input
              type="radio"
              name="question80"
              value="a"
              checked={answers.question80 === 'a'}
              onChange={() => handleAnswerChange('question80', 'a')}
            />
             слабо изразени
          </label>
          <label>
            <input
              type="radio"
              name="question80"
              value="b"
              checked={answers.question80 === 'b'}
              onChange={() => handleAnswerChange('question80', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question80"
              value="c"
              checked={answers.question80 === 'c'}
              onChange={() => handleAnswerChange('question80', 'c')}
            />
             дълбоки
          </label>
        </div>

        <div id="quiz-box-91" className="quiz-box">
          <p>Дълбок или изгладен филтър?</p>
          <label>
            <input
              type="radio"
              name="question91"
              value="a"
              checked={answers.question91 === 'a'}
              onChange={() => handleAnswerChange('question91', 'a')}
            />
             дълбок
          </label>
          <label>
            <input
              type="radio"
              name="question91"
              value="b"
              checked={answers.question91 === 'b'}
              onChange={() => handleAnswerChange('question91', 'b')}
            />
             среден
          </label>
          <label>
            <input
              type="radio"
              name="question91"
              value="c"
              checked={answers.question91 === 'c'}
              onChange={() => handleAnswerChange('question91', 'c')}
            />
             изгладен
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit} className="quiz-grid">
      <div id="quiz-box-98" className="quiz-box">
          <p>Излизащи напред или вмъкнати устни?</p>
          <label>
            <input
              type="radio"
              name="question98"
              value="a"
              checked={answers.question98 === 'a'}
              onChange={() => handleAnswerChange('question98', 'a')}
            />
             Излизащи напред
          </label>
          <label>
            <input
              type="radio"
              name="question98"
              value="b"
              checked={answers.question98 === 'b'}
              onChange={() => handleAnswerChange('question98', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question98"
              value="c"
              checked={answers.question98 === 'c'}
              onChange={() => handleAnswerChange('question98', 'c')}
            />
             вмъкнати
          </label>
        </div>

        <div id="quiz-box-100" className="quiz-box">
          <p>Наклонени или вертикални горни зъби.</p>
          <label>
            <input
              type="radio"
              name="question100"
              value="a"
              checked={answers.question100 === 'a'}
              onChange={() => handleAnswerChange('question100', 'a')}
            />
             Наклонени
          </label>
          <label>
            <input
              type="radio"
              name="question100"
              value="b"
              checked={answers.question100 === 'b'}
              onChange={() => handleAnswerChange('question100', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question100"
              value="c"
              checked={answers.question100 === 'c'}
              onChange={() => handleAnswerChange('question100', 'c')}
            />
             вертикални
          </label>
        </div>

        <div id="quiz-box-102" className="quiz-box">
          <p>Големи или неизпъкващи форни вътрешни резци?</p>
          <label>
            <input
              type="radio"
              name="question102"
              value="a"
              checked={answers.question102 === 'a'}
              onChange={() => handleAnswerChange('question102', 'a')}
            />
             Големи
          </label>
          <label>
            <input
              type="radio"
              name="question102"
              value="b"
              checked={answers.question102 === 'b'}
              onChange={() => handleAnswerChange('question102', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question102"
              value="c"
              checked={answers.question102 === 'c'}
              onChange={() => handleAnswerChange('question102', 'c')}
            />
             неизпъкващи
          </label>
        </div>

        <div id="quiz-box-103" className="quiz-box">
          <p>Цепнатина между горните резци?</p>
          <label>
            <input
              type="radio"
              name="question103"
              value="a"
              checked={answers.question103 === 'a'}
              onChange={() => handleAnswerChange('question103', 'a')}
            />
             Няма
          </label>
          <label>
            <input
              type="radio"
              name="question103"
              value="b"
              checked={answers.question103 === 'b'}
              onChange={() => handleAnswerChange('question103', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question103"
              value="c"
              checked={answers.question103 === 'c'}
              onChange={() => handleAnswerChange('question103', 'c')}
            />
             има
          </label>
        </div>

        <div id="quiz-box-113" className="quiz-box">
          <p>Единична или двойна брадичка?</p>
          <label>
            <input
              type="radio"
              name="question113"
              value="a"
              checked={answers.question113 === 'a'}
              onChange={() => handleAnswerChange('question113', 'a')}
            />
             Единична
          </label>
          <label>
            <input
              type="radio"
              name="question113"
              value="b"
              checked={answers.question113 === 'b'}
              onChange={() => handleAnswerChange('question113', 'b')}
            />
             средна
          </label>
          <label>
            <input
              type="radio"
              name="question113"
              value="c"
              checked={answers.question113 === 'c'}
              onChange={() => handleAnswerChange('question113', 'c')}
            />
             двойна
          </label>
        </div>

        <div id="quiz-box-115" className="quiz-box">
          <p>Изпъкнала или незабележима адамова ябълка?</p>
          <label>
            <input
              type="radio"
              name="question115"
              value="a"
              checked={answers.question115 === 'a'}
              onChange={() => handleAnswerChange('question115', 'a')}
            />
             Изпъкнала
          </label>
          <label>
            <input
              type="radio"
              name="question115"
              value="b"
              checked={answers.question115 === 'b'}
              onChange={() => handleAnswerChange('question115', 'b')}
            />
             средна
          </label>
          <label>
            <input
              type="radio"
              name="question115"
              value="c"
              checked={answers.question115 === 'c'}
              onChange={() => handleAnswerChange('question115', 'c')}
            />
             незабележима
          </label>
        </div>

        <div id="quiz-box-117" className="quiz-box">
          <p>Щръкнали или прилепнали уши?</p>
          <label>
            <input
              type="radio"
              name="question117"
              value="a"
              checked={answers.question117 === 'a'}
              onChange={() => handleAnswerChange('question117', 'a')}
            />
             Щръкнали
          </label>
          <label>
            <input
              type="radio"
              name="question117"
              value="b"
              checked={answers.question117 === 'b'}
              onChange={() => handleAnswerChange('question117', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question117"
              value="c"
              checked={answers.question117 === 'c'}
              onChange={() => handleAnswerChange('question117', 'c')}
            />
             прилепнали
          </label>
        </div>

        <div id="quiz-box-121" className="quiz-box">
          <p>Ъгловати или закръглени уши?</p>
          <label>
            <input
              type="radio"
              name="question121"
              value="a"
              checked={answers.question121 === 'a'}
              onChange={() => handleAnswerChange('question121', 'a')}
            />
             Ъгловати
          </label>
          <label>
            <input
              type="radio"
              name="question121"
              value="b"
              checked={answers.question121 === 'b'}
              onChange={() => handleAnswerChange('question421', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question121"
              value="c"
              checked={answers.question121 === 'c'}
              onChange={() => handleAnswerChange('question121', 'c')}
            />
             закръглени
          </label>
        </div>

        <div id="quiz-box-125" className="quiz-box">
          <p>Триъгълна или нормална долна мека част на ухото?</p>
          <label>
            <input
              type="radio"
              name="question125"
              value="a"
              checked={answers.question125 === 'a'}
              onChange={() => handleAnswerChange('question125', 'a')}
            />
             Триъгълна
          </label>
          <label>
            <input
              type="radio"
              name="question125"
              value="b"
              checked={answers.question125 === 'b'}
              onChange={() => handleAnswerChange('question125', 'b')}
            />
             средна
          </label>
          <label>
            <input
              type="radio"
              name="question125"
              value="c"
              checked={answers.question125 === 'c'}
              onChange={() => handleAnswerChange('question125', 'c')}
            />
             нормална
          </label>
        </div>
        
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit} className="quiz-grid-2">
      <div id="quiz-box-129" className="quiz-box">
          <p>Изпъкнала или вдлъбната долна мека част на ухото?</p>
          <label>
            <input
              type="radio"
              name="question129"
              value="a"
              checked={answers.question129 === 'a'}
              onChange={() => handleAnswerChange('question129', 'a')}
            />
             Изпъкнала
          </label>
          <label>
            <input
              type="radio"
              name="question129"
              value="b"
              checked={answers.question129 === 'b'}
              onChange={() => handleAnswerChange('question129', 'b')}
            />
             средна
          </label>
          <label>
            <input
              type="radio"
              name="question129"
              value="c"
              checked={answers.question129 === 'c'}
              onChange={() => handleAnswerChange('question129', 'c')}
            />
             вдлъбната
          </label>
        </div>

        <div id="quiz-box-134" className="quiz-box">
          <p>Вържица на Дарвин?</p>
          <label>
            <input
              type="radio"
              name="question134"
              value="a"
              checked={answers.question134 === 'a'}
              onChange={() => handleAnswerChange('question134', 'a')}
            />
             Да има
          </label>
          <label>
            <input
              type="radio"
              name="question134"
              value="b"
              checked={answers.question134 === 'b'}
              onChange={() => handleAnswerChange('question134', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question134"
              value="c"
              checked={answers.question134 === 'c'}
              onChange={() => handleAnswerChange('question134', 'c')}
            />
             не няма
          </label>
        </div>

        <div id="quiz-box-137" className="quiz-box">
          <p>Широки или тесни китки.</p>
          <label>
            <input
              type="radio"
              name="question137"
              value="a"
              checked={answers.question137 === 'a'}
              onChange={() => handleAnswerChange('question137', 'a')}
            />
             Широки
          </label>
          <label>
            <input
              type="radio"
              name="question137"
              value="b"
              checked={answers.question137 === 'b'}
              onChange={() => handleAnswerChange('question137', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question137"
              value="c"
              checked={answers.question137 === 'c'}
              onChange={() => handleAnswerChange('question137', 'c')}
            />
             тесни
          </label>
        </div>

        <div id="quiz-box-138" className="quiz-box">
          <p>Дълги или къси китки?</p>
          <label>
            <input
              type="radio"
              name="question138"
              value="a"
              checked={answers.question138 === 'a'}
              onChange={() => handleAnswerChange('question138', 'a')}
            />
             Дълги
          </label>
          <label>
            <input
              type="radio"
              name="question138"
              value="b"
              checked={answers.question138 === 'b'}
              onChange={() => handleAnswerChange('question138', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question138"
              value="c"
              checked={answers.question138 === 'c'}
              onChange={() => handleAnswerChange('question138', 'c')}
            />
             къси
          </label>
        </div>

        <div id="quiz-box-139" className="quiz-box">
          <p>Външни вени на китките - релефни или изгладени?</p>
          <label>
            <input
              type="radio"
              name="question139"
              value="a"
              checked={answers.question139 === 'a'}
              onChange={() => handleAnswerChange('question139', 'a')}
            />
             релефни
          </label>
          <label>
            <input
              type="radio"
              name="question139"
              value="b"
              checked={answers.question139 === 'b'}
              onChange={() => handleAnswerChange('question139', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question139"
              value="c"
              checked={answers.question139=== 'c'}
              onChange={() => handleAnswerChange('question139', 'c')}
            />
             изгладени
          </label>
        </div>

        <div id="quiz-box-141" className="quiz-box">
          <p>Мазолеста или без кератоз длан?</p>
          <label>
            <input
              type="radio"
              name="question141"
              value="a"
              checked={answers.question141 === 'a'}
              onChange={() => handleAnswerChange('question141', 'a')}
            />
             Мазолеста
          </label>
          <label>
            <input
              type="radio"
              name="question141"
              value="b"
              checked={answers.question141 === 'b'}
              onChange={() => handleAnswerChange('question141', 'b')}
            />
             средна
          </label>
          <label>
            <input
              type="radio"
              name="question141"
              value="c"
              checked={answers.question141 === 'c'}
              onChange={() => handleAnswerChange('question141', 'c')}
            />
             без кератоз
          </label>
        </div>

        <div id="quiz-box-144" className="quiz-box">
          <p>Дланта е слабо или силно изпъстрена с рисунки?</p>
          <label>
            <input
              type="radio"
              name="question144"
              value="a"
              checked={answers.question144 === 'a'}
              onChange={() => handleAnswerChange('question144', 'a')}
            />
             слабо
          </label>
          <label>
            <input
              type="radio"
              name="question144"
              value="b"
              checked={answers.question144 === 'b'}
              onChange={() => handleAnswerChange('question144', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question144"
              value="c"
              checked={answers.question144 === 'c'}
              onChange={() => handleAnswerChange('question144', 'c')}
            />
             силно
          </label>
        </div>
        
        <div id="quiz-box-148" className="quiz-box">
          <p>Талия на палеца?</p>
          <label>
            <input
              type="radio"
              name="question148"
              value="a"
              checked={answers.question148 === 'a'}
              onChange={() => handleAnswerChange('question148', 'a')}
            />
             Да, има
          </label>
          <label>
            <input
              type="radio"
              name="question148"
              value="b"
              checked={answers.question148 === 'b'}
              onChange={() => handleAnswerChange('question148', 'b')}
            />
             средно
          </label>
          <label>
            <input
              type="radio"
              name="question148"
              value="c"
              checked={answers.question148 === 'c'}
              onChange={() => handleAnswerChange('question148', 'c')}
            />
             Не, няма
          </label>
        </div>

        <div id="quiz-box-150" className="quiz-box">
          <p>Къси или дълги нокти?</p>
          <label>
            <input
              type="radio"
              name="question150"
              value="a"
              checked={answers.question150 === 'a'}
              onChange={() => handleAnswerChange('question150', 'a')}
            />
             къси
          </label>
          <label>
            <input
              type="radio"
              name="question150"
              value="b"
              checked={answers.question150 === 'b'}
              onChange={() => handleAnswerChange('question150', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question150"
              value="c"
              checked={answers.question150 === 'c'}
              onChange={() => handleAnswerChange('question150', 'c')}
            />
             дълги
          </label>
        </div>
        
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit} className="quiz-grid-3">
      <div id="quiz-box-168" className="quiz-box">
          <p>Широки или тесни глезени?</p>
          <label>
            <input
              type="radio"
              name="question168"
              value="a"
              checked={answers.question168 === 'a'}
              onChange={() => handleAnswerChange('question168', 'a')}
            />
             Широки
          </label>
          <label>
            <input
              type="radio"
              name="question168"
              value="b"
              checked={answers.question168 === 'b'}
              onChange={() => handleAnswerChange('question168', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question168"
              value="c"
              checked={answers.question168 === 'c'}
              onChange={() => handleAnswerChange('question168', 'c')}
            />
             тесни
          </label>
        </div>

        <div id="quiz-box-170" className="quiz-box">
          <p>Хоризонтални или полегати рамене?</p>
          <label>
            <input
              type="radio"
              name="question170"
              value="a"
              checked={answers.question170 === 'a'}
              onChange={() => handleAnswerChange('question170', 'a')}
            />
             Хоризонтални
          </label>
          <label>
            <input
              type="radio"
              name="question170"
              value="b"
              checked={answers.question170 === 'b'}
              onChange={() => handleAnswerChange('question170', 'b')}
            />
             средни
          </label>
          <label>
            <input
              type="radio"
              name="question170"
              value="c"
              checked={answers.question170 === 'c'}
              onChange={() => handleAnswerChange('question170', 'c')}
            />
             полегати
          </label>
        </div>

        <div id="quiz-box-172" className="quiz-box">
          <p>Тесен или широк таз?</p>
          <label>
            <input
              type="radio"
              name="question172"
              value="a"
              checked={answers.question172 === 'a'}
              onChange={() => handleAnswerChange('question172', 'a')}
            />
             Тесен
          </label>
          <label>
            <input
              type="radio"
              name="question172"
              value="b"
              checked={answers.question172 === 'b'}
              onChange={() => handleAnswerChange('question172', 'b')}
            />
             среден
          </label>
          <label>
            <input
              type="radio"
              name="question172"
              value="c"
              checked={answers.question172 === 'c'}
              onChange={() => handleAnswerChange('question172', 'c')}
            />
             широк
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default TestQuestions;