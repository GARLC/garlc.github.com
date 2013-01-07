$(function(){
    // Allow the collapse nav to be usabel sans-js
    $('[data-toggle=collapse]').on('click', function(e){
        e.preventDefault();
    });
    $('.btn-navbar[title]').tooltip({placement:'left'});
    /////////////
    // Social //
    ////////////
    $('.follow[title]').tooltip({placement:'bottom'});
    //User Voice
    $('.follow .icon-envelope-alt').parents('a').on('click', function(e){
        UserVoice.showPopupWidget();
        e.preventDefault();
    })
    //Twitter
    $.getJSON('http://api.twitter.com/1/users/show.json?screen_name=GeorgiaRLC&callback=?', function(data){
        $('.follow .icon-twitter').parents('li')
        .attr('data-original-title', data.followers_count + ' followers on Twitter');
    });
    //Facebook
    $.getJSON("https://graph.facebook.com/GeorgiaRLC?callback=?", function(data){
        $('.follow .icon-facebook').parents('li')
        .attr('data-original-title', data.likes + ' likes on Facebook');
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
