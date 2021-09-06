import React, { FunctionComponent } from 'react';
import * as S from './Intro.styled';

export const Intro: FunctionComponent = () => (
  <S.Container>
    <S.StyledLogo />
    <S.Paragraph>Delete this file to start your project.</S.Paragraph>
  </S.Container>
);
