import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: ${({ windowsize }) => (windowsize * 0.75) / 10}rem;
  margin-top: 2rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
