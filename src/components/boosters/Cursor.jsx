import { useState, useEffect, useContext } from 'react';
import { CookieContext } from '../../context/CookieContext';

import Filter from './Filter';

import sprite from '../../img/upgrades/cursors/01.png';
import './boosters.css';

import { calculateNextCost } from '../../helpers';

const Cursor = () => {

    const { cookies, updateCookies, updateCookiesPerClick } = useContext(CookieContext);

    const [booster, updateBooster] = useState({
        name: 'Cursor',
        owned: 0,

        costBase: 10,
        nextCost: 10,
        
        productionBase: 1,
        production: 1,
        nextProduction: 2,
        
        rateGrowth: 5
    });

    const [canUpgrade, setCanUpgrade] = useState(false);

    useEffect(() => {
        console.log(cookies);
        console.log(booster.nextCost);

        if (cookies < booster.nextCost) return false;

        setCanUpgrade(true);
    }, [cookies])

    const onClickBuyBooster = () => {

        setCanUpgrade(false);

        updateCookies(cookies => cookies - booster.nextCost);

        // Se obtienen los nuevos valores del booster
        const updatedCursor = calculateNextCost(booster);

        updateBooster({...updatedCursor});

        updateCookiesPerClick(booster.production);
   }

    return ( 
        <button id="cursor" className="responsive-button"
            onClick={ () => onClickBuyBooster() }
            disabled={!canUpgrade}
        >
            <Filter
                key={booster.name}
                canUpgrade={canUpgrade}
                booster={booster}
                sprite={sprite}
                alt={booster.name}
            />
        </button>
     );
}

export default Cursor;