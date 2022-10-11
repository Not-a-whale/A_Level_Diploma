import './MainSale.scss'

const MainSale = () => {
    return (<section className="main-sale parallax-banner">
        <div className="parallax main-sale__parallax lazy-background lazy-background-2 visible">
            <div className="text-block text-block--first">
                <h4 className="text-block__heading">
                    Beauty sale
                </h4>
                <h2 className="text-block__heading text-block__heading--large">up to 30% off selected brands</h2>
                <p>Save even more on our seasonal sale with code SEASON20 + FREE SHIPPING on all orders of $50</p>
                <a className="text-block__link mx-auto" href="./collection-en.html">SHOP sale </a>
            </div>
        </div>
    </section>)
}

export default MainSale;
