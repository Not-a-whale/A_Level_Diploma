export const Pagination = () => {
    return (<div className="pagination mt-4" id="collectionPagination">
        <div className="disclosure" id="paginatorDropdown">
            <div className="disclosure__block">
                <span className="disclosure__option--current pagination__option--current">10</span>
                <img loading="lazy" src="./assets/img/arrow_down.svg" alt="arrow down" />
            </div>
            <ul className="disclosure__list">
                <li className="disclosure__list-item pagination__option">
                            <span className="disclosure__option">
                                10
                            </span>
                </li>
                <li className="disclosure__list-item pagination__option">
                            <span className="disclosure__option">
                                25
                            </span>
                </li>
                <li className="disclosure__list-item pagination__option">
                            <span className="disclosure__option">
                                50
                            </span>
                </li>
            </ul>
            <input type="text" className="disclosure__input " />
        </div>
        <div className="pages">
            <ul className="pages__list" id="pagesList">
                <li className="prev__list-item"><a>
                    <p></p>
                </a></li>
                <li className="next__list-item"><a></a></li>
            </ul>
        </div>
    </div>)
}
