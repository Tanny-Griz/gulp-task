$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    mobileFirst: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                dots: true
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
            }
        }
    ]
});

$('.slider-populer').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        }
    ]
});


$('.single-item').slick({
    arrows: false,
});


