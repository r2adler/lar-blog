import cls from './Card.module.scss'
import {CardProps} from './Card.props'
import clsx from 'clsx';
import Image from 'next/image';
import cardImg from '../../public/cardImg.png'
import {Button, HTag, Tag} from '@/components';
import {PTag} from '@/components/ui/PTag/PTag';
import {Like} from '@/components/ui/Like/Like';

export const Card = (props: CardProps) => {
  const {
    tag = 'tag',
    like = '4',
    month='1',
    title='title',
    text='some text',
    minutes='3',
    className
  } = props

  const cardCN = clsx(cls.card, className)

  return (
    <div className={cardCN}>
      <Image src={cardImg} alt={'card image'} width={330} height={200} className={cls.cardImage}/>
      <div className={cls.topWrapper}>
        <span className={cls.tag}>{tag}</span> · {month} месяц назад <Like like={like}/>
      </div>
      <HTag tag={'h3'} className={cls.title}>{title}</HTag>
      <PTag size={'S'} className={cls.text}>{text}</PTag>
      <div>
        {minutes} min <Button>Read</Button>
      </div>
    </div>
  )
}



