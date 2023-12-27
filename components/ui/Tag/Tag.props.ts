import {BaseHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface TagProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'S' | 'M'
  children: ReactNode
  color?: 'ghost' | 'gray' | 'green' | 'red' | 'primary'
  href?: string
}
