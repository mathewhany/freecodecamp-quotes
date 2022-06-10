$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });

  randomQuote();

  $("#btn-random-quote").on("click", function() {
    randomQuote();
    changeColor();
  });
  
  $("#btn-tweet").on('click', function () {
    var quoteContent = $("#quote-content").text();
    var quoteTitle = $("#quote-title").text();
    
    window.open(
      'https://twitter.com/intent/tweet?text="' + quoteContent + '" - ' + quoteTitle
    );
  });
});

function randomQuote() {
  var quote = "";
  
  $.getJSON(
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",
    function(quotes) {
      quote = quotes.shift();
      $("#quote-content").html(quote.content.rendered);
      $("#quote-title").text(quote.title.rendered);
      
      $("#quote").addClass("animated rubberBand");
      
      setTimeout(function () {
        $("#quote").removeClass("animated rubberBand")
      }, 1000);
    });
  
  return quote;
}

function changeColor() {
  var colors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#e67e22",
    "#e74c3c"
  ];

  var color = colors[Math.floor(Math.random() * colors.length)];

  $("body").css("background-color", color);
}