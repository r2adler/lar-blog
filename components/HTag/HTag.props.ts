import {BaseHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface HTagProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
  tag: 'h1' | 'h2' | 'h3'
  children: ReactNode
}
