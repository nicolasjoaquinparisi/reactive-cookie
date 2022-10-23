import { useContext } from 'react';
import { CookieContext } from '../context/CookieContext';

import Stats from './Stats';
import Animation from './Animation';

import useAnimations from './hooks/useAnimations';

import styled from '@emotion/styled';

import cookie from '../img/cookies/cookie.png';

const ReactiveCookie = styled.div`
    display: flex;
    justify-content: center;
`;

const CookieImage = styled.img`
    width: 20rem;

    @media (min-width: 768px) {
        margin-top: 2rem;   
    }

    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        -webkit-transform: scale(1.05);
        -o-transform: scale(1.05);
        -moz-transform: scale(1.05);
    }

    &:active {
        background-color: transparent;
        border-color: transparent;
        
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -o-transform: scale(1.2);
        -moz-transform: scale(1.2);
    }
`;

const Cookie = () => {

    const { cookies, updateCookies, cookiesPerClick } = useContext(CookieContext);

    const animationManager = useAnimations();

    const onClickCookie = e => {
        animationManager.createAnimation(e, cookiesPerClick);
        updateCookies(cookies => cookies + cookiesPerClick);
    }

    return (
        <div id="cookie">
            <Stats />

            <ReactiveCookie id="cookie">
                <CookieImage
                    src={cookie} 
                    onClick={ (e) => { onClickCookie(e) }}
                    onDragStart={ (e) => { e.preventDefault(); } }/>
                
                {animationManager.animations.map((animation) => (
                    <Animation
                        key={"animation" + animation.id}
                        x={animation.x}
                        y={animation.y}
                        value={animation.value}
                    />
                ))}

            </ReactiveCookie>
        </div>
     );
}
 
export default Cookie;