!function(s){function e(e){return"object"==typeof e?e:{top:e,left:e}}var b=s.scrollTo=function(e,t,o){s(window).scrollTo(e,t,o)};b.defaults={axis:"xy",duration:1.3<=parseFloat(s.fn.jquery)?0:1,limit:!0},b.window=function(){return s(window)._scrollable()},s.fn._scrollable=function(){return this.map(function(){var e=this;if(!(!e.nodeName||-1!=s.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])))return e;var t=(e.contentWindow||e).document||e.ownerDocument||e;return/webkit/i.test(navigator.userAgent)||"BackCompat"==t.compatMode?t.body:t.documentElement})},s.fn.scrollTo=function(t,o,w){return"object"==typeof o&&(w=o,o=0),"function"==typeof w&&(w={onAfter:w}),"max"==t&&(t=9e9),w=s.extend({},b.defaults,w),o=o||w.duration,w.queue=w.queue&&1<w.axis.length,w.queue&&(o/=2),w.offset=e(w.offset),w.over=e(w.over),this._scrollable().each(function(){function c(e){l.animate(m,o,w.easing,e&&function(){e.call(this,t,w)})}if(t){var u,f=this,l=s(f),d=t,m={},h=l.is("html,body");switch(typeof d){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(d)){d=e(d);break}if(!(d=s(d,this)).length)return;case"object":(d.is||d.style)&&(u=(d=s(d)).offset())}s.each(w.axis.split(""),function(e,t){var o="x"==t?"Left":"Top",n=o.toLowerCase(),r="scroll"+o,i=f[r],a=b.max(f,t);if(u)m[r]=u[n]+(h?0:i-l.offset()[n]),w.margin&&(m[r]-=parseInt(d.css("margin"+o))||0,m[r]-=parseInt(d.css("border"+o+"Width"))||0),m[r]+=w.offset[n]||0,w.over[n]&&(m[r]+=d["x"==t?"width":"height"]()*w.over[n]);else{var s=d[n];m[r]=s.slice&&"%"==s.slice(-1)?parseFloat(s)/100*a:s}w.limit&&/^\d+$/.test(m[r])&&(m[r]=m[r]<=0?0:Math.min(m[r],a)),!e&&w.queue&&(i!=m[r]&&c(w.onAfterFirst),delete m[r])}),c(w.onAfter)}}).end()},b.max=function(e,t){var o="x"==t?"Width":"Height",n="scroll"+o;if(!s(e).is("html,body"))return e[n]-s(e)[o.toLowerCase()]();var r="client"+o,i=e.ownerDocument.documentElement,a=e.ownerDocument.body;return Math.max(i[n],a[n])-Math.min(i[r],a[r])}}(jQuery);