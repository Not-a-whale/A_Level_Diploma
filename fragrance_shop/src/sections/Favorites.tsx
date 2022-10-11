import './Favorites.scss'
import mask from '../assets/img/mask.png'

const Favorites = () => {
    return (<section className="favorites">
        <div className="container-fluid">
            <div className="row favorites__row">
                <div className="col-sm-12 col-md-4 ml-25 favorites__column d-flex flex-column my-md-auto">
                    <h4>FACIAL FAVS</h4>
                    <h2>
                        2 for 1 Face masks
                    </h2>
                    <p>
                        Indulge in some home TLC ! Buy one and get one free of our best-selling, super-hydrating,
                        complexion clearing face masks.
                    </p>
                    <a href="./collection-en.html" className="mt-4">Shop now</a>
                </div>
                <div className="col-sm-12 col-md-8 favorites__img">
                    <img loading="lazy" src={mask} alt="womain in face mask image" />
                </div>
            </div>
        </div>
    </section>)
}

export default Favorites;
