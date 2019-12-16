import trafficMeister from '../../service';
import { Observable } from 'rxjs';

export default function getTraffic() {
  return new Observable((subscriber) => {
    let count = 0;
    retrier(trafficMeister.fetchData, (err, succ) => {
      console.log(err,succ);
      if (err) {
        subscriber.error(err);
      } else {
        subscriber.next(succ);
      }
      subscriber.complete();
    });
  });
}

function fetchEnhanced(fn, completer) {
  retrier(fn, (err, succ) => {
    console.log('to cacher', err, succ);
    cacher(fn, completer, err, succ);
  });
}

const MAX_RETRIES = 3;
function retrier(fn, completer, errorCount = 0) {
  return fn((err, succ) => {
    console.log(err,succ);
    if (err) {
      if (errorCount >= MAX_RETRIES) {
        console.log('aborting');
        return completer(err);
      }
      
      console.log('retrying', errorCount);
      return retrier(fn, completer, errorCount + 1);
    } else {
      return completer(err, succ);
    }
  });
}

const CACHE = [];
function cacher(fn, completer, err, succ) {
  if (err) {
    console.log('handle err');
    // TODO: use cache here to shield from err
    return completer(err);
  } else {
    CACHE[fn] = completer;
    console.log(CACHE);
    return completer(err, succ)
  }
}