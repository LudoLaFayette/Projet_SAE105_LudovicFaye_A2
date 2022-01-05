/*function carrousel() {
    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                                        if (ind == 0) return 3*delta + 2*d;
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta;
                                        return 0;
                                    }},
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            return 4*delta + 3*d;
        }
    });
}*/

function carrouselAlternate() {
    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });

    let anim15 = anime.timeline({
        targets: '.imgalt',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind ==2) return 3*delta + 2*d;
            if (ind==3) return 4*delta + 3*d;
            return 5*delta + 4*d;
        }
    });
    anim15.add({
        translateX: [{value: 350, easing: 'easeInOutCubic', duration: d},
                     {value: -350, duration: 0, delay: delta}]
    })
}

function monterLegende(cla) {
    document.querySelector('.'+cla).style.display='block';
    return anime({
        targets: '.'+cla,
        translateY: '-5em',
        autoplay:false,
        easing: 'linear',
        duration : 200
    }).play;
}

function descendreLegende(cla) {
    document.querySelector('.'+cla).style.display='block';
    return anime({
        targets: '.'+cla,
        translateY: '0em',
        autoplay:false,
        easing: 'linear',
        duration : 200
    }).play;
	
}