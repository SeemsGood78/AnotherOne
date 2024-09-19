import FilterAccordion from "../FilterAccordion/FilterAccordion"
import style from './style.module.scss'
import { useStore } from "../store"

const FilterModal = () => {

    const {tooglefilter, filterOpen} = useStore();

    return (
        <div
            className={`${style.filtermodal} ${filterOpen ? style.active : style.inactive}`}
        >
            <div>
                <div className={style.filtermodal_header}>
                    <div className={style.filtermodal_header_padd}>
                        <div className={style.filtermodal_header_padd_label}>Filter</div>
                        <img
                            onClick={tooglefilter}
                            src="https://www.svgrepo.com/show/520676/cross.svg"
                            alt="Cart Icon"
                            width="28"
                            height="28"
                        ></img>
                    </div>
                </div>
                <FilterAccordion />
            </div>
        </div>
    )
}

export default FilterModal