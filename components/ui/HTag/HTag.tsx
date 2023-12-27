import cls from './HTag.module.scss'
import {HTagProps} from './HTag.props'
import clsx from 'clsx';

export const HTag = (props: HTagProps) => {
  const {
    tag,
    children,
    className,
    ...rest
  } = props

  switch (tag) {
    case 'h1':
      return <h1 className={clsx(cls.h1, className)} {...rest}>{children}</h1>
    case 'h2':
      return <h2 className={clsx(cls.h2, className)} {...rest}>{children}</h2>
    case 'h3':
      return <h3 className={clsx(cls.h3, className)} {...rest}>{children}</h3>
    default:
      return <></>
  }
}

