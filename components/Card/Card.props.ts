import {BaseHTMLAttributes, DetailedHTMLProps} from 'react';
import {StaticImport} from 'next/dist/shared/lib/get-img-props';

export interface CardProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tag?: string
  like?: string
  month?: string
  title?: string
  text?: string
  minutes?: string
  img?: string | StaticImport
}
