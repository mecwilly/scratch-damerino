/**************************************************************************************
 *
 *              ==== Damerino Robot (ScratchX extension version 1.0) ====
 *
 **************************************************************************************
 * Created by MecWilly Project Srls
 * www.mecwilly.it/damerino
 * www.damerinorobot.com
*/

(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    var damerino_ip = '127.0.0.1';
    var damerino_port = '8888';

    var damerino_server_address = 'http://' + damerino_ip + ':' + damerino_port + '/?';
    
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.camera = function(state, callback) {
        $.ajax({
              url: 'http://127.0.0.1:8888/?camera%23'+state,
              type: 'GET',
              success: function( data ) {
                  callback(data );
              }
        });
    };

    ext.cameraDue = function(state, callback) {
        $.ajax({
              url: 'http://127.0.0.1:8888/?camera%23'+state,
              type: 'GET',
              success: function() {
                  callback();
              }
        });
    };

    ext.say = function(location, citta, callback) {
        $.ajax({
              url: 'http://127.0.0.1:8888/?camera%23on',
              type: 'GET',
              success: function( weather_data ) {
                  callback(weather_data );
              }
        });
    };

    ext.get_temp = function(location, callback) {
        $.ajax({
              url: 'http://127.0.0.1:8888/?camera%23on',
              type: 'GET',
              success: function( weather_data ) {
                  callback(weather_data);
              }
        });
    };

    var descriptor = {
        blocks: [
            ['R', 'DAMERINO say %m.di città %s', 'say', 'ciao', 'Rome'],
            ['R', 'DAMERINO camera %m.activate', 'camera', 'on'],
            ['w', 'DAMERINO camera2 %m.activate', 'cameraDue', 'on']
        ],
        menus: {
        di: ['hi','hi friend'],
        activate: ['on','off']
    },
    url: 'http://mecwilly.it/damerino',
    displayName: 'Damerino Robot 3.0'
    };

    // Register the extension
    ScratchExtensions.register('Damerino extension', descriptor, ext);
})({});
