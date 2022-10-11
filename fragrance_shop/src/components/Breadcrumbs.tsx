import './Breadcrumbs.scss'

export const Breadcrumbs = () => {
    return (<section className="breadcrumbs">
        <h6 className="d-none"></h6>
        <div className="contianer">
            <div className="row">
                <div className="col-12 breadcrumbs__wrapper">
                    <div className="breadcrums__breadcrumb">
                        <a href="/">Home <span className="slash">/</span></a>
                    </div>
                    <div className="breadcrums__breadcrumb">
                        <a href="./collection">Collection</a>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
