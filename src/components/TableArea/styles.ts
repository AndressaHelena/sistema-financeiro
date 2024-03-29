import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 25px;
    box-shadow: 0 0 15px #ccc;
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
    width: ${props => props.width? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
    color: #053272;
`;

