import React from "react";
import useStyles from "./styles.js";
import {Card,CardActionArea,CardActions, CardContent, CardMedia, Typography,Button } from "@material-ui/core";

export default function NewsCardStyle({ article: {author,source,title,description,url,urlToImage,publishedAt,content},i}){
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target={"_blank"}>
                <CardMedia className={classes.image} image={urlToImage ? urlToImage : 'https://mcdn.wallpapersafari.com/medium/49/28/vDFNZl.jpg'} title={title}/>
                <CardContent>
                    <div className={classes.details}>
                        <Typography gutterBottom variant="subtitle2" color="textSecondary">{new Date(publishedAt).toDateString()}</Typography>
                        <Typography gutterBottom variant="subtitle2" color="textSecondary">{source.name}</Typography>
                    </div>
                    <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Read More</Button>
                <Typography variant="h4">{i+1}</Typography>
            </CardActions>
        </Card>
    );
}