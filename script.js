$(function(){
    // Allow the collapse nav to be usabel sans-js
    $('[data-toggle=collapse]').on('click', function(e){
        e.preventDefault();
    });
    
    /////////////
    // Social //
    ////////////
    $('.follow[title]').tooltip();
    $.getJSON('http://api.twitter.com/1/users/show.json?screen_name=GeorgiaRLC&callback=?', function(data){
        $('.follow .icon-twitter').parents('li')
        .attr('data-original-title', data.followers_count + ' followers on Twitter');
    });

    //////////////
    // JS Shims //
    //////////////
    
    /** Autofocus */
    if(!Modernizr.input.autofocus) {
    	$('[autofocus]')[0].focus();
    }
    // TODO Add input[required] shim
});
