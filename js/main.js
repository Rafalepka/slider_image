$(function () {
    var slideCount = $('.single-slide').length; // mozna jeszcze zrobic $('.slide-show').childer().length;
    var slideWidth = 100 / slideCount;
    var slideShow = $(".slide-show");
    var lewaStrzalka = $('.fa-chevron-left');
    var prawaStrzalka = $('.fa-chevron-right');
    var slideIndex = 0;
    var animNapis = $('.slider-caption');
    $(".slide-show").css('width', slideCount * 100 + "%"); //szerokosc kontenera slide-show

    slideShow.find('.single-slide').each(function (i) { //znajde element single-slide i kazdemu z nich
        $(this).css('width', slideWidth + "%"); // przypisuje szerokosc proporcjonalna szerokosc
        var leftSlide = slideWidth * i; // szer kazdego slajdu
        $(this).css('left', leftSlide + "%"); //
    });

    function slideSwitch(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) { // zablokowanie na ostatni element, zeby funkcja nie przesuwala dalej
            return;
        }
        // wywolanie animacji na elemencie slideShow, ktora przesunie go w lewy margines rowny zmiennej marginLeft
        var marginLeft = (newSlideIndex * (-100)) + "%";
        var napisNumer = animNapis.eq(newSlideIndex);
        napisNumer.hide();
        slideShow.animate({'margin-left': marginLeft}, 800, function () {
            slideIndex = newSlideIndex;
            animNapis.fadeIn(500);
        });        
    }
    


    lewaStrzalka.click(function (e) {
        slideSwitch(slideIndex - 1);
        //        alert('kliknales lewa strzalke');
        e.preventDefault();
    });

    prawaStrzalka.click(function (e) {
        slideSwitch(slideIndex + 1);
        //        alert('prawy klik');
        e.preventDefault();
    });


});