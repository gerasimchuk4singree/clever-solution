<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Clever Solution
 * @since Clever Solution 1.0
 */
?>






			<div class="js-eleport-19-for"><div class="mobile-block island-v10"></div></div>
			<div class="js-eleport-footer"></div>

		</div><!-- #main -->
<!-- Site Overlay -->
<div class="site-overlay"></div>
<script src="<?php echo get_template_directory_uri(); ?>/js/pushy.js"></script>

<?php if (is_category('blog') || in_category('blog')) : ?>
	<script src="<?php echo get_template_directory_uri(); ?>/js/social-share.js"></script>
	<script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/js/infinite-scroll/jquery.infiniteload.js?ver=4.1.3'></script>
	<script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/js/infinite-scroll/infiniteload.js?ver=4.1.3'></script>
<?php endif; ?>

	<?php wp_footer(); ?>

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
	(function (d, w, c) {
		(w[c] = w[c] || []).push(function() {
			try {
				w.yaCounter24858014 = new Ya.Metrika({id:24858014,
					webvisor:true,
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true});
			} catch(e) { }
		});

		var n = d.getElementsByTagName("script")[0],
			s = d.createElement("script"),
			f = function () { n.parentNode.insertBefore(s, n); };
		s.type = "text/javascript";
		s.async = true;
		s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

		if (w.opera == "[object Opera]") {
			d.addEventListener("DOMContentLoaded", f, false);
		} else { f(); }
	})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/24858014" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58003888-1', 'auto');
  ga('send', 'pageview');

</script>
<!-- Start SiteHeart code -->
<!--
<script>
	(function(){
		var widget_id = 746551;
		_shcp =[{widget_id : widget_id}];
		var lang =(navigator.language || navigator.systemLanguage
		|| navigator.userLanguage ||"en")
			.substr(0,2).toLowerCase();
		var url ="widget.siteheart.com/widget/sh/"+ widget_id +"/"+ lang +"/widget.js";
		var hcc = document.createElement("script");
		hcc.type ="text/javascript";
		hcc.async =true;
		hcc.src =("https:"== document.location.protocol ?"https":"http")
		+"://"+ url;
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hcc, s.nextSibling);
	})();
</script> -->
<!-- End SiteHeart code -->

</body>
</html>