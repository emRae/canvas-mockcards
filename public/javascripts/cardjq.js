$(document).ready(function() {
    
    var $dscr = $('.card__description'),
        $switch = $('.card__toggle-link'),
        $fadeout = $('.card__description--fade-out'),
        $initHeight = 75; // Initial height
    
    $dscr.each(function() {
        $.data(this, "realHeight", $(this).height());    // Create new property realHeight
        }).css({ overflow: "hidden", height: $initHeight + 'px' });

    $switch.toggle(function() {
          $dscr.animate({ height: $dscr.data("realHeight") }, 600);
          $switch.html("&#x25B2;");
          $fadeout.addClass("hide");
        }, function() {
            $dscr.animate({ height: $initHeight}, 600);
            $switch.html("&#x25BC;");
            $fadeout.removeClass("hide");       
        });
    });