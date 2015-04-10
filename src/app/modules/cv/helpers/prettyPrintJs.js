//
// src/app/modules/cv/helpers/prettyPrintJs.js
//

'use strict';

var constants = require('../helpers/constants');
var _ = require('lodash');

function reEscape(str) {
  return str.replace(/([\.\$\^\{\[\(\|\)\*\+\?\\]+)/g, function(a) {
    return '\\' + a;
  });
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
  if (!array) {
    return input;
  }

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

function loopAndSplit(array, regex, wholeWords, className) {
  var result = [];
  _.each(array, function(item) {
    if (typeof item === 'object') {
      result.push(item);
      return;
    }

    result.push(splitOnMultiple(item, item.match(regex), wholeWords, className));
  });

  return _.flatten(result);
}

function splitOnLineComments(array) {
  return loopAndSplit(array, new RegExp('(?:^|[^:])(\/\/.*)', 'g'), false, 'comment');
}

function splitOnStrings(array) {
  return loopAndSplit(array, new RegExp(/(["'])(\\?.)*?\1/g), false, 'string');
}

function splitOnIndentation(array) {
  return loopAndSplit(array, new RegExp('\\s\\s', 'g'), false, 'tab');
}

function splitOnNumbers(array) {
  return loopAndSplit(array, new RegExp('\\d+', 'g'), true, 'number');
}

function splitOnReservedWords(array) {
  return loopAndSplit(array, constants.reservedWords.join('|'), true, 'reserved');
}

function splitOnIdentifiers(array) {
  return loopAndSplit(array, constants.identifiers.join('|'), true, 'identifier');
}

function splitOnFunctions(array) {
  return loopAndSplit(array, new RegExp('^.*(?=(\\())', 'g') , false, 'function');
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
                splitOnIndentation(
                  splitOnNumbers(
                    splitOnStrings(
                      splitOnLineComments([string])
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};
