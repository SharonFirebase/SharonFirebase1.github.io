#### Real time communication with WebRTC
#### https://codelabs.developers.google.com/codelabs/webrtc-web/#0
#### EXCERPTS
What is signaling?
WebRTC uses RTCPeerConnection to communicate streaming data between browsers, but also needs a mechanism to coordinate communication and to send control messages, a process known as signaling. Signaling methods and protocols are not specified by WebRTC. In this codelab you will use Socket.IO for messaging, but there are many alternatives.

What are STUN and TURN?
WebRTC is designed to work peer-to-peer, so users can connect by the most direct route possible. However, WebRTC is built to cope with real-world networking: client applications need to traverse NAT gateways and firewalls, and peer to peer networking needs fallbacks in case direct connection fails. As part of this process, the WebRTC APIs use STUN servers to get the IP address of your computer, and TURN servers to function as relay servers in case peer-to-peer communication fails. (WebRTC in the real world explains in more detail.)
