$(function(){
    alert('init');
    $('[data-toggle=collapse]').on('click', function(e){
        e.preventDefault();
    });
    alert('end');
});
