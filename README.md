<a href="https://github.com/muaz-khan/RTCMultiConnection"><img src="https://i.imgur.com/MFfRBSM.png" /></a>

<<<<<<< HEAD
## RTCMultiConnection - WebRTC JavaScript Library

* [RTCMultiConnection v3 Live Demos](https://rtcmulticonnection.herokuapp.com/)
* [RTCMultiConnection v2 Live Demos](https://www.webrtc-experiment.com/RTCMultiConnection/)

[![npm](https://img.shields.io/npm/v/rtcmulticonnection-v3.svg)](https://npmjs.org/package/rtcmulticonnection-v3) [![downloads](https://img.shields.io/npm/dm/rtcmulticonnection-v3.svg)](https://npmjs.org/package/rtcmulticonnection-v3) [![Build Status: Linux](https://travis-ci.org/muaz-khan/RTCMultiConnection.png?branch=master)](https://travis-ci.org/muaz-khan/RTCMultiConnection)

> v3 has its own built-in socket.io server. It has pubnub/firebase demos as well; however [reliable-signaler](https://github.com/muaz-khan/Reliable-Signaler/tree/master/rtcmulticonnection-client) or [socketio-over-nodejs](https://github.com/muaz-khan/WebRTC-Experiment/tree/master/socketio-over-nodejs) or similar codes can NOT be used with v3. Please use [`Signaling-Server.js`](https://github.com/muaz-khan/RTCMultiConnection/blob/master/Signaling-Server.js) instead.
>
> v3 can use XHR/XMPP/etc. signaling implementations as well. Please check [PubNubConnection.js](https://github.com/muaz-khan/RTCMultiConnection/blob/master/dev/PubNubConnection.js) to see how to configure it for 3rd party signaling implementations. You simply have to modify top few lines.

# Install On Your Own Site

* https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/installation-guide.md

# YouTube videos

1. [Getting started guide / RTCMultiConnection](https://www.youtube.com/watch?v=jqtC7mSTCgk)
2. [Setup custom socket.io server / RTCMultiConnection](https://www.youtube.com/watch?v=EtsiYEW_T8Y)
5. [Write screen sharing applications / RTCMultiConnection](https://www.youtube.com/watch?v=nBUuMKtEeyU)

YouTube playlist:

* https://www.youtube.com/playlist?list=PLPRQUXAnRydKdyun-vjKPMrySoow2N4tl

RTCMultiConnection-v2 (old) videos: https://vimeo.com/muazkh

# [Docs/Tutorials](https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/)

1. [Getting Started guide for RTCMultiConnection](https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/getting-started.md)
2. [Installation Guide](https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/installation-guide.md)
3. [How to Use?](https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/how-to-use.md)
4. [API Reference](https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/api.md)
5. [Upgrade from v2 to v3](https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/upgrade.md)
6. [How to write iOS/Android applications?](https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/ios-android.md)
7. [Tips & Tricks](https://github.com/muaz-khan/RTCMultiConnection/blob/master/docs/tips-tricks.md)

# iOS+Android Demo Apps

* http://webrtcweb.com/cordova-apps/

# v3 Demos

| DemoTitle        | TestLive           | ViewSource |
| ------------- |-------------|-------------|
| Audio+Video+File+TextChat | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Audio+Video+TextChat+FileSharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Audio+Video+TextChat+FileSharing.html) |
| Pre-recorded media streaming (webm/mp3 live streaming) | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Pre-recorded-Media-Streaming.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Pre-recorded-Media-Streaming.html) |
| FileSharing | [Demo](https://rtcmulticonnection.herokuapp.com/demos/file-sharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/file-sharing.html) |
| Scalable Audio/Video Broadcast | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Scalable-Broadcast.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Scalable-Broadcast.html) |
| Scalable Screen Broadcast | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Scalable-Screen-Broadcast.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Scalable-Screen-Broadcast.html) |
| Scalable Video Broadcast | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Video-Scalable-Broadcast.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Video-Scalable-Broadcast.html) |
| Scalable File Sharing | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Files-Scalable-Broadcast.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Files-Scalable-Broadcast.html) |
| Video Conferencing | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Video-Conferencing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Video-Conferencing.html) |
| SSEConnection (Server Sent Events) | [Demo](https://rtcmulticonnection.herokuapp.com/demos/SSEConnection.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/SSEConnection.html) |
| Audio+Video+Screen Sharing | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Audio-Video-Screen.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Audio-Video-Screen.html) |
| One-to-One Video Chat | [Demo](https://rtcmulticonnection.herokuapp.com/demos/One-to-One.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/One-to-One.html) |
| Audio Conferencing | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Audio-Conferencing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Audio-Conferencing.html) |
| Video Broadcasting | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Video-Broadcasting.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Video-Broadcasting.html) |
| TextChat+FileSharing | [Demo](https://rtcmulticonnection.herokuapp.com/demos/TextChat+FileSharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/TextChat+FileSharing.html) |
| addStream in a Chat room | [Demo](https://rtcmulticonnection.herokuapp.com/demos/addStream-in-Chat-room.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/addStream-in-Chat-room.html) |
| Part-of-Screen Sharing | [Demo](https://rtcmulticonnection.herokuapp.com/demos/share-part-of-screen.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/share-part-of-screen.html) |
| Share Audio+Screen | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Audio+ScreenSharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Audio+ScreenSharing.html) |
| Screen Sharing | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Screen-Sharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/screen-sharing.html) |
| Disconnect/Rejoin rooms | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Disconnect+Rejoin.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Disconnect+Rejoin.html) |
| Password Protected Rooms | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Password-Protected-Rooms.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Password-Protected-Rooms.html) |
| replaceTrack in Firefox | [Demo](https://rtcmulticonnection.herokuapp.com/demos/replaceTrack.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/replaceTrack.html) |
| applyConstraints in Firefox | [Demo](https://rtcmulticonnection.herokuapp.com/demos/applyConstraints.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/applyConstraints.html) |
| Firebase-Demo | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Firebase-Demo.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Firebase-Demo.html) |
| PubNub Demo | [Demo](https://rtcmulticonnection.herokuapp.com/demos/PubNub-Demo.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/PubNub-Demo.html) |
| Socket.io Custom-Messaging | [Demo](https://rtcmulticonnection.herokuapp.com/demos/custom-socket-event.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/custom-socket-event.html) |
| Check Rooms Presence | [Demo](https://rtcmulticonnection.herokuapp.com/demos/checkPresence.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/checkPresence.html) |
| getPublicModerators | [Demo](https://rtcmulticonnection.herokuapp.com/demos/getPublicModerators.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/getPublicModerators.html) |
| Change Cameras/Microphone | [Demo](https://rtcmulticonnection.herokuapp.com/demos/switch-cameras.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/switch-cameras.html) |
| MultiRTC: Skype-like app | [Demo](https://rtcmulticonnection.herokuapp.com/demos/MultiRTC/) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/MultiRTC/) |
| Change Video Resolutions in your Live Sessions | [Demo](https://rtcmulticonnection.herokuapp.com/demos/change-resolutions.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/change-resolutions.html) |
| Admin/Guest demo | [Demo](https://rtcmulticonnection.herokuapp.com/demos/admin-guest.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/admin-guest.html) |
| Check if StreamHasData | [Demo](https://rtcmulticonnection.herokuapp.com/demos/StreamHasData.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/StreamHasData.html) |
| Capture & Share Screen from any domain! | [Demo](https://rtcmulticonnection.herokuapp.com/demos/Cross-Domain-Screen-Capturing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/Cross-Domain-Screen-Capturing.html) |

# v2 Demos
=======
## WebRTC Library  [![npm](https://img.shields.io/npm/v/rtcmulticonnection.svg)](https://npmjs.org/package/rtcmulticonnection) [![downloads](https://img.shields.io/npm/dm/rtcmulticonnection.svg)](https://npmjs.org/package/rtcmulticonnection) [![Build Status: Linux](https://travis-ci.org/muaz-khan/RTCMultiConnection.png?branch=master)](https://travis-ci.org/muaz-khan/RTCMultiConnection)

<a href="https://github.com/muaz-khan/RTCMultiConnection/wiki">Wiki Pages</a> / <a href="http://www.rtcmulticonnection.org/docs/">Documentation</a> / <a href="http://www.rtcmulticonnection.org/FAQ/">FAQ</a> / <a href="https://www.webrtc-experiment.com/RTCMultiConnection/">Demos</a> / <a href="http://www.rtcmulticonnection.org/changes-log/">Changes Log</a>

* [RTCMultiConnection-v3.0](https://github.com/muaz-khan/RTCMultiConnection) is latest version [![npm](https://img.shields.io/npm/v/rtcmulticonnection-v3.svg)](https://npmjs.org/package/rtcmulticonnection-v3) [![downloads](https://img.shields.io/npm/dm/rtcmulticonnection-v3.svg)](https://npmjs.org/package/rtcmulticonnection-v3)
* RTCMultiConnection-v3.0 demo: [https://rtcmulticonnection.herokuapp.com/](https://rtcmulticonnection.herokuapp.com/)

```
# v3.0 is highly recommended to users
# who can afford node.js on their servers!
# it is many times reliable comparing v2.2.2 and earlier

npm install rtcmulticonnection-v3
```

* [rtcmulticonnection-v3.tar.gz](http://dl.webrtc-experiment.com/rtcmulticonnection-v3.tar.gz)

> [Latest version v3.0](https://github.com/muaz-khan/RTCMultiConnection) is preferred over `v2.2.2`

### Quick-Demos for newbies:

1. Simplest: [https://jsfiddle.net/zar6fg60/](https://jsfiddle.net/zar6fg60/)
2. A little bit advance but simple: [https://jsfiddle.net/c46de0L8/](https://jsfiddle.net/c46de0L8/)

<table style="font-size:18px; font-weight:bold; margin:0; padding:0; margin-left:auto; margin-right:auto; text-align:center;">
    <tr>
        <td>
            <a href="https://www.webrtc-experiment.com/RTCMultiConnection/" target="_blank">
                <img src="https://i.imgur.com/Fz1Pff6.png" style="display:block; width:99px; height99px;" alt="Demos">
                Demos
            </a>
        </td>
        
        <td>
            <a href="http://www.rtcmulticonnection.org/docs/getting-started/" target="_blank">
                <img src="https://i.imgur.com/v3YdSC6.png" style="display:block; width:99px; height99px;" alt="Getting-Started">
                Getting Started
            </a>
        </td>
        
        <td>
            <a href="http://www.rtcmulticonnection.org/docs/" target="_blank">
                <img src="https://i.imgur.com/mtu6091.png" style="display:block; width:99px; height99px;" alt="Documentation">
                Documentation
            </a>
        </td>
        
        <td>
            <a href="http://www.rtcmulticonnection.org/changes-log/" target="_blank">
                <img src="https://i.imgur.com/zHngv8r.png" style="display:block; width:99px; height99px;" alt="Changes Log">
                Changes Log
            </a>
        </td>
        
        <td>
            <a href="http://www.rtcmulticonnection.org/FAQ/" target="_blank">
                <img src="https://i.imgur.com/Zeqlfv2.png" style="display:block; width:99px; height99px;" alt="FAQ">
                FAQ
            </a>
        </td>
    </tr>
</table>

RTCMultiConnection is a <a href="https://www.webrtc-experiment.com/">WebRTC</a> JavaScript wrapper library runs top over RTCPeerConnection API to provide multi-session establishment scenarios. It also provides dozens of features as hybrid-less mesh networking model, a reliable presence detection and syncing system; complex renegotiation scenarios; and much more. It provides everything you've in your mind! Just understand the API and you'll enjoy using it! It is simple and its syntax is similar as WebSockets JavaScript API and RTCPeerConnection API.

It is <a href="https://www.webrtc-experiment.com/licence/">MIT Licenced</a>, which means that you can use it in any commercial/non-commercial product, free of cost.

# [Wiki Pages](https://github.com/muaz-khan/RTCMultiConnection/wiki)

* [List of Breaking Changes](https://github.com/muaz-khan/RTCMultiConnection/wiki/Breaking-Changes)
* [Coding Tricks](https://github.com/muaz-khan/RTCMultiConnection/wiki/Coding-Tricks)
* [Switch Between Cameras](https://github.com/muaz-khan/RTCMultiConnection/wiki/Switch-between-cameras)
* [Bandwidth Management](https://github.com/muaz-khan/RTCMultiConnection/wiki/Bandwidth-Management)
* [Channels and Sessions Management](https://github.com/muaz-khan/RTCMultiConnection/wiki/Channels-and-Sessions)
* [How to send Custom/Private messages?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Custom-Messages)
* [Custom Private Servers](https://github.com/muaz-khan/RTCMultiConnection/wiki/Custom-Private-Servers)
* [How to link RTCMultiConnection.js?](https://github.com/muaz-khan/RTCMultiConnection/wiki/How-to-link-RTCMultiConnection.js%3F)
* [How to fix echo?](https://github.com/muaz-khan/RTCMultiConnection/wiki/How-to-fix-echo%3F)
* [How to share Part-of-Screen?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Part-of-Screen-Sharing)
* [How to detect Presence of the users & sessions?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Presence-Detection)
* [How to share screen?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Screen-Sharing)
* [How to secure your RTCMultiConnection codes?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Security)
* [Use WebSync Signaling Server in any RTCMultiConnection demo](https://github.com/muaz-khan/RTCMultiConnection/wiki/WebSync-Signaling-Server)

```
bower install rtcmulticonnection

# or NPM!
npm install rtcmulticonnection
```

To use it:

```htm
<script src="./node_modules/rtcmulticonnection/RTCMultiConnection.js"></script>
```

There are some other NPM packages regarding RTCMultiConnection:

* https://www.npmjs.org/search?q=RTCMultiConnection

## 1. Link The Library

```
https://cdn.webrtc-experiment.com/RTCMultiConnection.js
```

## 2. Common Code

```javascript
var MODERATOR_CHANNEL_ID = 'ABCDEF'; // channel-id
var MODERATOR_SESSION_ID = 'XYZ';    // room-id
var MODERATOR_ID         = 'JKL';    // user-id
var MODERATOR_SESSION    = {         // media-type
    audio: true,
    video: true
};
var MODERATOR_EXTRA      = {};       // empty extra-data
```

## 3. Code for Room Moderator (i.e. Initiator)

```javascript
var moderator     = new RTCMultiConnection(MODERATOR_CHANNEL_ID);
moderator.session = MODERATOR_SESSION;
moderator.userid  = MODERATOR_ID;
moderator.extra   = MODERATOR_EXTRA;
moderator.open({
    dontTransmit: true,
    sessionid   : MODERATOR_SESSION_ID
});
```

## 4. Code for Room Participants

```javascript
var participants = new RTCMultiConnection(MODERATOR_CHANNEL_ID);
participants.join({
    sessionid: MODERATOR_SESSION_ID,
    userid   : MODERATOR_ID,
    extra    : MODERATOR_EXTRA,
    session  : MODERATOR_SESSION
});
```

## 5. (optional) Handle how to get streams

```javascript
// same code can be used for participants
// (it is optional) 
moderator.onstreamid = function(event) {
    // got a clue of incoming remote stream
    // didn't get remote stream yet
    
    var incoming_stream_id = event.streamid;
    
    YOUR_PREVIEW_IMAGE.show();
    
    // or
    YOUR_PREVIEW_VIDEO.show();
};

// same code can be used for participants
// it is useful
moderator.onstream = function(event) {
    // got local or remote stream
    // if(event.type == 'local')  {}
    // if(event.type == 'remote') {}
    
    document.body.appendChild(event.mediaElement);
    
    // or YOUR_VIDEO.src = event.blobURL;
    // or YOUR_VIDEO.src = URL.createObjectURL(event.stream);
};

// same code can be used for participants
// it is useful but optional
moderator.onstreamended = function(event) {
    event.mediaElement.parentNode.removeChild(event.mediaElement);
};
```

## [Simplest Demo](http://jsfiddle.net/zar6fg60/)

```html
<hr /><button id="openRoom">Open Room</button>
      <button id="joinRoom">Join Room</button><hr />
<script src="https://cdn.webrtc-experiment.com/RTCMultiConnection.js"> </script>
<script>
document.getElementById('openRoom').onclick = function() {
    (new RTCMultiConnection).open();
};
document.getElementById('joinRoom').onclick = function() {
    (new RTCMultiConnection).connect();
};
</script>
```

## RTCMultiConnection v2.2.2 Demos
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

| Experiment Name        | Demo           | Source Code |
| ------------- |-------------|-------------|
| AppRTC like RTCMultiConnection demo! | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/AppRTC-Look.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/AppRTC-Look.html) |
| MultiRTC! RTCMultiConnection all-in-one demo! | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/) | [Source](https://github.com/muaz-khan/WebRTC-Experiment/tree/master/MultiRTC-simple) |
| Collaborative Canvas Designer | [Demo](https://www.webrtc-experiment.com/Canvas-Designer/) | [Source](https://github.com/muaz-khan/Canvas-Designer) |
| Conversation.js - Skype like library | [Demo](https://www.webrtc-experiment.com/Conversationjs/) | [Source](https://github.com/muaz-khan/Conversation.js) |
| All-in-One test | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/all-in-one.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/all-in-one.html) |
| Multi-Broadcasters and Many Viewers | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/Multi-Broadcasters-and-Many-Viewers.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/Multi-Broadcasters-and-Many-Viewers.html) |
| Select Broadcaster at runtime | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/select-broadcaster-at-runtime.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/select-broadcaster-at-runtime.html) |
| OneWay Screen & Two-Way Audio | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/OneWay-Screen-TwoWay-Audio.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/OneWay-Screen-TwoWay-Audio.html) |
| Stream Mp3 Live | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/stream-mp3-live.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/stream-mp3-live.html) |
| Socket.io auto Open/Join rooms | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/socketio-auto-open-join-room.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/socketio-auto-open-join-room.html) |
| Screen Sharing & Cropping | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/cropped-screen-sharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/cropped-screen-sharing.html) |
| Share Part of Screen without cropping it | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/RTCMultiConnection.sharePartOfScreen.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/RTCMultiConnection.sharePartOfScreen.html) |
| getMediaDevices/enumerateDevices | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/getMediaDevices.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/getMediaDevices.html) |
| Renegotiation & Mute/UnMute/Stop | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/Renegotiation.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/Renegotiation.html) |
| Video-Conferencing | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/videoconferencing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/videoconferencing.html) |
| Video Broadcasting | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/video-broadcasting.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/video-broadcasting.html) |
| Many-to-One Broadcast | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/many-to-one-broadcast.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/many-to-one-broadcast.html) |
| Audio Conferencing | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/audioconferencing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/audioconferencing.html) |
| Multi-streams attachment | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/multi-streams-attachment.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/multi-streams-attachment.html) |
| Admin/Guest audio/video calling | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/admin-guest.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/admin-guest.html) |
| Session Re-initiation Test | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/session-reinitiation.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/session-reinitiation.html) |
| Preview Screenshot of the room | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/rooms-screenshots.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/rooms-screenshots.html) |
| RecordRTC & RTCMultiConnection | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/RecordRTC-and-RTCMultiConnection.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/RecordRTC-and-RTCMultiConnection.html) |
| Explains how to customize ice servers; and resolutions | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/features.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/features.html) |
| Mute/Unmute and onmute/onunmute | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/mute-unmute.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/mute-unmute.html) |
| One-page demo: Explains how to skip external signalling gateways | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/one-page-demo.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/one-page-demo.html) |
| Password Protect Rooms: Explains how to authenticate users | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/password-protect-rooms.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/password-protect-rooms.html) |
| Session Management: Explains difference between "leave" and "close" methods | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/session-management.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/session-management.html) |
| Multi-Sessions Management | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/multi-sessions-management.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/multi-sessions-management.html) |
| Customizing Bandwidth | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/bandwidth.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/bandwidth.html) |
| Users ejection and presence detection | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/users-ejection.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/users-ejection.html) |
| Multi-Session Establishment | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/multi-session-establishment.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/multi-session-establishment.html) |
| Group File Sharing + Text Chat | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/group-file-sharing-plus-text-chat.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/group-file-sharing-plus-text-chat.html) |
| Audio Conferencing + File Sharing + Text Chat | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/audio-conferencing-data-sharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/audio-conferencing-data-sharing.html) |
| Join with/without camera | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/join-with-or-without-camera.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/join-with-or-without-camera.html) |
| Screen Sharing | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/screen-sharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/screen-sharing.html) |
| One-to-One file sharing | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/one-to-one-filesharing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/one-to-one-filesharing.html) |
| Manual session establishment + extra data transmission | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/manual-session-establishment-plus-extra-data-transmission.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/manual-session-establishment-plus-extra-data-transmission.html) |
| Manual session establishment + extra data transmission + video conferencing | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/manual-session-establishment-plus-extra-data-transmission-plus-videoconferencing.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/manual-session-establishment-plus-extra-data-transmission-plus-videoconferencing.html) |
| takeSnapshot i.e. Take Snapshot of Local/Remote streams | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/takeSnapshot.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/takeSnapshot.html) |
| Audio/Video/Screen sharing and recording | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/audio-video-screen-sharing-recording.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/audio-video-screen-sharing-recording.html) |
| Broadcast Multiple-Cameras | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/Broadcast-Multiple-Cameras.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/Broadcast-Multiple-Cameras.html) |
| Remote Stream Forwarding | [Demo](https://www.webrtc-experiment.com/RTCMultiConnection/remote-stream-forwarding.html) | [Source](https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2/demos/remote-stream-forwarding.html) |
<<<<<<< HEAD
| WebRTC Scalable Broadcast | Socketio/Nodejs | [Source](https://github.com/muaz-khan/WebRTC-Scalable-Broadcast) | is available here:

* https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2

# [Wiki Pages](https://github.com/muaz-khan/RTCMultiConnection/wiki)

* [List of Breaking Changes](https://github.com/muaz-khan/RTCMultiConnection/wiki/Breaking-Changes)
* [Coding Tricks](https://github.com/muaz-khan/RTCMultiConnection/wiki/Coding-Tricks)
* [Switch Between Cameras](https://github.com/muaz-khan/RTCMultiConnection/wiki/Switch-between-cameras)
* [Bandwidth Management](https://github.com/muaz-khan/RTCMultiConnection/wiki/Bandwidth-Management)
* [Channels and Sessions Management](https://github.com/muaz-khan/RTCMultiConnection/wiki/Channels-and-Sessions)
* [How to send Custom/Private messages?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Custom-Messages)
* [Custom Private Servers](https://github.com/muaz-khan/RTCMultiConnection/wiki/Custom-Private-Servers)
* [How to link RTCMultiConnection.js?](https://github.com/muaz-khan/RTCMultiConnection/wiki/How-to-link-RTCMultiConnection.js%3F)
* [How to fix echo?](https://github.com/muaz-khan/RTCMultiConnection/wiki/How-to-fix-echo%3F)
* [How to share Part-of-Screen?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Part-of-Screen-Sharing)
* [How to detect Presence of the users & sessions?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Presence-Detection)
* [How to share screen?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Screen-Sharing)
* [How to secure your RTCMultiConnection codes?](https://github.com/muaz-khan/RTCMultiConnection/wiki/Security)
* [Use WebSync Signaling Server in any RTCMultiConnection demo](https://github.com/muaz-khan/RTCMultiConnection/wiki/WebSync-Signaling-Server)
* [How to implement client-side (local) screen-sharing without involving any 3rd-party service or extension or addon](https://github.com/muaz-khan/RTCMultiConnection/wiki/Screen-Sharing-on-your-Local-Server)
* [Detect Who is Speaking](https://github.com/muaz-khan/RTCMultiConnection/wiki/Detect-Who-is-Speaking)
* [Select Camera and Microphone Devices](https://github.com/muaz-khan/RTCMultiConnection/wiki/Select-Camera-and-Microphone-Devices)
* [Fix Duplicate Videos Issues](https://github.com/muaz-khan/RTCMultiConnection/wiki/Fix-Duplicate-Videos-Issues)

## Twitter RTCMultiConnection Updates

* https://twitter.com/RTCMultiConnect i.e. @RTCMultiConnect
=======
| WebRTC Scalable Broadcast | Socketio/Nodejs | [Source](https://github.com/muaz-khan/WebRTC-Scalable-Broadcast) |

v2.2.2 is available here:

* https://github.com/muaz-khan/RTCMultiConnection/tree/master/v2.2.2

## Credits & Contributors

* [CONTRIBUTING.md](https://github.com/muaz-khan/RTCMultiConnection/blob/master/CONTRIBUTING.md)

## Related Projects

* [Moodle Plugin](https://moodle.org/plugins/view/mod_webrtcexperiments) / [Source code](https://github.com/danielneis/moodle-mod_webrtcexperiments)
* [MultiRTC](https://www.npmjs.com/package/multirtc)
* [Meteo Plugin](https://atmospherejs.com/mrt/rtcmulticonnection) / [Source code](https://github.com/fishdude/meteor-RTCMultiConnection)

If you've additional plugins, you can update this list.
>>>>>>> 3c996bd0bf2e56dd992323760e6bb5dc4e47df98

## License

[RTCMultiConnection](https://github.com/muaz-khan/RTCMultiConnection) is released under [MIT licence](https://github.com/muaz-khan/RTCMultiConnection/blob/master/LICENSE.md) . Copyright (c) [Muaz Khan](http://www.MuazKhan.com/).
