/* share42.com | 28.05.2014 | (c) Dimox */
(function($){$(function(){$('div.share42init').each(function(idx){var el=$(this),u=el.attr('data-url'),t=el.attr('data-title'),i=el.attr('data-image'),d=el.attr('data-description'),f=el.attr('data-path'),fn=el.attr('data-icons-file'),z=el.attr("data-zero-counter");if(!u)u=location.href;if(!fn)fn='icons.png';if(!z)z=0;function fb_count(url){var shares;$.getJSON('https://graph.facebook.com/?callback=?&ids='+url,function(data){shares=data[url].shares||0;if(shares>0||z==1)el.find('a[data-count="fb"]').after('<span class="share42-counter">'+shares+'</span>')})}fb_count(u);function gplus_count(url){if(!window.services){window.services={};window.services.gplus={}}window.services.gplus.cb=function(number){window.gplusShares=number};$.getScript('https://share.yandex.ru/gpp.xml?url='+url,function(){var shares=window.gplusShares;if(shares>0||z==1)el.find('a[data-count="gplus"]').after('<span class="share42-counter">'+shares+'</span>')})}gplus_count(u);function twi_count(url){var shares;$.getJSON('https://urls.api.twitter.com/1/urls/count.json?callback=?&url='+url,function(data){shares=data.count;if(shares>0||z==1)el.find('a[data-count="twi"]').after('<span class="share42-counter">'+shares+'</span>')})}twi_count(u);if(!f){function path(name){var sc=document.getElementsByTagName('script'),sr=new RegExp('^(.*/|)('+name+')([#?]|$)');for(var p=0,scL=sc.length;p<scL;p++){var m=String(sc[p].src).match(sr);if(m){if(m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];if(m[1].indexOf("/")==0)return m[1];b=document.getElementsByTagName('base');if(b[0]&&b[0].href)return b[0].href+m[1];else return document.location.pathname.match(/(.*[\/\\])/)[0]+m[1];}}return null;}f=path('share42.js');}if(!t)t=document.title;if(!d){var meta=$('meta[name="description"]').attr('content');if(meta!==undefined)d=meta;else d='';}u=encodeURIComponent(u);t=encodeURIComponent(t);t=t.replace(/\'/g,'%27');i=encodeURIComponent(i);d=encodeURIComponent(d);d=d.replace(/\'/g,'%27');var fbQuery='u='+u;if(i!='null'&&i!='')fbQuery='u='+u;var s=new Array('"#" data-count="fb" onclick="window.open(\'https://www.facebook.com/sharer.php?m2w&'+fbQuery+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Share on Facebook"','"#" data-count="gplus" onclick="window.open(\'https://plus.google.com/share?url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Share on Google+"','"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text='+t+'&url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Add to Twitter"');var l='';for(j=0;j<s.length;j++)l+='<span class="share42-item" style="display:inline-block;margin:0 6px 6px 0;height:32px;"><a rel="nofollow" style="display:inline-block;width:32px;height:32px;margin:0;padding:0;outline:none;background:url('+f+fn+') -'+32*j+'px 0 no-repeat" href='+s[j]+' target="_blank"></a></span>';el.html('<span id="share42">'+l+'</span>'+'<style>.share42-counter{display:inline-block;vertical-align:top;margin-left:9px;position:relative;background:#FFF;color:#666;} .share42-counter:before{content:"";position:absolute;top:0;left:-8px;width:8px;height:100%;} .share42-counter{padding:0 8px 0 4px;font:14px/32px Arial,sans-serif;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAYAAADkK90uAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALVJREFUeNrs200KQiEUQGENnNesfbjA1hAEb1OO3rQ3FfxbgGBkXqI1aHAOXMTp/aaqnXNd0azeY44x25i7tbbrPmIv86q1qhijKqXI9QzIInnvVQjhBsgitdbUvu/hxCrWyBgjxxWQxQIEEAIEEAIEEAIEEAIEEAKEAAGEAAGEAAGEAAGEACFAACFA/jZ5KDeKgCxSSkmOjaekk5PH1jnnH8hF8x1harL7p/p+R3hYa18fAQYA49lEn38pVB4AAAAASUVORK5CYII=) 100% 0;} .share42-counter:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALRJREFUeNrck8EJAyEQRZ1gBR4ExXtSVLaAVJQC0s56TgOi4MEKlImzSWDdiEmu+2EQ/U+dcRAQkW1lrT3V4VLjzDvmEQDuxhgmhGAfAO0kU0q5TA4dYKKdb/UAwTkfAo12CNRnRq11S1CzKOZ5Ru89bjU08ZtJ+ilJqCewEEIXALqGTLqGKlBKNcDS19cinYSreVvmuqK/k9wnkHLOQ+CWUhoCV+ccizGyUsqzWYPvPz0EGADHGK9qjbXCqgAAAABJRU5ErkJggg==)}</style>');})})})(jQuery);