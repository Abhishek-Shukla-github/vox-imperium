import React from "react";
import NewsCardStyle from "../NewsCard/NewsCardStyle";
import { Grid, Typography, Grow,Card,CardActionArea,CardActions, CardContent, CardMedia,Button } from "@material-ui/core";
import useStyles from "./styles.js";
const infoCards = [
    {color:"#6CB4EE",title:"Basic Interaction",info:"Who are you? \n What can i do here ?"},
    {color:"#89CFF0",title:"News by Categories",info:"Bitcoin,Elections,PlayStation,JavaScript"},
    {color:"#00BFFF",title:"News by Terms",info:"Stocks, Elections , PlayStation, Elections"},
    {color:"#B2FFFF",title:"News by Sources",info:"CNN,BBC News,Wired,New York Times,The Washington Post"},
];
const NewsCards = ({ articles }) => {
    const classes = useStyles();
    if (!articles.length) {
        return (<Grow in>
            <Grid spaing={3} container alignItems="stretch">
                {infoCards.map((card) => {
                    return <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ backgroundColor: card.color }}>
                            <CardContent>
                                <Typography variant="h3">{card.title}</Typography>
                                <Typography variant="p">{card.info}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                })}
            </Grid>
        </Grow>);
    }
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
