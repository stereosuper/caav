/**** VARIABLES ****/
/**
 * ATTENTION : A modifier tous les ans
 */
 /*----------------- variables	 jours fériés et week ends---------------------*/
  var lundiPaques = new Date(2016, 2, 28);
            var jeudiAscension = new Date(2016, 4, 5);
            var lundiPentecote = new Date(2016, 4, 16);
            var mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            var moisCourts = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'] ;
            var jours = [ 'Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
            var joursCourts = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
			var joursFeries=[
				false,
				6,7,
				new Date(new Date().getFullYear(), 0, 1),   // Jour de l'an
				new Date(new Date().getFullYear(), 4, 1),   //Fête du Travail
				new Date(new Date().getFullYear(), 6, 14),  //Fête Nationale
				new Date(new Date().getFullYear(), 4, 8),   //8 Mai 1945
				new Date(new Date().getFullYear(), 7, 15),  //Assomption
				new Date(new Date().getFullYear(), 10, 1),  //La Toussaint
				new Date(new Date().getFullYear(), 10, 11), //Armistice
				new Date(new Date().getFullYear(), 11, 25), //Noël
				lundiPaques,
				jeudiAscension,
				lundiPentecote
			];

			var delay = new BankDelayDates();
				
			
			
/*----------------- variables	 jours fériés et week ends---------------------*/	



var errorTooOld ="<p>Nous sommes désolé, vous ne pourrez pas profiter pleinement de cette expérience sur votre matériel.</p><p>Vous pouvez en revanche <a href=\"\">télécharger l'infographie en pdf</a>, ou consulter le site sur votre tablette, ou votre ordinateur.</p><p>L'équipe du Crédit Agricole Atlantique-Vendée</p>";
var errorLandscape ='<img class="rot-device" src="./imgLayout/rot-device.gif"/><p>Veuillez tournez votre appareil</p>';
var theToggle = $('#mobile-menu');
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

/*----------------- fin des variables---------------------*/



	/**
			 * Gestion des délais de retractation pour un prêt immobilier.
             *
			 * On créé une nouvelle instance simplement avec ce code :
             *
             *      var delay = new BankDelayDates();
             *
			 * Les jours fériés sont initialisés par défaut avec les jours fixe (25 décembre, 1 Mai, etc).
             * Pour ajouter les jours fériés variables, il suffit de faire :
             *
             *      delay.addDisableDate(new Date(2016, 2, 28));
             *
             * Attention, les mois commence à 0.
             *
             * Ensuite, il faut indiquer la date de réception du prêt (sous le format timestamp) :
             *
             *      delay.init(...);
             *
             * Et on obtient les dates de début et de fin avec les méthodes suivantes :
             *
             *      delay.getStartDate();
             *      delay.getEndDate();
             *
             * Qui retourne un objet "Date" en javascript.
             *
			 */
			 
			function setCalendar(){
			delay.addDisableDate(lundiPaques); // Lundi de Pâques
						delay.addDisableDate(jeudiAscension);  // Jeudi de l'ascension
						delay.addDisableDate(lundiPentecote); // Lundi de pentecôte
			
						var picka1 = $("#date-debut").pickadate({
							// Strings and translations
							monthsFull: mois,
							monthsShort: moisCourts,
							weekdaysFull: jours,
							weekdaysShort: joursCourts,
							// Buttons
							today: false,
							clear: false,
							close: 'Fermer',
							disable: joursFeries,
							min:true,
							firstDay: 1,
							container: '.wrapper',
							// Formats
							format: 'dd/mm/yyyy',
							selectMonths: true,
							selectYears: true,
			
							onSet: function(thingSet) {
								if(thingSet.select){
									delay.init(thingSet.select);
			
									//$('#date-start').html(delay.getStartDate().toLocaleDateString());
									var start = delay.getStartDate().getDate()+" "+mois[(delay.getStartDate().getMonth())]+" "+delay.getStartDate().getFullYear();
									var end = delay.getEndDate().getDate()+" "+mois[(delay.getEndDate().getMonth())]+" "+delay.getEndDate().getFullYear();
									
									$('.response').html('<strong>Vous devez impérativement renvoyer cette offre remplie entre '+start+' et '+end+'.</strong›');
									//$('#date-start').html(delay.getStartDate().getDate()+" "+mois[(delay.getStartDate().getMonth())]+" "+delay.getStartDate().getFullYear());
									//$('#date-end').html(delay.getEndDate().getDate()+" "+mois[(delay.getEndDate().getMonth())]+" "+delay.getEndDate().getFullYear());
									
									
								//	$('#date-end').html(delay.getEndDate().toLocaleDateString());
								}
							}
						});
			
			
			}
			 
			function BankDelayDates() {
				// Date initiale
				this.initialDate = new Date();

				// Liste des jours feriés (en JavaScript, le mois de janvier correspond à 0 et le mois de décembre à 11)
				this.disableDates = [
					new Date(new Date().getFullYear(), 0, 1),   // Jour de l'an
					new Date(new Date().getFullYear(), 4, 1),   //Fête du Travail
					new Date(new Date().getFullYear(), 6, 14),  //Fête Nationale
					new Date(new Date().getFullYear(), 4, 8),   //8 Mai 1945
					new Date(new Date().getFullYear(), 7, 15),  //Assomption
					new Date(new Date().getFullYear(), 10, 1),  //La Toussaint
					new Date(new Date().getFullYear(), 10, 11), //Armistice
					new Date(new Date().getFullYear(), 11, 25)  //Noël
				];

				this.startOffset = 11;
				this.endOffset = 30;

				/**
				 * Ajoute des jours fériés dans la liste.
				 *
				 * @param {Date} date
				 */
				this.addDisableDate = function(date) {
					this.disableDates.push(date);
				}

				/**
				 * Initialise la date de réception du prêt.
				 *
				 * @param {int} timestamp
				 */
				this.init = function(timestamp) {
					this.initialDate = new Date(timestamp);
				}

				/**
				 * Retourne la date de début du délai de retractation.
				 *
				 * @return {Date}
				 */
				this.getStartDate = function() {
					return this._getNextValidDate(this.startOffset);
				}

				/**
				 * Retourne la date de fin du délai de retractation.
				 *
				 * @return {Date}
				 */
				this.getEndDate = function() {
					return this._getNextValidDate(this.endOffset);
				}

				/**
				 * Fonction privée : récupère la prochaine date valide X jour après la date initiale.
				 *
				 * @param  {int} offset Nombre de jour de décalage entre la date initiale et la date souhaitée.
				 * @return {Date}
				 */
				this._getNextValidDate = function (offset) {
					var startDate = new Date(this.initialDate.getTime());

					startDate.setDate(this.initialDate.getDate() + offset);

					while (! this._isValid(startDate)) {
						startDate.setDate(startDate.getDate() + 1);
					}

					return startDate;
				}

				/**
				 * Fonction privée : vérifie si la date est valide :
				 * - Ni samedi
				 * - Ni dimanche
				 * - Ni un jour ferié
				 *
				 * @param  {Date} date La date à vérifier
				 * @return {boolean}
				 */
				this._isValid = function (date) {
					var isValid = true;

					// Pas de samedi ou dimanche
					if (6 == date.getDay() || 0 == date.getDay()) {
						isValid = false;
					}

					// Pas de jour ferié
					$.each(this.disableDates, function(index, currentDate){
						if (date.getTime() == currentDate.getTime()) {
							isValid = false;
							return false;
						}
					});

					return isValid;
				}
			}
			
			
/*----------------- fin des fonctions calendrier ---------------------*/



function showPage(){
	
	$('html').addClass('loaded-page');

}

function saySomething(string){

	$('.fail').toggleClass('show');
	
$('.fail .infos').html(string);
	


}
	

function stepMobileMenu(){
	
	$('#fp-nav').addClass('is-mobile')
	
	theToggle.on('click', function (e) {
	  e.preventDefault();
	  $(this).toggleClass('actif');
	   $('.wrapper').toggleClass('is-menu');
	  $('#fp-nav').toggleClass('show');

	});
	
	


}

function cancelMenuMobile(){
	if($('#fp-nav').hasClass('show')){
		theToggle.removeClass('actif');
	 	$('.wrapper').removeClass('is-menu');
	 	$('#fp-nav').removeClass('show');
	}
}




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
    var fp1 =  $('.fullpage')
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
             	cancelMenuMobile();
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
        	cancelMenuMobile();
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



function transiSlides(direction) {
    if (direction == "down") {
        //TweenMax.fromTo($( "section .informations" ), 1, {  y:500},{  y:0});
    } else {
        //TweenMax.from($( "section .informations" ), 1, {  y:-500},{  y:0});	
    }
}

function setbubbles() {
    //ajout txt d'infos et éléments dans le bubble de la navigation en sidebar
    $("#fp-nav ul li a span").each(function(i) {
            $(this).append(infosBubbles[i]);
        });
    $("#fp-nav").append("<div class='totalbar'></div><div class='progressbar'></div>");
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
     
     
     if(isMobile.phone || isMobile.tablet){
     	if(window.innerHeight > window.innerWidth){
     	    // portrait
     	   
     	}else{
     		// landscape
     		 saySomething(errorLandscape);
     	}
     }
     
   $(window).on("orientationchange",function(){
     if(window.orientation == 1) // Portrait
     {
     }
     else // Landscape
     {
     saySomething(errorLandscape);
     }
   });

    $(document)
        .scroll(function() {
            if ($(window)
                .scrollTop() === 0) {
                $('header .thematique')
                    .removeClass('hide');
                theToggle.addClass('first-step');
                $('#fp-nav').addClass('first-step');
            } else {
                $('header .thematique')
                    .addClass('hide');
                theToggle.removeClass('first-step');
               $('#fp-nav').removeClass('first-step');
                
            }
            
        });
        
         
         
       
    
   
    
    $(window)
        .load(function() {
              initFullpage();
              setCalendar();
            //  $.fn.fullpage.setAutoScrolling(false);
              setbubbles();
              if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
                 
              stepMobileMenu(); 
                 
                 }else{
                 setjsPlumb();
                 SetParallax();	
                 }
                 
                 
              showPage();
              
        });

});


