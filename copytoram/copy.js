jQuery.copy=function(data){return jQuery.fn.copy.call({},data);};jQuery.fn.copy=function(delimiter){var self=this,flashcopier=(function(fid){return document.getElementById(fid)||(function(){var divnode=document.createElement('div');divnode.id=fid;document.body.appendChild(divnode);return divnode;})();})('_flash_copier'),data=jQuery.map(self,function(bit){return typeof bit==='object'? bit.value||bit.innerHTML.replace(/<.+>/g,''):'';}).join(delimiter||'').replace(/^\s+|\s+$/g,'')||delimiter,divinfo='<embed src="jquery.copy.swf"FlashVars="clipboard='+encodeURIComponent(data)+'"width="0"height="0"'+'type="application/x-shockwave-flash"></embed>';flashcopier.innerHTML=divinfo;return self;};

