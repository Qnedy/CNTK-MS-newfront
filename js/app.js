$(function(){
    $(".btn-toggle").click(function(e){
        e.preventDefault();
        el = $(this).data('element');
        $(el).toggle();
    });
});

$(".btn-toggle").click(function(){
    $("#imageDiv").append("<h1>Teste Porra</h1>");
});

