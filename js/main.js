$(document).ready(function() {
    $('#footer #year').append((new Date).getFullYear());

    // Make links scroll to navigable targets
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

    var idx = 0;
    // All thumbnails in thumbnail groups will be converted to lightbox galleries
    $('.thumbnail-group').each(function(){
        var links = $(this).find('a');
        links.colorbox({
            rel:'group' + idx++,
            maxWidth: "100%",
            maxHeight: "100%"
        });
    });
});
