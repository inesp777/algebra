$('p:first-of-type').css('background-color','yellow');
$('.gone').click(function(){
    $(this).slideUp();
});
$('p:nth-of-type(3)').dblclick(function(){
    $(this).slideUp();
})

$('.hide-btn').click(function(){
    $('p').hide();})

$('.show-btn').click(function(){
    $('p').show();
});
$('.toggle-btn').click(function(){
    $('p').fadeToggle();
});

$("#button-box").click(function () {
    $(".box").animate({
        width: "300px",
        height: "300px",
        marginLeft: "150px",
        borderWidth: "10px",
        opacity: 0.5
    });
});
$('#callback').click(function(){
    $('.gone').slideToggle("slow",function(){alert('tekst')});
    
})
//

//https://www.javatpoint.com/jquery-mcq