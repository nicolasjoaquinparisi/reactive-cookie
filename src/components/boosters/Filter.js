import ProgressBar from '../ProgressBar';

import styled from '@emotion/styled';

const FilterContainer = styled.div`
    cursor: pointer;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    background-color: rgb(0 0 0 / 30%);
`;

const Filter = ({canUpgrade, booster, sprite, alt, hasProgressBar, getProgressBarWidth}) => {

    return (
        <FilterContainer className={ canUpgrade ? "fade-in" : "fade-out" }>
            <div className="container">
                <img className="image" src={sprite} alt={alt} />

                <div className="container-information">
                    <div className="information">
                        <p className="booster-name">{booster.name}</p>
                        <small className="owned">Owned: {booster.owned}</small>
                    </div>

                    {
                        hasProgressBar ?
                        (
                            booster.owned > 0 ?
                            <ProgressBar 
                                getProgressBarWidth={getProgressBarWidth}
                            />
                            :
                            null
                        )
                        :
                        null
                    }
                    
                    <small className="description">Production: {booster.production } cookies / click</small>
                    <small className="description">Next: {booster.nextProduction} cookies / click</small>
                    <small className="description">Cost: {booster.nextCost} cookies</small>
                    
                </div>
            </div>
        </FilterContainer>
    );
}
 
export default Filter;