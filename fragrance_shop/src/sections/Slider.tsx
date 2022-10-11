import './Slider.scss';
import first_banner_image from "../assets/img/first_banner_image.jpg"
import second_banner_image from "../assets/img/second_banner_image.jpg"
import third_banner_image from "../assets/img/third_banner_image.jpg"



const MainSlider = () => {
    /* Element Refs */
    let images = document.querySelectorAll('.main-slider__image');
    let dots = Array.from(document.querySelectorAll('.carousel--dot'));
    const mainCarouselNext = document.querySelector('.carousel--next');
    const mainCarouselPrev = document.querySelector('.carousel--prev');

    /* Variables */

    let current = 0;
    let dragStartPoint: number;
    let dragEndPoint: number;

    /* Functions */

    let timer: NodeJS.Timer;

    function startTimer(){
        timer = setInterval(moveNext, 5000);
    };

    startTimer();

    const sliderFunc = () => {
        images = document.querySelectorAll('.main-slider__image');
        images.forEach(image => {
            image.classList.add('opacity0')
        });
        if(images[current]) {
            images[current].classList.remove('opacity0');
        }
    }

    function makeDotActive() {
        dots = Array.from(document.querySelectorAll('.carousel--dot'));
        dots.forEach((dot, index) => {
            dot.classList.remove('dot-active');
        });
        if(dots[current]) {
            dots[current].classList.add('dot-active');
        }
    }


    const startMouseCapture = (event: any) => {
        console.log(event);
        clearInterval(timer);
        dragStartPoint = event.pageX;
    }

    function releaseMouseCapture(event: any) {
        dragEndPoint = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        let delta = dragEndPoint - dragStartPoint;

        if(event.type.includes('mouse')) {
            if (Math.abs(delta) > 100)
            {
                if (delta > 0) moveNext();
                else  movePrev();
            }
            dragStartPoint = dragEndPoint;
            startTimer();
        } else {
            if (Math.abs(delta) > 10)
            {
                if (delta > 0) moveNext();
                else  movePrev();
            }
            dragStartPoint = dragEndPoint;
            startTimer();
        }
        dragStartPoint = 0;
        dragEndPoint = 0;
    }



    function moveNext() {
        if (current + 1 == images.length) {
            current = 0;
        } else {
            current++;
        }
        sliderFunc();
        makeDotActive();
        dragEndPoint = 0;
        dragStartPoint = 0;
    }

    function movePrev() {
        if (current - 1 == -1) {
            current = images.length - 1;
        } else {
            current--;
        }
        sliderFunc();
        makeDotActive();
        dragEndPoint = 0;
        dragStartPoint = 0;
    }


    /* Event listeners */

    //images.forEach(image => image.addEventListener('mousedown', startMouseCapture));
    //images.forEach(image => image.addEventListener('mouseup', releaseMouseCapture));

    if(mainCarouselPrev && mainCarouselNext) {
        (document.querySelector('.carousel--next') as any)!.onclick = function () {
            clearInterval(timer);
            startTimer()
            moveNext();
        };

        (document.querySelector('.carousel--prev') as any)!.onclick = function () {
            clearInterval(timer);
            startTimer()
            movePrev();
        }
    }


    dots.forEach((dot, index) => dot.addEventListener('click', () => {
        current = index;
        makeDotActive();
        sliderFunc();
    }));



    return (<section className="main-slider">
        <div className="main__wrapper">
            <div className="main-slider__images-block">
                <div className="carousel--prev" onClick={movePrev}>
                    <div className="icon--root icon--prev">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="main-slider__image main-slider__image--first" onMouseDownCapture={startMouseCapture} onMouseUpCapture={releaseMouseCapture}>
                    <img loading="eager" src={first_banner_image} alt="first banner image confident woman"
                         className=""
                         id="firstSliderImage" />
                        <div className="text-block text-block--first">
                            <h4 className="text-block__heading">
                                EXclusive
                            </h4>
                            <h2 className="text-block__heading text-block__heading--large">the new & Natural</h2>
                            <p>Copy
                                The award-winning, all-natural skincare range for a new, healthier you.</p>
                            <a className="text-block__link" href="./collection-en.html">Shop now</a>
                        </div>
                </div>
                <div className="main-slider__image main-slider__image--second" onMouseDownCapture={startMouseCapture} onMouseUpCapture={releaseMouseCapture}>
                    <img loading="eager" src={second_banner_image} alt="second banner image dreamy woman"
                         className=""
                         id="secondSliderImage" />
                        <div className="text-block text-block--second">
                            <h4 className="text-block__heading">
                                Feature
                            </h4>
                            <h2 className="text-block__heading text-block__heading--large">Skincare super sellers</h2>
                            <p>
                                The most popular in skincare this Summer
                            </p>
                            <a className="text-block__link" href="./collection-en.html">Shop now</a>
                        </div>
                </div>
                <div className="main-slider__image main-slider__image--third" onMouseDownCapture={startMouseCapture} onMouseUpCapture={releaseMouseCapture}>
                    <img loading="eager" src={third_banner_image} alt="third banner image cool asian woman"
                         className="" id="thirdSliderImage" />
                        <div className="text-block text-block">
                            <h4 className="text-block__heading">
                                TREND WATCH
                            </h4>
                            <h2 className="text-block__heading text-block__heading--large">
                                SUMMER BRIGHTS
                            </h2>
                            <p>
                                Neon Makeup Is Trending — We've together Our Top Picks for The Start to Summer
                            </p>
                            <a className="text-block__link" href="./collection-en.html">Shop now</a>
                        </div>
                </div>
            </div>
            <div className="carousel--next" onClick={moveNext}>
                <div className="icon--root icon--next">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div className="main-slider__dots-block">
            <div className="carousel--dot dot-active"></div>
            <div className="carousel--dot"></div>
            <div className="carousel--dot"></div>
        </div>
    </section>)
};

export default MainSlider;

