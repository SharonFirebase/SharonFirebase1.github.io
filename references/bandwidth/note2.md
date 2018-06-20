#### https://stackoverflow.com/questions/16712224/how-to-control-bandwidth-in-webrtc-video-call
#### How to control bandwidth in WebRTC video call?

##### Notes and Excerpts

#### I am trying to develop a Video Calling/Conferencing application using WebRTC and node.js. Right now there is no facility to control bandwidth during during video call. Is there any way to control/reduce bandwidth. (like I want make whole my web application to work on 150 kbps while video conferencing).

##### Try this demo. https://www.webrtc-experiment.com/RTCMultiConnection/bandwidth.html#9127320036275776?audio=30&video=256 You can inject bandwidth attributes (b=AS) in the session descriptions:

        audioBandwidth = 50;
        videoBandwidth = 256;
        function setBandwidth(sdp) {
            sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + audioBandwidth + '\r\n');
            sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + videoBandwidth + '\r\n');
            return sdp;
        }


        // ----------------------------------------------------------

        peer.createOffer(function (sessionDescription) {
                sessionDescription.sdp = setBandwidth(sessionDescription.sdp);
                peer.setLocalDescription(sessionDescription);
            }, null, constraints);

        peer.createAnswer(function (sessionDescription) {
                sessionDescription.sdp = setBandwidth(sessionDescription.sdp);
                peer.setLocalDescription(sessionDescription);
            }, null, constraints);
