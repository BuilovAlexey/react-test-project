import { List, Image } from 'antd'
import { IBeerModel } from '../../models/models'
import './styles.scss'

interface Props {
  item: IBeerModel
}

/// Элемент списка
export const BeerItem = ({ item }: Props) => {
  return (
    <List.Item.Meta
      className='beers_item'
      avatar={<Image className='beers_img' src={item.image_url} />}
      title={item?.id + '. ' + item?.name}
      description={item?.description}
    />
  )
}
