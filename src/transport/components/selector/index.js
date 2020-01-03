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
import Grid from "@material-ui/core/Grid/Grid";

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 275,
        margin: theme.spacing(1),
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

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TransportSelect value={color} list={colors} label={"Color"}
                                         onChange={onColorChange} disabled={isLoading}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TransportSelect value={brand} list={brands} label={"Brand"}
                                         onChange={onBrandChange} disabled={isLoading}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TransportSelect value={type} list={types} label={"Type"}
                                         onChange={onTypeChange} disabled={isLoading}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
