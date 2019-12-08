import styled from 'styled-components';

export const Title = styled.a`
    margin: 0;
    font-size: 23px;
    text-decoration: none;
    color: ${props => props.theme.Secondary};
    cursor: pointer;
    :hover {
        color: ${props => props.theme.Secondary};
    }
`;
export const Date = styled.p`
    color: grey;
    margin: 0;
`;
export const Desc = styled.p`
    margin: 20px 0 0 0;
    font-size: 15px;
`;
export const TextWrapper = styled.div`
    width: 100%;
    padding: 10px;
    position: relative;
`;
export const Search = styled.input`
    padding: 7px 10px;
    border-radius: 10px;
    appearance: none;
    -webkit-appearance: none;
    border-color: ${props => props.theme.Primary};
`;