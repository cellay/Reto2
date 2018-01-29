$('img').hover(function() {
    
    // $(this).before('<figure>'+this+'</figure>');
    // $('figure').html(this);
    // $('figure').append('<figcaption>'+$(this).attr('alt')+'</figcaption>');

    $(this).parent().append('<figure><img src="'+$(this).attr('src')+'"><figcaption>'+$(this).attr('alt')+'</figcaption></figure>')
    $(this).remove();
});