import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Container} from "@material-ui/core";
import TransportSelector from "./transport/components/selector";
import TransportItem from "./transport/components/item";
import Grid from "@material-ui/core/Grid/Grid";

import {fetchTransport} from "./transport/actions";

export default function TransportApp() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTransport());
    }, [dispatch]);

    const list = useSelector((state) => state?.transport?.filtered || []);
    return (
        <Container className="App">
            <TransportSelector/>
            <Grid container spacing={2}>
                {list.map((item, idx) =>
                    <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                        <TransportItem key={idx} item={item}/>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}
