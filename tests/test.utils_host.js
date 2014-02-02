'use strict';

testUtils.couchHost = function() {
  if (typeof module !== 'undefined' && module.exports) {
    return process.env.COUCH_HOST || 'http://localhost:5984';
  }
  // In the browser we default to the CORS server, in future will change
  return 'http://localhost:2020';
}

