(this.webpackJsonpvibe=this.webpackJsonpvibe||[]).push([[0],{22:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){e.exports=a(63)},42:function(e,t,a){},60:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),c=a.n(s),i=(a(40),a(22),a(17)),o=a(6),l=a.n(o),u=a(19),m=a(12),p=a(1),h=a(2),d=a(4),f=a(3),b=(a(42),window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{})),g="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("03448805c58d4c5ba555ea203c8ce771","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["playlist-read-private","user-top-read"].join("%20"),"&response_type=token&show_dialog=true"),v=a(15),y=a(13),k=a.n(y),E=a(14),N=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return this.props.isLoggedIn?null:r.a.createElement("div",null,r.a.createElement(E.a,{className:"submit-button",variant:"success",onClick:function(){return e.props.handleLogin()}},"Login with Spotify"))}}]),a}(r.a.Component),T=a(8),j=(a(60),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return this.props.isLoggedIn?null:r.a.createElement(v.a,null,r.a.createElement(T.a,{className:"d-flex align-items-center flex-column login justify-content-center"},r.a.createElement("header",null," Vibe "),r.a.createElement("div",{className:"sound-icon disabled"},r.a.createElement("div",{className:"sound-wave"},r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}),r.a.createElement("i",{className:"bar"}))),r.a.createElement(N,{isLoggedIn:this.props.isLoggedIn,handleLogin:function(){return e.props.handleLogin()}}),r.a.createElement("h5",{className:"mt-5"},"Get insights into your vibe."),r.a.createElement("h6",{className:"mt-5"},"Your information will not be stored."),r.a.createElement("h6",null," ","Created by"," ",r.a.createElement("a",{href:"https://nicholas-lin.github.io/"}," Nicholas Lin. ")," ","Powered by"," ",r.a.createElement("a",{href:"https://developer.spotify.com/documentation/web-api/"}," ","Spotify's API."," ")," ")))}}]),a}(r.a.Component)),O=(a(31),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"handleClick",value:function(e){this.props.playTrack(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.position,n=t.track,s=t.searchTerm,c=n.album.images[0].url,i=n.preview_url,o=-1===n.name.toLowerCase().indexOf(s);return-1===n.artists[0].name.toLowerCase().indexOf(s)&&o?null:r.a.createElement("div",{onClick:function(){return e.handleClick(i)}},r.a.createElement("a",{className:"track-history-item"},r.a.createElement("span",{className:"order-number"},a),r.a.createElement("span",{className:"track-info"},r.a.createElement("span",{className:"track-cover",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("span",{className:"track-summary"},r.a.createElement("span",{className:"track-artist"},n.artists[0].name),r.a.createElement("span",{className:"track-name"},n.name)))))}}]),a}(r.a.Component)),C=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.position,a=e.artist,n=e.searchTerm,s=a.name,c=a.genres,i=a.images[0].url;c=c.join(", ");var o=-1===s.toLowerCase().indexOf(n);return-1===c.toLowerCase().indexOf(n)&&o?null:r.a.createElement("div",null,r.a.createElement("a",{className:"track-history-item"},r.a.createElement("span",{className:"order-number"},t),r.a.createElement("span",{className:"track-info"},r.a.createElement("span",{className:"track-cover",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("span",{className:"track-summary"},r.a.createElement("span",{className:"track-artist"},c),r.a.createElement("span",{className:"track-name"},s)))))}}]),a}(r.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"playTrack",value:function(e){var t=document.querySelector("audio");t?(t.paused?t.play():t.pause(),t.src!==e&&(t.currentTime=0,t.src=e,t.play())):((t=new Audio(e)).volume=.25,document.getElementById("result-table").append(t),t.play())}},{key:"render",value:function(){var e,t=this;return e="tracks"===this.props.topType?this.props.topTracks.map((function(e,a){return r.a.createElement(O,{position:a+1,key:e.id,track:e,searchTerm:t.props.searchTerm,playTrack:t.playTrack})})):this.props.topArtists.map((function(e,a){return r.a.createElement(C,{position:a+1,key:e.id,artist:e,searchTerm:t.props.searchTerm})})),r.a.createElement("div",{id:"result-table"},e||r.a.createElement("h3",{className:"no-results",style:{alignSelf:"center"}},"No Results"))}}]),a}(r.a.Component),x=a(16),L=a(20),A=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeData()}},{key:"render",value:function(){var e=this;return this.props.isLoggedIn?null:r.a.createElement("div",null,r.a.createElement(x.a,{className:"d-flex justify-content-between p-4"},r.a.createElement(T.a,{md:4,className:"mb-4"},r.a.createElement("input",{className:"search-field",name:"searchTerm",value:this.props.searchTerm,type:"text",placeholder:"Search",onChange:function(t){return e.props.handleChange(t)}})),r.a.createElement(T.a,{md:4,className:"mb-4"},r.a.createElement(L.a,null,r.a.createElement(E.a,{variant:"outline-success",className:"short_term"===this.props.timeRange&&"active",type:"radio",name:"timeRange",value:"short_term",onClick:function(t){return e.props.handleChange(t)},checked:"short_term"===this.props.time_range,defaultChecked:!0},"Last Month"),r.a.createElement(E.a,{variant:"outline-success",className:"medium_term"===this.props.timeRange&&"active",type:"radio",name:"timeRange",value:"medium_term",onClick:function(t){return e.props.handleChange(t)},checked:"medium_term"===this.props.timeRange},"Last 6 Months"),r.a.createElement(E.a,{variant:"outline-success",className:"long_term"===this.props.timeRange&&"active",type:"radio",name:"timeRange",value:"long_term",onClick:function(t){return e.props.handleChange(t)},checked:"long_term"===this.props.timeRange},"All Time"))),r.a.createElement(T.a,{md:4,className:"mb-4"},r.a.createElement(L.a,null,r.a.createElement(E.a,{variant:"outline-success",className:"tracks"===this.props.topType&&"active",type:"radio",name:"topType",value:"tracks",onClick:function(t){return e.props.handleChange(t)},checked:"tracks"===this.props.topType,defaultChecked:!0},"Tracks"),r.a.createElement(E.a,{variant:"outline-success",className:"artists"===this.props.topType&&"active",type:"radio",name:"topType",value:"artists",onClick:function(t){return e.props.handleChange(t)},checked:"artists"===this.props.topType,defaultChecked:!0},"Artists")))))}}]),a}(r.a.Component),_=a(18),D=a.n(_);D.a.defaults.global.defaultFontColor="white",D.a.defaults.global.defaultColor="white",D.a.defaults.scale.gridLines.color="rgb(83,83,83)";var R=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).chartRef=r.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){new D.a(this.chartRef.current,{type:"line",data:{labels:this.props.data.labels,datasets:this.props.data.datasets.map((function(e){return{data:e.data,label:e.label,borderColor:e.borderColor,borderWidth:2,fill:e.fill,backgroundColor:e.backgroundColor}}))},options:{}})}},{key:"render",value:function(){return r.a.createElement(T.a,{className:" h-100 d-flex flex-column justify-content-between align-items-center p-0"},r.a.createElement("h3",null,this.props.title),r.a.createElement("p",null,this.props.description),r.a.createElement("canvas",{ref:this.chartRef,width:"400",height:"300"}))}}]),a}(r.a.Component),S=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getTopPlaylists=Object(m.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("\thttps://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(n.state.token)},params:{q:"Your%20Top%20Songs",type:"playlist",limit:"10"}});case 2:return t=e.sent,[],e.next=6,Promise.all(t.data.playlists.items.map(function(){var e=Object(m.a)(l.a.mark((function e(t){var a,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(19!==t.name.length||"Spotify"!==t.owner.display_name){e.next=11;break}return e.next=3,k.a.get("https://api.spotify.com/v1/playlists/".concat(t.id),{headers:{Authorization:"Bearer ".concat(n.state.token)},params:{fields:"name,tracks.items(track)"}});case 3:return a=e.sent,r=a.data.name.split(" ").pop(),s={year:r,tracks:a.data.tracks.items},n.setState({data:[].concat(Object(i.a)(n.state.data),[s])}),e.next=9,n.getTrackFeatures(s.tracks);case 9:c=e.sent,n.computeFeatures(r,c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return e.next=8,k.a.get("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(n.state.token)},params:{time_range:"medium_term",limit:50}});case 8:return a=e.sent,e.next=11,n.getTrackFeatures(a.data.items);case 11:r=e.sent,n.computeFeatures("2020",r),n.createGraphData(),console.log(n.state.features),console.log(n.state.data);case 16:case"end":return e.stop()}}),e)}))),n.state={token:n.props.token,data:[],features:[],isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getTopPlaylists()}},{key:"getTrackFeatures",value:function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.forEach((function(e){e.track?a.push(e.track.id):a.push(e.id)})),e.next=4,k.a.get("https://api.spotify.com/v1/audio-features",{headers:{Authorization:"Bearer ".concat(this.state.token)},params:{ids:a.join()}});case 4:return n=e.sent,r=[],n.data.audio_features.forEach((function(e){var t=e.id,a=e.acousticness,n=e.danceability,s=e.energy,c=e.valence;r.push({id:t,acousticness:a,danceability:n,energy:s,valence:c})})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"computeFeatures",value:function(e,t){var a={acousticness:0,danceability:0,energy:0,valence:0};for(var n in t.forEach((function(e){for(var t in e)"id"!=t&&(a[t]+=e[t])})),a)a[n]=Math.round(100*(a[n]/t.length+Number.EPSILON))/100;this.setState({features:[].concat(Object(i.a)(this.state.features),[{year:e,averages:a}])})}},{key:"createGraphData",value:function(){var e={acousticness:[],danceability:[],energy:[],valence:[]},t=[].concat(this.state.features).sort((function(e,t){return e.year.localeCompare(t.year)}));t.forEach((function(t){for(var a in t.averages)e[a].push(t.averages[a])}));var a={},n={acousticness:[.3,.3,.3,.3,.3],danceability:[.65,.65,.65,.65,.65],energy:[.6,.6,.6,.6,.6],valence:[.5,.5,.5,.5,.5]};for(var r in e)a[r]={labels:t.map((function(e){return e.year})),datasets:[{data:e[r],label:"You",fill:!0,borderColor:"rgba(29,185,84,1)",backgroundColor:"rgba(29,185,84,0.4)"},{data:n[r],label:"Average",fill:!1,borderColor:"rgba(255,99,132,1)"}]};this.setState({formattedData:a,isLoading:!1})}},{key:"render",value:function(){var e="Describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive, while tracks with low valence sound more negative.",t="Describes how suitable a track is for dancing based on a combination of musical elements.",a="Represents a perceptual measure of intensity and activity based on dynamic range, general entropy, etc.",n="A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.";return this.state.isLoading?null:r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(x.a,{className:"mb-4"},r.a.createElement(T.a,{md:6,className:"mb-4"},r.a.createElement(R,{title:"Valence",description:e,data:this.state.formattedData.valence})),r.a.createElement(T.a,{md:6,className:"mb-4"},r.a.createElement(R,{title:"Danceability",description:t,data:this.state.formattedData.danceability}))),r.a.createElement(x.a,{className:"mb-4"},r.a.createElement(T.a,{md:6,className:"mb-4"},r.a.createElement(R,{title:"Energy",description:a,data:this.state.formattedData.energy})),r.a.createElement(T.a,{md:6,className:"mb-4"},r.a.createElement(R,{title:"Acousticness",description:n,data:this.state.formattedData.acousticness})))))}}]),a}(r.a.Component),z=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,r,s,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target,r=a.name,s=a.value,c=a.type,i=a.checked,e.next=3,c;case 3:if(e.t0=e.sent,"checkbox"!==e.t0){e.next=8;break}n.setState(Object(u.a)({},r,i)),e.next=9;break;case 8:n.setState(Object(u.a)({},r,s));case 9:"timeRange"===r&&n.refreshData();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getTopArtists=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:"Bearer ".concat(n.state.token)},params:{time_range:n.state.timeRange,limit:50}},e.next=3,k.a.get("https://api.spotify.com/v1/me/top/artists",t).then((function(e){n.setState({topArtists:e.data.items})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),n.getTopTracks=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(n.state.token)},params:{time_range:n.state.timeRange,limit:50}}).then((function(e){n.setState({topTracks:e.data.items})})).catch((function(e){console.log(e)}));case 2:return e.next=4,n.analyzeTopTracks();case 4:case"end":return e.stop()}}),e)}))),n.analyzeTopTracks=Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n.state.topTracks.forEach((function(e){t.push(e.id)})),a={headers:{Authorization:"Bearer ".concat(n.state.token)},params:{ids:t.join()}},e.next=5,k.a.get("https://api.spotify.com/v1/audio-features",a).then((function(e){e.data.audio_features.forEach((function(e){var t=e.id,a=e.acousticness,r=e.danceability,s=e.energy,c=e.valence;n.setState({audioAnalysis:[].concat(Object(i.a)(n.state.audioAnalysis),[{id:t,acousticness:a,danceability:r,energy:s,valence:c}])})}))})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)}))),n.refreshData=function(){n.getTopArtists(),n.getTopTracks()},n.initializeData=function(){n.getTopArtists(),n.getTopTracks()},n.state={isLoggedIn:!1,token:null,topTracks:[],topArtists:[],audioAnalysis:[],timeRange:"short_term",searchTerm:"",topType:"tracks"},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=b.access_token;e&&this.setState({token:e})}},{key:"handleLogin",value:function(){console.log(g),window.location.replace(g),this.setState({isLoggedIn:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},!this.state.token&&r.a.createElement(j,{isLoggedIn:this.state.isLoggedIn,handleLogin:function(){return e.handleLogin()}}),this.state.token&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement("header",null," Your Vibe "),r.a.createElement(S,{handleChange:this.handleChange,initializeData:this.initializeData,token:this.state.token}),r.a.createElement(A,{handleChange:this.handleChange,timeRange:this.state.timeRange,topType:this.state.topType,initializeData:this.initializeData}),r.a.createElement(w,{topType:this.state.topType,topTracks:this.state.topTracks,topArtists:this.state.topArtists,searchTerm:this.state.searchTerm}))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.4de7ac80.chunk.js.map