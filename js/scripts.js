$(document).ready(function(){

            // Bootstarp JQuery
            // $('#mycarousel').carousel({interval: 2000});
            // $('#carousel-pause').click(function(){
            //     $('#mycarousel').carousel("pause")
            // });
            // $('#carousel-play').click(function(){
            //     $("#mycarousel").carousel("cycle")
            // });

            $("#mycarousel").carousel({interval: 2000});
            $("#carouselButton").click(function(){
                if($("#carouselButton").children('span').hasClass("fa-pause")){
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children('span').removeClass("fa-pause");
                    $("#carouselButton").children('span').addClass("fa-play");
                }
                else{
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children('span').removeClass("fa-play");
                    $("#carouselButton").children('span').addClass("fa-pause");
                }
            })
            $("#loginLink").click(function(){
                $("#loginModal").modal('show');
            })
            $("#reserveButton").click(function(){
                $("#reserveFormModal").modal('show');
            })
        })