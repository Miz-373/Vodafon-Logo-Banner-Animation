window.onload = function () {
        var timeline = new gsap.timeline()
        timeline.fromTo("#firstTEXT", {duration: 0.5, scale:10,autoAlpha: 1,rotation:0}, {duration:1,scale:1, autoAlpha:1});
        timeline.to("#firstTEXT",{duration:2, autoAlpha:0, rotationX: 360,scale:0});
        timeline.fromTo("#creativity",{duration:1,autoAlpha: 0,scale:0.5,delay:3},{autoAlpha:1, duration:2,scale:2});
        timeline.to("#creativity",{duration:2,autoAlpha:0});
        timeline.fromTo("#timeline_txt",{duration:2,autoAlpha: 0,scale:2,rotationX:-90,x:15},{duration:2,rotationX:0,autoAlpha:1,transformOrigin:"50% 100%",scale:1});
        timeline.to("#timeline_txt",{duration:1, x:-300, scale:0.25, autoAlpha:0});
        timeline.fromTo("#sae_logo",{duration:2,autoAlpha: 0,scale:1,x:350,y:20},{duration:3, autoAlpha:1});
        timeline.to("#sae_logo",{duration:2, x:-20,y:-10});
        timeline.add("logos");
        timeline.fromTo(".audio", {duration:4, autoAlpha:0},{duration:4,autoAlpha:1},"logos+=0.3");
        timeline.fromTo(".vfx", {duration:4, autoAlpha:0},{duration:4,autoAlpha:1},"logos+=0.6");
        timeline.fromTo(".film", {duration:4, autoAlpha:0},{duration:4,autoAlpha:1},"logos+=0.9");
        timeline.fromTo(".games", {duration:4, autoAlpha:0},{duration:4,autoAlpha:1},"logos+=1.2");
        timeline.fromTo(".web", {duration:4, autoAlpha:0},{duration:4,autoAlpha:1},"logos+=1.5");
        timeline.timeScale(1);
      }