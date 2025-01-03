import React, { useState } from 'react';
//
function App() {
  // State to store answers for each question
  const [answers, setAnswers] = useState({
    question3: '',
    question7: '',
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
    <div>
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 3 */}
        <div>
          <p>Question 1: Тъмна или светла коса.</p>
          <label>
            <input
              type="radio"
              name="question3"
              value="a"
              checked={answers.question3 === 'a'}
              onChange={() => handleAnswerChange('question3', 'a')}
            />
            a. тъмна
          </label>
          <label>
            <input
              type="radio"
              name="question3"
              value="b"
              checked={answers.question3 === 'b'}
              onChange={() => handleAnswerChange('question3', 'b')}
            />
            b. средна
          </label>
          <label>
            <input
              type="radio"
              name="question3"
              value="c"
              checked={answers.question3 === 'c'}
              onChange={() => handleAnswerChange('question3', 'c')}
            />
            c. светла
          </label>
        </div>

        {/* Question 7 */}
        <div>
          <p>Question 2: Висок или нисък череп?</p>
          <label>
            <input
              type="radio"
              name="question7"
              value="a"
              checked={answers.question7 === 'a'}
              onChange={() => handleAnswerChange('question7', 'a')}
            />
            a. висок
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="b"
              checked={answers.question7 === 'b'}
              onChange={() => handleAnswerChange('question7', 'b')}
            />
            b. среден
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="c"
              checked={answers.question7 === 'c'}
              onChange={() => handleAnswerChange('question7', 'c')}
            />
            c. нисък
          </label>
        </div>

        {/* Question 8 */}
        <div>
          <p>Question 3: Плосък или изпъкнал тил?</p>
          <label>
            <input
              type="radio"
              name="question8"
              value="a"
              checked={answers.question8 === 'a'}
              onChange={() => handleAnswerChange('question8', 'a')}
            />
            a. Плосък
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="b"
              checked={answers.question8 === 'b'}
              onChange={() => handleAnswerChange('question8', 'b')}
            />
            b. среден
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="c"
              checked={answers.question8 === 'c'}
              onChange={() => handleAnswerChange('question8', 'c')}
            />
            c. изпъкнал
          </label>
        </div>

        {/* Question 9 */}
        <div>
          <p>Question 4: Трапчинка на тила?</p>
          <label>
            <input
              type="radio"
              name="question9"
              value="a"
              checked={answers.question9 === 'a'}
              onChange={() => handleAnswerChange('question9', 'a')}
            />
            a. напипва се
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="b"
              checked={answers.question9 === 'b'}
              onChange={() => handleAnswerChange('question9', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="c"
              checked={answers.question9 === 'c'}
              onChange={() => handleAnswerChange('question9', 'c')}
            />
            c. не се напипва
          </label>
        </div>

        {/* Question 14 */}
        <div>
          <p>Question 5: Право или скосено слепоочие?</p>
          <label>
            <input
              type="radio"
              name="question14"
              value="a"
              checked={answers.question14 === 'a'}
              onChange={() => handleAnswerChange('question14', 'a')}
            />
            a. Право
          </label>
          <label>
            <input
              type="radio"
              name="question14"
              value="b"
              checked={answers.question14 === 'b'}
              onChange={() => handleAnswerChange('question14', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question14"
              value="c"
              checked={answers.question14 === 'c'}
              onChange={() => handleAnswerChange('question14', 'c')}
            />
            c. скосено
          </label>
        </div>
        {/* Question 3 */}
        <div>
          <p>Question 1: Червендалесто или млечно лице?</p>
          <label>
            <input
              type="radio"
              name="question20"
              value="a"
              checked={answers.question20 === 'a'}
              onChange={() => handleAnswerChange('question20', 'a')}
            />
            a. Червендалесто
          </label>
          <label>
            <input
              type="radio"
              name="question20"
              value="b"
              checked={answers.question20 === 'b'}
              onChange={() => handleAnswerChange('question20', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question20"
              value="c"
              checked={answers.question20 === 'c'}
              onChange={() => handleAnswerChange('question20', 'c')}
            />
            c. млечно
          </label>
        </div>

        {/* Question 7 */}
        <div>
          <p>Question 2: Гладки или издадени скули?</p>
          <label>
            <input
              type="radio"
              name="question33"
              value="a"
              checked={answers.question33 === 'a'}
              onChange={() => handleAnswerChange('question33', 'a')}
            />
            a. Гладки
          </label>
          <label>
            <input
              type="radio"
              name="question33"
              value="b"
              checked={answers.question33 === 'b'}
              onChange={() => handleAnswerChange('question33', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question33"
              value="c"
              checked={answers.question33 === 'c'}
              onChange={() => handleAnswerChange('question33', 'c')}
            />
            c. издадени
          </label>
        </div>

        {/* Question 8 */}
        <div>
          <p>Question 3: Тъп или прав ъгъл на челюстта?</p>
          <label>
            <input
              type="radio"
              name="question34"
              value="a"
              checked={answers.question34 === 'a'}
              onChange={() => handleAnswerChange('question34', 'a')}
            />
            a. Тъп
          </label>
          <label>
            <input
              type="radio"
              name="question34"
              value="b"
              checked={answers.question34 === 'b'}
              onChange={() => handleAnswerChange('question34', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question34"
              value="c"
              checked={answers.question34 === 'c'}
              onChange={() => handleAnswerChange('question34', 'c')}
            />
            c. прав
          </label>
        </div>

        {/* Question 9 */}
        <div>
          <p>Question 4: Изпъкнало или гладко надвеждие?</p>
          <label>
            <input
              type="radio"
              name="question36"
              value="a"
              checked={answers.question36 === 'a'}
              onChange={() => handleAnswerChange('question36', 'a')}
            />
            a. Изпъкнало
          </label>
          <label>
            <input
              type="radio"
              name="question36"
              value="b"
              checked={answers.question36 === 'b'}
              onChange={() => handleAnswerChange('question36', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question36"
              value="c"
              checked={answers.question36 === 'c'}
              onChange={() => handleAnswerChange('question36', 'c')}
            />
            c. гладко
          </label>
        </div>

        {/* Question 14 */}
        <div>
          <p>Question 5: Прави или дъгообразни вежди?</p>
          <label>
            <input
              type="radio"
              name="question38"
              value="a"
              checked={answers.question38 === 'a'}
              onChange={() => handleAnswerChange('question38', 'a')}
            />
            a. Прави
          </label>
          <label>
            <input
              type="radio"
              name="question38"
              value="b"
              checked={answers.question38 === 'b'}
              onChange={() => handleAnswerChange('question38', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question38"
              value="c"
              checked={answers.question38 === 'c'}
              onChange={() => handleAnswerChange('question38', 'c')}
            />
            c. дъгообразни
          </label>
        </div>
                {/* Question 3 */}
                <div>
          <p>Question 1: Широки или тесни вежди.</p>
          <label>
            <input
              type="radio"
              name="question44"
              value="a"
              checked={answers.question44 === 'a'}
              onChange={() => handleAnswerChange('question44', 'a')}
            />
            a. Широки
          </label>
          <label>
            <input
              type="radio"
              name="question44"
              value="b"
              checked={answers.question44 === 'b'}
              onChange={() => handleAnswerChange('question44', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question44"
              value="c"
              checked={answers.question44 === 'c'}
              onChange={() => handleAnswerChange('question44', 'c')}
            />
            c. тесни
          </label>
        </div>

        {/* Question 7 */}
        <div>
          <p>Question 2: Тънки или дебели ресници?</p>
          <label>
            <input
              type="radio"
              name="question56"
              value="a"
              checked={answers.question56 === 'a'}
              onChange={() => handleAnswerChange('question56', 'a')}
            />
            a. Тънки
          </label>
          <label>
            <input
              type="radio"
              name="question56"
              value="b"
              checked={answers.question56 === 'b'}
              onChange={() => handleAnswerChange('question56', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question56"
              value="c"
              checked={answers.question56 === 'c'}
              onChange={() => handleAnswerChange('question56', 'c')}
            />
            c. дебели
          </label>
        </div>

        {/* Question 8 */}
        <div>
          <p>Question 3: Прикрита или виждаща се гънка на горния клепач?</p>
          <label>
            <input
              type="radio"
              name="question58"
              value="a"
              checked={answers.question58 === 'a'}
              onChange={() => handleAnswerChange('question58', 'a')}
            />
            a. Прикрита
          </label>
          <label>
            <input
              type="radio"
              name="question58"
              value="b"
              checked={answers.question58 === 'b'}
              onChange={() => handleAnswerChange('question58', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question58"
              value="c"
              checked={answers.question58 === 'c'}
              onChange={() => handleAnswerChange('question58', 'c')}
            />
            c. виждаща се
          </label>
        </div>

        {/* Question 9 */}
        <div>
          <p>Question 4: Висока или ниска основа на носа?</p>
          <label>
            <input
              type="radio"
              name="question62"
              value="a"
              checked={answers.question62 === 'a'}
              onChange={() => handleAnswerChange('question62', 'a')}
            />
            a. Висока
          </label>
          <label>
            <input
              type="radio"
              name="question62"
              value="b"
              checked={answers.question62 === 'b'}
              onChange={() => handleAnswerChange('question62', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question62"
              value="c"
              checked={answers.question62=== 'c'}
              onChange={() => handleAnswerChange('question62', 'c')}
            />
            c. ниска
          </label>
        </div>

        {/* Question 14 */}
        <div>
          <p>Question 5: Основа на носа - с или без вдлъбнатина?</p>
          <label>
            <input
              type="radio"
              name="question64"
              value="a"
              checked={answers.question64 === 'a'}
              onChange={() => handleAnswerChange('question64', 'a')}
            />
            a. с вдлъбнатина
          </label>
          <label>
            <input
              type="radio"
              name="question64"
              value="b"
              checked={answers.question64 === 'b'}
              onChange={() => handleAnswerChange('question64', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question64"
              value="c"
              checked={answers.question64 === 'c'}
              onChange={() => handleAnswerChange('question64', 'c')}
            />
            c. без вдлъбнатина
          </label>
        </div>
        {/* Question 3 */}
        <div>
          <p>Question 1: Липсващ или изразен ъгъл между челото и носа?</p>
          <label>
            <input
              type="radio"
              name="question66"
              value="a"
              checked={answers.question66 === 'a'}
              onChange={() => handleAnswerChange('question66', 'a')}
            />
            a. Липсващ
          </label>
          <label>
            <input
              type="radio"
              name="question66"
              value="b"
              checked={answers.question66 === 'b'}
              onChange={() => handleAnswerChange('question66', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question66"
              value="c"
              checked={answers.question66 === 'c'}
              onChange={() => handleAnswerChange('question66', 'c')}
            />
            c. изразен
          </label>
        </div>

        {/* Question 7 */}
        <div>
          <p>Question 2: С или без извивка на гърбицата на носа?</p>
          <label>
            <input
              type="radio"
              name="question77"
              value="a"
              checked={answers.question77 === 'a'}
              onChange={() => handleAnswerChange('question77', 'a')}
            />
            a. С извивка на гърбицата
          </label>
          <label>
            <input
              type="radio"
              name="question77"
              value="b"
              checked={answers.question77 === 'b'}
              onChange={() => handleAnswerChange('question77', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question77"
              value="c"
              checked={answers.question77 === 'c'}
              onChange={() => handleAnswerChange('question77', 'c')}
            />
            c. без извивка на гърбицата
          </label>
        </div>

        {/* Question 8 */}
        <div>
          <p>Question 3: Гънки на страните на носа?</p>
          <label>
            <input
              type="radio"
              name="question80"
              value="a"
              checked={answers.question80 === 'a'}
              onChange={() => handleAnswerChange('question80', 'a')}
            />
            a. слабо изразени
          </label>
          <label>
            <input
              type="radio"
              name="question80"
              value="b"
              checked={answers.question80 === 'b'}
              onChange={() => handleAnswerChange('question80', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question80"
              value="c"
              checked={answers.question80 === 'c'}
              onChange={() => handleAnswerChange('question80', 'c')}
            />
            c. дълбоки
          </label>
        </div>

        {/* Question 9 */}
        <div>
          <p>Question 4: Дълбок или изгладен филтър?</p>
          <label>
            <input
              type="radio"
              name="question91"
              value="a"
              checked={answers.question91 === 'a'}
              onChange={() => handleAnswerChange('question91', 'a')}
            />
            a. дълбок
          </label>
          <label>
            <input
              type="radio"
              name="question91"
              value="b"
              checked={answers.question91 === 'b'}
              onChange={() => handleAnswerChange('question91', 'b')}
            />
            b. среден
          </label>
          <label>
            <input
              type="radio"
              name="question91"
              value="c"
              checked={answers.question91 === 'c'}
              onChange={() => handleAnswerChange('question91', 'c')}
            />
            c. изгладен
          </label>
        </div>

        {/* Question 14 */}
        <div>
          <p>Question 5: Излизащи напред или вмъкнати устни?</p>
          <label>
            <input
              type="radio"
              name="question98"
              value="a"
              checked={answers.question98 === 'a'}
              onChange={() => handleAnswerChange('question98', 'a')}
            />
            a. Излизащи напред
          </label>
          <label>
            <input
              type="radio"
              name="question98"
              value="b"
              checked={answers.question98 === 'b'}
              onChange={() => handleAnswerChange('question98', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question98"
              value="c"
              checked={answers.question98 === 'c'}
              onChange={() => handleAnswerChange('question98', 'c')}
            />
            c. вмъкнати
          </label>
        </div>
        {/* Question 3 */}
        <div>
          <p>Question 1: Наклонени или вертикални горни зъби.</p>
          <label>
            <input
              type="radio"
              name="question100"
              value="a"
              checked={answers.question100 === 'a'}
              onChange={() => handleAnswerChange('question100', 'a')}
            />
            a. Наклонени
          </label>
          <label>
            <input
              type="radio"
              name="question100"
              value="b"
              checked={answers.question100 === 'b'}
              onChange={() => handleAnswerChange('question100', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question100"
              value="c"
              checked={answers.question100 === 'c'}
              onChange={() => handleAnswerChange('question100', 'c')}
            />
            c. вертикални
          </label>
        </div>

        {/* Question 7 */}
        <div>
          <p>Question 2: Големи или неизпъкващи форни вътрешни резци?</p>
          <label>
            <input
              type="radio"
              name="question102"
              value="a"
              checked={answers.question102 === 'a'}
              onChange={() => handleAnswerChange('question102', 'a')}
            />
            a. Големи
          </label>
          <label>
            <input
              type="radio"
              name="question102"
              value="b"
              checked={answers.question102 === 'b'}
              onChange={() => handleAnswerChange('question102', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question102"
              value="c"
              checked={answers.question102 === 'c'}
              onChange={() => handleAnswerChange('question102', 'c')}
            />
            c. неизпъкващи
          </label>
        </div>

        {/* Question 8 */}
        <div>
          <p>Question 3: Цепнатина между горните резци?</p>
          <label>
            <input
              type="radio"
              name="question103"
              value="a"
              checked={answers.question103 === 'a'}
              onChange={() => handleAnswerChange('question103', 'a')}
            />
            a. Няма
          </label>
          <label>
            <input
              type="radio"
              name="question103"
              value="b"
              checked={answers.question103 === 'b'}
              onChange={() => handleAnswerChange('question103', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question103"
              value="c"
              checked={answers.question103 === 'c'}
              onChange={() => handleAnswerChange('question103', 'c')}
            />
            c. има
          </label>
        </div>

        {/* Question 9 */}
        <div>
          <p>Question 4: Единична или двойна брадичка?</p>
          <label>
            <input
              type="radio"
              name="question113"
              value="a"
              checked={answers.question113 === 'a'}
              onChange={() => handleAnswerChange('question113', 'a')}
            />
            a. Единична
          </label>
          <label>
            <input
              type="radio"
              name="question113"
              value="b"
              checked={answers.question113 === 'b'}
              onChange={() => handleAnswerChange('question113', 'b')}
            />
            b. средна
          </label>
          <label>
            <input
              type="radio"
              name="question113"
              value="c"
              checked={answers.question113 === 'c'}
              onChange={() => handleAnswerChange('question113', 'c')}
            />
            c. двойна
          </label>
        </div>

        {/* Question 14 */}
        <div>
          <p>Question 5: Изпъкнала или незабележима адамова ябълка?</p>
          <label>
            <input
              type="radio"
              name="question115"
              value="a"
              checked={answers.question115 === 'a'}
              onChange={() => handleAnswerChange('question115', 'a')}
            />
            a. Изпъкнала
          </label>
          <label>
            <input
              type="radio"
              name="question115"
              value="b"
              checked={answers.question115 === 'b'}
              onChange={() => handleAnswerChange('question115', 'b')}
            />
            b. средна
          </label>
          <label>
            <input
              type="radio"
              name="question115"
              value="c"
              checked={answers.question115 === 'c'}
              onChange={() => handleAnswerChange('question115', 'c')}
            />
            c. незабележима
          </label>
        </div>
        {/* Question 3 */}
        <div>
          <p>Question 1: Щръкнали или прилепнали уши?</p>
          <label>
            <input
              type="radio"
              name="question117"
              value="a"
              checked={answers.question117 === 'a'}
              onChange={() => handleAnswerChange('question117', 'a')}
            />
            a. Щръкнали
          </label>
          <label>
            <input
              type="radio"
              name="question117"
              value="b"
              checked={answers.question117 === 'b'}
              onChange={() => handleAnswerChange('question117', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question117"
              value="c"
              checked={answers.question117 === 'c'}
              onChange={() => handleAnswerChange('question117', 'c')}
            />
            c. прилепнали
          </label>
        </div>

        {/* Question 7 */}
        <div>
          <p>Question 2: Ъгловати или закръглени уши?</p>
          <label>
            <input
              type="radio"
              name="question121"
              value="a"
              checked={answers.question121 === 'a'}
              onChange={() => handleAnswerChange('question121', 'a')}
            />
            a. Ъгловати
          </label>
          <label>
            <input
              type="radio"
              name="question121"
              value="b"
              checked={answers.question121 === 'b'}
              onChange={() => handleAnswerChange('question421', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question121"
              value="c"
              checked={answers.question121 === 'c'}
              onChange={() => handleAnswerChange('question121', 'c')}
            />
            c. закръглени
          </label>
        </div>

        {/* Question 8 */}
        <div>
          <p>Question 3: Триъгълна или нормална долна мека част на ухото?</p>
          <label>
            <input
              type="radio"
              name="question125"
              value="a"
              checked={answers.question125 === 'a'}
              onChange={() => handleAnswerChange('question125', 'a')}
            />
            a. Триъгълна
          </label>
          <label>
            <input
              type="radio"
              name="question125"
              value="b"
              checked={answers.question125 === 'b'}
              onChange={() => handleAnswerChange('question125', 'b')}
            />
            b. средна
          </label>
          <label>
            <input
              type="radio"
              name="question125"
              value="c"
              checked={answers.question125 === 'c'}
              onChange={() => handleAnswerChange('question125', 'c')}
            />
            c. нормална
          </label>
        </div>

        {/* Question 9 */}
        <div>
          <p>Question 4: Изпъкнала или вдлъбната долна мека част на ухото?</p>
          <label>
            <input
              type="radio"
              name="question129"
              value="a"
              checked={answers.question129 === 'a'}
              onChange={() => handleAnswerChange('question129', 'a')}
            />
            a. Изпъкнала
          </label>
          <label>
            <input
              type="radio"
              name="question129"
              value="b"
              checked={answers.question129 === 'b'}
              onChange={() => handleAnswerChange('question129', 'b')}
            />
            b. средна
          </label>
          <label>
            <input
              type="radio"
              name="question129"
              value="c"
              checked={answers.question129 === 'c'}
              onChange={() => handleAnswerChange('question129', 'c')}
            />
            c. вдлъбната
          </label>
        </div>

        {/* Question 14 */}
        <div>
          <p>Question 5: Вържица на Дарвин?</p>
          <label>
            <input
              type="radio"
              name="question134"
              value="a"
              checked={answers.question134 === 'a'}
              onChange={() => handleAnswerChange('question134', 'a')}
            />
            a. Да има
          </label>
          <label>
            <input
              type="radio"
              name="question134"
              value="b"
              checked={answers.question134 === 'b'}
              onChange={() => handleAnswerChange('question134', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question134"
              value="c"
              checked={answers.question134 === 'c'}
              onChange={() => handleAnswerChange('question134', 'c')}
            />
            c. не няма
          </label>
        </div>
                {/* Question 3 */}
                <div>
          <p>Question 1: Широки или тесни китки.</p>
          <label>
            <input
              type="radio"
              name="question137"
              value="a"
              checked={answers.question137 === 'a'}
              onChange={() => handleAnswerChange('question137', 'a')}
            />
            a. Широки
          </label>
          <label>
            <input
              type="radio"
              name="question137"
              value="b"
              checked={answers.question137 === 'b'}
              onChange={() => handleAnswerChange('question137', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question137"
              value="c"
              checked={answers.question137 === 'c'}
              onChange={() => handleAnswerChange('question137', 'c')}
            />
            c. тесни
          </label>
        </div>

        {/* Question 7 */}
        <div>
          <p>Question 2: Дълги или къси китки?</p>
          <label>
            <input
              type="radio"
              name="question138"
              value="a"
              checked={answers.question138 === 'a'}
              onChange={() => handleAnswerChange('question138', 'a')}
            />
            a. Дълги
          </label>
          <label>
            <input
              type="radio"
              name="question138"
              value="b"
              checked={answers.question138 === 'b'}
              onChange={() => handleAnswerChange('question138', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question138"
              value="c"
              checked={answers.question138 === 'c'}
              onChange={() => handleAnswerChange('question138', 'c')}
            />
            c. къси
          </label>
        </div>

        {/* Question 8 */}
        <div>
          <p>Question 3: Външни вени на китките - релефни или изгладени?</p>
          <label>
            <input
              type="radio"
              name="question139"
              value="a"
              checked={answers.question139 === 'a'}
              onChange={() => handleAnswerChange('question139', 'a')}
            />
            a. релефни
          </label>
          <label>
            <input
              type="radio"
              name="question139"
              value="b"
              checked={answers.question139 === 'b'}
              onChange={() => handleAnswerChange('question139', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question139"
              value="c"
              checked={answers.question139=== 'c'}
              onChange={() => handleAnswerChange('question139', 'c')}
            />
            c. изгладени
          </label>
        </div>

        {/* Question 9 */}
        <div>
          <p>Question 4: Мазолеста или без кератоз длан?</p>
          <label>
            <input
              type="radio"
              name="question141"
              value="a"
              checked={answers.question141 === 'a'}
              onChange={() => handleAnswerChange('question141', 'a')}
            />
            a. Мазолеста
          </label>
          <label>
            <input
              type="radio"
              name="question141"
              value="b"
              checked={answers.question141 === 'b'}
              onChange={() => handleAnswerChange('question141', 'b')}
            />
            b. средна
          </label>
          <label>
            <input
              type="radio"
              name="question141"
              value="c"
              checked={answers.question141 === 'c'}
              onChange={() => handleAnswerChange('question141', 'c')}
            />
            c. без кератоз
          </label>
        </div>

        {/* Question 14 */}
        <div>
          <p>Question 5: Дланта е слабо или силно изпъстрена с рисунки?</p>
          <label>
            <input
              type="radio"
              name="question144"
              value="a"
              checked={answers.question144 === 'a'}
              onChange={() => handleAnswerChange('question144', 'a')}
            />
            a. слабо
          </label>
          <label>
            <input
              type="radio"
              name="question144"
              value="b"
              checked={answers.question144 === 'b'}
              onChange={() => handleAnswerChange('question144', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question144"
              value="c"
              checked={answers.question144 === 'c'}
              onChange={() => handleAnswerChange('question144', 'c')}
            />
            c. силно
          </label>
        </div>
        {/* Question 3 */}
        <div>
          <p>Question 1: Талия на палеца?</p>
          <label>
            <input
              type="radio"
              name="question148"
              value="a"
              checked={answers.question148 === 'a'}
              onChange={() => handleAnswerChange('question148', 'a')}
            />
            a. Да, има
          </label>
          <label>
            <input
              type="radio"
              name="question148"
              value="b"
              checked={answers.question148 === 'b'}
              onChange={() => handleAnswerChange('question148', 'b')}
            />
            b. средно
          </label>
          <label>
            <input
              type="radio"
              name="question148"
              value="c"
              checked={answers.question148 === 'c'}
              onChange={() => handleAnswerChange('question148', 'c')}
            />
            c. Не, няма
          </label>
        </div>

        {/* Question 7 */}
        <div>
          <p>Question 2: Къси или дълги нокти?</p>
          <label>
            <input
              type="radio"
              name="question150"
              value="a"
              checked={answers.question150 === 'a'}
              onChange={() => handleAnswerChange('question150', 'a')}
            />
            a. къси
          </label>
          <label>
            <input
              type="radio"
              name="question150"
              value="b"
              checked={answers.question150 === 'b'}
              onChange={() => handleAnswerChange('question150', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question150"
              value="c"
              checked={answers.question150 === 'c'}
              onChange={() => handleAnswerChange('question150', 'c')}
            />
            c. дълги
          </label>
        </div>

        {/* Question 8 */}
        <div>
          <p>Question 3: Широки или тесни глезени?</p>
          <label>
            <input
              type="radio"
              name="question168"
              value="a"
              checked={answers.question168 === 'a'}
              onChange={() => handleAnswerChange('question168', 'a')}
            />
            a. Широки
          </label>
          <label>
            <input
              type="radio"
              name="question168"
              value="b"
              checked={answers.question168 === 'b'}
              onChange={() => handleAnswerChange('question168', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question168"
              value="c"
              checked={answers.question168 === 'c'}
              onChange={() => handleAnswerChange('question168', 'c')}
            />
            c. тесни
          </label>
        </div>

        {/* Question 9 */}
        <div>
          <p>Question 4: Хоризонтални или полегати рамене?</p>
          <label>
            <input
              type="radio"
              name="question170"
              value="a"
              checked={answers.question170 === 'a'}
              onChange={() => handleAnswerChange('question170', 'a')}
            />
            a. Хоризонтални
          </label>
          <label>
            <input
              type="radio"
              name="question170"
              value="b"
              checked={answers.question170 === 'b'}
              onChange={() => handleAnswerChange('question170', 'b')}
            />
            b. средни
          </label>
          <label>
            <input
              type="radio"
              name="question170"
              value="c"
              checked={answers.question170 === 'c'}
              onChange={() => handleAnswerChange('question170', 'c')}
            />
            c. полегати
          </label>
        </div>

        {/* Question 14 */}
        <div>
          <p>Question 5: Тесен или широк таз?</p>
          <label>
            <input
              type="radio"
              name="question172"
              value="a"
              checked={answers.question172 === 'a'}
              onChange={() => handleAnswerChange('question172', 'a')}
            />
            a. Тесен
          </label>
          <label>
            <input
              type="radio"
              name="question172"
              value="b"
              checked={answers.question172 === 'b'}
              onChange={() => handleAnswerChange('question172', 'b')}
            />
            b. среден
          </label>
          <label>
            <input
              type="radio"
              name="question172"
              value="c"
              checked={answers.question172 === 'c'}
              onChange={() => handleAnswerChange('question172', 'c')}
            />
            c. широк
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
