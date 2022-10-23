import { useState, useEffect, useContext } from 'react';
import { CookieContext } from '../../context/CookieContext';

import Filter from './Filter';

import { calculateNextCost } from '../../helpers';

import sprite from '../../img/upgrades/grandmas/grandma.png';

const Grandma = () => {

    const { cookies, updateCookies } = useContext(CookieContext);

    const [booster, updateBooster] = useState({
        name: 'Grandma',
        owned: 0,
        costBase: 1,
        nextCost: 1,
        productionBase: 1,
        production: 0,
        nextProduction: 1,
        secondsToWait: 1,
        rateGrowth: 5
    });

    const [canUpgrade, setCanUpgrade] = useState(false);

    useEffect(() => {
        console.log(cookies);
        console.log(booster.nextCost);

        if (cookies < booster.nextCost) return false;

        setCanUpgrade(true);
    }, [cookies])

    const[seconds, setSeconds] = useState(0);

    // useEffect para que las grandmas hagan las galletitas cada ciertos segundos
    useEffect(() => {
        const interval = setInterval(() => {
            
            if (booster.owned > 0 && seconds >= booster.secondsToWait) {
                setSeconds(0);
                updateCookies(cookies => cookies + booster.production);
            }

        }, booster.secondsToWait);
        
        return () => clearInterval(interval);
    }, [booster.production, seconds]);

    // useEffect para determinar el tiempo que falta para la siguiente recolección
    useEffect(() => {

        let interval = setInterval(() => {
            setSeconds(seconds => seconds + 0.01);
          }, 10);

        return () => clearInterval(interval);
      }, [seconds]);

    const onClickBuyBooster = () => {

        setCanUpgrade(false);

        updateCookies(cookies => cookies - booster.nextCost);

        // Se obtienen los nuevos valores del booster
        const updatedGrandma = calculateNextCost(booster);
        
        updateBooster({...updatedGrandma});

        clearInterval(0);
    }

    const getProgressBarWidth = () => {
        return seconds * 100;
    }

    return ( 
        <button id="grandma" className="responsive-button"
            onClick={ () => onClickBuyBooster() }
            disabled={!canUpgrade}
        >
            <Filter
                key={booster.name}
                canUpgrade={canUpgrade}
                booster={booster}
                sprite={sprite}
                alt={booster.name}
                hasProgressBar={true}
                getProgressBarWidth={getProgressBarWidth}
            />
        </button>
     );
}
 
export default Grandma;