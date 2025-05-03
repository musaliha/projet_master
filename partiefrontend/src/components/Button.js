import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => props.bg || '#4CAF50'};
  color: white;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.hover || '#45a049'};
  }
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
