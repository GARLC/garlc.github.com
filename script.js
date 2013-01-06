$(function(){
    // Allow the collapse nav to be usabel sans-js
    $('[data-toggle=collapse]').on('click', function(e){
        e.preventDefault();
    });
    
    /////////////
    // Social //
    ////////////
    $('.follow[title]').tooltip();
    $.getJSON("http://api.twitter.com/1/users/show.json?screen_name=GeorgiaRLC&callback=?", function(data){
        $('.follow .icon-twitter').prop('title', data.followers_count);
    });

    //////////////
    // JS Shims //
    //////////////
    
    /** Autofocus */
    if(!Mondernizr.input.autofocus) {
    	$('[autofocus]')[0].focus();
    }
    // TODO Add input[required] shim
});
