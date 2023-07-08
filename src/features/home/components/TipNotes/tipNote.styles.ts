import {styled, css} from 'styled-components/native';

export const TipNotesContainer = styled.View`
  background-color: ${({theme}) => theme.colors.lightGray};
  margin: 20px 20px 0 20px;
  padding: 10px;
`;

export const tipNotesText = css`
  font-size: ${({theme}) => theme.space.fontXSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  text-align: justify;
`;

export const tipNotesTextInformation = css`
  font-size: ${({theme}) => theme.space.fontXSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  text-align: justify;
  margin-top: 10px;
`;
