
//Clicky
var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101286145);

var script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
};
script.src = "//static.getclicky.com/js";

document.head.appendChild(script);


//Woopra
(function(){
    var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/w.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
})("woopra");

woopra.config({
    domain: 'emanuel.sh'
});
woopra.track();

