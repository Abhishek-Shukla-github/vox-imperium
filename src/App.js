import React, { useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

const key = "6bc4b5b917327e961429440365f7c1ce2e956eca572e1d8b807a3e2338fdd0dc/stage";
export default function App() {
    useEffect(() => {
        //Initializing the alan button
        alanBtn({
            key: key,
            onCommand:({ command,articles }) => {
                if (command === "newHeadlines") {
                    console.log("Here they are");
                    console.log(articles);
                }
            }
        })
    },[])
    return (
        <div>
            <h1>Alan AI news Reader</h1>
        </div>
    )
}
