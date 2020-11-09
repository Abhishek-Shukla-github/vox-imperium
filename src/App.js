import React, {useState, useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards';

const key = "6bc4b5b917327e961429440365f7c1ce2e956eca572e1d8b807a3e2338fdd0dc/stage";
export default function App() {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    useEffect(() => {
        //Initializing the alan button
        alanBtn({
            key: key,
            onCommand:({ command,articles }) => {
                if (command === "newHeadlines") {
                    console.log("Here they are");
                    setNewsArticles(articles);
                }
                else if (command === "highlight") {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
            }
        })
    },[])
    return (
        <div style={{backgroundColor:"#FFFFF0"}}>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}
