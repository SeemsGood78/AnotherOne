import style from './style.module.scss'
import { useStore } from '../store';

const SearchModal = ({isSearchOpen,setIsSearchOpen}:{isSearchOpen:boolean,setIsSearchOpen:Dispatch<SetStateAction<boolean>>}) => {

    const {setSearchUpdate, filterSearch} = useStore();

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            () => setIsSearchOpen(!isSearchOpen);
        }
    };

    return (
        <div
            className={`${style.modal} ${isSearchOpen ? style.active : style.inactive}`}
        >
            <div className={style.modal_wrapper}>
                <div className={style.modal_block}>
                    <div className="container">
                        <div
                            className={`${style.headlimit} ${style.modal_block_content}`}
                        >
                            <form action="" onClick={e => e.preventDefault} className={style.searchForm}>
                                <div className={style.searchForm_button}>
                                    <a href="#">
                                        <img
                                            src="https://www.svgrepo.com/show/522443/search.svg"
                                            alt="Search Icon"
                                            width="24"
                                            height="24"
                                        ></img>
                                    </a>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search our store"
                                    id='search'
                                    onChange={(e) => {
                                        setSearchUpdate(e.target.value),
                                            filterSearch()
                                    }}
                                    onKeyDown={handleKeyDown}
                                    autoFocus
                                />
                            </form>
                            <a
                                href="#"
                                className={style.modal_close}
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            >
                                <img
                                    src="https://www.svgrepo.com/show/520676/cross.svg"
                                    alt="Cart Icon"
                                    width="24"
                                    height="24"
                                ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SearchModal;