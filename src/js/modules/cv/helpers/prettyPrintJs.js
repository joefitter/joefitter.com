'use strict';

var constants = require('../helpers/constants');
var _ = require('lodash');

function splitOnStrings(line) {
  var strings = line.match(/(["'])(\\?.)*?\1/g);

  if (!strings) {
    return [line];
  }

  return splitOnMultiple(line, strings, false, 'string');
}

function splitOnNumbers(array) {
  var store = [];
  _.each(array, function(item) {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    var numbers = item.match(/\d+/g);

    if (!numbers) {
      store.push(item);
      return;
    }

    var result = splitOnMultiple(item, numbers, false, 'number');

    store.push(result);
    store = _.flatten(store);

  });

  return store;
}

function splitOnReservedWords(array) {
  var store = [];
  _.each(array, function(item) {

    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    var result = splitOnMultiple(item, constants.reservedWords, true, 'reserved');

    store.push(result);
    store = _.flatten(store);
  });

  return store;
}

function splitOnIdentifiers(array) {
  var store = [];
  _.each(array, function(item) {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    var result = splitOnMultiple(item, constants.identifiers, true, 'identifier');

    store.push(result);
    store = _.flatten(store);
  });

  return store;
}

function splitOnFunctions(array) {
  var store = [];
  _.each(array, function(item) {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    var functionNames = item.match(/^.*(?=(\())/g);

    if (!functionNames) {
      store.push(item);
      return;
    }

    var result = splitOnMultiple(item, functionNames, false, 'function');

    store.push(result);
    store = _.flatten(store);

  });

  return store;
}

function splitOnArguments(array) {
  var store = [];
  _.each(array, function(item, index) {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    var prev = array[index - 1];

    if (prev && prev.type !== 'function') {
      store.push(item);
      return;
    }

    var hasArgs = item.match(/\((.*?)\)/g);

    if (!hasArgs) {
      store.push(item);
      return;
    }

    var args = item.match(/(\w)+/g);

    var result = splitOnMultiple(item, args, false, 'arg');

    store.push(result);
    store = _.flatten(store);
  });

  return store;
}

function reEscape(str) {
  return str.replace(/([\.\$\^\{\[\(\|\)\*\+\?\\]+)/g, function(a) {
    return '\\' + a;
  });
}

function splitOnCompartors(array) {
  var store = [];
  _.each(array, function(item) {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    var result = splitOnMultipleSymbols(item, constants.comparators, 'comparator');

    store.push(result);
    store = _.flatten(store);

  });

  return store;
}

function splitOnModifiers(array) {
  var store = [];
  _.each(array, function(item) {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    var result = splitOnMultipleSymbols(item, constants.modifiers, 'modifier');

    store.push(result);
    store = _.flatten(store);

  });

  return store;
}

function splitOnMultipleSymbols(input, array, type) {
  var result;
  var re = '([';
  _.each(array, function(item, index) {
    re += reEscape(item);
    if (index < array.length - 1) {
      re += '|';
    }
  });
  re += '])+';

  re = new RegExp(re, 'g');

  result = input.split(re);

  return _.without(_.map(result, function(item) {
    if (array.indexOf(item) === -1) {
      return item;
    }
    return {
      item: item,
      type: type
    };
  }), '');

}

function splitOnMultiple(input, array, wholeWords, type) {
  var result;
  var re = '(';

  _.each(array, function(item, index) {
    if (wholeWords) {
      re += '\\b';
    }
    re += reEscape(item);
    if (wholeWords) {
      re += '\\b';
    }

    if (index < array.length - 1) {
      re += '|';
    }
  });

  re += ')';

  re = new RegExp(re, 'g');

  result = input.split(re);

  return _.without(_.map(result, function(item) {
    if (array.indexOf(item) === -1) {
      return item;
    }
    return {
      item: item,
      type: type
    };
  }), '');
}

function mapDefaults(array) {
  return _.map(array, function(item) {
    if (typeof item === 'object') {
      return item;
    }
    return {
      item: item,
      type: 'default'
    };
  });
}

module.exports = function(string) {
  return mapDefaults(
    splitOnArguments(
      splitOnModifiers(
        splitOnCompartors(
          splitOnFunctions(
            splitOnIdentifiers(
              splitOnReservedWords(
                splitOnNumbers(
                  splitOnStrings(string)
                )
              )
            )
          )
        )
      )
    )
  );
};
