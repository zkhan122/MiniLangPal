import "../css/quiz-styling.css";   
import { Link } from "react-router-dom";

export default function Contents() {
    return (
        <div className="relative overflow-x-auto">
            <table className="table-auto border-separate border-spacing-x-6 border-spacing-y-3 w-full">
                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-2">Lesson</th>
                        <th scope="col" className="px-4 py-2">Level</th>
                        <th scope="col" className="px-4 py-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/welcome" className="btn btn-primary">Welcome!</Link></td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">A warm welcome to the course!!</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/greetings-intro" className="btn btn-primary">Greetings & Introduction</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">How to greet someone and introduce yourself</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/describing-background" className="btn btn-primary">Describing Background</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">How to describe your background such as your country, nationality</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/this-that" className="btn btn-primary">"This is" & "That is"</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Describing something or someone</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/pronouns" className="btn btn-primary">Sentences With Pronouns</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Using pronouns</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/verbs" className="btn btn-primary">Sentences With Verbs</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Different verbs and using them in sentences</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/describing-family" className="btn btn-primary">Describing Family</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Describing your family</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/asking-questions" className="btn btn-primary">Asking Questions</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Questions you could ask someone based on scenarios</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
