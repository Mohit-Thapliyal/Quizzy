import { useEffect, useState } from "react";

const questions = [
  {
    id: "100",
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Styling System",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    id: "101",
    question:
      "Which tag is used to link an external JavaScript file to an HTML document?",
    options: ["<js>", "<javascript>", "<script>"],
    answer: "<script>",
  },
  {
    id: "102",
    question: "What is the purpose of a media query in responsive web design?",
    options: [
      "To optimize database queries",
      "To apply different styles based on device characteristics",
      "To query search engines for relevant content",
    ],
    answer: "To apply different styles based on device characteristics",
  },
  {
    id: "103",
    question: "Which HTML element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<hlink>"],
    answer: "<a>",
  },
  {
    id: "104",
    question: "In JavaScript, what does the 'DOM' stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Ordinal Method",
    ],
    answer: "Document Object Model",
  },
  {
    id: "105",
    question:
      "What is the purpose of the 'alt' attribute in an HTML 'img' tag?",
    options: [
      "To set the image's alignment",
      "To provide a description of the image",
      "To define the image's animation duration",
    ],
    answer: "To provide a description of the image",
  },
  {
    id: "106",
    question: "Which method is used to make an AJAX request in JavaScript?",
    options: ["fetch()", "get()", "request()"],
    answer: "fetch()",
  },
  {
    id: "107",
    question:
      "Which of the following is a version control system often used in web development?",
    options: ["GCC", "JSON", "Git"],
    answer: "Git",
  },
  {
    id: "108",
    question: "What does the 'SQL' stand for in web development?",
    options: [
      "Simple Query Language",
      "Structured Query Language",
      "Style Query Language",
    ],
    answer: "Structured Query Language",
  },
  {
    id: "109",
    question: "What is the purpose of a 'cookie' in web development?",
    options: [
      "To store data on the client's computer",
      "To store data in a database",
      "To validate HTML code",
    ],
    answer: "To store data on the client's computer",
  },
];

const Question = () => {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [current, setCurrent] = useState();
  const [submit, setSubmit] = useState(false);

  const length = questions.length;

  useEffect(() => {
    const [answer] = answers.filter((d) => d.id === questions[count].id);
    setCurrent(answer);
  }, [count, answers]);



  const prevHandler = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const nextHandler = () => {
    if (count === length - 1) return;
    setCount(count + 1);
  };

  const ansCheckHandler = (questionId, index) => {
    var isTrue =
      questions[count].options[index] === questions[count].answer
        ? true
        : false;
    const data = {
      id: questionId,
      index: index,
      isTrue: isTrue,
    };
    const humHani = answers.filter((d) => d.id !== questionId);
    humHani.push(data);
    setAnswers(humHani);
  };

  return (
    <div className=" bg-slate-500 p-5 text-slate-200 rounded-xl">
      {submit?
        <>
          <div className="h-80 flex items-center flex-col px-20 py-5 justify-between">
            <h1 className="text-4xl font-caveat">You have answered {answers.filter(ans=>ans.isTrue===true).length} questions right out of {length}</h1>
            <span className="text-6xl font-mono">{answers.filter(ans=>ans.isTrue===true).length}/{length}</span>
            <button
              onClick={()=>setSubmit(false)}
              className={`bg-black px-4 py-3 text-lg rounded-md bg-slate-800 w-full`}
            >
              Go Back
            </button>
          </div>
        </>
        :
        <>
          <div className=" text-xl bg-slate-800 p-4 rounded-md">
            {count + 1}. {questions[count].question}
          </div>
          <div className=" mt-10 flex flex-col gap-4">
            {questions[count].options.map((option, i) => (
              <div
                onClick={() => ansCheckHandler(questions[count].id, i)}
                className={`px-4 py-3 rounded-md shadow-md  cursor-pointer ${
                  current?.index === i
                    ? current?.isTrue
                      ? "bg-emerald-500"
                      : "bg-rose-500"
                    : "bg-slate-700 hover:bg-slate-900"
                }`}
                key={i}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-between">
            <button
              onClick={prevHandler}
              className={`px-4 py-3 rounded-md shadow-lg ${
                count === 0 ? "bg-slate-700 cursor-not-allowed" : "bg-slate-800"
              }`}
            >
              Prev
            </button>
            {count!==length-1&&<button
              onClick={nextHandler}
              className={`bg-black px-4 py-3 rounded-md ${
                count === length - 1
                  ? "bg-slate-700 cursor-not-allowed"
                  : "bg-slate-800"
              }`}
            >
              Next
            </button>}
            {count===length-1&&<button
              onClick={()=>setSubmit(true)}
              className={`bg-black px-4 py-3 rounded-md bg-emerald-500`}
            >
              Submit
            </button>}
          </div>
        </>
      }
    </div>
  );
};

export default Question;
