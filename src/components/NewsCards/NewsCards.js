import React from "react";
import { useMediaQuery } from "@material-ui/core";
import NewsCardStyle from "../NewsCard/NewsCardStyle";
import { Grid, Typography, Grow,Card, CardContent } from "@material-ui/core";
import useStyles from "./styles.js";
import logo from "../../vox-imperium.jpg";
const infoCards = [
    {color:"#6CB4EE",title:"Basic Interaction",info:"Vox Imperium is a voice controlled news reader!",step:"Who are you?"},
    {color:"#89CFF0",title:"News by Categories",info:"Business, Technology ,Health ,Sports ,Science",step:"Give me the news/articles on Sports or What are the recent headlines?"},
    {color:"#B9D9EB",title:"News by Terms",info:"Bitcoin ,Elections ,PlayStation ,JavaScript ,Artificial Intelligence",step:"What's up with JavaScript?"},
    {color:"#B2FFFF",title:"News by Sources",info:"CNN, BBC News, Wired, New York Times, The Washington Post",step:"Give me the latest news by Wired /CNN /BBC News,etc"},
];
const NewsCards = ({ articles,activeArticle }) => {
    const xs = useMediaQuery("(max-width:300px)");
    const sm = useMediaQuery("(max-width:590px)");
    const classes = useStyles();
    if (!articles.length) {
        const check = ()=>{
            if(sm) return <img style={{width:"330px"}} className={classes.logo} src={logo} alt="Vox Imperium" />
            else if(xs) return <img style={{width:"100px"}} className={classes.logo} src={logo} alt="Vox Imperium" />
            else return <img className={classes.logo} src={logo} alt="Vox Imperium" />
        }
        return (
            <div className={classes.infoDiv}>
                {check()}
            <Grow in>
            <Grid spacing={3} container alignItems="stretch">
                {infoCards.map((card) => {
                    return <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card} style={{ backgroundColor: card.color,color:"#002147" }}>
                            <CardContent>
                                <Typography className={classes.title} variant="h5">{card.title}</Typography>
                                <Typography className={classes.info} variant="p">{card.info}</Typography>
                                <h3 className={classes.trySaying}><strong>Try Saying:-</strong></h3>
                                <br/>
                                <Typography className={classes.step} variant="p"><i>{card.step}</i></Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                })}
            </Grid>
            </Grow>
            </div>
        );
    }
    return (
        <Grow in>
            <Grid spacing={3} className={classes.container} container alignItems="stretch">
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display:"flex"}}>
                        <NewsCardStyle article={article} activeArticle={activeArticle} i={i}/>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    );
} 

export default NewsCards
