#### https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/
#### WebRTC in the real world: STUN, TURN and signaling
##### Old Article, but worth reading
#### EXCERPTS

WebRTC enables peer to peer communication.

BUT...

WebRTC still needs servers:

For clients to exchange metadata to coordinate communication: this is called signaling.
To cope with network address translators (NATs) and firewalls.
In this article we show you how to build a signaling service, and how to deal with the quirks of real-world connectivity by using STUN and TURN servers. We also explain how WebRTC apps can handle multi-party calls and interact with services such as VoIP and PSTN (aka telephones).

If you're not familiar with the basics of WebRTC, we strongly recommend you take a look at Getting Started With WebRTC before reading this article.

What is signaling?
Signaling is the process of coordinating communication. In order for a WebRTC application to set up a 'call', its clients need to exchange information:

Session control messages used to open or close communication.
Error messages.
Media metadata such as codecs and codec settings, bandwidth and media types.
Key data, used to establish secure connections.
Network data, such as a host's IP address and port as seen by the outside world.
This signaling process needs a way for clients to pass messages back and forth. That mechanism is not implemented by the WebRTC APIs: you need to build it yourself. We describe below some ways to build a signaling service. First, however, a little context...

Why is signaling not defined by WebRTC?
To avoid redundancy and to maximize compatibility with established technologies, signaling methods and protocols are not specified by WebRTC standards. This approach is outlined by JSEP, the JavaScript Session Establishment Protocol:

The thinking behind WebRTC call setup has been to fully specify and control the media plane, but to leave the signaling plane up to the application as much as possible. The rationale is that different applications may prefer to use different protocols, such as the existing SIP or Jingle call signaling protocols, or something custom to the particular application, perhaps for a novel use case. In this approach, the key information that needs to be exchanged is the multimedia session description, which specifies the necessary transport and media configuration information necessary to establish the media plane.
JSEP's architecture also avoids a browser having to save state: that is, to function as a signaling state machine. This would be problematic if, for example, signaling data was lost each time a page was reloaded. Instead, signaling state can be saved on a server.
