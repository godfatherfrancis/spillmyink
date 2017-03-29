jQuery( document ).ready( function( $ ){

	// Intro size setup

	setupIntro(); // On ready, resize intro

	$( window ).resize( function() { setupIntro(); } ); // On resize

	function setupIntro() {
		var infoBox = $('.info' );
		var titleBox = $( '.info').find('.container');
		$( '.info' ).find( '.container' ).css( 'top', ( ( infoBox.height() - titleBox.height() - 20 ) / 1.87) + 'px' );
	}

//	// Making navigation sticky on scroll
//	$( '#nav' ).sticky( { topSpacing:10 } );
//
//	$( '#nav ul' ).onePageNav( { scrollSpeed: 400, filter: ':not(.external)'} );
//
//	$(window).scroll(function(){
//		if($(window).scrollTop() < $(window).height()/2) {
//			$('#nav').find('li').removeClass('current');
//		}
//	});

	// Full background image
	$( '.fx-backstretch' ).find( '.info' ).backstretch( 'images/spillmyink_beach-blacknwhite.jpg' );
//	$( "#intro" ).find( '.info' ).backstretch( '../static/images/spillmyink_beach-blacknwhite.jpg' );
//	$( "#intro" ).backstretch( width: 320, url: '../static/images/spillmyink_beach-blacknwhite.jpg' );
	/*$("#intro").backstretch([
        [
          { width: 1334, url: "../static/images/spillmyink_beach-blacknwhite.jpg" }*//*,
          { width: 720, url: "path/to/image1_720.jpg" },
          { width: 320, url: "path/to/image1_320.jpg" }*//*
        ]*//*,
        [
          { width: 1080, url: "path/to/image2_1080.jpg" },
          { width: 720, url: "path/to/image2_720.jpg" },
          { width: 320, url: "path/to/image2_320.jpg" }
        ]*//*
      ]);*/

});