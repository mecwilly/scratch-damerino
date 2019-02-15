/**************************************************************************************
 *
 *              ==== Damerino Robot (ScratchX extension version 1.0) ====
 *
 **************************************************************************************
 * Created by MecWilly Project
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

       ext.read = function(pin, callback) {
        $.ajax({
              url: damerino_server_address + 'read%23'+pin,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };

       ext.cloud = function(text, callback) {
        $.ajax({
              url: damerino_server_address + 'cloud%23'+text,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };





       ext.eye = function(rl, callback) {
              var ist;
              if(rl=='r') ist = 'righteye';
              else ist = 'lefteye';
        $.ajax({
              url: damerino_server_address + ist,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };



       ext.eyes = function(callback) {
        $.ajax({
              url: damerino_server_address + 'eyes',
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };


       ext.face_size = function(size, callback) {
              var ist;
              if(size=='x') ist = 'xface';
              else ist = 'yface';
        $.ajax({
              url: damerino_server_address + ist,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };

       ext.face_xy = function(xy, callback) {
              var ist;
              if(xy=='x') ist = 'xface';
              else ist = 'yface';
        $.ajax({
              url: damerino_server_address + ist,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };

       ext.face = function(callback) {
        $.ajax({
              url: damerino_server_address + 'face',
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };


       ext.smile = function(callback) {
        $.ajax({
              url: damerino_server_address + 'smile',
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };



       ext.camera = function(set, callback) {
        $.ajax({
              url: damerino_server_address + 'camera%23'+set,
              type: 'GET',
//              success: function() {
//                  callback(data);
  //            }
        });
    };

       ext.standby = function(callback) {
        $.ajax({
              url: damerino_server_address + 'standby',
              type: 'GET',
  //            success: function() {
//                  callback(data);
//              }
        });
    };

       ext.servos_off = function(callback) {
        $.ajax({
              url: damerino_server_address + 'servos_off',
              type: 'GET',
//              success: function() {
//                  callback(data);
  //            }
        });
    };


       ext.speaking = function(set, callback) {
              var ist;
              if(set=='on') ist = 'speak';
              else ist = 'stop_speaking';
        $.ajax({
              url: damerino_server_address + ist,
              type: 'GET',
//              success: function() {
//                  callback(data);
  //            }
        });
    };

       ext.sync_randeyes = function(callback) {
        $.ajax({
              url: damerino_server_address + 'sync_randeyes',
              type: 'GET',
//              success: function() {
//                  callback(data);
  //            }
        });
    };


       ext.takepicture = function(callback) {
        $.ajax({
              url: damerino_server_address + 'takepicture',
              type: 'GET',
//              success: function() {
//                  callback(data);
  //            }
        });
    };

       ext.timed_mood = function(expression, callback) {
        $.ajax({
              url: damerino_server_address + 'mood%23' + expression,
              type: 'GET',
              success: function() {
//                  callback(data);
              }
        });
    };

    ext.tracking = function(status, reverse_status, callback) {
        $.ajax({
              url: damerino_server_address + 'tracking%23'+status+'%23'+reverse_status,
              type: 'GET',
              success: function() {
//                  callback(data);
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

    ext.rgb_eye_color = function(r,g,b,callback) {
        $.ajax({
              url: damerino_server_address + 'rgb_eye_color%23'+r+'%23'+g+'%23'+b,
              type: 'GET',
//              success: function(data) {
 //                 callback(data);
  //            }
        });
    };

    ext.say = function(text, language, pitch, rate, callback) {
        $.ajax({
              url: damerino_server_address + 'say%23'+text+'%23'+language+'%23'+pitch+'%23'+rate+'%23no%23yes',
              type: 'GET',
//              success: function(data) {
  //                callback(data);
    //          }
        });
    };
    
    ext.set_var = function(name, value, callback) {
        $.ajax({
              url: damerino_server_address + 'set_var'+'%23'+name+'%23'+value,
              type: 'GET',
//              success: function(data) {
  //                callback(data);
    //          }
        });
    };

    ext.check_subject = function(callback) {
        $.ajax({
              url: damerino_server_address + 'check_subject',
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };

    ext.get_var = function(name, callback) {
        $.ajax({
              url: damerino_server_address + 'get_var' + '%23' + name,
              type: 'GET',
              success: function(data) {
                  callback(data);
              }
        });
    };

    ext.set_subject = function(subject, callback) {
        $.ajax({
              url: damerino_server_address + 'set_subject' + '%23' + subject,
              type: 'GET',
//              success: function(data) {
 //                 callback(data);
  //            }
        });
    };

    //%s string %n numeroPITCH#RATE#ASYNC#LABIAL
    var descriptor = {
        blocks: [
            [' ', 'say %s language %m.lan_tts pitch %n rate %n', 'say', 'I\'m Damerino', 'en', '1.0', '1.0'],
            [' ', 'camera %m.on_off', 'camera', 'on'],
            [' ', 'tracking %m.on_off reverse %m.on_off', 'tracking', 'on', 'off'],
            ['R', 'listen language %m.lan_asr', 'listen', 'en'],
            ['R', 'read analog pin %m.pins', 'read', '1'],
            ['R', 'cloud %s', 'cloud', 'ciao'],
            ['R', 'face check', 'face'],
            ['R', 'smile check', 'smile'],
            ['R', 'face coordinate %m.xy', 'face_xy', 'x'],
            ['R', 'face size %m.size', 'face_size', 'width'],
            ['R', 'eyes close check', 'eyes'],
            ['R', 'eyes close check %m.rl', 'eye', 'right'],
            ['R', 'TEAM check subject', 'check_subject'],
            ['R', 'TEAM get variable %s', 'get_var', ''],
            [' ', 'standby', 'standby'],
            [' ', 'speaking %m.on_off', 'speaking', 'on'],
            [' ', 'servos off', 'servos_off'],
            [' ', 'random movement', 'sync_randeyes'],
            [' ', 'takepicture', 'takepicture'],
            [' ', 'classic mood %m.expressions', 'timed_mood', 'happy'],
            [' ', 'rgb eye color red %n green %n blue %n', 'rgb_eye_color', '255', '0', '0'],
            [' ', 'TEAM set variable name %s value %s', 'set_var', '', ''],
            [' ', 'TEAMff ['--'] set subject %s', 'set_subject', '']
        ],
        menus: {
        on_off: ['on','off'],
        lan_asr: ['en','it','de','fr','es'],
        lan_tts: ['en','it','de','fr','es'],
        pins: ['1','2','3','4','5','6'],
        expression: ['normal','happy','sad','','',''],
        xy: ['x','y'],
        size: ['width','height'],
        rl: ['right','left']
    },
    url: 'http://mecwilly.it/damerino',
    displayName: 'Damerino Robot 3.0'
    };

    // Register the extension
    ScratchExtensions.register('Damerino robot extension', descriptor, ext);
})({});
