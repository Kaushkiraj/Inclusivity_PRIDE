$(document).ready(function(){
    //on box click
    switchColorTheme();
});

$(window).on('load', function(){
    checkTheme();
});

//change theme
function checkTheme(){
    const currentThemeColor = localStorage.getItem('theme-color');
    //set that theme by applying class on body
    if(currentThemeColor !== null) {
        $('body').addClass(currentThemeColor);
        $(`#i${currentThemeColor}`).addClass('active');
    }
}

//switch theme
function switchColorTheme(){
    //on item click
    $('.theme-options div').click(function() {
        //select value
        const theme = $(this).attr('id');
        //make it active
        $('.theme-options div').removeClass('active');
        $(this).addClass('active');
        //remove old theme if stored
        removeThemeClasses();
        //apply selected theme class to body
        $('body').addClass(theme);
        localStorage.setItem('theme-color', theme);
    });
}

//remove all previous classes starting with theme- from body
function removeThemeClasses(){
    $('body').removeClass(function(index, cssName) {
        return(cssName.match(/\btheme-\S+/g) || []).join(' ');
    });
}