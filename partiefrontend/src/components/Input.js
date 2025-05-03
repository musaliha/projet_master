// src/components/Input.js
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const StyledInput = styled.input`
  padding: 0.6rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Input = ({ label, type = 'text', name, value, onChange, placeholder }) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default Input;
