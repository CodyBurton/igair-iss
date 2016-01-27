var foo=0;!function($,e,o){"use strict";e.MobiStyle={name:"mobiStyle",version:"0.1",libs:{},init:function(e,o,t,i){var r=[e,o,t,i],a=[];if(this.scope=e||this.scope,o&&"string"==typeof o&&this.libs.hasOwnProperty(o)){var l=this.libs[o];if(l.hasOwnProperty(t)){var s=[this.scope].concat(i);l[t].call(this,this.scope,i)}}for(var f in this.libs){var l=this.libs[f];l.init()}return a}},$.fn.mobiStyle=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){MobiStyle.init.apply(MobiStyle,[this].concat(e))})}}(jQuery,this,this.document);var buttonSvgNormal='<svg data-path-hover="M6 6 L6 6 LWDTEND 6 LWDTEND2 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">	<filter id="glowTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="2"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#9fe3f6"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<filter id="glowHoverTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="outline" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" filter="url(#glowTHISID)"></path><path class="body" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6"></path></svg>',buttonSvgCancel='<svg data-path-hover="M6 6 L6 6 LWDTEND 6 LWDTEND2 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">	<filter id="glowCancelTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#F69F9F"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<filter id="glowCancelHoverTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="outline" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" filter="url(#glowCancelTHISID)"></path><path class="body" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6"></path></svg>',buttonSvgNavLeft='<svg height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">	<filter id="glowNavHoverTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="outline" d="M6 6 LWDT 6 LWDTEND 45 L6 45 L6 6" filter="url(#glowNavHoverTHISID)"></path><path class="body" d="M6 6 LWDT 6 LWDTEND 45 L6 45 L6 6"></path></svg>',toastSvg='<svg height="HGTMAX" width="WDTMAX" viewbox="0 0 WDTMAX HGTMAX" preserveAspectRatio="xMinYMin slice">	<filter id="glow">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#9fe3f6"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<filter id="glowHover">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="outline" d="M3 3 L3 3 LWDTEND 3 LWDT 16 LWDT HGT L16 HGT L3 WDTEND2 L3 3" filter="url(#glow)"></path><path class="body" d="M3 3 L3 3 LWDTEND 3 LWDT 16 LWDT HGT L16 HGT L3 WDTEND2 L3 3"></path></svg>',modalSvg='<svg height="HGTMAX" width="WDTMAX" viewbox="0 0 WDTMAX HGTMAX" preserveAspectRatio="xMinYMin slice">	<filter id="modalGlow">	<feGaussianBlur in="SourceAlpha" stdDeviation="6"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#9fe3f6"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<filter id="glowHover">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="title" d="M3 35 L35 3 L35 3 LWDTEND 3 LWDT 35" ></path>	<path class="body" d="MWDT 35 LWDT HGT L3 HGT L3 35 L3 35 "></path>	<path class="outline" d="M3 35 L35 3 L35 3 LWDTEND 3 LWDT 35 LWDT HGT L3 HGT L3 35 L3 35" filter="url(#modalGlow)"></path>	</svg>';!function($,e,o){MobiStyle.libs.buttons={init:function(){var e=0;$("button.mg-svg-button").each(function(){if($(this).hasClass("mg-cancel"))var o=buttonSvgCancel;else if($(this).hasClass("mg-nav"))var o=buttonSvgNavLeft;else var o=buttonSvgNormal;var t=$(this).parent().width(),i=Math.ceil($(this).width()+64);i=i>t?t:i>128?i:128;var r=i-32>96?i-32:96,a=$(this).html();$(this).css("width",i+2+"px"),o=o.replace(/WDTMAX/gi,i+7),o=o.replace(/WDTEND2/gi,r+4),o=o.replace(/WDTEND/gi,r),o=o.replace(/WDT/gi,i),o=o.replace(/THISID/gi,e);var l=o+a;$(this).html(l),e++}),"undefined"!=typeof Snap&&MobiStyle.libs.buttons.loadSnap()},loadSnap:function(){var e=300;easing=mina.easeinout,s=Snap.selectAll("button.mg-svg-button"),s.forEach(function(o,t,i){var r=o.select("svg"),a=r.select("path.body"),l=r.select("path.outline"),s={to:r.attr("data-path-hover"),from:a.attr("d")};o.node.classList.contains("mg-nav")||o.node.classList.contains("mg-simple")||o.mouseover(function(){a.animate({path:s.to},e,easing),l.animate({path:s.to},e,easing)}),o.mouseout(function(){a.animate({path:s.from},e,easing),l.animate({path:s.from},e,easing)})})}}}(jQuery,this,this.document),function($,e,o){MobiStyle.libs.forms={init:function(){$("label.mg-inline input").bind("change keyup input",function(e){var o=$(this).siblings(".mg-label");""!==$(this).val()?o.addClass("mg-moved"):o.removeClass("mg-moved")}),$("label.mg-inline input").each(function(){var e=$(this).siblings(".mg-label");""!==$(this).val()?e.addClass("mg-moved"):e.removeClass("mg-moved")})}}}(jQuery,this,this.document),function($,e,o){MobiStyle.libs.tabs={init:function(){$(".mg-tab-group").each(function(){var e=$(this),o=$(this).find(".mg-tab-list"),t=$(this).find(".mg-tab-content");o.on("click","a",function(t){t.preventDefault();var i=$(this).data("target");o.find("a").removeClass("active"),$(this).addClass("active"),e.find(".mg-tab-content.active").fadeOut(250,function(){$(this).removeClass("active"),e.find("#"+i).fadeIn(250).addClass("active")})})})}}}(jQuery,this,this.document),function($,e,o){var t='<svg height="HGTMAX" width="WDTMAX" viewbox="0 0 WDTMAX HGTMAX" preserveAspectRatio="xMinYMin slice">		<filter id="glow">		<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>		<feOffset dx="0" dy="0" result="offsetblur"/>		<feFlood flood-color="#9fe3f6"/>		<feComposite in2="offsetblur" operator="in"/>		<feMerge>		<feMergeNode/>		<feMergeNode in="SourceGraphic"/>		</feMerge>		</filter> 		<filter id="glowHover">		<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>		<feOffset dx="0" dy="0" result="offsetblur"/>		<feFlood flood-color="#fff"/>		<feComposite in2="offsetblur" operator="in"/>		<feMerge>		<feMergeNode/>		<feMergeNode in="SourceGraphic"/>		</feMerge>		</filter> 		<path class="outline" d="M3 3 L3 3 LWDTEND 3 LWDT 16 LWDT HGT L16 HGT L3 WDTEND2 L3 3" filter="url(#glow)"></path><path class="body" d="M3 3 L3 3 LWDTEND 3 LWDT 16 LWDT HGT L16 HGT L3 WDTEND2 L3 3"></path></svg>',i='<svg height="HGTMAX" width="WDTMAX" viewbox="0 0 WDTMAX HGTMAX" preserveAspectRatio="xMinYMin slice">		<filter id="modalGlow">		<feGaussianBlur in="SourceAlpha" stdDeviation="6"/>		<feOffset dx="0" dy="0" result="offsetblur"/>		<feFlood flood-color="#9fe3f6"/>		<feComposite in2="offsetblur" operator="in"/>		<feMerge>		<feMergeNode/>		<feMergeNode in="SourceGraphic"/>		</feMerge>		</filter> 		<filter id="glowHover">		<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>		<feOffset dx="0" dy="0" result="offsetblur"/>		<feFlood flood-color="#fff"/>		<feComposite in2="offsetblur" operator="in"/>		<feMerge>		<feMergeNode/>		<feMergeNode in="SourceGraphic"/>		</feMerge>		</filter> 		<path class="title" d="M3 35 L35 3 L35 3 LWDTEND 3 LWDT 35" ></path>		<path class="body" d="MWDT 35 LWDT HGT L3 HGT L3 35 L3 35 "></path>		<path class="outline" d="M3 35 L35 3 L35 3 LWDTEND 3 LWDT 35 LWDT HGT L3 HGT L3 35 L3 35" filter="url(#modalGlow)"></path>		</svg>';MobiStyle.libs.messages={init:function(){var e=this;return $("#mg-modalOverlay").length||$(body).append("<div id='mg-modalOverlay'></div>"),$(o).on("click","[data-mg-modal]",function(o){var t=$(this).data("mg-modal");e.openModal(t)}),$(o).on("click","[data-mg-close-modal]",function(o){e.closeModal()}),!1},openToast:function(e,o){e=e?"#"+e.id:"#mgToast";var i=o?o:2e3;$(e).remove("svg");var r=$(e+" .mg-toast-content").outerHeight(),a=$(e+" .mg-toast-content").outerWidth();newSvg=t.replace(/WDTMAX/gi,a+6),newSvg=newSvg.replace(/WDTEND2/gi,r-16),newSvg=newSvg.replace(/WDTEND/gi,a-16),newSvg=newSvg.replace(/WDT/gi,a),newSvg=newSvg.replace(/HGTMAX/gi,r+6),newSvg=newSvg.replace(/HGT/gi,r+3),$(e+" .mg-toast-content").prepend(newSvg),$(e).addClass("mg-show"),setTimeout(function(){$(e).removeClass("mg-show")},i)},openModal:function(e,o){e="object"==typeof e?"#"+e.id:e?"#"+e:"#mgModal",$(e).remove("svg");var t=$(e).outerHeight(),r=$(e).outerWidth();newSvg=i.replace(/WDTMAX/gi,r+6),newSvg=newSvg.replace(/WDTEND2/gi,t-32),newSvg=newSvg.replace(/WDTEND/gi,r-32),newSvg=newSvg.replace(/WDT/gi,r),newSvg=newSvg.replace(/HGTMAX/gi,t+6),newSvg=newSvg.replace(/HGT/gi,t+3),$(e).prepend(newSvg),$(e).css("margin-top","-"+$(e).height()/2+"px"),$(e).addClass("mg-show"),$("#mg-modalOverlay").fadeIn(.3)},closeModal:function(){$(".mg-modal").removeClass("mg-show"),$("#mg-modalOverlay").fadeOut(.3,function(){$(".mg-modal").remove("svg")})}}}(jQuery,this,this.document);