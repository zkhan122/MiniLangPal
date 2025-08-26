import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

import "../css/quiz-styling.css";
import { Link } from "react-router-dom";

export default function Contents() {

    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.role) {
            window.location.replace("/login");
        }
    }, [user, navigate]);

    return (
        <div className="relative overflow-x-auto">
            <table className="table-auto border-separate border-spacing-x-6 border-spacing-y-3 w-full">
                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-2">Lesson</th>
                        <th scope="col" className="px-4 py-2">Level</th>
                        <th scope="col" className="px-4 py-2">Description</th>
                        <th scope="col" className="px-32 py-2">Quiz</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/welcome" className="btn btn-primary">Welcome!</Link></td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">A warm welcome to the course!!</td>
                        <td className="px-32 py-2 d-flex justify-content-end"></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/greetings-intro" className="btn btn-primary">Greetings & Introduction</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">How to greet someone and introduce yourself</td>
                        <td className="px-32 py-2 d-flex justify-content-end">
                            <Link to="/learning/quiz-greetings" className="btn btn-success">Quiz 1</Link>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/describing-background" className="btn btn-primary">Describing Background</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">How to describe your background such as your country, nationality</td>
                        <td className="px-32 py-2 d-flex justify-content-end">
                            <Link to="/learning/quiz-background" className="btn btn-success">Quiz 2</Link>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/this-that" className="btn btn-primary">"This is" & "That is"</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Describing something or someone</td>
                        <td className="px-32 py-2 d-flex justify-content-end">
                            <Link to="/learning/quiz-thisthat" className="btn btn-success">Quiz 3</Link>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/pronouns" className="btn btn-primary">Sentences With Pronouns</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Using pronouns</td>
                        <td className="px-32 py-2 d-flex justify-content-end">
                            <Link to="/learning/quiz-pronouns" className="btn btn-success">Quiz 4</Link>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/verbs" className="btn btn-primary">Sentences With Verbs</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Different verbs and using them in sentences</td>
                        <td className="px-32 py-2 d-flex justify-content-end">
                            <Link to="/learning/quiz-verbs" className="btn btn-success">Quiz 4</Link>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/describing-family" className="btn btn-primary">Describing Family</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Describing your family</td>
                        <td className="px-32 py-2 d-flex justify-content-end">
                            <Link to="/learning/quiz-family" className="btn btn-success">Quiz 5</Link>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td className="px-4 py-2"><Link to="/learning/asking-questions" className="btn btn-primary">Asking Questions</Link></td>
                        <td className="px-4 py-2">Beginner</td>
                        <td className="px-4 py-2">Questions you could ask someone based on scenarios</td>
                        <td className="px-32 py-2 d-flex justify-content-end"> 
                            <Link to="/learning/quiz-questions" className="btn btn-success">Quiz 6</Link>
                        </td>
                    </tr>
                    <br></br>
                </tbody>
            </table>
        </div>
    );
}