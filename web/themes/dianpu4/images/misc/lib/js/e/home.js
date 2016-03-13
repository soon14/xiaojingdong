jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});(function(){if(document.referrer.match(/^http:\/\/\S*\.360buy\.com/)&&!$.cookie("_fv")){$("#shortcut-2013 .fl li").append('<div class="jtip"><div class="jtip-arrow"><div class="jtip-arrow1"></div><div class="jtip-arrow2"></div></div><div class="jtip-content">\u628a\u4eac\u4e1c\u52a0\u5165\u6536\u85cf\u5939<br />\u4e00\u952e\u8f7b\u677e\u8bbf\u95eeJD.COM</div><div class="jtip-close" onclick="this.parentNode.style.display=\'none\'">\u00d7</div></div>')}$(".plist .style1 .p-img,.plist .style2 .p-img").bind("mouseover",function(){$(this).css("opacity","0.7")}).bind("mouseout",function(){$(this).css("opacity","1")});pageConfig.TPL_GuessYou='<ul class="lh">		{for item in YouLikeRec}		<li class="fore${parseInt(item_index)+1}" onclick="reClick2012(\'cai2012\',\'${item.Wid}#${item.WMeprice}\',${item_index})">			<div class="p-img ld"><a target="_blank" href="http://my.jd.com/product/likes.html?id=${item.Wid}"><img height="130" width="130" alt="${item.Wname}" data-img="1" src="${item.Img}"></a></div>			<div class="p-name"><a target="_blank" href="http://my.jd.com/product/likes.html?id=${item.Wid}" title="${item.Wname}">${item.Wname}</a></div>			<div class="p-price">\u4eac\u4e1c\u4ef7\uff1a<strong>\uffe5${item.WMeprice}</strong></div>		</li>		{/for}	</ul>';pageConfig.FN_GuessYou=function(c,b){$.ajax({url:"http://prs.jd.com/HomeGuessYouLike.aspx",dataType:"jsonp",success:function(e){if(e&&e.YouLikeRec){var d=pageConfig.TPL_GuessYou.process(e);b.html(d);pageConfig.FN_ImgError(b.get(0))}}});log("hcaip","Show")};$("#hot").Jtab({delay:200,source:"data-boole"},function(d,c,e){var b=(window.screen.width>=1200)?178:154;$("#hot .tab-arrow").animate({left:e*b},500,"easeInOutQuint");if(e==1){if(!d){return}pageConfig.FN_GuessYou(d,c)}else{c.find("img").Jlazyload({type:"image",source:"data-src"},function(){pageConfig.FN_ImgError(c.get(0))})}});$("#virtuals").Jtab({type:"dynamic",index:3,source:"data-url",delay:200},function(d,c,e){var b=(window.screen.width>=1200)?77:52;$("#virtuals").find(".tab-arrow").animate({left:((e==0)?0:(e*b+2)),width:((e==0)?(b+2):b)},500,"easeInOutQuint");if(!d){return}if(screen.width<1210){d+="?990"}c.html('<iframe scrolling="no" height="139px" frameborder="0" width="100%" src="'+d+'"></iframe>')});pageConfig.TPL_Timed='<div class="countdown" id="timer${qid}">\u6b63\u5728\u52a0\u8f7d\u4e2d...</div>	{for item in pros}		{if item_index==0}			<div class="p-img ld"><a href="http://www.jd.com/product/${item.id}.html" target="_blank" title="${unescape(item.mc)}"><b class="pi pix1" id="icon${qid}"><span>${item.zk}</span><br />\u6298 </b><img src="${item.tp}" width="130" height="130" data-img="1" alt="${unescape(item.mc)}"></a></div>			<div class="p-name"><a href="http://www.jd.com/product/${item.id}.html" title="${unescape(item.mc)}" target="_blank">${unescape(item.mc)}</a></div>			<div class="p-price"><span>\u62a2\u8d2d\u4ef7\uff1a</span><strong>\uffe5${item.qg}</strong></div>		{/if}	{/for}';pageConfig.TIMER_Timed=[];pageConfig.FN_TimedInit=function(){$.Jtimer({pids:"36,37,38,39,40",template:pageConfig.TPL_Timed,reset:pageConfig.FN_TimedInit,timer:pageConfig.TIMER_Timed,finishedClass:"pi pix0"})};pageConfig.FN_TimedInit();pageConfig.TPL_MSlide={itemsWrap:'<ul class="slide-items">{innerHTML}</ul>',itemsContent:'{for item in json}			{var v=pageConfig.FN_GetCompatibleData(item)}			<li clstag="homepage|keycount|home2012|09a${parseInt(item_index)+2}"><a href="${v.href}" target="_blank" title="${v.alt}">				<img height="${v.height}" width="${v.width}" src="${v.src}" data-img="2" />			</a></li>		{/for}',controlsWrap:'<div class="slide-controls">{innerHTML}</div>',controlsContent:'{for item in json}			<span class="{if parseInt(item_index)==0}curr{/if}">${parseInt(item_index)+1}</span>		{/for}'};pageConfig.TPL_FSlide={itemsWrap:'<div class="slide-itemswrap"><div class="slide-items">{innerHTML}</div></div>',itemsContent:'{for item in json}			<div><a href="${item.href}" target="_blank"><img src="${item.src}" width="${item.width}" height="${item.height}" alt="${item.alt}" data-img="2"></a></div>		{/for}',controlsWrap:'<div class="slide-controls">{innerHTML}</div>',controlsContent:'{for item in json}			<span class="{if parseInt(item_index)==0}curr{/if}"><b></b></span>		{/for}'};pageConfig.FN_SetPrice=function(b){var c=b.split(".");if(b.match(/\./)){return c[0]+".<span>"+c[1]+"</span>"}};pageConfig.FN_SetImg=function(c,b){if(b.match(/vclist/)){return pageConfig.FN_GetImageDomain(c)+b}else{return pageConfig.FN_GetImageDomain(c)+"N4/"+b}};pageConfig.TPL_Tabs='<ul class="lh style3">		{for item in data}		{var x=pageConfig.FN_SetPrice(item.c)}		{var y=pageConfig.FN_SetImg(item.a,item.d)}		<li class="fore${parseInt(item_index)}">			<div class="p-img ld"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">{if item.e}${pageConfig.FN_SetPromotion(item.e)}{/if}<img height="100" width="100" alt="${item.b}" data-img="1" src="${y}"></a></div>			<div class="p-name"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a></div>			<div class="p-price"><span>\uffe5</span>${x}</div>		</li>		{/for}	</ul>';pageConfig.TPL_Tabs_jp='<ul class="lh style3">		{for item in data}		<li class="fore${parseInt(item_index)}">			<div class="p-img ld"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">{if item.e}${pageConfig.FN_SetPromotion(item.e)}{/if}<img height="100" width="100" alt="${item.b}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.a)}${item.d}"></a></div>			<div class="p-name" style="height:1.5em;"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a></div>			<div class="p-price"><span>${item.c}</span></div>		</li>		{/for}	</ul>';pageConfig.FN_Tabs=function(e,c){var b=e.split(",");obj={},html="";var d;if(b.length==2){e=b[0]}d=this.DATA_Tabs[e];obj.data=d;if(e=="1640"){html=this.TPL_Tabs_jp.process(obj)}else{html=this.TPL_Tabs.process(obj)}if(b[1]=="4"){html=html.replace("style3","style4")}c.html(html);pageConfig.FN_ImgError(c.get(0))};$(".plist").each(function(){var c=$(this),b=(window.screen.width>=1200)?158:156;$(this).Jtab({type:"dynamic",source:"data-tag",delay:200},function(e,d,f){c.find(".tab-arrow").animate({left:f*b},500,"easeInOutQuint");if(!e){return}pageConfig.FN_Tabs(e,d)})});$(".ranking").Jtab({},function(c,b,d){$(".ranking").find(".tab-arrow").animate({left:d*40,width:((d==4)?50:40)},500,"easeInOutQuint")});$(".club .mc").each(function(){var b=$(this);setInterval(function(){var c=b.find("li:last-child");b.find("li:last-child").remove();b.find("ul").prepend(c.css({height:0}));c.animate({height:"60px"})},8000)});$("#slide").Jslider({data:pageConfig.DATA_MSlide,auto:true,reInit:true,slideWidth:(screen.width>=1210)?670:550,slideHeight:240,maxAmount:6,slideDirection:3,template:pageConfig.TPL_MSlide},function(b){pageConfig.FN_ImgError(b.get(0))});$(".slide[data-lazyload]").Jlazyload({type:"module"},function(e,c){var b,f,d=pageConfig.DATA_FSlide["F"+e];if(e<8){b=473;f=4}else{if(screen.width<1210){return}b=209;f=2;d=d.sort(function(){return 0.5-Math.random()})}c.Jslider({data:d,slideWidth:b,slideHeight:180,maxAmount:f,speed:"fast",template:pageConfig.TPL_FSlide},function(g){pageConfig.FN_ImgError(g.get(0))})});$(".catalogue").Jlazyload({type:"module",threshold:-(document.documentElement.clientHeight-300)/2},function(c,b){b.find(".b2").animate({height:"34px"})});pageConfig.TIMER_Clothing=null;$("#clothing .accordion .item").mouseover(function(){var b=$(this);pageConfig.TIMER_Clothing=setTimeout(function(){b.animate({width:(screen.width>=1200)?"190px":"188px"},{duration:500,easing:"easeOutQuart"}).siblings().animate({width:(screen.width>=1200)?"150px":"148px"},{duration:500})},200);return false}).mouseout(function(){if(pageConfig.TIMER_Clothing){clearTimeout(pageConfig.TIMER_Clothing)}});var a=new pageConfig.FN_InitSidebar();a.addItem("<a class='research' target='_blank' href='message.php'><b></b>\u8c03\u67e5\u95ee\u5377</a>");a.setTop();a.scroll();$("#subscription-submit").bind("click",function(){var e=$("#subscription-val").val(),b=$("#subscription-prompt"),c="";if(!e.match("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$")){var d=(e=="\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1")?"\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1":"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e";b.html(d).attr("class","incorrect").show();return}$.ajax({url:"http://edm.jd.com/front/ajax/subscribe.ashx",data:{email:e,type:1},dataType:"jsonp",success:function(f){if(f){switch(f.state){case 0:c="correct";break;case 1:c="correct";break;case 2:c="incorrect";break}b.html(f.message).attr("class",c).show()}}})})})();(function(a){a.fn.imgScroll=function(b,e){var d={data:[],template:null,evtType:"click",visible:1,direction:"x",next:"#next",prev:"#prev",disableClass:"disabled",disableClassPerfix:false,speed:300,step:1,loop:false,showControl:false,width:null,height:null,navItems:false,navItmesWrapClass:"scroll-nav-wrap",navItemActivedClass:"current",status:false,statusWrapSelector:".scroll-status-wrap"};var c=a.extend(d,b);return this.each(function(){var E=a(this),D=E.find("ul").eq(0),G,f=D.children("li"),q=f.length,j=null,l=null,Q=typeof c.next=="string"?a(c.next):c.next,u=typeof c.prev=="string"?a(c.prev):c.prev,s=0,C=c.step,v=c.visible,z=Math.ceil((q-v)/C)+1,h=c.loop,O=c.direction,x=c.evtType,B=c.disableClass,t=c.disableClassPerfix?"prev-"+B:B,L=c.disableClassPerfix?"next-"+B:B,o=c.navItems,F=c.navItmesWrapClass,N=a("."+F).length>0,I=c.navItemActivedClass,A=c.status,J=c.statusWrapSelector,w=a(J).length>0,n=false,i=true,M=(q-v)%C===0,p=c.template||'<ul>{for slide in list}<li><a href="${slide.href}" target="_blank"><img src="${slide.src}" alt="${slide.alt}" /></a></li>{/for}</ul>';function g(R){if(q>=C+v&&!h){u.addClass(t);Q.removeClass(L)}else{if(!h){Q.addClass(L)}}if(f.eq(0).css("float")!=="left"){f.css("float","left")}j=c.width||f.eq(0).outerWidth();l=c.height||f.eq(0).outerHeight();E.css({position:E.css("position")=="static"?"relative":E.css("position"),width:R=="x"?j*v:j,height:R=="x"?l:l*v,overflow:"hidden"});D.css({position:"absolute",width:R=="x"?j*q:j,height:R=="x"?l:l*q,top:0,left:0});if(typeof e==="function"){e.apply(E,[s,z,f.slice(s*C,s*C+v),f.slice(s*C+v-C,s*C+v)])}}function P(){q=c.data.length;D=E.find("ul").eq(0);f=D.children("li");z=Math.ceil((q-v)/C)+1;M=(q-v)%C===0}function r(S){var R={list:S};E.html(p.process(R));P()}function H(S,T){if(D.is(":animated")){return false}if(h){if(i&&T){s=z}if(n&&!T){s=-1}S=T?--s:++s}else{if(i&&T||n&&!T){return false}else{S=T?--s:++s}}G=O=="x"?{left:S>=(z-1)?-(q-v)*j:-S*C*j}:{top:S>=(z-1)?-(q-v)*l:-S*C*l};function R(){if(!h){if(q-S*C<=v){Q.addClass(L);n=true}else{Q.removeClass(L);n=false}if(S<=0){u.addClass(t);i=true}else{u.removeClass(t);i=false}}else{if(q-S*C<=v){n=true}else{n=false}if(S<=0){i=true}else{i=false}}if(o||A){m(S)}if(typeof e=="function"){e.apply(E,[S,z,f.slice(S*C,S*C+v),f.slice(S*C+v-C,S*C+v)])}}if(!!c.speed){D.animate(G,c.speed,R)}else{D.css(G);R()}}function K(U,R){var S=N?a("."+U).eq(0):a('<div class="'+U+'"></div>');for(var T=0;T<z;T++){S.append("<em "+(T===0?" class="+R:"")+' title="'+(T+1)+'">'+(T+1)+"</em>")}if(!N){E.after(S)}}function k(){var R=w?a(J).eq(0):a('<div class="'+J.replace(".","")+'"></div>');R.html("<b>1</b>/"+z);if(!w){E.after(R)}}function m(R){if(o){a("."+F).find("em").removeClass(I).eq(R).addClass(I)}if(A){a(J).html("<b>"+(R+1)+"</b>/"+z)}}function y(){u.unbind(x).bind(x,function(){H(s,true)});Q.unbind(x).bind(x,function(){H(s,false)})}if(c.data.length>0){if(!c.width||!c.height){return false}r(c.data)}if(q>v&&v>=C){g(O);y();if(o){K(F,I)}if(A){k(J)}}else{if(c.showControl){Q.add(u).show()}else{Q.add(u).hide()}u.addClass(t);Q.addClass(L)}})}})(jQuery);pageConfig.TPL_MScroll='<ul class="lh">	{for slide in list}	<li class="item fore${parseInt(slide_index)+1}" >		<a href="${slide.href}" target="_blank">			<img width="202" height="159" src="${slide.src}" class="loading-style2" data-lazyload="background:url(${slide.src}) no-repeat #fff center 0;" alt="${slide.alt}" /></a>	</li>	{/for}</ul>';$("#mscroll-list").imgScroll({width:(screen.width>=1200)?203:163,height:159,visible:3,step:3,loop:true,next:"#mscroll-ctrl-next",prev:"#mscroll-ctrl-prev",data:pageConfig.DATA_MScroll,template:pageConfig.TPL_MScroll},function(d,b,c,a){a.find("img").each(function(){var e=$(this).attr("data-lazyload");if(!$(this).attr("style")){$(this).attr("style",e).removeAttr("data-lazyload")}})});pageConfig.TPL_GScroll='<ul class="lh">	{for slide in list}	{var x=pageConfig.FN_GetCompatibleData(slide)}		<li class="item fore${parseInt(slide_index)+1}">			<a href="${x.href}" target="_blank">				<img width="${x.width}" height="155" src="themes/68ecshopcom_360buy/images/misc/lib/img/e/blank.gif" style="background:url(${x.src}) no-repeat center center;" class="loading-style2" alt="${x.alt}" /></a>			<div class="p-detail">				<a target="_blank" class="btn-tuan" href="${x.href}">\u53c2\u56e2</a>				<span>\u56e2\u8d2d\u4ef7\uff1a</span><strong>\uffe5${x.price}</strong>			</div>		</li>	{/for}</ul>';$("#gscroll-list").imgScroll({width:(screen.width>=1200)?292:192,height:155,visible:1,step:1,loop:true,next:"#gscroll-ctrl-next",prev:"#gscroll-ctrl-prev",data:pageConfig.DATA_GScroll,template:pageConfig.TPL_GScroll},function(d,b,c,a){a.find("img").each(function(){var e=$(this).attr("data-lazyload");if(!$(this).attr("style")){$(this).attr("style",e).removeAttr("data-lazyload")}})});$("#digitals-brands").Jtab({compatible:true},function(b,a,c){a.find("img").each(function(){var d=$(this).attr("data-src");if(!$(this).attr("src")){$(this).attr("src",d).removeAttr("data-src")}})});
