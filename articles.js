var containers = document.getElementsByClassName('articles-container');
const SCROLL_AMOUNT = 100;
var multiplier = 1;

[...containers].forEach(container => {
    container.addEventListener('wheel', function(e) {
        //e.preventDefault();
        let dir = (e.deltaY > 0)? 'right' : 'left';
        container.horizontalScroll({
            speed: 15,
            scrollAmount: SCROLL_AMOUNT,
            interval: 25,
            direction: dir
        })

        let scrollLimit = container.scrollWidth - container.offsetWidth;
        let isGoingLeftUnderLimit = (container.scrollLeft > 0  && dir && dir === 'left');
        let isGoingRightUnderLimit = (container.scrollLeft < scrollLimit && dir === 'right');
        if(isGoingLeftUnderLimit || isGoingRightUnderLimit)
            e.preventDefault();
    });
})

containers = document.getElementsByClassName('posts-container');

[...containers].forEach(container => {
    container.addEventListener('wheel', function(e) {
        let dir = (e.deltaY > 0)? 'right' : 'left';
        container.horizontalScroll({
            speed: 15,
            scrollAmount: SCROLL_AMOUNT,
            interval: 25,
            direction: dir
        })

        let scrollLimit = container.scrollWidth - container.offsetWidth;
        let isGoingLeftUnderLimit = (container.scrollLeft > 0  && dir && dir === 'left');
        let isGoingRightUnderLimit = (container.scrollLeft < scrollLimit && dir === 'right');
        if(isGoingLeftUnderLimit || isGoingRightUnderLimit)
            e.preventDefault();
    });
})

/**
 * @param config {Object}
 * @param config.speed {number}
 * @param config.scrollAmount {number}
 * @param config.interval {number}
 * @param config.direction {'right'|'left'}
 */
HTMLElement.prototype.horizontalScroll = function({speed, scrollAmount = 0, interval = 25, direction = "right"}) {
    let amount = 0;
    let sign = (direction === 'right')? 1 : -1;
    let self = this;
    let slideTimer = setInterval(function(){
        self.scrollLeft += speed * sign;
        amount += speed;
        if(amount >= scrollAmount){
            window.clearInterval(slideTimer);
        }
    }, interval);
}
