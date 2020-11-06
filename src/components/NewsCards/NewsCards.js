import React from "react";
import NewsCardStyle from "../NewsCard/NewsCardStyle";
import { Grid, Typography, Grow } from "@material-ui/core";
import useStyles from "./styles.js";
const NewsCards = ({ articles }) => {
    const classes = useStyles();
    return (
        <Grow in>
            <Grid spacing={3} className={classes.container} container alignItems="stretch">
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display:"flex"}}>
                        <NewsCardStyle article={article} i={i}/>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    );
} 

export default NewsCards
