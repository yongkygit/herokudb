<<<<<<< HEAD
// Last time updated: 2017-04-29 7:05:22 AM UTC
=======
// Last time updated at Sep 25, 2015, 08:32:23
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

// Latest file can be found here: https://cdn.webrtc-experiment.com/DetectRTC.js

// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// Documentation - github.com/muaz-khan/DetectRTC
// ____________
// DetectRTC.js

// DetectRTC.hasWebcam (has webcam device!)
// DetectRTC.hasMicrophone (has microphone device!)
// DetectRTC.hasSpeakers (has speakers!)

(function() {

    'use strict';

<<<<<<< HEAD
    var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

    var isNodejs = typeof process === 'object' && typeof process.versions === 'object' && process.versions.node;
    if (isNodejs) {
        var version = process.versions.node.toString().replace('v', '');
        browserFakeUserAgent = 'Nodejs/' + version + ' (NodeOS) AppleWebKit/' + version + ' (KHTML, like Gecko) Nodejs/' + version + ' Nodejs/' + version
    }

    (function(that) {
        if (typeof window !== 'undefined') {
            return;
        }

        if (typeof window === 'undefined' && typeof global !== 'undefined') {
            global.navigator = {
                userAgent: browserFakeUserAgent,
                getUserMedia: function() {}
            };

            /*global window:true */
            that.window = global;
        } else if (typeof window === 'undefined') {
            // window = this;
        }

        if (typeof document === 'undefined') {
            /*global document:true */
            that.document = {};

            document.createElement = document.captureStream = document.mozCaptureStream = function() {
                return {};
            };
        }

        if (typeof location === 'undefined') {
            /*global location:true */
            that.location = {
                protocol: 'file:',
                href: '',
                hash: ''
            };
        }

        if (typeof screen === 'undefined') {
            /*global screen:true */
            that.screen = {
                width: 0,
                height: 0
            };
        }
    })(typeof global !== 'undefined' ? global : window);

    /*global navigator:true */
    var navigator = window.navigator;

=======
    var navigator = window.navigator;

    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        // Firefox 38+ seems having support of enumerateDevices
        // Thanks @xdumaine/enumerateDevices
        navigator.enumerateDevices = function(callback) {
            navigator.mediaDevices.enumerateDevices().then(callback);
        };
    }

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
    if (typeof navigator !== 'undefined') {
        if (typeof navigator.webkitGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.webkitGetUserMedia;
        }

        if (typeof navigator.mozGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.mozGetUserMedia;
        }
    } else {
        navigator = {
<<<<<<< HEAD
            getUserMedia: function() {},
            userAgent: browserFakeUserAgent
        };
    }

    var isMobileDevice = !!(/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent || ''));

    var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);

    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof window.InstallTrigger !== 'undefined';
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var isChrome = !!window.chrome && !isOpera;
    var isIE = !!document.documentMode && !isEdge;

=======
            getUserMedia: function() {}
        };
    }

    var isMobileDevice = !!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i);
    var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
    // this one can also be used:
    // https://www.websocket.org/js/stuff.js (DetectBrowser.js)

    function getBrowserInfo() {
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browserName = navigator.appName;
        var fullVersion = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // In Opera, the true version is after 'Opera' or after 'Version'
<<<<<<< HEAD
        if (isOpera) {
            browserName = 'Opera';
            try {
                fullVersion = navigator.userAgent.split('OPR/')[1].split(' ')[0];
                majorVersion = fullVersion.split('.')[0];
            } catch (e) {
                fullVersion = '0.0.0.0';
                majorVersion = 0;
            }
        }
        // In MSIE, the true version is after 'MSIE' in userAgent
        else if (isIE) {
            verOffset = nAgt.indexOf('MSIE');
            browserName = 'IE';
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // In Chrome, the true version is after 'Chrome' 
        else if (isChrome) {
            verOffset = nAgt.indexOf('Chrome');
            browserName = 'Chrome';
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // In Safari, the true version is after 'Safari' or after 'Version' 
        else if (isSafari) {
            verOffset = nAgt.indexOf('Safari');
=======
        if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
            browserName = 'Opera';
            fullVersion = nAgt.substring(verOffset + 6);

            if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                fullVersion = nAgt.substring(verOffset + 8);
            }
        }
        // In MSIE, the true version is after 'MSIE' in userAgent
        else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
            browserName = 'IE';
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // In Chrome, the true version is after 'Chrome'
        else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
            browserName = 'Chrome';
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // In Safari, the true version is after 'Safari' or after 'Version'
        else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
            browserName = 'Safari';
            fullVersion = nAgt.substring(verOffset + 7);

            if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                fullVersion = nAgt.substring(verOffset + 8);
            }
        }
<<<<<<< HEAD
        // In Firefox, the true version is after 'Firefox' 
        else if (isFirefox) {
            verOffset = nAgt.indexOf('Firefox');
=======
        // In Firefox, the true version is after 'Firefox'
        else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
            browserName = 'Firefox';
            fullVersion = nAgt.substring(verOffset + 8);
        }

<<<<<<< HEAD
        // In most other browsers, 'name/version' is at the end of userAgent 
=======
        // In most other browsers, 'name/version' is at the end of userAgent
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);

            if (browserName.toLowerCase() === browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }

        if (isEdge) {
            browserName = 'Edge';
            // fullVersion = navigator.userAgent.split('Edge/')[1];
<<<<<<< HEAD
            fullVersion = parseInt(navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)[2], 10).toString();
=======
            fullVersion = parseInt(navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)[2], 10);
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        }

        // trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(';')) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }

        if ((ix = fullVersion.indexOf(' ')) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }

        majorVersion = parseInt('' + fullVersion, 10);

        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        return {
            fullVersion: fullVersion,
            version: majorVersion,
<<<<<<< HEAD
            name: browserName,
            isPrivateBrowsing: false
        };
    }

    // via: https://gist.github.com/cou929/7973956

    function retry(isDone, next) {
        var currentTrial = 0,
            maxRetry = 50,
            interval = 10,
            isTimeout = false;
        var id = window.setInterval(
            function() {
                if (isDone()) {
                    window.clearInterval(id);
                    next(isTimeout);
                }
                if (currentTrial++ > maxRetry) {
                    window.clearInterval(id);
                    isTimeout = true;
                    next(isTimeout);
                }
            },
            10
        );
    }

    function isIE10OrLater(userAgent) {
        var ua = userAgent.toLowerCase();
        if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
            return false;
        }
        var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
        if (match && parseInt(match[1], 10) >= 10) {
            return true;
        }
        return false;
    }

    function detectPrivateMode(callback) {
        var isPrivate;

        try {

            if (window.webkitRequestFileSystem) {
                window.webkitRequestFileSystem(
                    window.TEMPORARY, 1,
                    function() {
                        isPrivate = false;
                    },
                    function(e) {
                        isPrivate = true;
                    }
                );
            } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
                var db;
                try {
                    db = window.indexedDB.open('test');
                    db.onerror = function() {
                        return true;
                    };
                } catch (e) {
                    isPrivate = true;
                }

                if (typeof isPrivate === 'undefined') {
                    retry(
                        function isDone() {
                            return db.readyState === 'done' ? true : false;
                        },
                        function next(isTimeout) {
                            if (!isTimeout) {
                                isPrivate = db.result ? false : true;
                            }
                        }
                    );
                }
            } else if (isIE10OrLater(window.navigator.userAgent)) {
                isPrivate = false;
                try {
                    if (!window.indexedDB) {
                        isPrivate = true;
                    }
                } catch (e) {
                    isPrivate = true;
                }
            } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
                try {
                    window.localStorage.setItem('test', 1);
                } catch (e) {
                    isPrivate = true;
                }

                if (typeof isPrivate === 'undefined') {
                    isPrivate = false;
                    window.localStorage.removeItem('test');
                }
            }

        } catch (e) {
            isPrivate = false;
        }

        retry(
            function isDone() {
                return typeof isPrivate !== 'undefined' ? true : false;
            },
            function next(isTimeout) {
                callback(isPrivate);
            }
        );
    }

=======
            name: browserName
        };
    }

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
<<<<<<< HEAD
            return navigator.userAgent.match(/BlackBerry|BB10/i);
=======
            return navigator.userAgent.match(/BlackBerry/i);
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        },
        getOsName: function() {
            var osName = 'Unknown OS';
            if (isMobile.Android()) {
                osName = 'Android';
            }

            if (isMobile.BlackBerry()) {
                osName = 'BlackBerry';
            }

            if (isMobile.iOS()) {
                osName = 'iOS';
            }

            if (isMobile.Opera()) {
                osName = 'Opera Mini';
            }

            if (isMobile.Windows()) {
                osName = 'Windows';
            }

            return osName;
        }
    };

<<<<<<< HEAD
    // via: http://jsfiddle.net/ChristianL/AVyND/
    function detectDesktopOS() {
        var unknown = '-';

        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;

        var os = unknown;
        var clientStrings = [{
            s: 'Windows 10',
            r: /(Windows 10.0|Windows NT 10.0)/
        }, {
            s: 'Windows 8.1',
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: 'Windows 8',
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: 'Windows 7',
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: 'Windows Vista',
            r: /Windows NT 6.0/
        }, {
            s: 'Windows Server 2003',
            r: /Windows NT 5.2/
        }, {
            s: 'Windows XP',
            r: /(Windows NT 5.1|Windows XP)/
        }, {
            s: 'Windows 2000',
            r: /(Windows NT 5.0|Windows 2000)/
        }, {
            s: 'Windows ME',
            r: /(Win 9x 4.90|Windows ME)/
        }, {
            s: 'Windows 98',
            r: /(Windows 98|Win98)/
        }, {
            s: 'Windows 95',
            r: /(Windows 95|Win95|Windows_95)/
        }, {
            s: 'Windows NT 4.0',
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
        }, {
            s: 'Windows CE',
            r: /Windows CE/
        }, {
            s: 'Windows 3.11',
            r: /Win16/
        }, {
            s: 'Android',
            r: /Android/
        }, {
            s: 'Open BSD',
            r: /OpenBSD/
        }, {
            s: 'Sun OS',
            r: /SunOS/
        }, {
            s: 'Linux',
            r: /(Linux|X11)/
        }, {
            s: 'iOS',
            r: /(iPhone|iPad|iPod)/
        }, {
            s: 'Mac OS X',
            r: /Mac OS X/
        }, {
            s: 'Mac OS',
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }, {
            s: 'QNX',
            r: /QNX/
        }, {
            s: 'UNIX',
            r: /UNIX/
        }, {
            s: 'BeOS',
            r: /BeOS/
        }, {
            s: 'OS/2',
            r: /OS\/2/
        }, {
            s: 'Search Bot',
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
        }];
        for (var i = 0, cs; cs = clientStrings[i]; i++) {
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            if (/Windows (.*)/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
            }
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                if (/Mac OS X (10[\.\_\d]+)/.test(nAgt)) {
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                }
                break;
            case 'Android':
                if (/Android ([\.\_\d]+)/.test(nAgt)) {
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                }
                break;
            case 'iOS':
                if (/OS (\d+)_(\d+)_?(\d+)?/.test(nAgt)) {
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                }
                break;
        }

        return {
            osName: os,
            osVersion: osVersion
        };
    }

    var osName = 'Unknown OS';
    var osVersion = 'Unknown OS Version';

    function getAndroidVersion(ua) {
        ua = (ua || navigator.userAgent).toLowerCase();
        var match = ua.match(/android\s([0-9\.]*)/);
        return match ? match[1] : false;
    }

    var osInfo = detectDesktopOS();

    if (osInfo && osInfo.osName && osInfo.osName != '-') {
        osName = osInfo.osName;
        osVersion = osInfo.osVersion;
    } else if (isMobile.any()) {
        osName = isMobile.getOsName();

        if (osName == 'Android') {
            osVersion = getAndroidVersion();
        }
    }

    var isNodejs = typeof process === 'object' && typeof process.versions === 'object' && process.versions.node;

    if (osName === 'Unknown OS' && isNodejs) {
        osName = 'Nodejs';
        osVersion = process.versions.node.toString().replace('v', '');
    }
=======
    var osName = 'Unknown OS';

    if (isMobile.any()) {
        osName = isMobile.getOsName();
    } else {
        if (navigator.appVersion.indexOf('Win') !== -1) {
            osName = 'Windows';
        }

        if (navigator.appVersion.indexOf('Mac') !== -1) {
            osName = 'MacOS';
        }

        if (navigator.appVersion.indexOf('X11') !== -1) {
            osName = 'UNIX';
        }

        if (navigator.appVersion.indexOf('Linux') !== -1) {
            osName = 'Linux';
        }
    }

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

    var isCanvasSupportsStreamCapturing = false;
    var isVideoSupportsStreamCapturing = false;
    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
<<<<<<< HEAD
        if (!isCanvasSupportsStreamCapturing && item in document.createElement('canvas')) {
            isCanvasSupportsStreamCapturing = true;
        }

        if (!isVideoSupportsStreamCapturing && item in document.createElement('video')) {
=======
        // asdf
        if (item in document.createElement('canvas')) {
            isCanvasSupportsStreamCapturing = true;
        }

        if (item in document.createElement('video')) {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
            isVideoSupportsStreamCapturing = true;
        }
    });

    // via: https://github.com/diafygi/webrtc-ips
    function DetectLocalIPAddress(callback) {
<<<<<<< HEAD
        if (!DetectRTC.isWebRTCSupported) {
            return;
        }

        if (DetectRTC.isORTCSupported) {
            return;
        }

=======
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        getIPs(function(ip) {
            //local IPs
            if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
                callback('Local: ' + ip);
            }

            //assume the rest are public IPs
            else {
                callback('Public: ' + ip);
            }
        });
    }

    //get the IP addresses associated with an account
    function getIPs(callback) {
        var ipDuplicates = {};

        //compatibility for firefox and chrome
        var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        var useWebKit = !!window.webkitRTCPeerConnection;

        // bypass naive webrtc blocking using an iframe
        if (!RTCPeerConnection) {
            var iframe = document.getElementById('iframe');
            if (!iframe) {
                //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
                throw 'NOTE: you need to have an iframe in the page right above the script tag.';
            }
            var win = iframe.contentWindow;
            RTCPeerConnection = win.RTCPeerConnection || win.mozRTCPeerConnection || win.webkitRTCPeerConnection;
            useWebKit = !!win.webkitRTCPeerConnection;
        }

<<<<<<< HEAD
        // if still no RTCPeerConnection then it is not supported by the browser so just return
        if (!RTCPeerConnection) {
            return;
        }

=======
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        //minimal requirements for data connection
        var mediaConstraints = {
            optional: [{
                RtpDataChannels: true
            }]
        };

        //firefox already has a default stun server in about:config
        //    media.peerconnection.default_iceservers =
        //    [{"url": "stun:stun.services.mozilla.com"}]
        var servers;

        //add same stun server for chrome
        if (useWebKit) {
            servers = {
                iceServers: [{
                    urls: 'stun:stun.services.mozilla.com'
                }]
            };

            if (typeof DetectRTC !== 'undefined' && DetectRTC.browser.isFirefox && DetectRTC.browser.version <= 38) {
                servers[0] = {
                    url: servers[0].urls
                };
            }
        }

        //construct a new RTCPeerConnection
        var pc = new RTCPeerConnection(servers, mediaConstraints);

        function handleCandidate(candidate) {
            //match just the IP address
            var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
<<<<<<< HEAD
            var match = ipRegex.exec(candidate);
            if (!match) {
                console.warn('Could not match IP address in', candidate);
                return;
            }
            var ipAddress = match[1];
=======
            var ipAddress = ipRegex.exec(candidate)[1];
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

            //remove duplicates
            if (ipDuplicates[ipAddress] === undefined) {
                callback(ipAddress);
            }

            ipDuplicates[ipAddress] = true;
        }

        //listen for candidate events
        pc.onicecandidate = function(ice) {
            //skip non-candidate events
            if (ice.candidate) {
                handleCandidate(ice.candidate.candidate);
            }
        };

        //create a bogus data channel
        pc.createDataChannel('');

        //create an offer sdp
        pc.createOffer(function(result) {

            //trigger the stun server request
            pc.setLocalDescription(result, function() {}, function() {});

        }, function() {});

        //wait for a while to let everything done
        setTimeout(function() {
            //read candidate info from local description
            var lines = pc.localDescription.sdp.split('\n');

            lines.forEach(function(line) {
                if (line.indexOf('a=candidate:') === 0) {
                    handleCandidate(line);
                }
            });
        }, 1000);
    }

    var MediaDevices = [];

<<<<<<< HEAD
    var audioInputDevices = [];
    var audioOutputDevices = [];
    var videoInputDevices = [];

    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        // Firefox 38+ seems having support of enumerateDevices
        // Thanks @xdumaine/enumerateDevices
        navigator.enumerateDevices = function(callback) {
            navigator.mediaDevices.enumerateDevices().then(callback).catch(function() {
                callback([]);
            });
        };
    }

    // Media Devices detection
=======
    // ---------- Media Devices detection
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
    var canEnumerate = false;

    /*global MediaStreamTrack:true */
    if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
        canEnumerate = true;
    } else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
        canEnumerate = true;
    }

<<<<<<< HEAD
    var hasMicrophone = false;
    var hasSpeakers = false;
    var hasWebcam = false;

    var isWebsiteHasMicrophonePermissions = false;
    var isWebsiteHasWebcamPermissions = false;

    // http://dev.w3.org/2011/webrtc/editor/getusermedia.html#mediadevices
    function checkDeviceSupport(callback) {
        if (!canEnumerate) {
            if (callback) {
                callback();
            }
            return;
        }
=======
    var hasMicrophone = canEnumerate;
    var hasSpeakers = canEnumerate;
    var hasWebcam = canEnumerate;

    // http://dev.w3.org/2011/webrtc/editor/getusermedia.html#mediadevices
    // todo: switch to enumerateDevices when landed in canary.
    function checkDeviceSupport(callback) {
        // This method is useful only for Chrome!
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

        if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
            navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
        }

        if (!navigator.enumerateDevices && navigator.enumerateDevices) {
            navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
        }

        if (!navigator.enumerateDevices) {
            if (callback) {
                callback();
            }
            return;
        }

        MediaDevices = [];
<<<<<<< HEAD

        audioInputDevices = [];
        audioOutputDevices = [];
        videoInputDevices = [];

        isWebsiteHasMicrophonePermissions = false;
        isWebsiteHasWebcamPermissions = false;

        // to prevent duplication
        var alreadyUsedDevices = {};

=======
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        navigator.enumerateDevices(function(devices) {
            devices.forEach(function(_device) {
                var device = {};
                for (var d in _device) {
<<<<<<< HEAD
                    try {
                        if (typeof _device[d] !== 'function') {
                            device[d] = _device[d];
                        }
                    } catch (e) {}
                }

                if (alreadyUsedDevices[device.deviceId + device.label]) {
=======
                    device[d] = _device[d];
                }

                var skip;
                MediaDevices.forEach(function(d) {
                    if (d.id === device.id) {
                        skip = true;
                    }
                });

                if (skip) {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
                    return;
                }

                // if it is MediaStreamTrack.getSources
                if (device.kind === 'audio') {
                    device.kind = 'audioinput';
                }

                if (device.kind === 'video') {
                    device.kind = 'videoinput';
                }

                if (!device.deviceId) {
                    device.deviceId = device.id;
                }

                if (!device.id) {
                    device.id = device.deviceId;
                }

                if (!device.label) {
                    device.label = 'Please invoke getUserMedia once.';
<<<<<<< HEAD
                    if (DetectRTC.browser.isChrome && DetectRTC.browser.version >= 46 && !/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
                        if (document.domain.search && document.domain.search(/localhost|127.0./g) === -1) {
                            device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
                        }
                    }
                } else {
                    if (device.kind === 'videoinput' && !isWebsiteHasWebcamPermissions) {
                        isWebsiteHasWebcamPermissions = true;
                    }

                    if (device.kind === 'audioinput' && !isWebsiteHasMicrophonePermissions) {
                        isWebsiteHasMicrophonePermissions = true;
                    }
                }

                if (device.kind === 'audioinput') {
                    hasMicrophone = true;

                    if (audioInputDevices.indexOf(device) === -1) {
                        audioInputDevices.push(device);
                    }
=======
                    if (!isHTTPs) {
                        device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
                    }
                }

                if (device.kind === 'audioinput' || device.kind === 'audio') {
                    hasMicrophone = true;
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
                }

                if (device.kind === 'audiooutput') {
                    hasSpeakers = true;
<<<<<<< HEAD

                    if (audioOutputDevices.indexOf(device) === -1) {
                        audioOutputDevices.push(device);
                    }
                }

                if (device.kind === 'videoinput') {
                    hasWebcam = true;

                    if (videoInputDevices.indexOf(device) === -1) {
                        videoInputDevices.push(device);
                    }
                }

                // there is no 'videoouput' in the spec.
                MediaDevices.push(device);

                alreadyUsedDevices[device.deviceId + device.label] = device;
            });

            if (typeof DetectRTC !== 'undefined') {
                // to sync latest outputs
=======
                }

                if (device.kind === 'videoinput' || device.kind === 'video') {
                    hasWebcam = true;
                }

                // there is no 'videoouput' in the spec.

                MediaDevices.push(device);
            });

            if (typeof DetectRTC !== 'undefined') {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
                DetectRTC.MediaDevices = MediaDevices;
                DetectRTC.hasMicrophone = hasMicrophone;
                DetectRTC.hasSpeakers = hasSpeakers;
                DetectRTC.hasWebcam = hasWebcam;
<<<<<<< HEAD

                DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions;
                DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions;

                DetectRTC.audioInputDevices = audioInputDevices;
                DetectRTC.audioOutputDevices = audioOutputDevices;
                DetectRTC.videoInputDevices = videoInputDevices;
=======
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
            }

            if (callback) {
                callback();
            }
        });
    }

    // check for microphone/camera support!
    checkDeviceSupport();

<<<<<<< HEAD
    var DetectRTC = window.DetectRTC || {};
=======
    var DetectRTC = {};
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

    // ----------
    // DetectRTC.browser.name || DetectRTC.browser.version || DetectRTC.browser.fullVersion
    DetectRTC.browser = getBrowserInfo();

<<<<<<< HEAD
    detectPrivateMode(function(isPrivateBrowsing) {
        DetectRTC.browser.isPrivateBrowsing = !!isPrivateBrowsing;
    });

    // DetectRTC.isChrome || DetectRTC.isFirefox || DetectRTC.isEdge
    DetectRTC.browser['is' + DetectRTC.browser.name] = true;

    // -----------
    DetectRTC.osName = osName;
    DetectRTC.osVersion = osVersion;

    var isNodeWebkit = typeof process === 'object' && typeof process.versions === 'object' && process.versions['node-webkit'];

    // --------- Detect if system supports WebRTC 1.0 or WebRTC 1.1.
    var isWebRTCSupported = false;
    ['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function(item) {
        if (isWebRTCSupported) {
            return;
        }

=======
    // DetectRTC.isChrome || DetectRTC.isFirefox || DetectRTC.isEdge
    DetectRTC.browser['is' + DetectRTC.browser.name] = true;

    var isHTTPs = location.protocol === 'https:';
    var isNodeWebkit = !!(window.process && (typeof window.process === 'object') && window.process.versions && window.process.versions['node-webkit']);

    // --------- Detect if system supports WebRTC 1.0 or WebRTC 1.1.
    var isWebRTCSupported = false;
    ['webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function(item) {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        if (item in window) {
            isWebRTCSupported = true;
        }
    });
    DetectRTC.isWebRTCSupported = isWebRTCSupported;

    //-------
    DetectRTC.isORTCSupported = typeof RTCIceGatherer !== 'undefined';

    // --------- Detect if system supports screen capturing API
    var isScreenCapturingSupported = false;
    if (DetectRTC.browser.isChrome && DetectRTC.browser.version >= 35) {
        isScreenCapturingSupported = true;
    } else if (DetectRTC.browser.isFirefox && DetectRTC.browser.version >= 34) {
        isScreenCapturingSupported = true;
    }

<<<<<<< HEAD
    if (!/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
        if (document.domain.search && document.domain.search(/localhost|127.0./g) === -1) {
            // DetectRTC.browser.isChrome
            isScreenCapturingSupported = false;
        }

        if (DetectRTC.browser.isFirefox) {
            isScreenCapturingSupported = false;
        }
=======
    if (!isHTTPs) {
        isScreenCapturingSupported = false;
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
    }
    DetectRTC.isScreenCapturingSupported = isScreenCapturingSupported;

    // --------- Detect if WebAudio API are supported
<<<<<<< HEAD
    var webAudio = {
        isSupported: false,
        isCreateMediaStreamSourceSupported: false
    };

    ['AudioContext', 'webkitAudioContext', 'mozAudioContext', 'msAudioContext'].forEach(function(item) {
        if (webAudio.isSupported) {
            return;
        }

        if (item in window) {
            webAudio.isSupported = true;

            if (window[item] && 'createMediaStreamSource' in window[item].prototype) {
=======
    var webAudio = {};
    ['AudioContext', 'webkitAudioContext', 'mozAudioContext', 'msAudioContext'].forEach(function(item) {
        if (webAudio.isSupported && webAudio.isCreateMediaStreamSourceSupported) {
            return;
        }
        if (item in window) {
            webAudio.isSupported = true;

            if ('createMediaStreamSource' in window[item].prototype) {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
                webAudio.isCreateMediaStreamSourceSupported = true;
            }
        }
    });
    DetectRTC.isAudioContextSupported = webAudio.isSupported;
    DetectRTC.isCreateMediaStreamSourceSupported = webAudio.isCreateMediaStreamSourceSupported;

    // ---------- Detect if SCTP/RTP channels are supported.

    var isRtpDataChannelsSupported = false;
    if (DetectRTC.browser.isChrome && DetectRTC.browser.version > 31) {
        isRtpDataChannelsSupported = true;
    }
    DetectRTC.isRtpDataChannelsSupported = isRtpDataChannelsSupported;

    var isSCTPSupportd = false;
    if (DetectRTC.browser.isFirefox && DetectRTC.browser.version > 28) {
        isSCTPSupportd = true;
    } else if (DetectRTC.browser.isChrome && DetectRTC.browser.version > 25) {
        isSCTPSupportd = true;
    } else if (DetectRTC.browser.isOpera && DetectRTC.browser.version >= 11) {
        isSCTPSupportd = true;
    }
    DetectRTC.isSctpDataChannelsSupported = isSCTPSupportd;

    // ---------

    DetectRTC.isMobileDevice = isMobileDevice; // "isMobileDevice" boolean is defined in "getBrowserInfo.js"

    // ------
<<<<<<< HEAD
=======

    DetectRTC.isWebSocketsSupported = 'WebSocket' in window && 2 === window.WebSocket.CLOSING;
    DetectRTC.isWebSocketsBlocked = 'Checking';

    if (DetectRTC.isWebSocketsSupported) {
        var websocket = new WebSocket('wss://echo.websocket.org:443/');
        websocket.onopen = function() {
            DetectRTC.isWebSocketsBlocked = false;

            if (DetectRTC.loadCallback) {
                DetectRTC.loadCallback();
            }
        };
        websocket.onerror = function() {
            DetectRTC.isWebSocketsBlocked = true;

            if (DetectRTC.loadCallback) {
                DetectRTC.loadCallback();
            }
        };
    }

    // ------
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
    var isGetUserMediaSupported = false;
    if (navigator.getUserMedia) {
        isGetUserMediaSupported = true;
    } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        isGetUserMediaSupported = true;
    }
<<<<<<< HEAD

    if (DetectRTC.browser.isChrome && DetectRTC.browser.version >= 46 && !/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
        if (document.domain.search && document.domain.search(/localhost|127.0./g) === -1) {
            isGetUserMediaSupported = 'Requires HTTPs';
        }
    }

    if (DetectRTC.osName === 'Nodejs') {
        isGetUserMediaSupported = false;
    }
    DetectRTC.isGetUserMediaSupported = isGetUserMediaSupported;

    var displayResolution = '';
    if (screen.width) {
        var width = (screen.width) ? screen.width : '';
        var height = (screen.height) ? screen.height : '';
        displayResolution += '' + width + ' x ' + height;
    }
    DetectRTC.displayResolution = displayResolution;
=======
    if (DetectRTC.browser.isChrome && DetectRTC.browser.version >= 47 && !isHTTPs) {
        DetectRTC.isGetUserMediaSupported = 'Requires HTTPs';
    }
    DetectRTC.isGetUserMediaSupported = isGetUserMediaSupported;

    // -----------
    DetectRTC.osName = osName; // "osName" is defined in "detectOSName.js"
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

    // ----------
    DetectRTC.isCanvasSupportsStreamCapturing = isCanvasSupportsStreamCapturing;
    DetectRTC.isVideoSupportsStreamCapturing = isVideoSupportsStreamCapturing;

<<<<<<< HEAD
    if (DetectRTC.browser.name == 'Chrome' && DetectRTC.browser.version >= 53) {
        if (!DetectRTC.isCanvasSupportsStreamCapturing) {
            DetectRTC.isCanvasSupportsStreamCapturing = 'Requires chrome flag: enable-experimental-web-platform-features';
        }

        if (!DetectRTC.isVideoSupportsStreamCapturing) {
            DetectRTC.isVideoSupportsStreamCapturing = 'Requires chrome flag: enable-experimental-web-platform-features';
        }
    }

    // ------
    DetectRTC.DetectLocalIPAddress = DetectLocalIPAddress;

    DetectRTC.isWebSocketsSupported = 'WebSocket' in window && 2 === window.WebSocket.CLOSING;
    DetectRTC.isWebSocketsBlocked = !DetectRTC.isWebSocketsSupported;

    if (DetectRTC.osName === 'Nodejs') {
        DetectRTC.isWebSocketsSupported = true;
        DetectRTC.isWebSocketsBlocked = false;
    }

    DetectRTC.checkWebSocketsSupport = function(callback) {
        callback = callback || function() {};
        try {
            var websocket = new WebSocket('wss://echo.websocket.org:443/');
            websocket.onopen = function() {
                DetectRTC.isWebSocketsBlocked = false;
                callback();
                websocket.close();
                websocket = null;
            };
            websocket.onerror = function() {
                DetectRTC.isWebSocketsBlocked = true;
                callback();
            };
        } catch (e) {
            DetectRTC.isWebSocketsBlocked = true;
            callback();
        }
    };

    // -------
    DetectRTC.load = function(callback) {
        callback = callback || function() {};
=======
    // ------
    DetectRTC.DetectLocalIPAddress = DetectLocalIPAddress;

    // -------
    DetectRTC.load = function(callback) {
        this.loadCallback = callback;

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        checkDeviceSupport(callback);
    };

    DetectRTC.MediaDevices = MediaDevices;
    DetectRTC.hasMicrophone = hasMicrophone;
    DetectRTC.hasSpeakers = hasSpeakers;
    DetectRTC.hasWebcam = hasWebcam;

<<<<<<< HEAD
    DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions;
    DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions;

    DetectRTC.audioInputDevices = audioInputDevices;
    DetectRTC.audioOutputDevices = audioOutputDevices;
    DetectRTC.videoInputDevices = videoInputDevices;

=======
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
    // ------
    var isSetSinkIdSupported = false;
    if ('setSinkId' in document.createElement('video')) {
        isSetSinkIdSupported = true;
    }
    DetectRTC.isSetSinkIdSupported = isSetSinkIdSupported;

    // -----
    var isRTPSenderReplaceTracksSupported = false;
<<<<<<< HEAD
    if (DetectRTC.browser.isFirefox && typeof mozRTCPeerConnection !== 'undefined' /*&& DetectRTC.browser.version > 39*/ ) {
=======
    if (DetectRTC.browser.isFirefox /*&& DetectRTC.browser.version > 39*/ ) {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        /*global mozRTCPeerConnection:true */
        if ('getSenders' in mozRTCPeerConnection.prototype) {
            isRTPSenderReplaceTracksSupported = true;
        }
<<<<<<< HEAD
    } else if (DetectRTC.browser.isChrome && typeof webkitRTCPeerConnection !== 'undefined') {
=======
    } else if (DetectRTC.browser.isChrome) {
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
        /*global webkitRTCPeerConnection:true */
        if ('getSenders' in webkitRTCPeerConnection.prototype) {
            isRTPSenderReplaceTracksSupported = true;
        }
    }
    DetectRTC.isRTPSenderReplaceTracksSupported = isRTPSenderReplaceTracksSupported;

    //------
    var isRemoteStreamProcessingSupported = false;
    if (DetectRTC.browser.isFirefox && DetectRTC.browser.version > 38) {
        isRemoteStreamProcessingSupported = true;
    }
    DetectRTC.isRemoteStreamProcessingSupported = isRemoteStreamProcessingSupported;

    //-------
    var isApplyConstraintsSupported = false;

    /*global MediaStreamTrack:true */
    if (typeof MediaStreamTrack !== 'undefined' && 'applyConstraints' in MediaStreamTrack.prototype) {
        isApplyConstraintsSupported = true;
    }
    DetectRTC.isApplyConstraintsSupported = isApplyConstraintsSupported;

    //-------
    var isMultiMonitorScreenCapturingSupported = false;
    if (DetectRTC.browser.isFirefox && DetectRTC.browser.version >= 43) {
        // version 43 merely supports platforms for multi-monitors
        // version 44 will support exact multi-monitor selection i.e. you can select any monitor for screen capturing.
        isMultiMonitorScreenCapturingSupported = true;
    }
    DetectRTC.isMultiMonitorScreenCapturingSupported = isMultiMonitorScreenCapturingSupported;

<<<<<<< HEAD
    DetectRTC.isPromisesSupported = !!('Promise' in window);

    if (typeof DetectRTC === 'undefined') {
        window.DetectRTC = {};
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    if (typeof MediaStream !== 'undefined') {
        DetectRTC.MediaStream = Object.keys(MediaStream.prototype);
    } else DetectRTC.MediaStream = false;

    if (typeof MediaStreamTrack !== 'undefined') {
        DetectRTC.MediaStreamTrack = Object.keys(MediaStreamTrack.prototype);
    } else DetectRTC.MediaStreamTrack = false;

    var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

    if (typeof RTCPeerConnection !== 'undefined') {
        DetectRTC.RTCPeerConnection = Object.keys(RTCPeerConnection.prototype);
    } else DetectRTC.RTCPeerConnection = false;

    window.DetectRTC = DetectRTC;

    if (typeof module !== 'undefined' /* && !!module.exports*/ ) {
        module.exports = DetectRTC;
    }

    if (typeof define === 'function' && define.amd) {
        define('DetectRTC', [], function() {
            return DetectRTC;
        });
    }
=======
    window.DetectRTC = DetectRTC;

>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98
})();
