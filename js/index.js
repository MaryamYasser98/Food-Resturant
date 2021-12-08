
$(document).ready(function(){

    $('#menu').click(function(){

        $(this).toggleClass('fa-times-rectangle');
        $('.navbar').toggleClass('nav-toggle')
    })


    $(window).on('load scroll' , function(){

        $('#menu').removeClass('fa-times-rectangle');
        $('.navbar').removeClass('nav-toggle')


        if($(window).scrollTop() > 60){
            $('header .header-2').addClass('header-active')
        }
        else{
            $('header .header-2').removeClass('header-active')
        }//end scrollTop


        //for change color navbar url active
        $('section').each(function(){

            let height = $(this).height();
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active')
            }

        })//end section function


    })//end load scroll function



    //to dishes change content image
    $('.controls .buttons').click(function(){

        $(this).addClass('buttons-active').siblings().removeClass('buttons-active');

        let filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.dishes .image').show(400)
        }
        else{
            $('.dishes .image').not('.'+filter).hide(200);
            $('.dishes .image').filter('.'+filter).show(200);
        }


    })//end click function





})//end ready function