import styled from 'styled-components';
import { Field } from 'formik';

export const FieldForm = styled(Field)`
  margin-bottom: 1.1rem;
  padding: 0.7rem 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: center;
  border: 1px solid
    ${({ theme, iserror }) => (iserror === 'true' ? theme.colors.error : theme.colors.white)};
  border-radius: 25px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
`;
