function init(){


var tl1 = gsap.timeline({repeat:-1});

tl1.add('falling-obj')
.to("#blue-triangle-1", {duration: 2, y: 350, rotation: -520, ease: "none"}, 'falling-obj')
.to("#green-rectangle-1", {duration: 3, y: 270, rotation: 420, ease: "none"}, 'falling-obj+=1')
.to("#yellow-semi-circle-1", {duration: 5, y: 450, rotation: -520, ease: "none"}, 'falling-obj')
.to("#blue-triangle-2", {duration: 4, y: 270, rotation: -360, ease: "none"}, 'falling-obj')
.to("#red-semi-circle-2", {duration: 5, y: 320, rotation: 650, ease: "none"}, 'falling-obj+=1')
.to("#purple-rectangle-2", {duration: 3, y: 400, rotation: -360, ease: "none"}, 'falling-obj')
.to("#blue-semi-circle-3", {duration: 4, y: 370, rotation: 420, ease: "none"}, 'falling-obj+=0.5')
.to("#blue-triangle-3", {duration: 5, y: 270, rotation: -360, ease: "none"}, 'falling-obj')
.to("#green-rectangle-3", {duration: 6, y: 270, rotation: 700, ease: "none"}, 'falling-obj')
.to("#yellow-circle-1", {duration: 5, y: 470, rotation: -360, ease: "none"}, 'falling-obj')
;
             

var tl2 = gsap.timeline({repeat:-1});

tl2.add('falling-obj')
.to("#purple-triangle-4", {duration: 4, y: 350, rotation: 520, ease: "none"}, 'falling-obj')
.to("#green-rectangle-4", {duration: 5, y: 270, rotation: -420, ease: "none"}, 'falling-obj+=0.5')
.to("#yellow-semi-circle-4", {duration: 4, y: 450, rotation: 520, ease: "none"}, 'falling-obj+=1')
.to("#blue-triangle-5", {duration: 6, y: 270, rotation: -360, ease: "none"}, 'falling-obj+=2')
.to("#red-semi-circle-5", {duration: 6, y: 320, rotation: 650, ease: "none"}, 'falling-obj+=0.3')
.to("#purple-rectangle-5", {duration: 3, y: 400, rotation: -360, ease: "none"}, 'falling-obj+=1')
.to("#blue-semi-circle-6", {duration: 5, y: 370, rotation: 420, ease: "none"}, 'falling-obj+=1')
.to("#blue-triangle-6", {duration: 4, y: 470, rotation: -360, ease: "none"}, 'falling-obj+=1.5')
.to("#green-rectangle-5", {duration: 5, y: 300, rotation: 360, ease: "none"}, 'falling-obj')
.to("#yellow-circle-2", {duration: 5, y: 270, rotation: -360, ease: "none"}, 'falling-obj+=1');

//

var tl3 = gsap.timeline();

tl3
.add('offers')
.to("#vodafone-text", {duration: 1, scale: 1.3, autoAlpha: 1, ease: "Sine.In"}, 'offers')
.to("#vodafone-text", {duration: 0.3, scale: 1, autoAlpha: 1, ease: "Bounce.Out"}, 'offers+=0.3')
.to("#sommer-2020", {duration: 0.5, scale: 1, autoAlpha: 1, ease: "Sine.In"}, 'offers+=0.6')
.to("#sommer-2020", {duration: 0.5, scale: 0.5, autoAlpha: 1, ease: "Bounce.Out"}, 'offers+=0.9')
.to("#vodafone-text", {duration: 0.3, scale: 0, autoAlpha: 0, ease: "Sine.In"}, 'offers+=1.3')
.to("#sommer-2020", {duration: 0.5, scale: 0, autoAlpha: 0, ease: "Sine.In"}, 'offers+=1.4')
.to("#text-logo-tm", {duration: 0.3, scale: 1, autoAlpha: 1, ease: "Sine.In"}, 'offers+=1.4')
;

var tl4 = gsap.timeline();

tl4
.add('prices-in')
.to("#offers-area", {duration: 0.3, scale: 1.3, ease: "Sine.In"}, 'offers+=1.7')
.to("#offers-area", {duration: 0.3, scale: 1, ease: "Bounce.Out"}, 'offers+=2')
.to("#four-g-offer", {duration: 0.3, scale: 1.3, ease: "Sine.In"}, 'offers+=2.3')
.to("#four-g-offer", {duration: 0.3, scale: 1, ease: "Bounce.Out"}, 'offers+=2.6')
.to("#mit-ohne-vertrag", {duration: 1, autoAlpha: 1, ease: "Bounce.Out"}, 'offers+=3.6')
.to("#first-price", {duration: 0.1, left: 100, autoAlpha: 0, ease: "Sine.In"}, 'offers+=3.7')
.to("#tarif-ab", {duration: 0.1, left: 100, autoAlpha: 0, ease: "Sine.In"}, 'offers+=3.8')
.to("#four-g-text", {duration: 0.1, left: 100, autoAlpha: 0, ease: "Sine.In"}, 'offers+=3.9')
.to("#five-g-text", {duration: 0.2, left: 0, autoAlpha: 1, ease: "Sine.In"}, 'offers+=4.1')
.to("#monat-testen", {duration: 0.3, left: 0, autoAlpha: 1, ease: "Sine.Out"}, 'offers+=4.5')
.to("#ab", {duration: 0.2, left: 20, autoAlpha: 1, ease: "Sine.Out"}, 'offers+=4.7')
.to("#second-price", {duration: 0.3, left: 40, autoAlpha: 1, ease: "Sine.In"}, 'offers+=5')
.to("#offers-area", {duration: 0.3, autoAlpha:0 , ease: "Sine.Out"}, 'offers+=6.3')
;


var tl5 = gsap.timeline({onComplete:replayAnimation});

tl5
.add('logo')
.to("#end-logo",{duration: 0.8, rotation:1080, autoAlpha: 1, ease:"Bounce.Out"},'logo+=7')
;


function replayAnimation(){

        setTimeout(function(){ 

            tl1.restart();
            tl2.restart();
            tl3.restart();
            tl4.restart();
            tl5.restart();
                    
         }, 1000);
                
       }

 }
 window.onload = init;