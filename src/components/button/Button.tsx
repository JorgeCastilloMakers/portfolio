import React, { FC } from 'react';
import './button.scss';
import fileUrl from '../../assets/JorgeCastilloCV.pdf'
import confetti from 'canvas-confetti';

interface Props{
    text: string;
}

export const Button: FC<Props> = ({ text }) => {

  const handleClick = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'JorgeCastilloCV.pdf';
    link.click();
    confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});
  }
    
  return (
      <button onClick={handleClick} className='btn'>{ text }</button>
  )
}
