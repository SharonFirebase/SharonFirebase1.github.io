#### https://webrtc.github.io/samples/src/content/peerconnection/webaudio-output/
#### Peer connection as input to Web Audio

#####  NOTES
#### Source on GitHub | https://github.com/webrtc/samples/tree/gh-pages/src/content/peerconnection/webaudio-output

##### Code EXCERPT from GitHub | Needs multiple js files to go with this

            <div id="container">

              <h1><a href="//webrtc.github.io/samples/" title="WebRTC samples homepage">WebRTC samples</a> <span>Peer connection as input to Web Audio</span></h1>

              <video id="localVideo" autoplay muted></video>
              <video id="remoteVideo" autoplay muted></video>

              <canvas></canvas>

              <div>
                <button id="startButton">Start</button>
                <button id="callButton">Call</button>
                <button id="hangupButton">Hang Up</button>
              </div>

              <p>View the console to see logging. The <code>MediaStream</code> object <code>localStream</code>, and the <code>RTCPeerConnection</code> objects <code>localPeerConnection</code> and <code>remotePeerConnection</code> are in global scope, so you can inspect them in the console as well.</p>

              <p>For more information about RTCPeerConnection, see <a href="http://www.html5rocks.com/en/tutorials/webrtc/basics/" title="HTML5 Rocks article about WebRTC by Sam Dutton">Getting Started With WebRTC</a>.</p>


              <a href="https://github.com/webrtc/samples/tree/gh-pages/src/content/peerconnection/webaudio-output" title="View source for this page on GitHub" id="viewSource">View source on GitHub</a>

            </div>

            <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
            <script src="../../../js/common.js"></script>
            <script src="js/third_party/streamvisualizer.js"></script>
            <script src="js/main.js"></script>

            <script src="../../../js/lib/ga.js"></script>
           
           
    
