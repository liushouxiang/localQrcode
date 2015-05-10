chrome.tabs.getSelected(null, function(tab) {
    var reg = /(.*\:\/\/)([^\/\:]*)(.*)/;
    getLocalIPs(function(ips) {
        var localIP = ips[0];
        var localIPUrl = tab.url.replace(reg, function($1, $2, $3, $4) {
            return $2 + localIP + $4;
        });
        new QRCode(document.querySelector('#qrcode'), {
            text: localIPUrl,
            width:200,
            height:200
        });
    });
});

function getLocalIPs(callback) {
    var ips = [];

    var RTCPeerConnection = window.RTCPeerConnection ||
        window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

    var pc = new RTCPeerConnection({
        iceServers: []
    });

    pc.createDataChannel('');
    
    pc.onicecandidate = function(e) {
        if (!e.candidate) {
            callback(ips);
            return;
        }
        var ip = /^candidate:.+ (\S+) \d+ typ/.exec(e.candidate.candidate)[1];
        if (ips.indexOf(ip) == -1) 
            ips.push(ip);
    };

    pc.createOffer(function(sdp) {
        pc.setLocalDescription(sdp);
    }, function onerror() {});
}
