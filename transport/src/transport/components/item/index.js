import React from "react";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import {Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Skeleton from "@material-ui/lab/Skeleton";

import Color from "../color";

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 280,
        margin: theme.spacing(1),
        position: 'relative',
    },
    media: {
        height: 140,
        backgroundColor: '#efefef',
    },
    colors: {
        position: 'absolute',
        right: 0,
    },
    type: {
        textTransform: 'uppercase',
        position: 'absolute',
        margin: theme.spacing(1),
    }
}));
export default function TransportItem({item = {}}) {
    const {
        img = '',
        description = '',
        type = '',
        colors = ['']
    } = item;
    const classes = useStyles();
    const isLoading = useSelector((state) => state?.transport?.isLoading || false);

    return (
        <Card className={classes.card}>
            <div className={classes.colors}>
                {colors.map((color) =>
                    <Color key={color} color={color} loading={isLoading}/>)}
            </div>
            {isLoading ?
                <Skeleton variant="circle" height={40} width={40} className={classes.type}/> :
                <Avatar className={classes.type}>{type.slice(0, 1)}</Avatar>
            }
            {isLoading ?
                <Skeleton variant="rect" height={140}/> :
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={description}
                />
            }
            <CardContent>
                {isLoading ?
                    <Skeleton variant="rect" height={20}/> :
                    <Typography variant="h5" component="h2">
                        {description}
                    </Typography>
                }
            </CardContent>
        </Card>
    );

}
