import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
    height: 100vh;
`;

export const Card = styled.div`
    width:800px;
    height:auto;
    background:#fff;
`;

export const CardHeader = styled.div`
   display:flex;
   justify-content: space-between;
   padding: 0 18px 18px;
`;

export const CardContent = styled.div`
    display:flex;
    justify-content:center;   
    height:auto; 
`;


export const ContentPill = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:500px;
    justify-content:flex-start;
    margin-top:5px;
    height:auto;
`;

export const Pill = styled.div`
    border-radius: 10px;
    padding:15px;
    height:15px;
    background-color: #ffcaaa;  
    margin-bottom:5px;  
    display:flex;
    align-items:center;
`;