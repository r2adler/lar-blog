import cls from './Like.module.scss'
import {LikeProps} from './Like.props'
import LikeIcon from '@/public/likeIcon.svg';
import clsx from 'clsx';

export const Like = (props: LikeProps) => {
  const {
    like,
    className,
    ...rest
  } = props

  const likeCN = clsx(cls.like)

  return (
    <div className={likeCN} {...rest}>
      {like}
      <span className={cls.icon}><LikeIcon/></span>
    </div>
  )
}



