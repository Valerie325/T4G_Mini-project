var Trandingslider = new Swiper(`trandingslider`, {
    effect:`coverflow`,
    grabcursor:true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop:true,
    coverfloweffect: {
        rotate:0,
        stretch:0,
        depth: 100,
        modifier: 2.5,
    },
    pagination:{
        el:`.swiperpagination`,
        clickable:true,
    },
    navigation:{
        nextEl:`.swiperbuttonnext`,
        prevEl:`.swiperbuttonprev`,
    }
});