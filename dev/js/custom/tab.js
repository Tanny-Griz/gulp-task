$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$(window).on("scroll", function() {
    $('#fixed-bar').toggleClass("bg-color", window.scrollY > 92);
});
