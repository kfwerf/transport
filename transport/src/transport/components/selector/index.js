import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";

import {updateBrand, updateColor, updateType} from "../../actions";
import TransportSelect from "../select";


const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 275,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));
export default function TransportSelector() {
    const classes = useStyles();
    const {
        colors,
        brands,
        types,
        color,
        brand,
        type,
        isLoading,
    } = useSelector((state) => state?.transport || {});

    const dispatch = useDispatch();
    const onColorChange = (e) => dispatch(updateColor(e?.target?.value));
    const onBrandChange = (e) => dispatch(updateBrand(e?.target?.value));
    const onTypeChange = (e) => dispatch(updateType(e?.target?.value));

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Filter your transportation:
                </Typography>

                <TransportSelect value={color} list={colors} label={"Color"}
                                 onChange={onColorChange} disabled={isLoading}/>
                <TransportSelect value={brand} list={brands} label={"Brand"}
                                 onChange={onBrandChange} disabled={isLoading}/>
                <TransportSelect value={type} list={types} label={"Type"}
                                 onChange={onTypeChange} disabled={isLoading}/>
            </CardContent>
        </Card>
    );
}
