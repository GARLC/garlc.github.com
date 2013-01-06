$(function(){
    // Allow the collapse nav to be usabel sans-js
    $('[data-toggle=collapse]').on('click', function(e){
        e.preventDefault();
    });
    
    /////////////
    // Social //
    ////////////
    $('.follow[title]').tooltip();
    //////////////
    // JS Shims //
    //////////////
    
    /** Autofocus */
    if(!Mondernizr.input.autofocus) {
    	$('[autofocus]')[0].focus();
    }
    // TODO Add input[required] shim
});
