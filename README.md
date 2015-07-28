## HTTP Prefer Middleware

Connect middleware for the Prefer Header (http://tools.ietf.org/html/rfc7230)

Installation:
```
npm install prefer
```

Example:
```
var app = require('express')();
app.use(require('prefer'));

app.get('/', function(req,res) {
  var prefer = req.prefer;

  if (prefer.handling === 'strict') {
    // strict handling
  } else if (prefer.handling === 'lenient') {
    // lenient handling
  }

  if (prefer.respondAsync) {
    // client prefers async response
  }

  if (prefer.wait) {
    var n = prefer.wait;
    // client will wait n seconds for a response
  }

  if (prefer.return === 'minimal') {
    // client prefers a minimal response
  } else if (prefer.return === 'representation') {
    // client prefers a representation response
  }

  if (prefer.foo) {
    // client specified the 'foo' extension preference
  }

  res.preferenceApplied('handling');
  res.preferenceApplied('return');

  // if application of a preference results in a varied response,
  // be sure to set the Vary header in the response also

  res.status(204).end();
});
app.listen(port);
```
