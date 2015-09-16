//
// src/app/cv/helpers/prettyPrintJs.js
//
'use strict';

import { _ } from 'orchestra';
import constants from '../helpers/constants';

function reEscape(str) {
  return str.replace(/([\.\$\^\{\[\(\|\)\*\+\?\\]+)/g, a => '\\' + a);
}

function splitOnMultipleSymbols(input, array, type) {
  let result;
  let re = '([';
  _.each(array, (item, index) => {
    re += reEscape(item);
    if (index < array.length - 1) {
      re += '|';
    }
  });
  re += '])+';

  re = new RegExp(re, 'g');

  result = input.split(re);

  return _.without(_.map(result, item => {
    if (array.indexOf(item) === -1) {
      return item;
    }
    return {
      item,
      type
    };
  }), '');

}

function splitOnMultiple(input, array, wholeWords, type) {
  if (!array) {
    return input;
  }

  let result;
  let re = '(';

  _.each(array, (item, index) => {
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

  return _.without(_.map(result, (item) => {
    if (array.indexOf(item) === -1) {
      return item;
    }
    return {
      item,
      type
    };
  }), '');
}

function loopAndSplit(array, regex, wholeWords, className) {
  const result = [];
  _.each(array, item => {
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
  const re = new RegExp(constants.reservedWords.join('|'), 'g');
  return loopAndSplit(array, re, true, 'reserved');
}

function splitOnIdentifiers(array) {
  const re = new RegExp(constants.identifiers.join('|'), 'g');
  return loopAndSplit(array, re, true, 'identifier');
}

function splitOnFunctions(array) {
  return loopAndSplit(array, new RegExp('^.*(?=(\\())', 'g'), false, 'function');
}

function splitOnArguments(array) {
  let store = [];
  _.each(array, (item, index) => {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    const prev = array[index - 1];

    if (prev && prev.type !== 'function') {
      store.push(item);
      return;
    }

    const hasArgs = item.match(/\((.*?)\)/g);

    if (!hasArgs) {
      store.push(item);
      return;
    }

    const args = item.match(/(\w)+/g);

    const result = splitOnMultiple(item, args, false, 'arg');

    store.push(result);
    store = _.flatten(store);
  });

  return store;
}

function splitOnCompartors(array) {
  let store = [];
  _.each(array, item => {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    const result = splitOnMultipleSymbols(item, constants.comparators, 'comparator');

    store.push(result);
    store = _.flatten(store);

  });

  return store;
}

function splitOnModifiers(array) {
  let store = [];
  _.each(array, item => {
    if (typeof item === 'object') {
      store.push(item);
      return;
    }

    const result = splitOnMultipleSymbols(item, constants.modifiers, 'modifier');

    store.push(result);
    store = _.flatten(store);

  });

  return store;
}

function mapDefaults(array) {
  return _.map(array, item => {
    if (typeof item === 'object') {
      return item;
    }
    return {
      item,
      type: 'default'
    };
  });
}

export default function(string) {
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
}
