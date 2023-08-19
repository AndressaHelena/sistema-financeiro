import styled from "styled-components";

export const Container = styled.div`
flex: 1;
text-align: center;
font-weight: 500
`;
    
export const Title = styled.div`
color: #444;
margin-bottom: 5 px;
`;

export const Info = styled.div<{color?: string}>`
    color: ${props => props.color ?? '#000'}


`