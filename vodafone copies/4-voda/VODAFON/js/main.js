function init(){


var tl1 = gsap.timeline({repeat:-1});

tl1.add('confettiIn')
.to("#c1", {duration: 2, y: 350, rotation: 520, ease: "none"}, 'confettiIn')
.to("#c2", {duration: 3, y: 270, rotation: 420, ease: "none"}, 'confettiIn+=1')
.to("#c3", {duration: 5, y: 450, rotation: 520, ease: "none"}, 'confettiIn')
.to("#c4", {duration: 4, y: 270, rotation: 360, ease: "none"}, 'confettiIn')
.to("#c5", {duration: 5, y: 320, rotation: 650, ease: "none"}, 'confettiIn+=1')
.to("#c6", {duration: 3, y: 400, rotation: 360, ease: "none"}, 'confettiIn')
.to("#c7", {duration: 4, y: 270, rotation: 420, ease: "none"}, 'confettiIn+=0.5')
.to("#c8", {duration: 5, y: 270, rotation: 360, ease: "none"}, 'confettiIn')
.to("#c9", {duration: 6, y: 270, rotation: 700, ease: "none"}, 'confettiIn')
.to("#c10", {duration: 5, y: 270, rotation: 360, ease: "none"}, 'confettiIn')
;
             

var tl2 = gsap.timeline({repeat:-1});

tl2.add('confettin2')
.to("#c1x", {duration: 4, y: 350, rotation: 520, ease: "none"}, 'confettin2')
.to("#c2x", {duration: 5, y: 270, rotation: 420, ease: "none"}, 'confettin2+=0.5')
.to("#c3x", {duration: 4, y: 450, rotation: 520, ease: "none"}, 'confettin2+=1')
.to("#c4x", {duration: 6, y: 270, rotation: 360, ease: "none"}, 'confettin2+=2')
.to("#c5x", {duration: 6, y: 320, rotation: 650, ease: "none"}, 'confettin2+=0.3')
.to("#c6x", {duration: 3, y: 400, rotation: 360, ease: "none"}, 'confettin2+=1')
.to("#c7x", {duration: 5, y: 270, rotation: 420, ease: "none"}, 'confettin2+=1')
.to("#c8x", {duration: 4, y: 270, rotation: 360, ease: "none"}, 'confettin2+=1.5')
.to("#c9x", {duration: 5, y: 300, rotation: 360, ease: "none"}, 'confettin2')
.to("#c10x", {duration: 5, y: 270, rotation: 360, ease: "none"}, 'confettin2+=1');

var tl3 = gsap.timeline({repeat:-1});

tl3.add('confettin3')
.to("#c1x2", {duration: 6, y: 350, rotation: 520, ease: "none"}, 'confettin3+=1')
.to("#c2x2", {duration: 7, y: 270, rotation: 650, ease: "none"}, 'confettin3+=0.5')
.to("#c3x2", {duration: 5, y: 450, rotation: 520, ease: "none"}, 'confettin3+=1')
.to("#c4x2", {duration: 4, y: 270, rotation: 360, ease: "none"}, 'confettin3+=0.5')
.to("#c5x2", {duration: 5, y: 320, rotation: 650, ease: "none"}, 'confettin3+=1')
;

var tl4 = gsap.timeline();

tl4
.add('sale-in')
.to("#ny", {duration: 0.3, scale: 1.3, autoAlpha: 1, ease: "Sine.In"}, 'sale-in')
.to("#ny", {duration: 0.3, scale: 1, autoAlpha: 1, ease: "Bounce.Out"}, 'sale-in+=0.3')
.to("#nysale", {duration: 0.3, scale: 1.6, autoAlpha: 1, ease: "Sine.In"}, 'sale-in+=0.6')
.to("#nysale", {duration: 0.3, scale: 1, autoAlpha: 1, ease: "Bounce.Out"}, 'sale-in+=0.9')
.to("#ny", {duration: 0.3, scale: 0, autoAlpha: 0, ease: "Sine.In"}, 'sale-in+=1.3')
.to("#nysale", {duration: 0.3, scale: 0, autoAlpha: 0, ease: "Sine.In"}, 'sale-in+=1.4')
.to("#logo", {duration: 0.3, scale: 1, autoAlpha: 1, ease: "Sine.In"}, 'sale-in+=1.4')
;

var tl5 = gsap.timeline({onComplete:replayAnimation});

tl5
.add('prices-in')
.to("#ic", {duration: 0.3, scale: 1.3, ease: "Sine.In"}, 'sale-in+=1.7')
.to("#ic", {duration: 0.3, scale: 1, ease: "Bounce.Out"}, 'sale-in+=2')
.to("#i1", {duration: 0.3, scale: 1.3, ease: "Sine.In"}, 'sale-in+=2')
.to("#i1", {duration: 0.3, scale: 1, ease: "Bounce.Out"}, 'sale-in+=2.3')
.to("#ca", {duration: 1, autoAlpha: 1, ease: "Bounce.Out"}, 'sale-in+=2.3')
.to("#pp", {duration: 0.1, left: 100, autoAlpha: 0, ease: "Sine.In"}, 'sale-in2.7')
.to("#pd", {duration: 0.1, left: 100, autoAlpha: 0, ease: "Sine.In"}, 'sale-in2.9')
.to("#p1", {duration: 0.1, left: 100, autoAlpha: 0, ease: "Sine.In"}, 'sale-in3.2')
.to("#p2", {duration: 0.2, left: 0, autoAlpha: 1, ease: "Sine.In"}, 'sale-in2.8')
.to("#pd2", {duration: 0.2, left: 0, autoAlpha: 1, ease: "Sine.Out"}, 'sale-in3.3')
.to("#from", {duration: 0.2, left: 20, autoAlpha: 1, ease: "Sine.Out"}, 'sale-in3.4')
.to("#pp2", {duration: 0.2, left: 50, autoAlpha: 1, ease: "Sine.Out"}, 'sale-in3.4')
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