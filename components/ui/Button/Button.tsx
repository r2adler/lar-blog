import cls from './Button.module.scss'
import {ButtonProps} from './Button.props'
import clsx from 'clsx';
import ArrowIcon from '../../../public/arrowIcon.svg'

export const Button = (props: ButtonProps) => {
  const {
    appearance = 'primary',
    arrow = 'none',
    children,
    className,
    ...rest
  } = props

  const buttonCN = clsx(cls.button, cls[appearance], className)
  const arrowCN = clsx(cls.arrow, cls[arrow])

  return (
    <button className={buttonCN} {...rest}>
      {children}
      {arrow !== 'none' &&
        <span className={arrowCN}><ArrowIcon/></span>}
    </button>
  )
}
