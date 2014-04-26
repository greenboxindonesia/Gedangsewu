//  ========== 
//  = Smooth scroll to the top of the page = 
//  ========== 
$("#back-to-top").click(function(e) {
    e.preventDefault();
    $("html, body").animate({ 'scrollTop' : 0 }, 1500);
});

$("#About, #Contact").on("show", function () {
  $("body").addClass("modal-open");
}).on("hidden", function () {
  $("body").removeClass("modal-open")
});