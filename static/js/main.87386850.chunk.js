(this.webpackJsonpvibe=this.webpackJsonpvibe||[]).push([[0],{31:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),c=a.n(s),i=(a(48),a(31),a(20)),o=a(2),l=a.n(o),u=a(23),p=a(12),m=a(4),h=a(5),d=a(7),f=a(6),b=(a(50),window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{})),g="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("03448805c58d4c5ba555ea203c8ce771","&redirect_uri=").concat("http://nicholas-lin.github.io/vibe/","&scope=").concat(["playlist-read-private","user-top-read","user-read-recently-played"].join("%20"),"&response_type=token&show_dialog=true"),v=a(11),y=a.n(v),k=a(18),E=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return this.props.isLoggedIn?null:r.a.createElement("div",null,r.a.createElement(k.a,{className:"submit-button",variant:"success",onClick:function(){return e.props.handleLogin()}},"Login with Spotify"))}}]),a}(r.a.Component),j=a(8),O=a(17);a(67);var N=function(){return r.a.createElement("div",{className:"sound-icon disabled"},r.a.createElement("div",{className:"sound-wave"},r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"})))},T=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return this.props.isLoggedIn?null:r.a.createElement(O.a,null,r.a.createElement(j.a,{className:"d-flex align-items-center flex-column login justify-content-center"},r.a.createElement("header",null," Vibe "),r.a.createElement(N,null),r.a.createElement(E,{isLoggedIn:this.props.isLoggedIn,handleLogin:function(){return e.props.handleLogin()}}),r.a.createElement("h5",{className:"mt-5"},"Get insights into your vibe."),r.a.createElement("h6",{className:"mt-5"},"Your information will not be stored."),r.a.createElement("h6",null," ","Created by"," ",r.a.createElement("a",{href:"https://nicholas-lin.github.io/"}," Nicholas Lin. ")," ","Powered by"," ",r.a.createElement("a",{href:"https://developer.spotify.com/documentation/web-api/"}," ","Spotify's API."," ")," ")))}}]),a}(r.a.Component),C=(a(41),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"handleClick",value:function(e){this.props.playTrack(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.position,n=t.track,s=t.searchTerm,c=n.album.images[0].url,i=n.preview_url,o=-1===n.name.toLowerCase().indexOf(s);return-1===n.artists[0].name.toLowerCase().indexOf(s)&&o?null:r.a.createElement("div",{onClick:function(){return e.handleClick(i)}},r.a.createElement("a",{className:"track-history-item"},r.a.createElement("span",{className:"order-number"},a),r.a.createElement("span",{className:"track-info"},r.a.createElement("span",{className:"track-cover",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("span",{className:"track-summary"},r.a.createElement("span",{className:"track-artist"},n.artists[0].name),r.a.createElement("span",{className:"track-name"},n.name)))))}}]),a}(r.a.Component)),w=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.artist,n=e.searchTerm,s=a.name,c=a.genres,i=a.images[0].url;c=c.join(", ");var o=-1===s.toLowerCase().indexOf(n);return-1===c.toLowerCase().indexOf(n)&&o?null:r.a.createElement("div",null,r.a.createElement("a",{className:"track-history-item"},r.a.createElement("span",{className:"order-number"},t),r.a.createElement("span",{className:"track-info"},r.a.createElement("span",{className:"track-cover",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("span",{className:"track-summary"},r.a.createElement("span",{className:"track-artist"},c),r.a.createElement("span",{className:"track-name"},s)))))}}]),a}(r.a.Component),x=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"playTrack",value:function(e){var t=document.querySelector("audio");t?(t.paused?t.play():t.pause(),t.src!==e&&(t.currentTime=0,t.src=e,t.play())):((t=new Audio(e)).volume=.25,document.getElementById("result-table").append(t),t.play())}},{key:"render",value:function(){var e,t=this;return e="tracks"===this.props.topType?this.props.topTracks.map((function(e,a){return r.a.createElement(C,{position:a+1,key:e.id,track:e,searchTerm:t.props.searchTerm,playTrack:t.playTrack})})):this.props.topArtists.map((function(e,a){return r.a.createElement(w,{position:a+1,key:e.id,artist:e,searchTerm:t.props.searchTerm})})),r.a.createElement("div",{id:"result-table"},e||r.a.createElement("h3",{className:"no-results",style:{alignSelf:"center"}},"No Results"))}}]),a}(r.a.Component),L=a(16),D=a(26),A=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeData()}},{key:"render",value:function(){var e=this;return this.props.isLoggedIn?null:r.a.createElement("div",null,r.a.createElement(L.a,{className:"d-flex justify-content-between p-4"},r.a.createElement(j.a,{md:4,className:"mb-4"},r.a.createElement("input",{className:"search-field",name:"searchTerm",value:this.props.searchTerm,type:"text",placeholder:"Search",onChange:function(t){return e.props.handleChange(t)}})),r.a.createElement(j.a,{md:4,className:"mb-4"},r.a.createElement(D.a,null,r.a.createElement(k.a,{variant:"outline-success",className:"short_term"===this.props.timeRange&&"active",type:"radio",name:"timeRange",value:"short_term",onClick:function(t){return e.props.handleChange(t)},checked:"short_term"===this.props.time_range,defaultChecked:!0},"Last Month"),r.a.createElement(k.a,{variant:"outline-success",className:"medium_term"===this.props.timeRange&&"active",type:"radio",name:"timeRange",value:"medium_term",onClick:function(t){return e.props.handleChange(t)},checked:"medium_term"===this.props.timeRange},"Last 6 Months"),r.a.createElement(k.a,{variant:"outline-success",className:"long_term"===this.props.timeRange&&"active",type:"radio",name:"timeRange",value:"long_term",onClick:function(t){return e.props.handleChange(t)},checked:"long_term"===this.props.timeRange},"All Time"))),r.a.createElement(j.a,{md:4,className:"mb-4"},r.a.createElement(D.a,null,r.a.createElement(k.a,{variant:"outline-success",className:"tracks"===this.props.topType&&"active",type:"radio",name:"topType",value:"tracks",onClick:function(t){return e.props.handleChange(t)},checked:"tracks"===this.props.topType,defaultChecked:!0},"Tracks"),r.a.createElement(k.a,{variant:"outline-success",className:"artists"===this.props.topType&&"active",type:"radio",name:"topType",value:"artists",onClick:function(t){return e.props.handleChange(t)},checked:"artists"===this.props.topType,defaultChecked:!0},"Artists")))))}}]),a}(r.a.Component),R=a(15),S=a.n(R);S.a.defaults.global.defaultFontColor="white",S.a.defaults.global.defaultColor="white",S.a.defaults.scale.gridLines.color="rgb(83,83,83)",S.a.defaults.LineWithLine=S.a.defaults.line,S.a.controllers.LineWithLine=S.a.controllers.line.extend({draw:function(e){if(S.a.controllers.line.prototype.draw.call(this,e),this.chart.tooltip._active&&this.chart.tooltip._active.length){var t=this.chart.tooltip._active[0],a=this.chart.ctx,n=t.tooltipPosition().x,r=this.chart.legend.bottom,s=this.chart.chartArea.bottom;a.save(),a.beginPath(),a.moveTo(n,r),a.lineTo(n,s),a.lineWidth=2,a.strokeStyle="rgb(255, 255, 255, 0.5)",a.stroke(),a.restore()}}});var _=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).chartRef=r.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){new S.a(this.chartRef.current,{type:"LineWithLine",data:{labels:this.props.data.labels,datasets:this.props.data.datasets.map((function(e){return{data:e.data,label:e.label,borderColor:e.borderColor,borderWidth:2,fill:e.fill,backgroundColor:e.backgroundColor,pointBackgroundColor:e.borderColor,pointBorderWidth:1,pointBorderColor:"black",pointRadius:5,pointHitRadius:6,pointHoverBackgroundColor:"black",pointHoverBorderColor:e.borderColor}}))},options:{tooltips:{mode:"index",intersect:!1,titleFontColor:"black",bodyFontColor:"black",backgroundColor:"rgba(255, 255, 255, 0.9)",callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=": "),a+=Math.round(e.yLabel),a}}}}})}},{key:"render",value:function(){return r.a.createElement(j.a,{className:" h-100 d-flex flex-column justify-content-between align-items-center p-0"},r.a.createElement("h3",null,this.props.title),r.a.createElement("p",null,this.props.description),r.a.createElement("canvas",{ref:this.chartRef,width:"400",height:"300"}))}}]),a}(r.a.Component);function I(){return r.a.createElement("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement(N,null),r.a.createElement("h1",null,"Loading your vibe..."))}var M=a(27),z=a(29),B=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e,t,a=this.props,n=a.percent,s=a.descriptions,c=a.emojis,i="";if(n<0?(e=r.a.createElement(M.a,{icon:z.a,size:"lg",color:"red",style:{marginRight:"0.5em"}}),i=s[0]):0==n?i=s[1]:(e=r.a.createElement(M.a,{icon:z.b,size:"lg",color:"rgba(73, 209, 0, 1)",style:{marginRight:"0.5em"}}),i=s[2]),n>100)t=c[t.length-1];else if(n<-100)t=c[0];else{var o=200/c.length;t=c[Math.floor((n+100)/o)]}return r.a.createElement("div",null,r.a.createElement("span",{className:"emoji"}," ",t," "),r.a.createElement(L.a,{className:"d-flex flex-direction-column justify-content-center align-items-center"},e,r.a.createElement("h1",null,Math.abs(n),"%")),r.a.createElement("h5",null,i))}}]),a}(n.Component),F=(a(74),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){for(var e,t,a=this.props.score,n=[0,30,50,70,90,100],s=["Hipster","Eccentric","Trendy","Mainstream","Basic"],c=["\ud83e\uddd0","\ud83e\udd14","\ud83d\ude0e","\ud83e\udd29","\ud83d\udc81\u200d\u2640\ufe0f"],i=0;i<n.length-1;i++){if(a>=n[i]&&a<n[i+1]){e=s[i],t=c[i];break}}return r.a.createElement(j.a,{className:"d-flex flex-column justify-content-center h-100"},r.a.createElement("svg",{viewBox:"0 0 36 36",className:"circular-chart green"},r.a.createElement("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),r.a.createElement("path",{className:"circle",strokeDasharray:"60, 100",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),r.a.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dy:".35em",className:"percentage"},Math.round(a))),r.a.createElement("h2",null,"Popularity Score:"),r.a.createElement("h2",null,"".concat(e," ").concat(t)))}}]),a}(n.Component)),P=a(22);function G(e){var t=e.images.map((function(e){return r.a.createElement(P.a.Item,{key:e.id},r.a.createElement("img",{src:e.url}))}));return r.a.createElement(P.a,{indicators:!1,controls:!1,fade:!1},t)}S.a.defaults.global.defaultFontColor="white";var H=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).chartRef=r.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){for(var e=this.props.data,t={labels:[],data:[]},a=0;a<e.length&&a<10;a++)t.labels.push(e[a].key),t.data.push(e[a].value);if(e.length>=10){for(var n=0,r=10;r<e.length;r++)n+=e[r].value;t.labels.push("Other"),t.data.push(n)}var s=t.data.reduce((function(e,t){return e+t}),0);t.data=t.data.map((function(e){return Math.round(e/s*100)})),new S.a(this.chartRef.current,{type:"doughnut",data:{labels:t.labels,datasets:[{label:"Genres",backgroundColor:["rgba(255, 221, 0, 0.8)","rgba(255, 200, 0, 0.8)","rgba(255,166,0, 0.8)","rgba(255,124,67, 0.8)","rgba(249,93,106, 0.8)","rgba(212,80,135, 0.8)","rgba(160,81,149, 0.8)","rgba(102,81,145, 0.8)","rgba(47,75,124, 0.8)","rgba(29, 52, 130, 0.8)","rgba(10, 36, 66, 0.8)"],borderColor:["rgba(255, 221, 0, 1)","rgba(255, 200, 0, 1)","rgba(255,166,0, 1)","rgba(255,124,67, 1)","rgba(249,93,106, 1)","rgba(212,80,135, 1)","rgba(160,81,149, 1)","rgba(102,81,145, 1)","rgba(47,75,124, 1)","rgba(29, 52, 130, 1)","rgba(10, 36, 66, 1)"],data:t.data}]},options:{legend:{position:"bottom"},responsive:!0,maintainAspectRatio:!1,tooltips:{callbacks:{label:function(e,t){return t.labels[e.index]+": "+t.datasets[0].data[e.index]+"%"}}}}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"chart-container"},r.a.createElement("canvas",{ref:this.chartRef}))}}]),a}(r.a.Component),Y=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,percentages:{},popularity:0,trackImages:[]},n}return Object(h.a)(a,[{key:"getRecentTracks",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spotify.com/v1/me/player/recently-played",e.next=3,y.a.get("https://api.spotify.com/v1/me/player/recently-played",{headers:{Authorization:"Bearer ".concat(this.props.token)},params:{limit:50}});case 3:return t=e.sent,console.log(t.data.items),e.abrupt("return",t.data.items);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTrackFeatures",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.forEach((function(e){a.push(e.track.id)})),"https://api.spotify.com/v1/audio-features",e.next=5,y.a.get("https://api.spotify.com/v1/audio-features",{headers:{Authorization:"Bearer ".concat(this.props.token)},params:{ids:a.join()}});case 5:return n=e.sent,r=[],n.data.audio_features.forEach((function(e){var a=e.id,n=e.acousticness,s=e.danceability,c=e.energy,i=e.valence,o=t.find((function(e){return e.track.id===a}));r.push({id:a,acousticness:n,danceability:s,energy:c,valence:i,popularity:o.track.popularity})})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"averageFeatures",value:function(e){var t={};for(var a in e.forEach((function(e){for(var a in e)"id"!==a&&(t[a]?t[a]+=e[a]:t[a]=e[a])})),t)t[a]=t[a]/e.length;return t}},{key:"searchForPlaylist",value:function(){var e=Object(p.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spotify.com/v1/search",e.next=3,y.a.get("https://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(this.props.token)},params:{q:t.join("%20"),type:"playlist",limit:"10"}});case 3:return n=e.sent,r=n.data.playlists.items.filter((function(e){var n=!0;return t.forEach((function(t){n=n&&e.name.toLowerCase().includes(t.toLowerCase())})),n&&e.owner.display_name.toLowerCase().includes(a.toLowerCase())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getPlaylist",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spotify.com/v1/playlists/",e.next=3,y.a.get("".concat("https://api.spotify.com/v1/playlists/").concat(t),{headers:{Authorization:"Bearer ".concat(this.props.token)},params:{fields:"name,tracks.items(track)"}});case 3:return a=e.sent,e.abrupt("return",{name:a.data.name,tracks:a.data.tracks.items});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"calculatePercentDifferences",value:function(e,t){var a={};for(var n in e){var r=Math.round((t[n]-e[n])/e[n]*100);a[n]=r}return a}},{key:"getGeneres",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var a,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.forEach((function(e){a.push(e.track.artists[0].id)})),"https://api.spotify.com/v1/artists",e.next=5,y.a.get("https://api.spotify.com/v1/artists",{headers:{Authorization:"Bearer ".concat(this.props.token)},params:{ids:a.join()}});case 5:return n=e.sent,r=new Map,n.data.artists.forEach((function(e){var t=e.genres[0];t&&r.get(t)?r.set(t,r.get(t)+1):r.set(t,1)})),s=[],r.forEach((function(e,t){s.push({key:t,value:e})})),s.sort((function(e,t){return t.value-e.value})),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,a,n,r,s,c,i,o,u,p,m,h,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRecentTracks();case 2:return t=e.sent,e.next=5,this.getTrackFeatures(t);case 5:return a=e.sent,n=this.averageFeatures(a),r=Array.from(new Set(t.map((function(e){return e.track.id})))).map((function(e){return t.find((function(t){return t.track.id===e}))})),console.log(r),s=r.map((function(e){return{id:e.track.id,url:e.track.album.images[0].url}})),e.next=12,this.getGeneres(t);case 12:return c=e.sent,e.next=15,this.searchForPlaylist(["Today's top hits"],"Spotify");case 15:return i=e.sent,o=i[0].id,e.next=19,this.getPlaylist(o);case 19:return u=e.sent,e.next=22,this.getTrackFeatures(u.tracks);case 22:p=e.sent,m=this.averageFeatures(p),h=this.calculatePercentDifferences(m,n),d=n.popularity,this.setState({percentages:h,popularity:d,trackImages:s,genres:c,isLoading:!1}),this.props.load();case 28:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isLoading?null:r.a.createElement("div",null,r.a.createElement("header",null,"Your Mood"),r.a.createElement(O.a,null,r.a.createElement("h3",null,"How do your recent songs compare to today's top hits?"),r.a.createElement(L.a,{className:"justify-content-center"},r.a.createElement(j.a,{md:{span:6,order:2},className:"d-flex flex-column justify-content-center h-100"},r.a.createElement(G,{images:this.state.trackImages})),r.a.createElement(j.a,{md:{span:6,order:1}},r.a.createElement(F,{score:this.state.popularity}))),r.a.createElement("hr",null),r.a.createElement(L.a,null,r.a.createElement(j.a,{md:3},r.a.createElement(B,{percent:this.state.percentages.valence,descriptions:["Less happy","Same hapiness","Happier"],emojis:["\ud83d\ude2d","\ud83d\ude22","\ud83d\ude15","\ud83d\ude03","\ud83d\ude01","\ud83d\ude0a"]})),r.a.createElement(j.a,{md:3},r.a.createElement(B,{percent:this.state.percentages.danceability,descriptions:["Less danceable","Same danceability","More danceable"],emojis:["\ud83d\udc83"]})),r.a.createElement(j.a,{md:3},r.a.createElement(B,{percent:this.state.percentages.energy,descriptions:["Less energetic","Same energy","More energetic"],emojis:["\ud83d\ude34","\u26a1\ufe0f","\ud83d\udd25"]})),r.a.createElement(j.a,{md:3},r.a.createElement(B,{percent:this.state.percentages.acousticness,descriptions:["Less acoustic","Same acousticness","More acoustic"],emojis:["\ud83c\udfb8","\ud83c\udfbb"]}))),r.a.createElement("hr",null),r.a.createElement(L.a,null,r.a.createElement(j.a,{className:"justify-content-center"},r.a.createElement("h2",null,"Your Top Genres"),r.a.createElement(H,{data:this.state.genres})))),r.a.createElement("hr",null))}}]),a}(n.Component),W=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getTopPlaylists=Object(p.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("\thttps://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(n.state.token)},params:{q:"Your%20Top%20Songs",type:"playlist",limit:"10"}});case 2:return t=e.sent,[],e.next=6,Promise.all(t.data.playlists.items.map(function(){var e=Object(p.a)(l.a.mark((function e(t){var a,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(19!==t.name.length||"Spotify"!==t.owner.display_name){e.next=11;break}return e.next=3,y.a.get("https://api.spotify.com/v1/playlists/".concat(t.id),{headers:{Authorization:"Bearer ".concat(n.state.token)},params:{fields:"name,tracks.items(track)"}});case 3:return a=e.sent,r=a.data.name.split(" ").pop(),s={year:r,tracks:a.data.tracks.items},n.setState({data:[].concat(Object(i.a)(n.state.data),[s])}),e.next=9,n.getTrackFeatures(s.tracks);case 9:c=e.sent,n.computeFeatures(r,c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return e.next=8,y.a.get("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(n.state.token)},params:{time_range:"medium_term",limit:50}});case 8:return a=e.sent,e.next=11,n.getTrackFeatures(a.data.items);case 11:r=e.sent,n.computeFeatures("2020",r),n.createGraphData(),console.log(n.state.features),console.log(n.state.data);case 16:case"end":return e.stop()}}),e)}))),n.state={token:n.props.token,data:[],features:[],isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getTopPlaylists()}},{key:"getTrackFeatures",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.forEach((function(e){e.track?a.push(e.track.id):a.push(e.id)})),e.next=4,y.a.get("https://api.spotify.com/v1/audio-features",{headers:{Authorization:"Bearer ".concat(this.state.token)},params:{ids:a.join()}});case 4:return n=e.sent,r=[],n.data.audio_features.forEach((function(e){var t=e.id,a=e.acousticness,n=e.danceability,s=e.energy,c=e.valence;r.push({id:t,acousticness:a,danceability:n,energy:s,valence:c})})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"computeFeatures",value:function(e,t){var a={acousticness:0,danceability:0,energy:0,valence:0};for(var n in t.forEach((function(e){for(var t in e)"id"!=t&&(a[t]+=e[t])})),a)a[n]=Math.round(100*(100*a[n]/t.length+Number.EPSILON))/100;this.setState({features:[].concat(Object(i.a)(this.state.features),[{year:e,averages:a}])})}},{key:"createGraphData",value:function(){var e={acousticness:[],danceability:[],energy:[],valence:[]},t=[].concat(this.state.features).sort((function(e,t){return e.year.localeCompare(t.year)}));console.log(t),t.forEach((function(t){for(var a in t.averages)e[a].push(t.averages[a])}));var a={},n={acousticness:[15.88,16.63,19.57,22.16,21.39],danceability:[63.25,69.68,71.65,71.38,71.99],energy:[67.24,66.07,65.91,64.06,65.05],valence:[45.15,51.7,48.44,54.6,53.1]},r={acousticness:[28.03,28.99,27.19,28.93,24.74],danceability:[60,61.23,66.5,64.42,67.31],energy:[59.29,58.67,59.06,57.88,61.19],valence:[43.08,41.45,44.71,46.59,48.28]};for(var s in console.log(e),e)a[s]={labels:t.map((function(e){return e.year})),datasets:[{data:e[s],label:"Your Top Songs",fill:!0,borderColor:"rgba(29,185,84,1)",backgroundColor:"rgba(29,185,84,0.4)"},{data:r[s],label:"Average Song",fill:!1,borderColor:"rgba(255, 255, 255, 0.9)"},{data:n[s],label:"Top Spotify Songs",fill:!1,borderColor:"rgba(255,99,132,1)"}]};this.setState({formattedData:a,isLoading:!1}),this.props.load()}},{key:"render",value:function(){var e="Describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive, while tracks with low valence sound more negative.",t="Describes how suitable a track is for dancing based on a combination of musical elements.",a="Represents a perceptual measure of intensity and activity based on dynamic range, general entropy, etc.",n="A confidence measure from 0 to 100 of whether the track is acoustic. 100 represents high confidence the track is acoustic.";return!this.state.isLoading&&r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement("header",null,"Your Vibe"),r.a.createElement(L.a,{className:"mb-4"},r.a.createElement(j.a,{md:6,className:"mb-4"},r.a.createElement(_,{title:"Valence (Happiness)",description:e,data:this.state.formattedData.valence})),r.a.createElement(j.a,{md:6,className:"mb-4"},r.a.createElement(_,{title:"Danceability",description:t,data:this.state.formattedData.danceability}))),r.a.createElement(L.a,{className:"mb-4"},r.a.createElement(j.a,{md:6,className:"mb-4"},r.a.createElement(_,{title:"Energy",description:a,data:this.state.formattedData.energy})),r.a.createElement(j.a,{md:6,className:"mb-4"},r.a.createElement(_,{title:"Acousticness",description:n,data:this.state.formattedData.acousticness})))),r.a.createElement("hr",null))}}]),a}(r.a.Component),V=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,moodDashboardIsLoading:!0,vibeDashboardIsLoading:!0},n}return Object(h.a)(a,[{key:"loadMoodDashboard",value:function(){this.setState({moodDashboardIsLoading:!1,isLoading:this.state.vibeDashboardIsLoading||!1})}},{key:"loadVibeDashboard",value:function(){this.setState({vibeDashboardIsLoading:!1,isLoading:this.state.moodDashboardIsLoading||!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.isLoading&&r.a.createElement(I,null),r.a.createElement(O.a,null,r.a.createElement(Y,{token:this.props.token,load:function(){return e.loadMoodDashboard()}}),r.a.createElement(W,{token:this.props.token,load:function(){return e.loadVibeDashboard()}}),r.a.createElement("header",null,"Your Favorites"),r.a.createElement(A,{handleChange:this.props.handleChange,timeRange:this.props.timeRange,topType:this.props.topType,initializeData:this.props.initializeData}),r.a.createElement(x,{topType:this.props.topType,topTracks:this.props.topTracks,topArtists:this.props.topArtists,searchTerm:this.props.searchTerm})))}}]),a}(r.a.Component),q=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(){var e=Object(p.a)(l.a.mark((function e(t){var a,r,s,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target,r=a.name,s=a.value,c=a.type,i=a.checked,e.next=3,c;case 3:if(e.t0=e.sent,"checkbox"!==e.t0){e.next=8;break}n.setState(Object(u.a)({},r,i)),e.next=9;break;case 8:n.setState(Object(u.a)({},r,s));case 9:"timeRange"===r&&n.refreshData();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getTopArtists=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"Bearer ".concat(n.state.token)},params:{time_range:n.state.timeRange,limit:50}},e.next=3,y.a.get("https://api.spotify.com/v1/me/top/artists",t).then((function(e){n.setState({topArtists:e.data.items})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),n.getTopTracks=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(n.state.token)},params:{time_range:n.state.timeRange,limit:50}}).then((function(e){n.setState({topTracks:e.data.items})})).catch((function(e){console.log(e)}));case 2:return e.next=4,n.analyzeTopTracks();case 4:case"end":return e.stop()}}),e)}))),n.analyzeTopTracks=Object(p.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n.state.topTracks.forEach((function(e){t.push(e.id)})),a={headers:{Authorization:"Bearer ".concat(n.state.token)},params:{ids:t.join()}},e.next=5,y.a.get("https://api.spotify.com/v1/audio-features",a).then((function(e){e.data.audio_features.forEach((function(e){var t=e.id,a=e.acousticness,r=e.danceability,s=e.energy,c=e.valence;n.setState({audioAnalysis:[].concat(Object(i.a)(n.state.audioAnalysis),[{id:t,acousticness:a,danceability:r,energy:s,valence:c}])})}))})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)}))),n.refreshData=function(){n.getTopArtists(),n.getTopTracks()},n.initializeData=function(){n.getTopArtists(),n.getTopTracks()},n.state={isLoggedIn:!1,token:null,topTracks:[],topArtists:[],audioAnalysis:[],timeRange:"short_term",searchTerm:"",topType:"tracks"},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=b.access_token;e&&this.setState({token:e})}},{key:"handleLogin",value:function(){console.log(g),window.location.replace(g),this.setState({isLoggedIn:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},!this.state.token&&r.a.createElement(T,{isLoggedIn:this.state.isLoggedIn,handleLogin:function(){return e.handleLogin()}}),this.state.token&&r.a.createElement(V,Object(u.a)({token:this.state.token,topType:this.state.topType,topTracks:this.state.topTracks,topArtists:this.state.topArtists,timeRange:this.state.timeRange,searchTerm:this.state.searchTerm,handleChange:this.handleChange,initializeData:this.initializeData},"token",this.state.token)))}}]),a}(r.a.Component);c.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.87386850.chunk.js.map