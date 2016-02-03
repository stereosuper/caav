/**** VARIABLES ****/
var infosBubbles = ["<em>i</em>", "1", "2", "3", "4", "5", "6", "7", "…"];
var plumbStyle = {
    lineWidth: 1,
    strokeStyle: '#818a89',
    dashstyle: " 2 4"
}
var plumbConnect = ["Flowchart",
    {
        cornerRadius: 40
}]
var instPlumb = [];

function loadPage() {
    $('#preloader')
        .fadeOut('slow', function() {
            $(this)
                .remove();
        });
}

function SetParallax() {
    var s = skrollr.init();
}

function showFooter() {
    TweenMax.to($('footer'), 1, {
        css: {
            className: "+=show"
        },
        delay: 1.5
    });
}

function hideFooter() {
        TweenMax.to($('footer'), 1, {
            css: {
                className: "-=show"
            }
        });
    }
    
    
 function initFullpage(){
 //init fullpage
     $('.fullpage')
         .fullpage({
             verticalCentered: true,
             anchors: ['introduction', 'prendre-rendez-vous', 'le-rendez-vous', 'acceptation-proposition', 'reception-offre-de-pret', 'delai-de-refexion', 'rendez-vous-notaire', 'vous-etes-proprietaire', 'et-ensuite'],
             navigation: true,
             navigationPosition: 'right',
             scrollBar: true,
             scrollingSpeed: 1200,
             easing: 'easeInOutQuart',
             afterSlideLoad: function() {
                 setTabs();
             },
             onLeave: function(index, nextIndex, direction) {
                 if (nextIndex === 9) {
                     showFooter();
                 } else {
                     hideFooter();
                 }
             },
         });
        }
        //end initfullpage
        
        
        
    //fonction d'animation en transition des onglets, initialisée au load de la page et aux transitions

function setTabs() {
    var tabs = $('.wrapper-informations');
    tabs.each(function() {
        var tab = $(this),
            tabItems = $('ul.tabs', tab),
            tabContentWrapper = $('.content-txt', tab);
         	TweenMax.set(tabContentWrapper, {height:$(".tab-content",tab).outerHeight()});
       // tabContentWrapper.height($(".tab-content", tab).outerHeight());
        tabItems.on('click', 'li', function(event) {
            var selectedItem = $(this);
            //on checke le click, et exclue le click sur celui en cours
            if (!selectedItem.hasClass('current')) {
                var selectedTab = selectedItem.data('tab'),
                    selectedContent = tabContentWrapper.find('div[data-tab="' + selectedTab + '"]'),
                    selectedContentHeight = selectedContent.outerHeight();
                //on supprimer la classe current de ce lui en cours
                tabItems.find('li.current', tab)
                    .removeClass('current');
                //on ajoute la classe current a l'item cliqué
                selectedItem.addClass('current');
                //on ajoute la classse current au contenu correspondant
                selectedContent.addClass('current')
                    .siblings('div')
                    .removeClass('current');
                //animation de la hauteur du bloc de contenu
                tabContentWrapper.animate({
                    'height': selectedContentHeight
                }, 100);
            }
        });
    });
}

function setDatePicker() {
    $(function() {
        $("#datepicker")
            .datepicker({
                firstDay: 1
            });
    });
}

function transiSlides(direction) {
    if (direction == "down") {
        //TweenMax.fromTo($( "section .informations" ), 1, {  y:500},{  y:0});
    } else {
        //TweenMax.from($( "section .informations" ), 1, {  y:-500},{  y:0});	
    }
}

function setbubbles() {
    //ajout txt d'infos et éléments dans le bubble de la navigation en sidebar
    $("#fp-nav ul li a span")
        .each(function(i) {
            $(this)
                .append(infosBubbles[i]);
        });
    $("#fp-nav")
        .append("<div class='totalbar'></div><div class='progressbar'></div>");
}

function updatebubbles(index) {
    $("#fp-nav .progressbar")
        .height(43 * (index - 1));
    $("#fp-nav ul li a span")
        .each(function(i) {
            if (i < index) {
                $(this)
                    .addClass("passed");
            } else {
                $(this)
                    .removeClass("passed");
            }
        });
}

function setjsPlumb() {
        /**** JsPlumb****/
        //jsPlumb.reset();
        jsPlumb.ready(function() {
            jsPlumb.setContainer($(".plumb-container"));
            var $set = $('.c-point');
            var len = $set.length;
            $(".c-point")
                .each(function(index) {
                    if (index != len - 1) {
                        instPlumb[index] = jsPlumb.getInstance();
                        instPlumb[index].connect({
                            //source:$(".point-"+index),
                            source: $(this),
                            target: $(this)
                                .next(".c-point"),
                            //	target:$(".point-"+(index+1)),
                            paintStyle: plumbStyle,
                            endpoint: "Blank",
                            connector: plumbConnect,
                            anchors: ["Bottom", "Top"]
                        });
                    }
                });
            $(window)
                .resize(function() {
                    //jsPlumb.repaintEverything();
                    $(".c-point")
                        .each(function(index) {
                            if (index != len - 1) {
                                instPlumb[index].repaintEverything();
                            }
                        });
                });
        });
        /**** end JsPlumb****/
    }
    /**** INIT ****/
$(function() {


     setTabs();
     
   

    $(document)
        .scroll(function() {
            if ($(window)
                .scrollTop() === 0) {
                $('header .thematique')
                    .removeClass('hide');
            } else {
                $('header .thematique')
                    .addClass('hide');
            }
        });
    if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {}else{
    setjsPlumb();
    SetParallax();	
    }
    setbubbles();
    
    $(window)
        .load(function() {
              initFullpage();
        });

});


