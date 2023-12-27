import {BaseHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface CardProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tag?: string
  like?: string
  month?: string
  title?: string
  text?: string
  minutes?: string
}
