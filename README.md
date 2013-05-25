Lucky Charms Library
====================
[![NPM version](https://badge.fury.io/js/luckycharms-library.png)](https://npmjs.org/package/luckycharms-library) [![Build Status](https://travis-ci.org/bigbam505/luckycharms-library.png?branch=master)](https://travis-ci.org/bigbam505/luckycharms-library)

### About

[LuckyCharms Library](http://github.com/bigbam505/luckycharms-library) is a node module designed to integration with 
[Lucky Charms](http://github.com/drapergeek/luckycharms) easily.  It allows for a simple api to communicate with 
the external Lucky Charms server and perform API functions.  Also this could be used within a campfire script to 
get external value.

### Lucky Charms Library Usage

```javascript
  var Client = require('luckycharms-library');

  Client.ListUnits(function(data) {
    console.log(data);
  });

  Client.UpdateUnitUrl('unit-1', 'http://www.google.com/', function(data) {
    console.log(data);
  });
```

### Enviromental Variables

```javascript
  LUCKYCHARMS_URL - URL of the Lucky Charms server with trailing '/'
  LUCKYCHARMS_API_KEY - The API Key in order to access the server
```

### Issues

Issues for this module can be sent to [Lucky Charms Library Issues](https://github.com/bigbam505/luckycharms-library/issues)

### License

Copyright (c) 2013 Brent Montague

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
