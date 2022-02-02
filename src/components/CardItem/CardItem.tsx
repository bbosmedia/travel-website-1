import React from 'react';
import { Link } from 'react-router-dom';

interface Props{
    src: string,
    path: string,
    label: string,
    text: string,
}

export const CardItem:React.FC<Props> = ({path, label, text, src}) => {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}