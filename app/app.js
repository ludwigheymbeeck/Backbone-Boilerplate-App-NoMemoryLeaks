/**
 * @desc        app globals
 */
DEBUG = false;

if (typeof DEBUG === 'undefined') DEBUG = true;

BASE = '/app';
VERSION = 'v1.0.0';
HOSTURL = 'http://planetva.com';

USERMODE = "advanced";
HEADERVIEW = null;
CURRENTVIEW = null;
FOOTERVIEW = null;

if (window.location.hostname=='localhost') {
    API = 'http://localhost/api/v1/appaccount';
    ROOT = "/pvasite"+BASE+"/appname/"+VERSION+"/appname/app/";
    APPROOT = 'localhost/pvasite/vmr';
} else {
    API = 'http://planetva.com/api/v1/appname';
    var url = document.URL;
    ROOT = url.substring(0, url.lastIndexOf("/"));
    ROOT = ROOT+"/";
    APPROOT = 'planetva.com';
}

// Mobile/Desktop Detection script
DEVICE = "desktop";
(function(ua, w, d, undefined) {
    // alert("ua is:"+ua);
    // Mobile/Tablet Logic
    if((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua)) {
      // alert("mobile detected!");
      DEVICE = "mobile";
      if((/Android/).test(ua)) {
        // alert("Android detected!");
        DEVICE = "android";
      }
      else if((/iPad/).test(ua)) {
        // alert("iPad detected!");
        DEVICE = "ipad";
      }
    }
    else {
      // alert("desktop detected!");
      DEVICE = "desktop";
    }
})(navigator.userAgent || navigator.vendor || window.opera, window, document);
 
define([
    "jquery",
    "underscore",
    "backbone"
],
function($, _, Backbone) {

    var app = {

        API : API,
        DEVICE : DEVICE,
        USERMODE: USERMODE,
        VERSION: VERSION,

        HEADERVIEW: HEADERVIEW,
        CURRENTVIEW: CURRENTVIEW,
        FOOTERVIEW: FOOTERVIEW,
        
        showMessage: function(title, message, onConfirm, buttonConfirmText, buttonCancelText) {
            if(onConfirm){
                var buttonConfirm, buttonCancel;
                if(buttonConfirmText) buttonConfirm = buttonConfirmText;
                else buttonConfirm = "OK";
                if(buttonCancelText) buttonCancel = buttonCancelText;
                else buttonCancel = "Cancel";
                if(navigator.notification){
                    navigator.notification.confirm(
                        message, // message
                        onConfirm,//app.confirmCallback,  // callback to invoke with index of button pressed
                        title,           // title
                        [buttonConfirmText,buttonCancelText]         // buttonLabels
                    );
                } else {
                    // alert(title? (title + ': ' + message) :message);
                    var reply = window.confirm(title? (title + ': ' + message) :message);
                    onConfirm(reply);
                    if(reply === true) {
                        // onConfirm(buttonConfirmText);
                        onConfirm(1); // buttonConfirm pressed
                    } else {
                        // app.confirmCallback("You pressed Cancel!");
                        // onConfirm(buttonCancelText);
                        onConfirm(2); // buttonCancel pressed
                    }
                }
            } else {
                if(navigator.notification){
                    navigator.notification.alert(
                        message, // message
                        null,  // callback to invoke with index of button pressed
                        title,           // title
                        'OK'         // buttonLabels
                    );
                } else {
                    window.alert(title? (title + ': ' + message) :message);
                }
            }
        }

    };

    return app;
});
