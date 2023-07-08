import React, {type ReactNode} from 'react';
import {BaseText} from './text.styles';
import {type size} from '../../types/size';
import {type RuleSet} from 'styled-components/native/dist/types';

interface IText extends size {
  children: ReactNode;
  customStyle?: RuleSet;
}

const Text = ({
  children,
  size = 'fontMain',
  customStyle,
}: IText): React.ReactElement => {
  return (
    <BaseText size={size} customStyle={customStyle}>
      {children}
    </BaseText>
  );
};

export default Text;
