(this["webpackJsonprtw-coding-challenge"]=this["webpackJsonprtw-coding-challenge"]||[]).push([[0],{144:function(e,t,n){e.exports=n(272)},149:function(e,t,n){},150:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),u=n(26),i=n.n(u),l=(n(149),n(30)),o=n(275),s=n(276),m=n(277),f=n(279),d=n(274),v=n(54),p=n(278),I=n(280),E=n(59),b=n.n(E),N=function(e){var t=Object(r.useState)(),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){new Promise((function(e){return b.a.getDevices(e)})).then((function(t){c(t.filter((function(t){return!e||t.kind===e})))}))}),[]),a},h=(n(150),function(e){var t=e.visible,n=e.defaultValues,a=e.onJoin,u=Object(r.useState)(!1),i=Object(l.a)(u,2),o=i[0],E=i[1],b=s.a.useForm(),h=Object(l.a)(b,1)[0],O=N("videoinput"),A=N("audioinput");return Object(r.useEffect)((function(){h.setFieldsValue({cameraId:null===O||void 0===O?void 0:O[0].deviceId})}),[O]),Object(r.useEffect)((function(){h.setFieldsValue({microphoneId:null===A||void 0===A?void 0:A[0].deviceId})}),[A]),c.a.createElement(m.a,{visible:t,title:"Join a channel",okText:"Join",onOk:function(){h.validateFields().then((function(e){return a(e)}))},cancelButtonProps:{style:{display:"none"}}},c.a.createElement(s.a,{form:h,className:"channel-info-form",name:"basic",layout:"vertical",onFinish:a},c.a.createElement(s.a.Item,{label:"App ID",name:"appId",initialValue:null===n||void 0===n?void 0:n.appId,rules:[{required:!0,message:"Please input App ID!"}]},c.a.createElement(f.a,null)),c.a.createElement(s.a.Item,{label:"Channel",name:"channel",initialValue:null===n||void 0===n?void 0:n.channel,rules:[{required:!0,message:"Please input Channel Name!"}]},c.a.createElement(f.a,null)),c.a.createElement(s.a.Item,{label:"Token",name:"token",initialValue:null===n||void 0===n?void 0:n.token,rules:[{required:!0,message:"Please input Token!"}]},c.a.createElement(f.a,null)),c.a.createElement(d.a,null,c.a.createElement(v.a,{type:"link",onClick:function(){return E(!o)}},o?"hide":"show"," advance setting")),c.a.createElement("div",{className:"advance-setting ".concat(o?"show":"hide")},c.a.createElement(s.a.Item,{label:"UID",name:"uid",initialValue:null===n||void 0===n?void 0:n.uid},c.a.createElement(f.a,{type:"number",step:"1"})),c.a.createElement(s.a.Item,{label:"CAMERA",name:"cameraId"},c.a.createElement(p.a,{options:null===O||void 0===O?void 0:O.map((function(e,t){return{value:e.deviceId,label:e.label||"camera-".concat(t)}}))})),c.a.createElement(s.a.Item,{label:"MICROPHONE",name:"microphoneId"},c.a.createElement(p.a,{options:null===A||void 0===A?void 0:A.map((function(e,t){return{value:e.deviceId,label:e.label||"camera-".concat(t)}}))})),c.a.createElement(s.a.Item,{label:"CAMERA RESOLUTION",name:"videoProfile",initialValue:""},c.a.createElement(p.a,null,c.a.createElement(p.a.Option,{value:""},"default"),c.a.createElement(p.a.Option,{value:"480p_1"},"480p"),c.a.createElement(p.a.Option,{value:"720p_1"},"720p"),c.a.createElement(p.a.Option,{value:"1080p_1"},"1080p"))),c.a.createElement(s.a.Item,{label:"MODE",name:"mode",initialValue:"live"},c.a.createElement(I.a.Group,null,c.a.createElement(I.a,{value:"live"},"live"),c.a.createElement(I.a,{value:"rtc"},"rtc"))),c.a.createElement(s.a.Item,{label:"CODEC",name:"codec",initialValue:"h264"},c.a.createElement(I.a.Group,null,c.a.createElement(I.a,{value:"h264"},"h264"),c.a.createElement(I.a,{value:"vp8"},"vp8"))))))}),O=n(12),A=n.n(O),j=n(31),w=n(281),T=n(282),G=n(283),k=n(284),x=n(97);!function(e){e[e.WAITING=0]="WAITING",e[e.INITIALING=1]="INITIALING",e[e.READY=2]="READY"}(a||(a={}));var R;!function(e){e[e.WAITING=0]="WAITING",e[e.INITIALING=1]="INITIALING",e[e.READY=2]="READY"}(R||(R={}));n(267);var L,P=function(e){var t=e.client,n=e.channelInfo,u=e.onLeave,i=void 0===u?function(){}:u,o=function(e,t){var n=Object(r.useRef)(),c=Object(r.useState)(a.WAITING),u=Object(l.a)(c,2),i=u[0],o=u[1],s=Object(r.useState)(!1),m=Object(l.a)(s,2),f=m[0],d=m[1],v=Object(r.useState)(!1),p=Object(l.a)(v,2),I=p[0],E=p[1];Object(r.useEffect)((function(){e&&Object(j.a)(A.a.mark((function e(){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(a.INITIALING),r=b.a.createStream({streamID:t.uid||12345,video:!0,audio:!0,screen:!1,cameraId:t.cameraId,microphoneId:t.microphoneId}),t.videoProfile&&r.setVideoProfile(t.videoProfile),e.next=5,new Promise((function(e,t){return r.init(e,t)}));case 5:n.current=r,N(),o(a.READY);case 8:case"end":return e.stop()}}),e)})))()}),[e]);var N=function(){var t=Object(j.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,a){if(n.current){e.publish(n.current,a);e.on("stream-published",(function n(a){e.off("stream-published",n),t(a.stream)}))}}));case 2:d(!0);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(j.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,a){if(n.current){e.unpublish(n.current,a);e.on("stream-unpublished",(function n(a){e.off("stream-unpublished",n),t(a.stream)}))}}));case 2:d(!1);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{streamRef:n,streamState:i,publishState:f,isMute:I,leave:function(){var e=Object(j.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=n.current)||void 0===t||t.close(),e.next=3,h();case 3:o(a.WAITING);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),publish:N,unpublished:h,mute:function(){var e;null===(e=n.current)||void 0===e||e.muteAudio(),E(!0)},unmute:function(){var e;null===(e=n.current)||void 0===e||e.unmuteAudio(),E(!1)}}}(t,n),s=o.streamRef,m=o.streamState,f=o.publishState,d=o.isMute,p=o.leave,I=o.publish,E=o.unpublished,N=o.mute,h=o.unmute,O=function(e,t){var n=Object(r.useRef)(),a=Object(r.useState)(R.WAITING),c=Object(l.a)(a,2),u=c[0],i=c[1];return Object(r.useEffect)((function(){e&&Object(j.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(R.INITIALING),e.on("stream-added",function(){var t=Object(j.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.current){t.next=6;break}return i(R.INITIALING),t.next=4,new Promise((function(t,n){e.subscribe(a.stream,{},n);e.on("stream-subscribed",(function n(){e.off("stream-subscribed",n),t(a.stream)}))}));case 4:n.current=t.sent,i(R.READY);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.on("stream-removed",function(){var e=Object(j.a)(A.a.mark((function e(t){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===(a=n.current)||void 0===a?void 0:a.isPlaying())&&(null===(r=n.current)||void 0===r||r.stop()),n.current=void 0,i(R.WAITING);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}),[e]),{streamRef:n,streamState:u,leave:function(){var e,t,a;(null===(e=n.current)||void 0===e?void 0:e.isPlaying())&&(null===(a=n.current)||void 0===a||a.stop());null===(t=n.current)||void 0===t||t.close(),i(R.WAITING)}}}(t),L=O.streamRef,P=O.streamState,S=O.leave;return c.a.createElement("div",{className:"control-panel"},c.a.createElement("div",{className:"remote-stream"},P===R.READY&&c.a.createElement(x.a,{stream:L.current,fit:"cover",label:"remote"})),c.a.createElement("div",{className:"bottom"},c.a.createElement(v.a,{shape:"circle",icon:d?c.a.createElement(w.a,null):c.a.createElement(T.a,null),onClick:function(){d?h():N()}}),c.a.createElement(v.a,{shape:"circle",danger:!0,icon:c.a.createElement(G.a,null),onClick:Object(j.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return e.next=4,S();case 4:i();case 5:case"end":return e.stop()}}),e)})))}),c.a.createElement(v.a,{shape:"circle",type:f?"default":"primary",icon:c.a.createElement(k.a,null),onClick:Object(j.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f?E():I();case 1:case"end":return e.stop()}}),e)})))}),c.a.createElement("div",{className:"local-stream"},m===a.READY&&c.a.createElement(x.a,{stream:s.current,fit:"contain",label:"local"}))))};!function(e){e[e.WAITING_CHANNEL_INFO=0]="WAITING_CHANNEL_INFO",e[e.INITIALING=1]="INITIALING",e[e.JOINED=2]="JOINED"}(L||(L={}));n(268);var S=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],u=function(){var e=Object(r.useRef)(),t=Object(r.useState)(L.WAITING_CHANNEL_INFO),n=Object(l.a)(t,2),a=n[0],c=n[1];return{clientRef:e,clientState:a,join:function(){var t=Object(j.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(L.INITIALING),e.current=b.a.createClient({mode:n.mode,codec:n.codec}),t.next=4,new Promise((function(t,a){var r;return null===(r=e.current)||void 0===r?void 0:r.init(n.appId,t,a)}));case 4:return t.next=6,new Promise((function(t,a){var r;return null===(r=e.current)||void 0===r?void 0:r.join(n.token,n.channel,n.uid,t,a)}));case 6:c(L.JOINED);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),leave:function(){var t=Object(j.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,n){var a;return null===(a=e.current)||void 0===a?void 0:a.leave(t,n)}));case 2:c(L.WAITING_CHANNEL_INFO);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}(),i=u.clientRef,s=u.clientState,m=u.join,f=u.leave;return c.a.createElement("div",{className:"App"},function(){switch(s){case L.WAITING_CHANNEL_INFO:case L.INITIALING:return c.a.createElement(o.a,{size:"large"});default:if(i.current&&n)return c.a.createElement(P,{client:i.current,channelInfo:n,onLeave:function(){f()}})}}(),c.a.createElement(h,{visible:s===L.WAITING_CHANNEL_INFO,onJoin:function(e){a(e),m(e)}}))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.a387528a.chunk.js.map