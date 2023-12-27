import {BaseHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface PTagProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  children: ReactNode
  size?: 'M' | 'L' | 'S'
}
