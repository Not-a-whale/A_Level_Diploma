import './ProductsSlider.scss'
import arrow_left from '../assets/img/icon/arrow-left.svg'
import arrow_right from '../assets/img/icon/arrow-left.svg'
import {IProduct} from "../interfaces/IProduct";
import Product from "./Product";


const ProductsSlider = (props: {props: IProduct[]}) => {
    const shuffleArr: IProduct[][] = [];
    const shuffleArrMobile:  IProduct[][] = [];
    for(let j = 0; j < props.props.length; j+=4) {
        shuffleArr.push(props.props.slice(j, j + 4))
    }
    for(let k = 0; k < props.props.length; k++) {
        shuffleArrMobile.push(props.props.slice(k, k + 2))
    }

    // get our elements
    document.querySelectorAll<HTMLElement>(".carousel__slider").forEach((slider) => {
        const slides = Array.from(
            slider.querySelectorAll(".carousel__container")
        );
        const rightArrow = document.querySelector(".just-dropped__arrow-right");
        const leftArrow = document.querySelector(".just-dropped__arrow-left");

        // set up our state

        let isDragging = false,
            startPos = 0,
            currentTranslate = 0,
            prevTranslate = 0,
            animationID: any,
            currentIndex = 0;

        // add our event listeners
        slides.forEach((slide, index) => {
            const slideImage = slide.querySelector("img");

            // disable default image drag
            if (slideImage) {
                return window.innerWidth > 767
                    ? slideImage.addEventListener("dragstart", (e) =>
                        e.preventDefault()
                    )
                    : "";
            }

            // touch events
            slide.addEventListener("touchstart", touchStart(index));
            slide.addEventListener("touchend", touchEnd);
            slide.addEventListener("touchmove", touchMove);
            // mouse events
            slide.addEventListener("mousedown", touchStart(index));
            slide.addEventListener("mouseup", touchEnd);
            slide.addEventListener("mousemove", touchMove);
            slide.addEventListener("mouseleave", touchEnd);
        });

        // make responsive to viewport changes
        window.addEventListener("resize", setPositionByIndex);

        function getPositionX(event: any) {
            return event.type.includes("mouse")
                ? event.pageX
                : event.touches[0].clientX;
        }

        // use a HOF so we have index in a closure
        function touchStart(index: any) {
            return function (event: any) {
                currentIndex = index;
                startPos = getPositionX(event);
                isDragging = true;
                animationID = requestAnimationFrame(animation);
                slider.classList.add("grabbing");
            };
        }

        function touchMove(event: any) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
            }
        }

        function touchEnd() {
            cancelAnimationFrame((animationID as any));
            isDragging = false;
            const movedBy = currentTranslate - prevTranslate;

            // if moved enough negative then snap to next slide if there is one
            if (movedBy < -100) {
                currentIndex += 1;
                slider.style.transform = `translateX(0)`;
            }
            // if moved enough positive then snap to previous slide if there is one
            if (movedBy > 100) currentIndex -= 1;

            setPositionByIndex();

            slider.classList.remove("grabbing");
        }

        function animation() {
            setSliderPosition();
            if (isDragging) requestAnimationFrame(animation);
        }

        function setPositionByIndex() {
            const slides = Array.from(
                slider.querySelectorAll(".carousel__container")
            );
            if (currentIndex < 0) currentIndex = slides.length - 1;
            if (currentIndex === slides.length) currentIndex = 0;
            currentTranslate = currentIndex * -window.innerWidth;
            prevTranslate = currentTranslate;
            setSliderPosition();
        }

        function setSliderPosition() {
            slider.style.transform = `translateX(${currentTranslate}px)`;
        }

        if (rightArrow && leftArrow) {
            rightArrow.addEventListener("click", () => {
                currentIndex++;
                setPositionByIndex();
            });

            if (rightArrow && leftArrow) {
                leftArrow.addEventListener("click", () => {
                    currentIndex--;
                    setPositionByIndex();
                });
            }
        }
    });
    return (<section className="just-dropped carousel">
        <h2 className="just-dropped__header carousel__header">Just dropped</h2>
        <div className="just-dropped__slider carousel__slider carousel__slider--desktop">
            {shuffleArr.map((item, index) => {
                return (<div className="carousel__container">
                    {shuffleArr[index].map((product, prodIndex) => {
                        return (
                            <Product props={product} />
                        )
                    })}
                </div>)
            })
            }
        </div>
        <div className="just-dropped__slider carousel__slider carousel__slider--mobile">
            {shuffleArrMobile.map((item, index) => {
                return (<div className="carousel__container">
                    {shuffleArrMobile[index].map((product, prodIndex) => {
                        return (
                            <Product props={product} />
                        )
                    })}
                </div>)
            })
            }
        </div>
        <div className="just-dropped__row-low carousel__row-low">
            <a href="./collection-en.html" className="just-dropped__link carousel__link">View Collection</a>
            <div className="just-dropped__arrows">
                <div className="just-dropped__arrow just-dropped__arrow-left">
                    <img loading="lazy" src={arrow_left} alt="arrow left" className="" />
                </div>
                <div className="just-dropped__arrow just-dropped__arrow-right">
                    <img loading="lazy" src={arrow_right} alt="arrow right" className="" />
                </div>
            </div>
        </div>
    </section>)
}

export default ProductsSlider;
