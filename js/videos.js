    	jQuery(document).ready(function() {
    		$('.more').click(function() {
    			$('.description').toggle();
    			$('.glyphicon-chevron-down').toggle();
    			$('.glyphicon-chevron-up').toggle();

    		});

    		$('.glyphicon-chevron-down').click(function() {
    			$('.description').toggle();
    			$('.glyphicon-chevron-down').toggle();
    			$('.glyphicon-chevron-up').toggle();

    		});

    		$('.glyphicon-chevron-up').click(function() {
    			$('.description').toggle();
    			$('.glyphicon-chevron-down').toggle();
    			$('.glyphicon-chevron-up').toggle();

    		});

            $('.videojs1').hover(function() {
               $('.play1').toggle();
            });
            $('.videojs2').hover(function() {
               $('.play2').toggle();
            });
            $('.videojs3').hover(function() {
               $('.play3').toggle();
            });
            $('.videojs4').hover(function() {
               $('.play4').toggle();
            });
            $('.videojs5').hover(function() {
               $('.play5').toggle();
            });
            $('.videojs6').hover(function() {
               $('.play6').toggle();
            });
            $('.videojs7').hover(function() {
               $('.play7').toggle();
            });
    	});