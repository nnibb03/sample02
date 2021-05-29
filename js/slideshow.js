$(window).on("load", function() {
  $("#thumbnail img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#slideshow-image img").attr("src", img_src);
  });
});

$(window).on("load", function() {
  $("#thumbnail-2 img").on("click", function () {
    let img_src = $(this).attr("src");
    $("#slideshow-image-2 img").attr("src", img_src);
  });
});
