(function ($) {

  const wdtAdvancedNumberCounterWidgetHandler = function($scope, $) {

    $(document).ready( function() {

      $(".wdt-advanced-number-counter-value").each(function() {
        var counter_div = $(this);
        var counter_value = counter_div.data('digit');
        var counter_speed = counter_div.data('data-digit-speed');
        
        setTimeout( function(){
          counter_div.html(counter_value);
        }, counter_speed );

      });

    }, false);

  };

  $(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/wdt-advanced-number-counter.default', wdtAdvancedNumberCounterWidgetHandler);
  });

})(jQuery);