import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {Redirect} from "react";
import Navbar from "./ui/Navbar";
import Home from "./ui/pages/Home";
import AdminView from "./ui/pages/AdminView";
import CreateUser from "./users/CreateUser"
import UpdateUser from "./users/UpdateUser"
import ReadUser from "./users/ReadUser"
import Login from "./ui/pages/Login"
import ResetPassword from './users/ResetPassword';
import ForgotPassword from './users/ForgotPassword';
import DiagnosticQuizSelection from "./ui/quizzes/DiagnosticQuizSelection"
import ArabicDiagnosticQuiz from './ui/quizzes/ArabicDiagnosticQuiz';
import Contents from './ui/pages/Contents';
import Welcome from './ui/pages/arabic/Welcome';
import GreetingsAndIntro from './ui/pages/arabic/GreetingAndIntro';
import DescribingBackground from './ui/pages/arabic/DescribingBackground';
import ThisThat from './ui/pages/arabic/ThisThat';
import SentencesWithPronouns from './ui/pages/arabic/SentencesWithPronouns';
import SentencesWithVerbs from './ui/pages/arabic/SentencesWithVerbs';
import DescribingFamily from './ui/pages/arabic/DescribingFamily';
import AskingQuestions from './ui/pages/arabic/AskingQuestions';
import QuizGreetings from './ui/quizzes/QuizGreetings';
import QuizBackground from './ui/quizzes/QuizBackground';
import QuizThisThat from './ui/quizzes/QuizThisThat';
import QuizPronouns from './ui/quizzes/QuizSentencesWithPronouns';
import QuizVerbs from './ui/quizzes/QuizSentencesWithVerbs';
import QuizFamily from './ui/quizzes/QuizFamily';
import QuizQuestions from './ui/quizzes/QuizQuestions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/adduser" element={<CreateUser />} />
        <Route path="/updateuser/:user_id" element={<UpdateUser />} />
        <Route path="/viewuser/:user_id" element={<ReadUser />} />
        <Route path="/users/id/:user_id" element={<ReadUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizzes" element={<DiagnosticQuizSelection />} />
        <Route path="/quizzes/arabic-diagnostic-quiz" element={<ArabicDiagnosticQuiz />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/learning" element={<Contents />} />
        <Route path="/learning/welcome" element={<Welcome />} />
        <Route path="/learning/greetings-intro" element={<GreetingsAndIntro />} />
        <Route path="/learning/describing-background" element={<DescribingBackground />} />
        <Route path="/learning/this-that" element={<ThisThat />} />
        <Route path="/learning/pronouns" element={<SentencesWithPronouns />} />
        <Route path="/learning/verbs" element={<SentencesWithVerbs />} />
        <Route path="/learning/describing-family" element={<DescribingFamily />} />
        <Route path="/learning/asking-questions" element={<AskingQuestions />} />
        <Route path="/learning/quiz-greetings" element={<QuizGreetings />} />
        <Route path="/learning/quiz-background" element={<QuizBackground />} />
        <Route path="/learning/quiz-thisthat" element={<QuizThisThat />} />
        <Route path="/learning/quiz-pronouns" element={<QuizPronouns />} />
        <Route path="/learning/quiz-verbs" element={<QuizVerbs />} />
        <Route path="/learning/quiz-family" element={<QuizFamily />} />
        <Route path="/learning/quiz-questions" element={<QuizQuestions />} />

        <Route path="*" element={<Navigate to="/" replace />} /> {/* If user tries to access invalid route */}
      </Routes>
    </div>
  );
}

export default App;
