import React, { useCallback, useEffect } from 'react'
import './styles.scss'
import { List, Spin, message } from 'antd'
import { useSelector } from 'react-redux'
import { useActions } from 'react-redux-actions-hook'
import VirtualList from 'rc-virtual-list'
import { IBeerModel, IStateTypes } from '../models/models'
import * as actions from '../actions'
import { BeerItem } from '../components/BeerItem'

const ContainerHeight = 800

export default function Beers() {
  const beersActions = useActions(actions)
  const beersSelector = (state: IStateTypes) => state?.Beers

  const pageSize = 20
  const { beers, loading, error, currentPage } = useSelector(beersSelector)

  useEffect(() => {
    error && message.error(error)
  }, [error])

  useEffect(() => {
    if ((beers == undefined || beers.length == 0) && !loading)
      beersActions.getBeersAction({ page: currentPage, per_page: pageSize })
  }, [])

  const onScroll = useCallback(
    (e: React.UIEvent<HTMLElement, UIEvent>) => {
      if (
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
          ContainerHeight &&
        !loading &&
        beers.length > 0
      ) {
        beersActions.getBeersAction({ page: currentPage, per_page: pageSize })
      }
    },
    [currentPage, pageSize, loading]
  )

  return (
    <div>
      {beers?.length > 0 && (
        <List className='beers_list'>
          <VirtualList
            data={beers}
            height={ContainerHeight}
            itemKey='id'
            onScroll={onScroll}
          >
            {(item: IBeerModel) => (
              <List.Item key={item?.id}>
                <BeerItem item={item} />
              </List.Item>
            )}
          </VirtualList>
        </List>
      )}
      {loading && <Spin tip='Идет загрузка' />}
    </div>
  )
}
