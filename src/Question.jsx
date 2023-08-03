import { useState } from "react";

const questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Styling System",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Which tag is used to link an external JavaScript file to an HTML document?",
    options: ["<js>", "<javascript>", "<script>"],
    answer: "<script>",
  },
  {
    question: "What is the purpose of a media query in responsive web design?",
    options: [
      "To optimize database queries",
      "To apply different styles based on device characteristics",
      "To query search engines for relevant content",
    ],
    answer: "To apply different styles based on device characteristics",
  },
  {
    question: "Which HTML element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<hlink>"],
    answer: "<a>",
  },
  {
    question: "In JavaScript, what does the 'DOM' stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Ordinal Method",
    ],
    answer: "Document Object Model",
  },
  {
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
    question: "Which method is used to make an AJAX request in JavaScript?",
    options: ["fetch()", "get()", "request()"],
    answer: "fetch()",
  },
  {
    question:
      "Which of the following is a version control system often used in web development?",
    options: ["GCC", "JSON", "Git"],
    answer: "Git",
  },
  {
    question: "What does the 'SQL' stand for in web development?",
    options: [
      "Simple Query Language",
      "Structured Query Language",
      "Style Query Language",
    ],
    answer: "Structured Query Language",
  },
  {
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
    const length = questions.length;
    
    const prevHandler = () => {
        if(count===0) return;
        setCount(count-1);
    }

    const nextHandler = () => {
        if(count===length-1) return
        setCount(count+1);
    }
  return (
    <div className=" bg-emerald-600 p-5 text-slate-200 rounded-xl">
      <div className=" text-xl bg-slate-950 p-4 rounded-md">{count+1}. {questions[count].question}</div>
      <div className=" mt-10 flex flex-col gap-4">
        {
            questions[count].options.map((option, i)=>(
                <div className="px-4 py-3 rounded-md bg-emerald-700 shadow-md hover:bg-emerald-900 cursor-pointer" key={i}>{option}</div>
            ))
        }
      </div>
      <div className="mt-10 flex justify-between">
        <button onClick={prevHandler} className={`px-4 py-3 rounded-md shadow-lg ${count===0?"bg-slate-700 cursor-not-allowed":"bg-black"}`}>Prev</button>
        <button onClick={nextHandler} className={`bg-black px-4 py-3 rounded-md ${count===length-1?"bg-slate-700 cursor-not-allowed":"bg-black"}`}>Next</button>
      </div>
    </div>
  );
};

export default Question;
