'use strict';

var token = /^[a-z0-9\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~]+$/i;
var mid = /[\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~]+(\w|$)/ig;
function camelCase(name) {
  name = name.trim().toLowerCase();
  if (name.length === 0) return name;
  name = name.replace(mid, function(m,p) {return p.toUpperCase();});
  return name[0].toLowerCase() + name.slice(1);
}

function parser(input) {
  var result = {};
  var current = '', quoted = false;
  function set(item) {
    var split = item.split('=',2);
    var name = split[0];
    if (token.test(name)) {
      var value = split[1] || true;
      if(!isNaN(value) && typeof value !== 'boolean')
        value = Number(value);
      result[camelCase(name)] = value;
    }
  }
  for (var n = 0, l = input.length; n < l; n++) {
    if (input[n] === ',' && !quoted) {
      if (current.trim().length > 0)
        set(current.trim());
      current = '';
    } else if (input[n] === '"' && !quoted) {
      quoted = true;
    } else if (input[n] === '"' && quoted) {
      quoted = false;
    } else {
      current += input[n];
    }
  }
  if (current.trim().length > 0)
    set(current.trim());
  return result;
}

function Prefer(req, res, next) {
  res.preferenceApplied = function(pref) {
    if (typeof pref === 'string')
      this.append('Preference-Applied', pref);
  };
  var pref = req.get('Prefer');
  if (pref !== undefined) {
    req.prefer = parser(pref);
  }
  next();
}

function constant(target,name,value) {
  Object.defineProperty(target,name, {
    configurable:false,
    enumerable:true,
    value:value
  });
}
constant(Prefer,'MINIMAL','minimal');
constant(Prefer,'REPRESENTATION', 'representation');
constant(Prefer,'LENIENT','lenient');
constant(Prefer,'STRICT','strict');
constant(Prefer,'WAIT','wait');
constant(Prefer,'HANDLING','handling');
constant(Prefer,'RETURN','return');
constant(Prefer,'RESPONDASYNC', 'respond-async');

module.exports = Prefer;
