import styled from 'styled-components';

export const Container = styled.div`
  background:#ccc;
  background: #FC5C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding:20px;
  position:absolute;
  bottom:0;
  width:100%;
  
`;
export const Content = styled.div` 
  height:100%;
  background:red;
`;