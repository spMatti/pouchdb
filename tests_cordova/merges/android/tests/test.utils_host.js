'use strict';

testUtils.couchHost = function() {
  // In the android emulator we use directly the couchdb
  // 10.0.2.2 is a special alias in the emulator to your host loopback interface
  // http://developer.android.com/tools/devices/emulator.html#networkaddresses
  return 'http://10.0.2.2:5984';
}

