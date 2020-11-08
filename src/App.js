import React, {useState, useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards';
import logo from "./vox-imperium.jpg";

const key = "6bc4b5b917327e961429440365f7c1ce2e956eca572e1d8b807a3e2338fdd0dc/stage";
export default function App() {
    const [newsArticles, setNewsArticles] = useState([]);
    useEffect(() => {
        //Initializing the alan button
        alanBtn({
            key: key,
            onCommand:({ command,articles }) => {
                if (command === "newHeadlines") {
                    console.log("Here they are");
                    setNewsArticles(articles);
                }
            }
        })
    },[])
    return (
        <div>
            <NewsCards articles={newsArticles} />
        </div>
    )
}
