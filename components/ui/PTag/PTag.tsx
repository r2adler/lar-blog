import cls from './PTag.module.scss'
import {PTagProps} from './PTag.props'
import clsx from 'clsx';

export const PTag = (props: PTagProps) => {
  const {
    size = 'M',
    children,
    className,
    ...rest
  } = props

  const paragraphCN = clsx(cls.paragraph, cls[size], className)
  return (
    <p className={paragraphCN} {...rest}>
      {children}
    </p>
  )
}



