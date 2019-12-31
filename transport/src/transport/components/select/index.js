import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl, InputLabel, MenuItem, Select,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    item: {
        textTransform: 'capitalize',
    }
}));
export default function TransportSelect(item = {}) {
    const {
        list = [],
        value = '',
        disabled = false,
        label = '',
        onChange = () => {},
    } = item;
    const classes = useStyles();
    const prefix = label.toLowerCase();
    const labelId = `${prefix}-label`;
    const labelSelect = `${prefix}-select`;

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select labelId={labelId} id={labelSelect} onChange={onChange} value={value}
                    disabled={disabled} className={classes.item}>
                <MenuItem value="" className={classes.item}>-</MenuItem>
                {list.map((option, idx) =>
                    <MenuItem key={idx} value={option} className={classes.item}>
                        {option}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    );
}
