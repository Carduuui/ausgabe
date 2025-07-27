$(document).ready(function(){
    $('.load-content').click(function(e){
        e.preventDefault();
        let pageUrl = $(this).attr('href');
        $('#content-area').load(pageUrl);
    })
})