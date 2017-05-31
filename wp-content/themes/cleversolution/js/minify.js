function minify(node){
	for (var i=0; i<node.childNodes.length; i++){
		var child = node.childNodes[i];
		if(child.nodeType == 3 && !/\S/.test(child.nodeValue)){
			node.removeChild(child);
			i--;
		}
		if(child.nodeType == 1){
			minify(child);
		}
	}
	return node;
}


if ( document.addEventListener ){

	document.addEventListener('DOMContentLoaded', function() {
		minify(document);
	}, false);

}