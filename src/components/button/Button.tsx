import React, { FC } from 'react';
import './button.scss';

interface Props{
    text: string;
    fn?: (() => void);
}

export const Button: FC<Props> = ({ text, fn }) => {
    
  return (
      <button onClick={fn} className='btn'>{ text }</button>
  )
}
