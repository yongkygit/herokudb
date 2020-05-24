//fungsi java biasa
	var socket = io.connect();
function myFunction(data) {
    document.getElementById("callaudio").value = data;
	document.getElementById("open-room").style.visibility = "visible";
}
  function deletephone(data) {
    console.log(data);
	socket.emit('deletetelephone', data); 
	window.location.assign("/chatsharing");
  }
document.getElementById("open-room").style.visibility = "hidden";
document.getElementById("join-room").style.visibility = "hidden";
document.getElementById("submit").style.visibility = "hidden";



$(document).ready(function(){

	  
        var NAME,TIMMERCALL;
        $("#submit").click(function(){
          NAME=$("#room-id").val();
          TIMMERCALL=$("#TIMMERCALL").val();
		  
  
  
 $.post( "http://localhost:9001/timer", {NAME: NAME,TIMMERCALL: TIMMERCALL})
  .done(function( data ) {
    
  }); 
  alert( "Data Loaded: " );
  window.location.reload();
  
        });
  
	var socket = io.connect();
	var $message = '#f90606';
	
	socket.emit('send message', $message);
		socket.on('new message', function(data){
		document.getElementById("server-on").style.backgroundColor = data; 
		}); 
		
	socket.on('caller', function(data){
  
		//document.getElementById('open-room').style.visibility = 'hidden';

        $.ajax({url: "/id_user", success: function(result){
		console.log(result.message);

		console.log(data[1]);
		
		if(data[1] == result.message){
		
		document.getElementById("textcalling").innerHTML ="<div class='alert alert-success'>" + data[0]+" calling ...!" + "</div>";
		document.getElementById("ringMode").innerHTML = "<div class='alert alert-danger'>" + data[2]+" calling ...!" + "</div>";
		dataOnline = document.getElementById("dataOnline").value;
		
		if(dataOnline=="notcall"){
		
		var audio = new Audio('/audio');
		audio.play();
		
		}
  //document.getElementById('open-room').style.visibility = 'visible';
		console.log(data[1]);
		document.getElementById("join-room").style.visibility = "visible";
		document.getElementById("room-id").value = data[0];
		}

        }});

		});
   
        $.ajax({url: "/id_user", success: function(result){
		console.log(result);

			$.each(result, function(k, field){
			
					document.getElementById('room-id').value = field;  
					document.getElementById('idusercall').value = field; 
					
            });	
				
        }});
    
        $.ajax({url: "/readadmin", success: function(result){
		console.log(result);

		$.each(result, function(i, j){
		
			$.each(j, function(k, field){
			if(k == "_id"){console.log(field);}
			else if(k == "ADDRESS"){
			        $("#location1 tbody").append(
					'<tr>'
					+''
					+field 
					+''
					);
			}
			else if(k == "NAME"){
				data = "'" +field+ "'";
			
                $("#location1 tbody").append(
					'<td>'					 
					+'<button style ="color:white;border-radius: 5px 5px 5px 5px; background:lime; border:none;" data-dismiss="modal" onclick="myFunction('+data+')">'+field+'   <i class="fa fa-phone" aria-hidden="true"></i>'+'</td>'
					);
				//console.log(field);
			}else{
			
			
                $("#location1 tbody").append(
					"<td>"
					+field 
					+"</td>"
					+"<td>"
					+'<button style ="color:white;border-radius: 5px 5px 5px 5px; background:red; border:none;" onclick="deletephone('+data+')"><i class="fa fa-times" aria-hidden="true"></i></button>' 
					+"</td>"
					+"</tr>"
					);
				//console.log(field);
			}	
			
				
            });	
				
        });

        }});
		
		
		
		
// ......................................................
// .......................UI Code........................
// ......................................................
document.getElementById('open-room').onclick = function() {
    disableInputButtons();
    connection.open(document.getElementById('room-id').value, function() {
        showRoomURL(connection.sessionid);
    });
	

	
			datacall = document.getElementById("room-id").value;			
			datacallnm = document.getElementById("callaudio").value;		
			socket.emit('call', [datacall,datacallnm,"Rtc Mode"]);
		
		var myVaring = setInterval(myRing, 7000);
		function myRing() {
			datacallnm = document.getElementById("callaudio").value;
			datacallusr = document.getElementById("user-name").value;
			socket.emit('call', [datacall,datacallnm,"Rtc Mode"]);
		};		
	
				document.getElementById("submit").style.visibility = "visible";	
	
};

document.getElementById('join-room').onclick = function() {
    disableInputButtons();
    connection.join(document.getElementById('room-id').value);  
	document.getElementById("dataOnline").value="call";
	
};

document.getElementById('open-or-join-room').onclick = function() {
    disableInputButtons();
    connection.openOrJoin(document.getElementById('room-id').value, function(isRoomExist, roomid) {
        if (!isRoomExist) {
            showRoomURL(roomid);
        }
    });
};

// ......................................................
// ..................RTCMultiConnection Code.............
// ......................................................

var connection = new RTCMultiConnection();

// by default, socket.io server is assumed to be deployed on your own URL
connection.socketURL = '/';

// comment-out below line if you do not have your own socket.io server
// connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

connection.socketMessageEvent = 'video-conference-demo';

connection.session = {
    audio: true,
    video: true
};

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};


var screensize = "false";

connection.videosContainer = document.getElementById('videos-container');
connection.onstream = function(event) {

	if(screensize == "false"){
	
	document.getElementById('videos-container').setAttribute("style", "margin: 100px;"); 
	    var width = parseInt(connection.videosContainer.clientWidth / 3) - 20;
		var mediaElement = getHTMLMediaElement(event.mediaElement, {
        title: event.userid,
        buttons: ['full-screen'],
        width: width,
        showOnMouseEnter: false
    });	
	screensize = "true";
	
	}
	else{
    var width = parseInt(connection.videosContainer.clientWidth / 1) - 20;
    var mediaElement = getHTMLMediaElement(event.mediaElement, {
        title: event.userid,
        buttons: ['full-screen'],
        width: width,
        showOnMouseEnter: false
    });

        var secondsLabel = document.getElementById("TIMMERCALL");
        var totalSeconds = 0;
        setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.value = totalSeconds;
        } 
		
				document.getElementById("submit").style.visibility = "visible";
	
	}
	
	
	
    connection.videosContainer.appendChild(mediaElement);

    setTimeout(function() {
        mediaElement.media.play();
    }, 5000);

    mediaElement.id = event.streamid;
		
};

connection.onstreamended = function(event) {
    var mediaElement = document.getElementById(event.streamid);
    if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
    }
};

function disableInputButtons() {
    document.getElementById('open-or-join-room').disabled = true;
    document.getElementById('open-room').disabled = true;
    document.getElementById('join-room').disabled = true;
    document.getElementById('room-id').disabled = true;
}

// ......................................................
// ......................Handling Room-ID................
// ......................................................

function showRoomURL(roomid) {
    var roomHashURL = '#' + roomid;
    var roomQueryStringURL = '?roomid=' + roomid;

    var html = "Calling ..... " + roomid;

    var roomURLsDiv = document.getElementById('room-urls');
    roomURLsDiv.innerHTML = html;

    roomURLsDiv.style.display = 'block';
}

(function() {
    var params = {},
        r = /([^&=]+)=?([^&]*)/g;

    function d(s) {
        return decodeURIComponent(s.replace(/\+/g, ' '));
    }
    var match, search = window.location.search;
    while (match = r.exec(search.substring(1)))
        params[d(match[1])] = d(match[2]);
    window.params = params;
})();

var roomid = '';
if (localStorage.getItem(connection.socketMessageEvent)) {
    roomid = localStorage.getItem(connection.socketMessageEvent);
} else {
    roomid = connection.token();
}
document.getElementById('room-id').value = roomid;
document.getElementById('room-id').onkeyup = function() {
    localStorage.setItem(connection.socketMessageEvent, this.value);
};

var hashString = location.hash.replace('#', '');
if (hashString.length && hashString.indexOf('comment-') == 0) {
    hashString = '';
}

var roomid = params.roomid;
if (!roomid && hashString.length) {
    roomid = hashString;
}

if (roomid && roomid.length) {
    document.getElementById('room-id').value = roomid;
    localStorage.setItem(connection.socketMessageEvent, roomid);

    // auto-join-room
    (function reCheckRoomPresence() {
        connection.checkPresence(roomid, function(isRoomExist) {
            if (isRoomExist) {
                connection.join(roomid);
                return;
            }

            setTimeout(reCheckRoomPresence, 5000);
        });
    })();

    disableInputButtons();
}

});