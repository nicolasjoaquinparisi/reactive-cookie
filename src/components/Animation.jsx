import {useState, useEffect, Fragment} from 'react';

import styled from '@emotion/styled';

import cookie from '../img/cookies/cookie.png';

const CookieAnimation = styled.div`
    position: absolute;
    pointer-events: none;
    width: 25px;
    height: 25px;
    display: flex;
    font-family: pixelmix;
    color: white;
    font-weight: bold;
    animation: GoUp 2s forwards linear;

    @keyframes GoUp {
        0% {
            opacity: 1;
        }
        100% {
            top: 120px;
            opacity: 0;
        }
    }
`;

const Sign = styled.p`
    margin: 0;
    margin-left: 1;

    &:before {
        content: '+';
    }
`;

const CookieImage = styled.img`
    width: 25px;
    animation: Cookie-Animation 3s forwards linear;

    @keyframes Cookie-Animation {
        100% {
            transform: rotateZ(450deg);
        }
    }
`;

const Animation = ({x, y, value}) => {

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 2000);
    }, []);

    const [visible, setVisible] = useState(true);

    return (
        <Fragment>
        {
            visible ?
            <CookieAnimation style={{left: x, top: y}}>
                <Sign>{value}</Sign>
                <CookieImage src={cookie}/>
            </CookieAnimation>
            :
            null
        }
        </Fragment>
     );
}
 
export default Animation;