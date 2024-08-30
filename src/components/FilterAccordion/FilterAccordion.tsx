import React from 'react';
import style from './style.module.scss'
import { useState } from 'react';
import { useStore } from '../store';

const FilterAccordion = () => {

    const {applyFilters} = useStore();
    const [openIds, setOpenIds] = useState<number[]>([]);
    const filter: Record<string, any> = {};

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
    };

    return (
        <div className={style.filterAccordion}>
            <div>
                {Object.entries(rule).map(([par, value], index) => {
                    return (
                        <React.Fragment key={index}>
                            <hr />
                            <div
                                className={style.filterAccordion_block}
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
                                <ul className={style.filterAccordion_content} >
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
                <button className={style.filterAccordion_button}
                    onClick={() => applyFilters(filter)}
                >Apply</button>
            </div>
        </div>
    )
}

export default FilterAccordion