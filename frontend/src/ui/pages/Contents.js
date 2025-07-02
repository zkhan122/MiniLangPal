import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import axios from "axios";
import "../css/quiz-styling.css";   

export default function Contents() {

    return (
        

    <div class="relative overflow-x-auto">
        <table class="table-auto border-separate border-spacing-x-6 border-spacing-y-3 w-full">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
            <th scope="col" class="px-4 py-2">Lesson</th>
            <th scope="col" class="px-4 py-2">Level</th>
            <th scope="col" class="px-4 py-2">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="px-4 py-2"><button type="button" class="btn btn-info">Greetings & Introductions</button></td>
                <td class="px-4 py-2">Beginner</td>
                <td class="px-4 py-2">How to greet someone and introduce yourself</td>
            </tr>
                        <tr>
                <td class="px-4 py-2"><button type="button" class="btn btn-info">Describing Background</button></td>
                <td class="px-4 py-2">Beginner</td>
                <td class="px-4 py-2">How to describe your background such as your country, nationality</td>
            </tr>
                        <tr>
                <td class="px-4 py-2"><button type="button" class="btn btn-info">"This is" & "That is"</button></td>
                <td class="px-4 py-2">Beginner</td>
                <td class="px-4 py-2">Describing something or someone</td>
            </tr>
                        <tr>
                <td class="px-4 py-2"><button type="button" class="btn btn-info">Sentences With Pronouns</button></td>
                <td class="px-4 py-2">Beginner</td>
                <td class="px-4 py-2">Using pronouns</td>
            </tr>
            <tr>
                <td class="px-4 py-2"><button type="button" class="btn btn-info">Sentences With Verbs</button></td>
                <td class="px-4 py-2">Beginner</td>
                <td class="px-4 py-2">Different verbs and using them in sentences</td>
            </tr>
            <tr>
                <td class="px-4 py-2"><button type="button" class="btn btn-info">Family</button></td>
                <td class="px-4 py-2">Beginner</td>
                <td class="px-4 py-2">Describing your family</td>
            </tr>
            <tr>
                <td class="px-4 py-2"><button type="button" class="btn btn-info">Asking questions</button></td>
                <td class="px-4 py-2">Beginner</td>
                <td class="px-4 py-2">Questions you could ask someone based on scenarios</td>
            </tr>

        </tbody>
        </table>
    </div>


    );
}
