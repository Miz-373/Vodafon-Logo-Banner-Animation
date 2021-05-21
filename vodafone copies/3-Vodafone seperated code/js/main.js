function init() {

                var tl1 = new TimelineMax('repeat:-1');

                tl1
                .add('confettiIn')
                .to("#c1", 2, {top: 350, rotation: 520, ease: Power0.easeNone}, 'confettiIn')
                .to("#c2", 3, {top: 270, rotation: 420, ease: Power0.easeNone}, 'confettiIn+=1')
                .to("#c3", 5, {top: 450, rotation: 520, ease: Power0.easeNone}, 'confettiIn')
                .to("#c4", 4, {top: 270, rotation: 360, ease: Power0.easeNone}, 'confettiIn')
                .to("#c5", 5, {top: 320, rotation: 650, ease: Power0.easeNone}, 'confettiIn+=1')
                .to("#c6", 3, {top: 400, rotation: 360, ease: Power0.easeNone}, 'confettiIn')
                .to("#c7", 4, {top: 270, rotation: 420, ease: Power0.easeNone}, 'confettiIn+=0.5')
                .to("#c8", 5, {top: 270, rotation: 360, ease: Power0.easeNone}, 'confettiIn')
                .to("#c9", 6, {top: 270, rotation: 700, ease: Power0.easeNone}, 'confettiIn')
                .to("#c10", 5, {top: 270, rotation: 360, ease: Power0.easeNone}, 'confettiIn')
                ;
             
                var tl2 = new TimelineMax('repeat:-1');

                tl2
                .add('confettin2')
                .to("#c1x", 4, {top: 350, rotation: 520, ease: Power0.easeNone}, 'confettin2')
                .to("#c2x", 5, {top: 270, rotation: 420, ease: Power0.easeNone}, 'confettin2+=0.5')
                .to("#c3x", 4, {top: 450, rotation: 520, ease: Power0.easeNone}, 'confettin2+=1')
                .to("#c4x", 6, {top: 270, rotation: 360, ease: Power0.easeNone}, 'confettin2+=2')
                .to("#c5x", 6, {top: 320, rotation: 650, ease: Power0.easeNone}, 'confettin2+=0.3')
                .to("#c6x", 3, {top: 400, rotation: 360, ease: Power0.easeNone}, 'confettin2+=1')
                .to("#c7x", 5, {top: 270, rotation: 420, ease: Power0.easeNone}, 'confettin2+=1')
                .to("#c8x", 4, {top: 270, rotation: 360, ease: Power0.easeNone}, 'confettin2+=1.5')
                .to("#c9x", 5, {top: 300, rotation: 360, ease: Power0.easeNone}, 'confettin2')
                .to("#c10x", 5, {top: 270, rotation: 360, ease: Power0.easeNone}, 'confettin2+=1');

                var tl3 = new TimelineMax('repeat:-1');

                tl2
                .add('confettin3')
                .to("#c1x2", 6, {top: 350, rotation: 520, ease: Power0.easeNone}, 'confettin3+=1')
                .to("#c2x2", 7, {top: 270, rotation: 650, ease: Power0.easeNone}, 'confettin3+=0.5')
                .to("#c3x2", 5, {top: 450, rotation: 520, ease: Power0.easeNone}, 'confettin3+=1')
                .to("#c4x2", 4, {top: 270, rotation: 360, ease: Power0.easeNone}, 'confettin3+=0.5')
                .to("#c5x2", 5, {top: 320, rotation: 650, ease: Power0.easeNone}, 'confettin3+=1')
                ;

                var tl4 = new TimelineMax();

                tl4
                .add('sale-in')
                .to("#ny", 0.3, {scale: 1.3, autoAlpha: 1, ease: Sine.easeIn}, 'sale-in')
                .to("#ny", 0.3, {scale: 1, autoAlpha: 1, ease: Bounce.easeOut}, 'sale-in+=0.3')
                .to("#nysale", 0.3, {scale: 1.6, autoAlpha: 1, ease: Sine.easeIn}, 'sale-in+=0.6')
                .to("#nysale", 0.3, {scale: 1, autoAlpha: 1, ease: Bounce.easeOut}, 'sale-in+=0.9')
                .to("#ny", 0.3, {scale: 0, autoAlpha: 0, ease: Sine.easeIn}, 'sale-in+=1.3')
                .to("#nysale", 0.3, {scale: 0, autoAlpha: 0, ease: Sine.easeIn}, 'sale-in+=1.4')
                .to("#logo", 0.3, {scale: 1, autoAlpha: 1, ease: Sine.easeIn}, 'sale-in+=1.4')
                ;

                var tl5 = new TimelineMax({onComplete:replayAnimation});

                tl5
                .add('prices-in')
                .to("#ic", 0.3, {scale: 1.3, ease: Sine.easeIn}, 'sale-in+=1.7')
                .to("#ic", 0.3, {scale: 1, ease: Bounce.easeOut}, 'sale-in+=2')
                .to("#i1", 0.3, {scale: 1.3, ease: Sine.easeIn}, 'sale-in+=2')
                .to("#i1", 0.3, {scale: 1, ease: Bounce.easeOut}, 'sale-in+=2.3')
                .to("#ca", 1, {autoAlpha: 1, ease: Bounce.easeOut}, 'sale-in+=2.3')
                .to("#pp", 0.1, {left: 100, autoAlpha: 0, ease: Sine.easeIn}, 'sale-in2.7')
                .to("#pd", 0.1, {left: 100, autoAlpha: 0, ease: Sine.easeIn}, 'sale-in2.9')
                .to("#p1", 0.1, {left: 100, autoAlpha: 0, ease: Sine.easeIn}, 'sale-in3.2')
                .to("#p2", 0.2, {left: 0, autoAlpha: 1, ease: Sine.easeIn}, 'sale-in2.8')
                .to("#pd2", 0.2, {left: 0, autoAlpha: 1, ease: Sine.easeOut}, 'sale-in3.3')
                .to("#from", 0.2, {left: 20, autoAlpha: 1, ease: Sine.easeOut}, 'sale-in3.4')
                .to("#pp2", 0.2, {left: 50, autoAlpha: 1, ease: Sine.easeOut}, 'sale-in3.4')
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