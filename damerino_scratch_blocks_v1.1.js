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

       ext.camera = function(status, callback) {
        $.ajax({
              url: damerino_server_address + 'camera%23'+status,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };

    ext.tracking = function(status, reverse_status, callback) {
        $.ajax({
              url: damerino_server_address + 'tracking%23'+status+'%23'+reverse_status,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };

    ext.listen = function(language, callback) {
        $.ajax({
              url: damerino_server_address + 'listen%23'+language,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };

    ext.say = function(text, language, callback) {
        $.ajax({
              url: damerino_server_address + 'say%23'+text+'%23'+language,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };
    
    
    
    /*
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
*/
    
    
    var descriptor = {
        blocks: [
            ['R', 'DAMERINO say %t language %m.lan_tts', 'say', 'I'm Damerino', 'en'],
            ['R', 'DAMERINO camera %m.on_off', 'camera', 'on'],
            ['R', 'DAMERINO tracking %m.on_off reverse %m.on_off', 'tracking', 'on', 'off'],
            ['R', 'DAMERINO listen language %m.lan_asr', 'listen', 'en']
        ],
        menus: {
        on_off: ['on','off'],
        lan_asr: ['en','it','de','fr','es'],
        lan_tts: ['en','it','de','fr','es']
    },
    url: 'http://mecwilly.it/damerino',
    displayName: 'Damerino Robot 3.0'
    };

    // Register the extension
    ScratchExtensions.register('Damerino robot extension', descriptor, ext);
})({});
