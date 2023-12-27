import cls from './PTag.module.scss'
import {PTagProps} from './PTag.props'
import clsx from 'clsx';

export const PTag = (props: PTagProps) => {
  const {
    size = 'M',
    children,
    ...rest
  } = props

  const paragraphCN = clsx(cls.paragraph, cls[size])
  return (
    <p className={paragraphCN} {...rest}>
      {children}
    </p>
  )
}



