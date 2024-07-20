$("document").ready(function(){
    $(".div-menu-title").click(function(){
        changeState('menu');
    });

    function changeState(state){
        switch(state){
            case 'menu':
            default:
                $("body").addClass("state-menu");
                $(".menu-item").show();
                $(".menu").addClass("in");
                // $(".btn-close").fadeIn();
                break;
            case 'page':
                $(".menu").addClass("out");
                // $(".btn-close").fadeOut();
                setTimeout(function(){
                    $("body").removeClass("state-menu");
                    $(".menu").removeClass("out").removeClass("in");
                    $(".menu-item").hide();

                }, 1600);
                break;
        }
    }

    $(".btn-close").click(function(){
        changeState('page');   
    });

    $(".menu-item>a").click(function (e) {
        e.preventDefault();
        var target = $(this).data("target");
        if (target=="self") changeState('page');
        else window.location = target;
    });

    $(".menu-item").hover(function () {
        // $(".menu-item").css('opacity', '0.5');
        // $(this).css('opacity', '1');
        $(".menu-item").removeClass('active').addClass('inactive');
        $(this).addClass('active');
    }, function(){
        // $(".menu-item").css('opacity', '1');
    });

    $(".menu-body").hover(function(e){
    },function(e){
        $(".menu-item").removeClass('inactive').removeClass('active');
    });
    
});