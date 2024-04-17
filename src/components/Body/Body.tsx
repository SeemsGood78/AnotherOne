import style from './style.module.scss';
import { useState } from 'react';

function Body() {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openId, setOpenId] = useState(null)

  const rule = {
    Volume: [0.3, 0.5, 0.8],
    Availability: ['In stock', 'Out of stock'],
    "Price $": ['<20', '20-40', '40-80', '80>`'],
    Type: ['Stout', 'IPA'],
  };

  const clickHandler = (index:any) => {
    if(index === openId) setOpenId(null)
      else setOpenId(index)
  }
  const searchFilterOpen = () => {
    setIsFilterOpen(true);
  };

  const searchFilterClose = () => {
    setIsFilterOpen(false);
  };

  return (
    <>
      <div className='container'>
        <div className={style.padd}>
          <div className={style.filterbar}>
            <div onClick={searchFilterOpen}><button className={style.filterbar_button}>
              <img
                src="https://www.svgrepo.com/show/490975/adjustment.svg"
                alt="Login Icon"
                width="24"
                height="24"
              ></img>
              Filter
            </button></div>
            <div className={style.filterbar_select}>
              <select name="" id="">
                <option value="" selected >Featured</option>
                <option value="">21312</option>
                <option value="">3123</option>
                <option value="">3123</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className={`${style.filtermodal} ${isFilterOpen ? style.active : style.inactive}`}
        >
          <div>
            <div className={style.filtermodal_header}>
              <div className={style.filtermodal_header_padd}>
                <div className={style.filtermodal_header_padd_label}>Filter</div>
                <img
                  onClick={searchFilterClose}
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
                    <>
                      <hr />
                      <div
                        className={style.filtermodal_accordion_block}
                        onClick={() => clickHandler(index)}
                      >
                        <div>{par}</div>
                        <span id="volume-icon">
                          {openId === index ? (
                            <img
                              src="https://www.svgrepo.com/show/417899/arrow-bottom-1.svg"
                              alt="Cart Icon"
                              width="24"
                              height="24"
                              className={style.flip}
                            ></img>
                          ) : (
                            <img
                              src="https://www.svgrepo.com/show/417899/arrow-bottom-1.svg"
                              alt="Cart Icon"
                              width="24"
                              height="24"
                            ></img>
                          )}
                        </span>
                      </div>
                      {openId === index && (
                        <ul className={style.filtermodal_accordion_content}>
                          {value.map((value, index) => (
                            <li>
                              <label key={index}>
                                <input type="checkbox" name="volume" value={value} />
                                <span>{value}</span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Body;
