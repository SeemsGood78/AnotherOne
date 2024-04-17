import style from './style.module.scss'

function Pagination({ beersPerPage, totalbeers, paginate}: any) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalbeers / beersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={style.PagBar}>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a href="#" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination