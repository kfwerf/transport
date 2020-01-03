import {Observable} from "rxjs";

import trafficMeister from "../../service";

export default function getTraffic() {
    return new Observable((subscriber) => {
        trafficMeister.fetchData((err, succ) => {
            if (err) {
                subscriber.error(err);
            } else {
                subscriber.next(succ);
            }
            subscriber.complete();
        });
    });
}
