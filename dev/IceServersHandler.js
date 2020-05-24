// IceServersHandler.js

var IceServersHandler = (function() {
    function getIceServers(connection) {
        var iceServers = [];

        iceServers.push(getSTUNObj('stun:stun.l.google.com:19302'));

<<<<<<< HEAD
        // iceServers.push(getTURNObj('stun:webrtcweb.com:7788', 'muazkh', 'muazkh')); // coTURN
        iceServers.push(getTURNObj('turn:webrtcweb.com:7788', 'muazkh', 'muazkh')); // coTURN
        // iceServers.push(getTURNObj('turn:webrtcweb.com:8877', 'muazkh', 'muazkh')); // coTURN

        if (!(typeof window.InstallTrigger !== 'undefined')) {
            // Firefox doesn't supports "turns:" yet.
            iceServers.push(getTURNObj('turns:webrtcweb.com:7788', 'muazkh', 'muazkh')); // coTURN
        }
        // iceServers.push(getTURNObj('turns:webrtcweb.com:8877', 'muazkh', 'muazkh')); // coTURN
=======
        iceServers.push(getTURNObj('stun:webrtcweb.com:7788', 'muazkh', 'muazkh')); // coTURN
        iceServers.push(getTURNObj('turn:webrtcweb.com:7788', 'muazkh', 'muazkh')); // coTURN
        iceServers.push(getTURNObj('turn:webrtcweb.com:8877', 'muazkh', 'muazkh')); // coTURN

        iceServers.push(getTURNObj('turns:webrtcweb.com:7788', 'muazkh', 'muazkh')); // coTURN
        iceServers.push(getTURNObj('turns:webrtcweb.com:8877', 'muazkh', 'muazkh')); // coTURN
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

        // iceServers.push(getTURNObj('turn:webrtcweb.com:3344', 'muazkh', 'muazkh')); // resiprocate
        // iceServers.push(getTURNObj('turn:webrtcweb.com:4433', 'muazkh', 'muazkh')); // resiprocate

        // check if restund is still active: http://webrtcweb.com:4050/
<<<<<<< HEAD
        // iceServers.push(getTURNObj('stun:webrtcweb.com:4455', 'muazkh', 'muazkh')); // restund
        iceServers.push(getTURNObj('turn:webrtcweb.com:4455', 'muazkh', 'muazkh')); // restund
        // iceServers.push(getTURNObj('turn:webrtcweb.com:5544?transport=tcp', 'muazkh', 'muazkh')); // restund
=======
        iceServers.push(getTURNObj('stun:webrtcweb.com:4455', 'muazkh', 'muazkh')); // restund
        iceServers.push(getTURNObj('turn:webrtcweb.com:4455', 'muazkh', 'muazkh')); // restund
        iceServers.push(getTURNObj('turn:webrtcweb.com:5544?transport=tcp', 'muazkh', 'muazkh')); // restund
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

        return iceServers;
    }

    function getSTUNObj(stunStr) {
        var urlsParam = 'urls';
<<<<<<< HEAD
=======
        if (typeof isPluginRTC !== 'undefined') {
            urlsParam = 'url';
        }

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        var obj = {};
        obj[urlsParam] = stunStr;
        return obj;
    }

    function getTURNObj(turnStr, username, credential) {
        var urlsParam = 'urls';
<<<<<<< HEAD
=======
        if (typeof isPluginRTC !== 'undefined') {
            urlsParam = 'url';
        }

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        var obj = {
            username: username,
            credential: credential
        };
        obj[urlsParam] = turnStr;
        return obj;
    }

    return {
        getIceServers: getIceServers
    };
})();
