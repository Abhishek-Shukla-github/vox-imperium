import React from "react";
import NewsCardStyle from "../NewsCard/NewsCardStyle";

const NewsCards = ({articles}) => {
    return (
        <div>
            {articles.map((article,i)=>(<NewsCardStyle />))}
        </div>
    );
} 

export default NewsCards
