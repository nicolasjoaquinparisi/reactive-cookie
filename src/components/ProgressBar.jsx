import styled from '@emotion/styled';

const ProgressBarContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
`;

const Container = styled.div`
    height: 10px;
    width: 100%;
    display: flex;
    border-radius: 0.5rem;
    margin-right: 1rem;
    background-color: #408fa5;
`;

const Fill = styled.div`
    background-color: #61dafb;
    border-radius: 0.5rem;
`;

const ProgressBar = ({getProgressBarWidth}) => {
    return (
        <ProgressBarContainer>
            <Container>
                <Fill style={{width:getProgressBarWidth()}}></Fill>
            </Container>
        </ProgressBarContainer>
     );
}
 
export default ProgressBar;