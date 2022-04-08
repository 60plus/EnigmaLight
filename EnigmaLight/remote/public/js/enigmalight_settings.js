
var on_off_status = 0,loading = "<div id='spinner' ><img src='../images/spinner.gif' alt='loading...' /></div>";

$(function() {

	$( "#dialog" ).dialog({
		autoOpen: false,
		show: "fade",
		hide: "explode",
		buttons: {
			"Ok": function() { 
				$(this).dialog("close");
			} 
		}
	});

	//On/Off Lights
	$( "#on_off_el" ).on( "change", function(event, ui) {
		if($('#on_off_el').val() == "dynamic") {
			//Enable lights
			on_off_status = 1
		}else{
			on_off_status = 0
		}

		var jqxhr = $.ajax( "control/light?set=" + $('#on_off_el').val() );

	});
	
	//Dynamic/Moodlamp
	$( "#dy_mood" ).on( "change", function(event, ui) {
		if($('#dy_mood').val() == "dynamic") {
			//Enable dynamic or moodlamp
			on_off_status = 1
		}else{
			on_off_status = 1
		}
		var jqxhr = $.ajax( "control/light?set=" + $('#dy_mood').val() );
	});

	//Brightness slider
	$( "#slider_brightness" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=brightness&v=" + String(this.value) );
		}
	});

	//Minimal Brightness slider
	$( "#slider_minbrightness" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=brightnessmin&v=" + String(this.value) );
		}
	});

	//Maximal Brightness slider
	$( "#slider_maxbrightness" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=brightnessmax&v=" + String(this.value) );
		}
	});

	//Saturation slider
	$( "#slider_saturation" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=saturation&v=" + String(this.value) );
		}
	});

	//Minimal Saturation slider
	$( "#slider_minsaturation" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=saturationmin&v=" + String(this.value) );
		}
	});

	//Maximal Saturation slider
	$( "#slider_maxsaturation" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=saturationmax&v=" + String(this.value) );
		}
	});

	//Speed slider
	$( "#slider_speed" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=speed&v=" + String(this.value) );
		}
	});

	//Gamma slider
	$( "#slider_gamma" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=gamma&v=" + String(this.value) );
		}
	});
	
	//Moodlampmode slider
	$( "#slider_moodlampmode" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=moodlamp_mode&v=" + String(this.value) );
		}
	});
	
	//Moodlampbrightness slider
	$( "#slider_moodlampbrightness" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=moodlamp_brightness&v=" + String(this.value) );
		}
	});
	
	//Moodlampbrightness slider
	$( "#slider_moodlamp_red" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=moodlamp_static_color_r&v=" + String(this.value) );
		}
	});
	
	//Moodlampbrightness slider
	$( "#slider_moodlamp_green" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=moodlamp_static_color_g&v=" + String(this.value) );
		}
	});
	
	//Moodlampbrightness slider
	$( "#slider_moodlamp_blue" ).slider({
			
		slide: function(event, ui) {
			$( "#amount" ).val(this.value);
		},
		stop: function(event, ui) {	
			
			var jqxhr = $.ajax( "control/option?set=moodlamp_static_color_b&v=" + String(this.value) );
		}
	});
	
	$(document).load(function() {
      // RELOAD PAGE ON BUTTON CLICK EVENT.
        $('#reload_page').click(function () {
            location.reload(true); 
        });
    });
	
	getStatusInfo();
	setInterval("getStatusInfo()", 15000);
});

(function($) {
    var defaults = {
        height: 500,
        width: 500,
        toolbar: false,
        scrollbars: false,
        status: false,
        resizable: false,
        left: 0,
        top: 0,
        center: true,
        createNew: true,
        location: false,
        menubar: false,
        onUnload: null
    };

    $.popupWindow = function(url, opts) {
        var options = $.extend({}, defaults, opts);
        if (options.center) {
            options.top = ((screen.height - options.height) / 2) - 50;
            options.left = (screen.width - options.width) / 2;
        }

        var params = [];
        params.push('location=' + (options.location ? 'yes' : 'no'));
        params.push('menubar=' + (options.menubar ? 'yes' : 'no'));
        params.push('toolbar=' + (options.toolbar ? 'yes' : 'no'));
        params.push('scrollbars=' + (options.scrollbars ? 'yes' : 'no'));
        params.push('status=' + (options.status ? 'yes' : 'no'));
        params.push('resizable=' + (options.resizable ? 'yes' : 'no'));
        params.push('height=' + options.height);
        params.push('width=' + options.width);
        params.push('left=' + options.left);
        params.push('top=' + options.top);

        var random = new Date().getTime();
        var name = options.createNew ? 'popup_window_' + random : 'popup_window';
        var win = window.open(url, name, params.join(','));

        if (options.onUnload && typeof options.onUnload === 'function') {
            var unloadInterval = setInterval(function() {
                if (!win || win.closed) {
                    clearInterval(unloadInterval);
                    options.onUnload();
                }
            }, 250);
        }

        if (win && win.focus) { win.focus(); }

        return win;
    };
})(jQuery);

function getStatusInfo() {

	$.ajaxSetup({ cache: false });
	$.getJSON('/api/statusinfo').success(function(statusinfo) {
		
		// Set On/Off
		$('#on_off_el').val(statusinfo['lights_onoff']).slider('refresh')
		// Set Dynamic/Moodlamp
		$('#dy_mood').val(statusinfo['dyna_mood']).slider('refresh')
		// Set Brightness
		$("#slider_brightness").val(statusinfo['option_brightness']).slider('refresh');
		// Set Maximal Brightness
		$("#slider_brightnessmax").val(statusinfo['option_brightnessmax']).slider('refresh');
		// Set Minimal Brightness
		$("#slider_brightnessmin").val(statusinfo['option_brightnessmin']).slider('refresh');
        //Set Saturation
        $("#slider_saturation").val(statusinfo['option_saturation']).slider('refresh');
        //Set Minimal Saturation
        $("#slider_saturationmin").val(statusinfo['option_saturationmin']).slider('refresh');
        //Set Maximal Saturation
        $("#slider_saturationmax").val(statusinfo['option_saturationmax']).slider('refresh');
        //Set Speed
        $("#slider_speed").val(statusinfo['option_speed']).slider('refresh');
        //Set Gamma
        $("#slider_gamma").val(statusinfo['option_gamma']).slider('refresh');
		//Set Moodlampmode
        $("#slider_moodlampmode").val(statusinfo['option_moodlamp']).slider('refresh');
        //Set Moodlampbrightness
        $("#slider_moodlampbrightness").val(statusinfo['option_moodlampbrightness']).slider('refresh');
		//Set Moodlamp Red
        $("#slider_moodlamp_red").val(statusinfo['option_moodlamp_red']).slider('refresh');
		//Set Moodlamp Green
        $("#slider_moodlamp_green").val(statusinfo['option_moodlamp_green']).slider('refresh');
		//Set Moodlamp Blue
        $("#slider_moodlamp_blue").val(statusinfo['option_moodlamp_blue']).slider('refresh');

	}).error(function() {
		//$("#osd, #osd_bottom").html("");
	});
}
