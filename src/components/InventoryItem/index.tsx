// import {Link} from 'react-router-dom'

import {ContentBar, FilledBar} from  './styled';

interface InventoryItemProps {
  item: any
}

const InventoryItem: React.FC<InventoryItemProps> = ({item}) => {
  return (
    <div className='InventoryItem'>
      <span>{item.name}</span>
      <ContentBar>
        <FilledBar quantity={item.quantity}/>
      </ContentBar>
    </div>
  )
}

export default InventoryItem;