import style from './style.module.scss'
import Beers from '../../assets/mock/Beers.json'
import { BeerType } from '../../types/Beer'

function Card() {

    return (
        <div className={style.grid}>
            {Beers.map((beer: BeerType) =>
                <div className={style.grid_block} key={beer.Id}>
                    <div className={style.grid_block_img}><img src="https://www.researchgate.net/profile/Cristian-Duran-Faundez/publication/29625723/figure/fig2/AS:339630110068751@1457985536736/Original-test-image-128x128-pixels.png" alt="" /></div>
                    <div className={style.grid_block_label}>
                        <div className={style.grid_block_label_row}>
                            <span>{beer.Name}</span>
                            <span>{beer.Id}</span>
                        </div>
                        <div className={style.grid_block_label_row}>
                            <span>{beer.Type}</span>
                            <span>{beer.Volume}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Card