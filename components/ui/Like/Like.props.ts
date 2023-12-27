import {BaseHTMLAttributes, DetailedHTMLProps} from 'react';

export interface LikeProps extends DetailedHTMLProps<BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  like: string
}
