import Question from "./Question"

const Hero = () => {
      
  return (
    <div className="">
        <div>
            <h1 className=" text-4xl font-extrabold text-white font-caveat tracking-wider">Quizzy - Puzzles that Make You Think, Learn, and Excel!</h1>
        </div>
        <div className="mt-24">
           <Question/>
        </div>
    </div>
  )
}

export default Hero