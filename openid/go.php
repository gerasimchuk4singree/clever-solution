<?
function wrap_redirect ($url) {
	header('HTTP/1.1 302 Found');
	header('Location: ' . $url);
	debug('Location: ' . $url);
	exit(0);
}
$url="http://google.com";
wrap_redirect ($url);
?>