function setCalendar(){delay.addDisableDate(lundiPaques),delay.addDisableDate(jeudiAscension),delay.addDisableDate(lundiPentecote);var e=$("#date-debut").pickadate({monthsFull:mois,monthsShort:moisCourts,weekdaysFull:jours,weekdaysShort:joursCourts,today:!1,clear:!1,close:"Fermer",disable:joursFeries,min:!0,firstDay:1,container:".wrapper",format:"dd/mm/yyyy",selectMonths:!0,selectYears:!0,onOpen:function(){fpAutoscroll(!1)},onClose:function(){fpAutoscroll(!0)},onSet:function(e){if(e.select){delay.init(e.select);var t=delay.getStartDate().getDate()+" "+mois[delay.getStartDate().getMonth()]+" "+delay.getStartDate().getFullYear(),a=delay.getEndDate().getDate()+" "+mois[delay.getEndDate().getMonth()]+" "+delay.getEndDate().getFullYear();$(".response").html('Vous devez impérativement renvoyer cette offre remplie <strong class="date-response">entre les '+t+" et "+a+"</strong› ."),blink($(".date-response"))}}})}function BankDelayDates(){this.initialDate=new Date,this.disableDates=[new Date((new Date).getFullYear(),0,1),new Date((new Date).getFullYear(),4,1),new Date((new Date).getFullYear(),6,14),new Date((new Date).getFullYear(),4,8),new Date((new Date).getFullYear(),7,15),new Date((new Date).getFullYear(),10,1),new Date((new Date).getFullYear(),10,11),new Date((new Date).getFullYear(),11,25)],this.startOffset=11,this.endOffset=30,this.addDisableDate=function(e){this.disableDates.push(e)},this.init=function(e){this.initialDate=new Date(e)},this.getStartDate=function(){return this._getNextValidDate(this.startOffset)},this.getEndDate=function(){return this._getNextValidDate(this.endOffset)},this._getNextValidDate=function(e){var t=new Date(this.initialDate.getTime());for(t.setDate(this.initialDate.getDate()+e);!this._isValid(t);)t.setDate(t.getDate()+1);return t},this._isValid=function(e){var t=!0;return(6==e.getDay()||0==e.getDay())&&(t=!1),$.each(this.disableDates,function(a,n){return e.getTime()==n.getTime()?(t=!1,!1):void 0}),t}}function blink(e){TweenLite.to(e,.3,{autoAlpha:0,delay:1,onComplete:function(){TweenLite.to(e,.3,{autoAlpha:1,delay:.3,onComplete:blink,onCompleteParams:[e]})}})}function showPage(){$("html").addClass("loaded-page")}function detectSmallMobile(){var e=$(window).height(),t=$(window).width();return 480>=t&&568>e?!0:!1}function saySomething(e){$(".fail").toggleClass("show"),$(".fail .infos").html(e)}function stepMobileMenu(){$("#fp-nav").addClass("is-mobile"),theToggle.on("click",function(e){e.preventDefault(),$(this).toggleClass("actif"),$(".wrapper").toggleClass("is-menu"),$("#fp-nav").toggleClass("show")})}function cancelMenuMobile(){$("#fp-nav").hasClass("show")&&(theToggle.removeClass("actif"),$(".wrapper").removeClass("is-menu"),$("#fp-nav").removeClass("show"))}function loadPage(){$("#preloader").fadeOut("slow",function(){$(this).remove()})}function SetParallax(){var e=skrollr.init()}function showFooter(){TweenMax.to($("footer"),1,{css:{className:"+=show"},delay:1.5})}function hideFooter(){TweenMax.to($("footer"),1,{css:{className:"-=show"}})}function initFullpage(){console.log("passe dns fullpage");var e=$(".fullpage").fullpage({verticalCentered:!0,anchors:["introduction","prendre-rendez-vous","le-rendez-vous","acceptation-proposition","reception-offre-de-pret","delai-de-refexion","rendez-vous-notaire","vous-etes-proprietaire","et-ensuite"],navigation:!0,navigationPosition:"right",scrollBar:!0,scrollingSpeed:1200,easing:"easeInOutQuart",afterSlideLoad:function(){},onLeave:function(e,t,a){updatebubbles(t),setTabs(),cancelMenuMobile(),9===t?showFooter():hideFooter()}})}function fpAutoscroll(e){$.fn.fullpage.setAutoScrolling(e),$.fn.fullpage.setFitToSection(e)}function setTabs(){var e=$(".wrapper-informations");e.each(function(e){var t=$(this),a=$("ul.tabs",t),n=$(".content-txt",t);0!=e&&TweenMax.set(n,{height:$(".tab-content",t).outerHeight()}),a.on("click","li",function(e){cancelMenuMobile();var i=$(this);if(!i.hasClass("current")){var s=i.data("tab"),o=n.find('div[data-tab="'+s+'"]'),l=o.outerHeight();a.find("li.current",t).removeClass("current"),i.addClass("current"),o.addClass("current").siblings("div").removeClass("current"),n.animate({height:l},100)}})})}function transiSlides(e){}function setbubbles(){$("#fp-nav ul li a span").each(function(e){$(this).append(infosBubbles[e])}),$("#fp-nav").append("<div class='totalbar'></div><div class='progressbar' style=\"height: 0px;\"'></div>")}function updatebubbles(e){TweenMax.to($("#fp-nav .progressbar"),.5,{height:43*(e-1)}),$("#fp-nav ul li a span").each(function(t){e>t?$(this).addClass("passed"):$(this).removeClass("passed")})}function setjsPlumb(){jsPlumb.ready(function(){jsPlumb.setContainer($(".plumb-container"));var e=$(".c-point"),t=e.length;$(".c-point").each(function(e){e!=t-1&&(instPlumb[e]=jsPlumb.getInstance(),instPlumb[e].connect({source:$(this),target:$(this).next(".c-point"),paintStyle:plumbStyle,endpoint:"Blank",connector:plumbConnect,anchors:["Bottom","Top"]}))}),$(window).resize(function(){$(".c-point").each(function(e){e!=t-1&&instPlumb[e].repaintEverything()})})})}var lundiPaques=new Date(2016,2,28),jeudiAscension=new Date(2016,4,5),lundiPentecote=new Date(2016,4,16),mois=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],moisCourts=["Jjan","fév","mar","avr","mai","jui","jui","aoû","sep","oct","nov","déc"],jours=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],joursCourts=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],joursFeries=[!1,6,7,new Date((new Date).getFullYear(),0,1),new Date((new Date).getFullYear(),4,1),new Date((new Date).getFullYear(),6,14),new Date((new Date).getFullYear(),4,8),new Date((new Date).getFullYear(),7,15),new Date((new Date).getFullYear(),10,1),new Date((new Date).getFullYear(),10,11),new Date((new Date).getFullYear(),11,25),lundiPaques,jeudiAscension,lundiPentecote],delay=new BankDelayDates,errorTooOld="<p>Nous sommes désolé, vous ne pourrez pas profiter pleinement de cette expérience sur votre matériel.</p><p>Vous pouvez en revanche <a href=\"\">télécharger l'infographie en pdf</a>, ou consulter le site sur votre tablette, ou votre ordinateur.</p><p>L'équipe du Crédit Agricole Atlantique-Vendée</p>",errorLandscape='<img class="rot-device" src="./imgLayout/rot-device.gif"/><p>Veuillez tournez votre appareil</p>',theToggle=$("#mobile-menu"),infosBubbles=["<em>i</em>","1","2","3","4","5","6","7","…"],plumbStyle={lineWidth:1,strokeStyle:"#818a89",dashstyle:" 2 4"},plumbConnect=["Flowchart",{cornerRadius:40}],instPlumb=[];$(function(){setTabs(),(isMobile.phone||isMobile.tablet)&&(window.innerHeight>window.innerWidth||saySomething(errorLandscape)),$(window).on("orientationchange",function(){1==window.orientation||saySomething(errorLandscape)}),$(document).scroll(function(){0===$(window).scrollTop()?($("header .thematique").removeClass("hide"),theToggle.addClass("first-step"),$("#fp-nav").addClass("first-step")):($("header .thematique").addClass("hide"),theToggle.removeClass("first-step"),$("#fp-nav").removeClass("first-step"))}),$(window).load(function(){isMobile.any?(1==detectSmallMobile()?console.log("smallscreen"):(console.log("largescreen"),initFullpage()),setCalendar(),setbubbles(),stepMobileMenu()):(initFullpage(),setCalendar(),setbubbles(),setjsPlumb(),SetParallax()),showPage()})});