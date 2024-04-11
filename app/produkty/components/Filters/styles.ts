import styled from '@emotion/styled';

export const FiltersContainerElement = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  
  > h2 {
    display: flex;
    font-size: 22px;
    gap: 8px;
    margin: 0 0 16px;
    
    > svg {
      height: 22px;
    }
    
  }
  
`;

export const FilterFormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  > input {

    @media (max-width: 900px) {
      width: 100px;
    }
  }
`;

export const FilterTitleElement = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 12px;
  padding: 0;
`;

export const ButtonContainerElement = styled.div`
  margin-top: 16px;
`;
