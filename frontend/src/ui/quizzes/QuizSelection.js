import { Link } from 'react-router-dom';
import AnimatedTextForQuizSelection from "../utils/AnimatedTextForQuizSelection"

export default function QuizSelection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <AnimatedTextForQuizSelection text="Select the language you wish to master!" />
      <Link 
        className="px-6 py-2 text-lg border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg bg-blue-500" 
        to="/learning"
      >
        My Learning
      </Link>
    </div>
  );
}

