import {combineEpics} from "redux-observable";
import {of} from "rxjs";
import {catchError, map, retry, switchMap} from "rxjs/operators";

import {FETCH_TRANSPORT, fetchTransportFailure, fetchTransportSuccess,} from "../actions";
import transportService from "../services";

export const getFirstPartLowerCase = (str = '') => str.split(' ').map((part) => part.toLowerCase())[0];

export const getResultWithDescription = (results = []) =>
    results.map((vehicle = {}) => ({
        ...vehicle,
        brand: getFirstPartLowerCase(vehicle.brand),
        description: vehicle.brand,
    }));

const RETRY_ATTEMPTS = 5;
const fetchTransportEpic = (action$) =>
    action$.ofType(FETCH_TRANSPORT).pipe(
        switchMap(() => transportService().pipe(
            retry(RETRY_ATTEMPTS),
            map(getResultWithDescription),
            map(fetchTransportSuccess),
            catchError((errorMessage) => of(fetchTransportFailure(errorMessage))),
            ),
        ));

export const rootEpic = combineEpics(fetchTransportEpic);
