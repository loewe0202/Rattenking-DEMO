(function(factory){
    factory();
    window.addEventListener('resize',factory,false);
}(function(){
    var width = document.documentElement.clientWidth;
    if(width > 750){
        width = width > 1920 ? 1920 : width < 1080 ? 1080 : width;
        document.documentElement.style.fontSize = width / 19.2 + 'px';
    }else{
        width = width > 750 ? 750 : width;
        document.documentElement.style.fontSize = width / 7.5 + 'px';
    }
}));