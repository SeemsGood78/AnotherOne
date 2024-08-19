import style from './style.module.scss';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { useStore } from '../store';

const beersPerPage = 12
const filter: Record<string, any> = {};

function Body() {

  const [currentPage, setCurrentPage] = useState(1)
  const [openIds, setOpenIds] = useState<number[]>([]);

  const { beers, loading, getBeers, tooglefilter, filterOpen, filteredBeers, sortBy, applyFilters } = useStore();

  useEffect(() => {
    getBeers();
  }, [getBeers]);

  const handleOptionChange = (e: any) => {
    const { name, ask } = JSON.parse(e.target.value)
    sortBy(name, !!ask)
  };

  const lastIndex = currentPage * beersPerPage
  const firstIndex = lastIndex - beersPerPage
  const currentBeers = filteredBeers.length ? filteredBeers.slice(firstIndex, lastIndex) : beers.slice(firstIndex, lastIndex)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const rule = {
    Volume: [0.3, 0.5, 0.8],
    Availability: ['In stock', 'Out of stock'],
    Price: ['<20', '20-40', '40-80', '80>'],
    Type: ["Stout", "IPA", "Brown Ale", "Porter", "Saison", "Wheat Beer", "Pale Ale", "Sour Beer", "Lager", "Amber Ale"],
  };

  const clickHandler = (index: number) => {
    setOpenIds((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };

  const checkValue = (e: any, par: string) => {
    const value = e.target.value;
    const existValue = filter?.[par] ?? [];
    const newValue = existValue.includes(value) ? existValue.filter((item: any) => item != value) : [...existValue, value];
    filter[par] = newValue;
  }

  return (
    <>
      <div className='container'>
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
        <Card beers={currentBeers} loading={loading} />
        <Pagination beersPerPage={beersPerPage} totalbeers={beers.length} paginate={paginate} />
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
            <div className={style.filtermodal_accordion}>
              <div>
                {Object.entries(rule).map(([par, value], index) => {
                  return (
                    <React.Fragment key={index}>
                      <hr />
                      <div
                        className={style.filtermodal_accordion_block}
                        onClick={() => clickHandler(index)}
                      >
                        <div>{par}</div>
                        <span id="volume-icon">
                          <img
                            src="https://www.svgrepo.com/show/417899/arrow-bottom-1.svg"
                            alt="Cart Icon"
                            width="24"
                            height="24"
                            className={`${style.flip} ${openIds.includes(index) ? style.active : style.inactive}`}
                          ></img>
                        </span>
                      </div>
                      {openIds.includes(index) && (
                        <ul className={style.filtermodal_accordion_content} >
                          {value.map((value, index) => (
                            <li key={index}>
                              <label>
                                <input type="checkbox" value={value} onClick={(e) => checkValue(e, par)} />
                                <span>{value}</span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                    </React.Fragment>
                  );
                })}
                <button className={style.filtermodal_button}
                  onClick={() => applyFilters(filter)}
                >Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Body;