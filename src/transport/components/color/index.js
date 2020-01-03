import React from "react";
import {makeStyles} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton/Skeleton";

const useStyles = makeStyles((theme) => ({
    color: {
        margin: theme.spacing(1),
        width: 12,
        height: 12,
        borderRadius: '50%',
        filter: 'saturate(75%)',
    },
    caption: {
        display: 'none',
    }
}));
export default function TransportColor({ color, loading: isLoading }) {
    const classes = useStyles();
    return (
        <div>
            { isLoading ?
                <Skeleton variant="circle" height={12} width={12} className={classes.color}/> :
                <figure className={classes.color} style={{ backgroundColor: color }}>
                    <figcaption className={classes.caption}>
                        {color}
                    </figcaption>
                </figure>
            }
        </div>
    );
};
