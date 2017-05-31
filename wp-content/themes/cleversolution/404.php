<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>
	<style>
		body{
			overflow: visible !important;
			overflow-x: hidden !important;
		}
	</style>
	<div class="not-found-page text-center">
		<div class="js-topform">
			<div class="topform">
				<?php echo do_shortcode('[contact-form-7 id="104" title="Contact form 1"]'); ?>
			</div>
		</div>
		<div class="cloud1 clouds" style="top: 28%;left: 7%;">
			<i class="anim-svg" data-img="anim-cloud.png"></i>
		</div>

		<div class="cloud2 clouds" style="top: 12.5%;left: 11.5%;">
			<i class="anim-svg" data-img="anim-cloud.png"></i>
		</div>

		<div class="cloud3 clouds" style="top: 29.5%;left: 25%;" >
			<i class="anim-svg" data-img="anim-cloud.png"></i>
		</div>

		<div class="cloud3 d-non-1024 clouds" style="top: 16%;right: 24%;" >
			<i class="anim-svg" data-img="anim-cloud.png"></i>
		</div>

		<div class="cloud2 clouds" style="top: 20%;right: 12%;">
			<i class="anim-svg" data-img="anim-cloud.png"></i>
		</div>

		<div class="cloud3 d-non-1024 clouds" style="top: 31%;right: 10%;" >
			<i class="anim-svg" data-img="anim-cloud.png"></i>
		</div>

		<div class="cloud1 clouds" style="top: 37%;right: 4%;" >
			<i class="anim-svg" data-img="anim-cloud.png"></i>
		</div>

		<address class="c x2d12 island-v10 head-telephones cl-white">

			<p class="p">+1 347 415 9858</p>
<!--			<p class="p marg-bot-20">+1 212 372 7649</p>-->

			<ul class="social clear-ul inline-ul">
				<li><a href="https://twitter.com/SolutionClever" class="block" target="_blank"><i class="anim-svg" data-img="tw.png"></i></a></li>
				<li><a href="https://www.facebook.com/cleverrsolution" class="block" target="_blank"><i class="anim-svg" data-img="fb.png"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UC4E8u6X9NBa5vaVUTRUfk4A" class="block" target="_blank"><i class="anim-svg" data-img="yt.png"></i></a></li>
				<li><a href="https://plus.google.com/108338275560050650584/about" class="block" target="_blank"><i class="anim-svg" data-img="gp.png"></i></a></li>
				<li><a href="http://www.yelp.com/biz/clever-solution-inc-new-york" class="block" target="_blank"><i class="anim-svg" data-img="yelp.png"></i></a></li>
			</ul>
		</address>
	</div>
<script>
	$(".js-topform").animate({
		top: "20%",
	}, {duration: 3000, easing: "easeOutElastic"});
	function heightPage() {
		var windowHeight = $(window).height();
		$(".not-found-page").height(windowHeight);
	}
	$(window).ready(function () {
		heightPage();
	});
	$(window).resize(function () {
		heightPage();
	});
</script>
<?php get_sidebar(); ?>
<?php get_footer(); ?>