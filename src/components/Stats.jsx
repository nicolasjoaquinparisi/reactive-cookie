import { useContext } from 'react';
import { CookieContext } from '../context/CookieContext';

import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin-top: 1rem;

    @media (min-width: 768px) {
        flex-direction: initial;
        justify-content: center;
        margin: 0 1rem 0 0;
    }
`;

const CookiesQuantity = styled.h3`
    font-size: 3rem;
    font-weight: normal;
    margin: 0;
`;

const CookiesText = styled.p`
    font-size: 1.2rem;

    @media (min-width: 768px) {
        margin: 0;
        margin-top: 2rem;
    }
`;

const Stats = () => {

    const { cookies } = useContext(CookieContext);

    return (
        <Container id="stats">
            <CookiesQuantity>{cookies}</CookiesQuantity>
            <CookiesText>cookies</CookiesText>
        </Container>
     );
}
 
export default Stats;