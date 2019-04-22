import test from './../util/test';
export default function (data) {
  return function (offer) {
      return offer(test, data) || false
  }
}