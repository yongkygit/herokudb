<<<<<<< HEAD
// getUserMediaHandler.js

function setStreamType(constraints, stream) {
    if (constraints.mandatory && constraints.mandatory.chromeMediaSource) {
        stream.isScreen = true;
    } else if (constraints.mozMediaSource || constraints.mediaSource) {
        stream.isScreen = true;
    } else if (constraints.video) {
        stream.isVideo = true;
    } else if (constraints.audio) {
        stream.isAudio = true;
    }
}

// allow users to manage this object (to support re-capturing of screen/etc.)
window.currentUserMediaRequest = {
    streams: [],
    mutex: false,
    queueRequests: [],
    remove: function(idInstance) {
        this.mutex = false;

        var stream = this.streams[idInstance];
        if (!stream) {
            return;
        }

        stream = stream.stream;

        var options = stream.currentUserMediaRequestOptions;

        if (this.queueRequests.indexOf(options)) {
            delete this.queueRequests[this.queueRequests.indexOf(options)];
            this.queueRequests = removeNullEntries(this.queueRequests);
        }

        this.streams[idInstance].stream = null;
        delete this.streams[idInstance];
    }
};

function getUserMediaHandler(options) {
=======
var defaultConstraints = {
    mandatory: {},
    optional: []
};

/* by @FreCap pull request #41 */
var currentUserMediaRequest = {
    streams: [],
    mutex: false,
    queueRequests: []
};

function getUserMedia(options) {
    if (isPluginRTC) {
        if (!Plugin.getUserMedia) {
            setTimeout(function() {
                getUserMedia(options);
            }, 1000);
            return;
        }

        return Plugin.getUserMedia(options.constraints || {
            audio: true,
            video: true
        }, options.onsuccess, options.onerror);
    }

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
    if (currentUserMediaRequest.mutex === true) {
        currentUserMediaRequest.queueRequests.push(options);
        return;
    }
    currentUserMediaRequest.mutex = true;

<<<<<<< HEAD
    // easy way to match
    var idInstance = JSON.stringify(options.localMediaConstraints);

    function streaming(stream, returnBack) {
        setStreamType(options.localMediaConstraints, stream);
        options.onGettingLocalMedia(stream, returnBack);

        var streamEndedEvent = 'ended';

        if ('oninactive' in stream) {
            streamEndedEvent = 'inactive';
        }
        stream.addEventListener(streamEndedEvent, function() {
            delete currentUserMediaRequest.streams[idInstance];

            currentUserMediaRequest.mutex = false;
            if (currentUserMediaRequest.queueRequests.indexOf(options)) {
                delete currentUserMediaRequest.queueRequests[currentUserMediaRequest.queueRequests.indexOf(options)];
                currentUserMediaRequest.queueRequests = removeNullEntries(currentUserMediaRequest.queueRequests);
            }
        }, false);

        currentUserMediaRequest.streams[idInstance] = {
            stream: stream
        };
        currentUserMediaRequest.mutex = false;

        if (currentUserMediaRequest.queueRequests.length) {
            getUserMediaHandler(currentUserMediaRequest.queueRequests.shift());
        }
    }

    if (currentUserMediaRequest.streams[idInstance]) {
        streaming(currentUserMediaRequest.streams[idInstance].stream, true);
    } else {
        var isBlackBerry = !!(/BB10|BlackBerry/i.test(navigator.userAgent || ''));
        if (isBlackBerry || typeof navigator.mediaDevices === 'undefined' || typeof navigator.mediaDevices.getUserMedia !== 'function') {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            navigator.getUserMedia(options.localMediaConstraints, function(stream) {
                stream.streamid = stream.streamid || stream.id || getRandomString();
                stream.idInstance = idInstance;
                streaming(stream);
            }, function(error) {
                options.onLocalMediaError(error, options.localMediaConstraints);
            });
            return;
        }

        if (DetectRTC.browser.name === 'Safari') {
            if (options.localMediaConstraints.audio !== false) {
                options.localMediaConstraints.audio = true;
            }

            if (options.localMediaConstraints.video !== false) {
                options.localMediaConstraints.video = true;
            }
        }

        navigator.mediaDevices.getUserMedia(options.localMediaConstraints).then(function(stream) {
            stream.streamid = stream.streamid || stream.id || getRandomString();
            stream.idInstance = idInstance;
            streaming(stream);
        }).catch(function(error) {
            if (DetectRTC.browser.name === 'Safari') {
                return;
            }
            options.onLocalMediaError(error, options.localMediaConstraints);
=======
    var connection = options.connection;

    var n = navigator;
    var hints = connection.mediaConstraints;

    // connection.mediaConstraints always overrides constraints
    // passed from "captureUserMedia" function.
    // todo: need to verify all possible situations
    log('invoked getUserMedia with constraints:', toStr(hints));

    // easy way to match
    var idInstance = JSON.stringify(hints);

    function streaming(stream, returnBack, streamid) {
        if (!streamid) streamid = getRandomString();

        // localStreams object will store stream
        // until it is removed using native-stop method.
        connection.localStreams[streamid] = stream;

        var video = options.video;
        if (video) {
            video[isFirefox ? 'mozSrcObject' : 'src'] = isFirefox ? stream : (window.URL || window.webkitURL).createObjectURL(stream);
            video.play();
        }

        options.onsuccess(stream, returnBack, idInstance, streamid);
        currentUserMediaRequest.streams[idInstance] = {
            stream: stream,
            streamid: streamid
        };
        currentUserMediaRequest.mutex = false;
        if (currentUserMediaRequest.queueRequests.length)
            getUserMedia(currentUserMediaRequest.queueRequests.shift());
    }

    if (currentUserMediaRequest.streams[idInstance]) {
        streaming(currentUserMediaRequest.streams[idInstance].stream, true, currentUserMediaRequest.streams[idInstance].streamid);
    } else {
        n.getMedia = n.webkitGetUserMedia || n.mozGetUserMedia;

        // http://goo.gl/eETIK4
        n.getMedia(hints, streaming, function(error) {
            options.onerror(error, hints);
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        });
    }
}
