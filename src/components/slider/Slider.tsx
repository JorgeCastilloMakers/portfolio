import React from 'react';
import './slider.scss';
import { logos } from './logos';


export const Slider = () => {
    return (
       <div className='content'>
       <div className="container rounded">
            <div className="slider">
                <div className="logos">
                    {logos.slice(0, 9).map((item) => (
                    <div className='icono' key={item.name}>
                        <img className='icono_img' src={item.img} alt={item.name} />
                        <h4 className='icono_name'>{item.name}</h4>                          
                    </div>
                    ))}
                </div>
                <div className="logos">
                    {logos.slice(9, 18).map((item) => (
                    <div className='icono' key={item.name}>
                        <img className='icono_img' src={item.img} alt={item.name} />
                        <h4 className='icono_name'>{item.name}</h4>                          
                    </div>
                    ))}
                </div>
            </div>
        </div>            
       </div>

    )
};
