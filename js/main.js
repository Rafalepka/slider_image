$(function () {
    var slideCount = $('.single-slide').length; // mozna jeszcze zrobic $('.slide-show').childer().length;
    var slideWidth = 100/slideCount;
    var slideShow = $(".slide-show");
    console.log(slideCount);
    $(".slide-show").css('width', slideCount * 100 + "%"); //szerokosc kontenera slide-show
    
    slideShow.find('.single-slide').each(function(i) { //znajde element single-slide i kazdemu z nich
        $(this).css('width', slideWidth + "%"); // przypisuje szerokosc proporcjonalna szerokosc
        var leftSlide = slideWidth * i; // szer kazdego slajdu
        $(this).css('left', leftSlide + "%"); //
    });
    

});