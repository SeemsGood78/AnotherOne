import style from './style.module.scss'
import { useStore } from '../store';


const FilterBar = () => {

    const { tooglefilter, sortBy } = useStore();

    const handleOptionChange = (e: any) => {
        const { name, ask } = JSON.parse(e.target.value)
        sortBy(name, !!ask)
    };

    return (
        <div className={style.padd}>
            <div className={style.filterbar}>
                <div onClick={tooglefilter}><button className={style.filterbar_button}>
                    <img
                        src="https://www.svgrepo.com/show/490975/adjustment.svg"
                        alt="Login Icon"
                        width="24"
                        height="24"
                    ></img>
                    Filter
                </button></div>
                <div className={style.filterbar_select}>
                    <select onChange={handleOptionChange}>
                        <option value='{"name":"Order"}'>Sort</option>
                        <option value='{"name":"Name", "ask":true}'>Alphabetically, A-Z</option>
                        <option value='{"name":"Name", "ask":false}'>Alphabetically, Z-A</option>
                        <option value='{"name":"Price", "ask":true}'>From high to low</option>
                        <option value='{"name":"Price", "ask":false}'>From low to high</option>
                    </select>
                </div>
            </div>
        </div>
    )

}

export default FilterBar