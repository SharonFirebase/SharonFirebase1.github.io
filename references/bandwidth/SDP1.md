#### https://en.wikipedia.org/wiki/Session_Description_Protocol
#### Session Description Protocol

##### EXCERPT 

##### The Session Description Protocol (SDP) is a format for describing streaming media communications parameters. The IETF published the original specification as an IETF Proposed Standard in April 1998,[1] and subsequently published a revised specification as an IETF Proposed Standard as RFC 4566 in July 2006.[2]

##### SDP is used for describing multimedia communication sessions for the purposes of session announcement, session invitation, and parameter negotiation. SDP does not deliver any media by itself but is used between endpoints for negotiation of media type, format, and all associated properties. The set of properties and parameters are often called a session profile.

##### SDP is designed to be extensible to support new media types and formats. SDP started off as a component of the Session Announcement Protocol (SAP),[citation needed] but found other uses in conjunction with Real-time Transport Protocol (RTP), Real-time Streaming Protocol (RTSP), Session Initiation Protocol (SIP) and even as a standalone format for describing multicast sessions.

Session description
    v=  (protocol version number, currently only 0)
    o=  (originator and session identifier : username, id, version number, network address)
    s=  (session name : mandatory with at least one UTF-8-encoded character)
    i=* (session title or short information)
    u=* (URI of description)
    e=* (zero or more email address with optional name of contacts)
    p=* (zero or more phone number with optional name of contacts)
    c=* (connection information—not required if included in all media)
    b=* (zero or more bandwidth information lines)
    One or more Time descriptions ("t=" and "r=" lines; see below)
    z=* (time zone adjustments)
    k=* (encryption key)
    a=* (zero or more session attribute lines)
    Zero or more Media descriptions (each one starting by an "m=" line; see below)
Time description (mandatory)
    t=  (time the session is active)
    r=* (zero or more repeat times)
Media description (if present)
    m=  (media name and transport address)
    i=* (media title or information field)
    c=* (connection information — optional if included at session level)
    b=* (zero or more bandwidth information lines)
    k=* (encryption key)
    a=* (zero or more media attribute lines — overriding the Session attribute lines)
