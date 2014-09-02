$(
    function() 
    {
        $(window).on('hashchange', function(e){e.preventDefault();});
        $('a[href*=#]:not([href=#])').click(
            function() 
            {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
                {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length && target.hasClass("nav-target"))
                    {
                        var hash = this.hash;
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000, "swing", function(){window.location.hash = hash;});
                        return false;
                    }
                }
            }
        );
    }
);