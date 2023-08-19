import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow:  0 0 15px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 180px;
    height: 15px;
    margin-right:15px;
    padding: 5px;
    box-shadow:  0 0 2px #000;
    border: 0.8px;
    border-radius: 6px;
    outline: none;
    

`
export const CustonButton = styled.button`
    
    width: 110px;
    height: 30px;
    font-weight: bold;
    cursor: pointer;
    background: #45B1C1;
    color: #1E1F50;
    border:none;
    border-radius: 10px;
    outline: none;
    transition: 1s ease-in-out;
    :hover {
        transition: 1s ease-in-out;
        background: #1E1F50;
        color: #fff;
        
    }
`

