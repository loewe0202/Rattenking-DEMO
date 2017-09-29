(function(window,factory){
    factory(window);
}(window,function(window){
    var snow = window.snow = function(options){
        var defaults      = {
                                mainCell       : 'body',                                               
                                windowHeight 	: $(window).height(),                                    
                                windowWidth	: $(window).width(),                                     
                                minSize		: 10,		                                             
                                maxSize		: 20,		                                             
                                newOn		    : 1000,		                                             
                                snowArr        : ['&#10052;','&#10053;','&#10054;'],               
                                flakeColor	    : "#FFFFFF"                                         
                            },
        options			    = $.extend({}, defaults, options),
        snowAnimate         = function(){
                                var startPL    = Math.random()*options.windowWidth - 100,
                                    startO     = 0.5 + Math.random(),
                                    endPL      = startPL - 100 + Math.random() * 500,
                                    endO       = 0.2,
                                    endPT      = options.windowHeight - 10,
                                    size       = options.minSize + Math.random() * options.maxSize,
                                    duration   = options.windowHeight * 10 + Math.random() * 5000,
                                    index      = Math.random()*(options.snowArr.length+1)>>> 0;
                                $('<div/>').clone().html(options.snowArr[index]).appendTo(options.mainCell).css({
                                    position        : 'absolute',
                                    top              : '-50px',
                                    left             : startPL,
                                    opacity          : startO,
                                    'font-size'     : size,
                                    width            : size,
                                    color            : options.flakeColor
                                }).animate({
                                    top               : endPT,
                                    left              : endPL,
                                    opacity          : endO
                                },duration,'linear',function(){
                                    $(this).remove();
                                });
                                setTimeout(snowAnimate,options.newOn);
                            };
        snowAnimate();
    }
}));