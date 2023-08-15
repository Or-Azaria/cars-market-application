import { MouseEventHandler } from 'react';
import SearchManufacturer from '../components/SearchManufacturer';
import { manufacturers } from '../constants/index';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
