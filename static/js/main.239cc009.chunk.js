(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/row-1-col-1.74bf1914.png"},24:function(e,t,a){e.exports=a.p+"static/media/row-1-col-2.5fd73dcb.png"},25:function(e,t,a){e.exports=a.p+"static/media/row-1-col-3.67d8fdf6.png"},26:function(e,t,a){e.exports=a.p+"static/media/row-1-col-4.79328fb5.png"},27:function(e,t,a){e.exports=a.p+"static/media/row-2-col-1.a1cef48c.png"},28:function(e,t,a){e.exports=a.p+"static/media/row-2-col-2.dec4773d.png"},29:function(e,t,a){e.exports=a.p+"static/media/row-2-col-3.cdf88560.png"},30:function(e,t,a){e.exports=a.p+"static/media/row-2-col-4.5a3710db.png"},31:function(e,t,a){e.exports=a.p+"static/media/row-3-col-1.8f560a79.png"},32:function(e,t,a){e.exports=a.p+"static/media/row-3-col-2.13d87204.png"},33:function(e,t,a){e.exports=a.p+"static/media/row-3-col-3.44d9e865.png"},34:function(e,t,a){e.exports=a.p+"static/media/row-3-col-4.1253db5b.png"},35:function(e,t,a){e.exports=a.p+"static/media/row-4-col-1.fb013bc8.png"},36:function(e,t,a){e.exports=a.p+"static/media/row-4-col-2.386d73a6.png"},37:function(e,t,a){e.exports=a.p+"static/media/row-4-col-3.eb4f7484.png"},38:function(e,t,a){e.exports=a.p+"static/media/row-4-col-4.9c729603.png"},39:function(e,t,a){e.exports=a.p+"static/media/nice.bab589d0.jpeg"},44:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(17),n=a(40),l=(a(53),a(4)),m=a(8),r={picture_selected:new Array(16).fill(!1),accept_shnu:!1,display_nice:!1},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"change_image_selected":return Object(m.a)({},e,{picture_selected:t.payload.picture_selected});case"accept_shnu":return Object(m.a)({},e,{accept_shnu:!0});case"display_nice":return Object(m.a)({},e,{display_nice:!0});default:return e}},p=Object(l.createStore)(o),u=a(41),h=a(19),d=a(20),g=a(42),f=a(21),_=a(43),b=a(22),N=a.n(b),E=(a(66),a(23)),v=a.n(E),w=a(24),y=a.n(w),k=a(25),x=a.n(k),C=a(26),j=a.n(C),O=a(27),S=a.n(O),I=a(28),A=a.n(I),M=a(29),T=a.n(M),B=a(30),H=a.n(B),J=a(31),P=a.n(J),Q=a(32),U=a.n(Q),D=a(33),G=a.n(D),L=a(34),V=a.n(L),Y=a(35),q=a.n(Y),z=a(36),F=a.n(z),K=a(37),R=a.n(K),W=a(38),X=a.n(W),Z=a(39),$=a.n(Z),ee=function(e){function t(){var e,a;Object(h.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).correct_answer=[!1,!0,!0,!0,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"select_image",value:function(e){var t=Object(u.a)(this.props.selected_images);t[e]=!t[e],this.props.changeImageSelected(t)}},{key:"componentDidUpdate",value:function(){for(var e=this,t=0;t<16;t++)if(this.props.selected_images[t]!==this.correct_answer[t])return;this.props.accept_shnu||(this.props.acceptShnu(),console.log("Nice"),setTimeout(function(){e.props.displayNice()},1e3),setTimeout(function(){window.location="https://forms.gle/eU2Pv9csdQMuoTYQA"},3e3))}},{key:"render",value:function(){var e=this;return this.props.display_nice?c.a.createElement("div",{className:"app"},c.a.createElement("h2",{className:"transparent shnu-fade-in"},"Nice!"),c.a.createElement("img",{src:$.a,className:"transparent shnu-fade-in",alt:"Nice!"})):c.a.createElement("div",{className:"app"},c.a.createElement("h2",{className:this.props.accept_shnu?"shnu-fade-out":""},"Please Select All Images Below That Match Shnu"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:v.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[0]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(0)},alt:"Eenie"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:y.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[1]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(1)},alt:"Meenie"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:x.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[2]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(2)},alt:"Miny"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:j.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[3]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(3)},alt:"Mo"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:S.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[4]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(4)},alt:"Catch"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:A.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[5]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(5)},alt:"A"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:T.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[6]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(6)},alt:"Vishnu"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:H.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[7]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(7)},alt:"By"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:P.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[8]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(8)},alt:"His"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:U.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[9]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(9)},alt:"Chode"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:G.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[10]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(10)},alt:"If"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:V.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[11]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(11)},alt:"It"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:q.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[12]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(12)},alt:"Hardens"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:F.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[13]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(13)},alt:"Let"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:R.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[14]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(14)},alt:"Him"})),c.a.createElement("div",{className:"brightness"},c.a.createElement("img",{src:X.a,className:this.props.accept_shnu?"shnu-fade-out":this.props.selected_images[15]?"img-thumbnail selected":"img-thumbnail",onClick:function(){e.select_image(15)},alt:"Go"}))))}}]),t}(c.a.Component),te=N()(function(e){return{selected_images:e.picture_selected,accept_shnu:e.accept_shnu,display_nice:e.display_nice}},function(e){return{changeImageSelected:function(t){return e({type:"change_image_selected",payload:{picture_selected:t}})},acceptShnu:function(){return e({type:"accept_shnu"})},displayNice:function(){return e({type:"display_nice"})}}})(ee),ae=c.a.createContext();Object(i.render)(c.a.createElement(n.a,{context:ae,store:p},c.a.createElement(te,{context:ae})),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.239cc009.chunk.js.map