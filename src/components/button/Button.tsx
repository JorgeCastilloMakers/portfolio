import React, { FC } from 'react';
import './button.scss';
import fileUrl from '../../assets/JorgeCastilloCV.pdf'

interface Props{
    text: string;
}

export const Button: FC<Props> = ({ text }) => {

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'JorgeCastilloCV.pdf';
    link.click();
  }
    
  return (
      <button onClick={handleClick} className='btn'>{ text }</button>
  )
}
