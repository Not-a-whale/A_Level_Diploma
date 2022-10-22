import {useState} from "react";
import '../pages/Collection.scss';

export const Pagination = ({ numberOfPages, sendDataToParent }) => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [currentPagination, setCurrentPagination] = useState<number>(10);
    const pages = Array.from(document.getElementsByClassName('page__list-item--link'));
    const dnone = 'd-none';
    pages.forEach((page, index) => {

        if(index > 4 && !page.classList.contains(dnone)) {
            page.classList.add(dnone);

        }
    });


    const changePaginationForward = () => {
        let nextPage = currentPage + 1;
        if(nextPage <= pages.length - 1) {
            setCurrentPage(nextPage);
        }
        nextPage = currentPage + 2;
        if(pages[nextPage] && pages[nextPage]?.classList.contains(dnone)) {
            pages[nextPage]?.classList.toggle(dnone);
        }
        sendDataToParent(currentPagination, currentPage + 1);
    }

    const changePaginationBack = () => {
        let nextPage = currentPage - 1;
        if(nextPage >= 0) {
            setCurrentPage(nextPage);
        } else {
            setCurrentPage(0)
        }
        nextPage = currentPage - 2;
        if(pages[nextPage] && pages[nextPage]?.classList.contains(dnone)) {
            pages[nextPage]?.classList.toggle(dnone);
        }
        sendDataToParent(currentPagination, currentPage - 1);
    }

    const setCurrentPageIndex = (curr: number) => {
        setCurrentPage(curr);
        sendDataToParent(currentPagination, currentPage);
    }

    const handlePaginationChange = (value: number) => {
        setCurrentPagination(value);
        sendDataToParent(value, currentPage);
    }

    return (<div className="pagination mt-0 mb-4 mx-4" id="collectionPagination">
        <div className="disclosure" id="paginatorDropdown">
            <select onChange={(e) => {
                handlePaginationChange(+e.target.value)
            }}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
            </select>
        </div>
        <div className="pages">
            <ul className="pages__list" id="pagesList">
                <li className="prev__list-item"><a onClick={() => changePaginationBack()}>
                    ⇦
                </a></li>
                {new Array(!!numberOfPages && numberOfPages > 0 ? +numberOfPages : 0 ).fill('').map((page, index, elems) => {
                    return (<li className="pages__list-item"><a className={['page__list-item--link', index === currentPage ? 'current_page' : ''].join(' ')} onClick={() => setCurrentPageIndex(index)}>{index + 1}</a></li>)
                })}
                <li className="next__list-item"><a onClick={() => changePaginationForward()}>⇨</a></li>
            </ul>
        </div>
    </div>)
}
