import React, { ReactNode } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

type Props = {
    children?: ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick: () =>void | React.MouseEventHandler<HTMLButtonElement>,
    buttonStyle: string,
    buttonSize: string | null
}

export const Button:React.FC<Props> = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = buttonStyle
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = buttonSize ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

