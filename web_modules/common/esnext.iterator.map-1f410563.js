import { a as anObject, b as aCallable, f as functionCall, i as isObject, _ as _export } from './es.error.cause-41d05cf9.js';
import { g as getIteratorDirect, a as asyncIteratorClose } from './iterator-close-d0252338.js';
import { a as asyncIteratorCreateProxy, c as createIterResultObject, i as iteratorCreateProxy, b as callWithSafeIterationClosing } from './call-with-safe-iteration-closing-e12c1e84.js';

var AsyncIteratorProxy = asyncIteratorCreateProxy(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var mapper = state.mapper;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var ifAbruptCloseAsyncIterator = function (error) {
      asyncIteratorClose(iterator, doneAndReject, error, doneAndReject);
    };

    Promise.resolve(anObject(functionCall(state.next, iterator))).then(function (step) {
      try {
        if (anObject(step).done) {
          state.done = true;
          resolve(createIterResultObject(undefined, true));
        } else {
          var value = step.value;
          try {
            var result = mapper(value, state.counter++);

            var handler = function (mapped) {
              resolve(createIterResultObject(mapped, false));
            };

            if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
            else handler(result);
          } catch (error2) { ifAbruptCloseAsyncIterator(error2); }
        }
      } catch (error) { doneAndReject(error); }
    }, doneAndReject);
  });
});

// `AsyncIterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
var asyncIteratorMap = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new AsyncIteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};

// `AsyncIterator.prototype.map` method
// https://github.com/tc39/proposal-async-iterator-helpers
_export({ target: 'AsyncIterator', proto: true, real: true }, {
  map: asyncIteratorMap
});

var IteratorProxy = iteratorCreateProxy(function () {
  var iterator = this.iterator;
  var result = anObject(functionCall(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
var iteratorMap = function map(mapper) {
  anObject(this);
  aCallable(mapper);
  return new IteratorProxy(getIteratorDirect(this), {
    mapper: mapper
  });
};

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
_export({ target: 'Iterator', proto: true, real: true }, {
  map: iteratorMap
});
