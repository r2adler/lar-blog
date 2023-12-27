import {TagProps} from './Tag.props'
import cls from './Tag.module.scss'
import clsx from 'clsx';

export const Tag = (props: TagProps) => {
  const {
    size = 'S',
    color = 'ghost',
    href,
    children,
    className,
    ...rest
  } = props

  const tagCN = clsx(cls.tag, cls[size], cls[color])

  return (
    <div className={tagCN} {...rest}>
      {href
        ? <a href={href}>{children}</a>
        : <>{children}</>}
    </div>
  )
}

