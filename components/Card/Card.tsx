import cls from './Card.module.scss'
import {CardProps} from './Card.props'
import clsx from 'clsx';
import Image from 'next/image';
import {HTag,} from '@/components';
import {PTag} from '@/components/ui/PTag/PTag';
import {Like} from '@/components/ui/Like/Like';
import Link from 'next/link';
import ArrowIcon from '../../public/arrowLongIcon.svg'

export const Card = (props: CardProps) => {
  const {
    tag = 'tag',
    like = '4',
    month = '1',
    title = 'title',
    text = 'some text',
    minutes = '3',
    img = '',
    className
  } = props

  const cardCN = clsx(cls.card, className)

  return (
    <div className={cardCN}>
      <div className={cls.imageWrapper}>
        <Image src={img} alt={'card image'} width={330} height={200} className={cls.cardImage}/>
      </div>
      <div className={cls.topWrapper}>
        <span className={cls.tag}>{tag}</span> · {month} месяц назад <Like like={like}/>
      </div>
      <HTag tag={'h3'} className={cls.title}>{title}</HTag>
      <PTag size={'S'} className={cls.text}>{text}</PTag>
      <div className={cls.bottomWrapper}>
        {minutes} минуты <Link href={''} className={cls.link}>Читать <ArrowIcon/></Link>
      </div>
    </div>
  )
}



