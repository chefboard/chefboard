// import {Link} from 'react-router-dom'

import {ContentBar, FilledBar, InventoryItemContainer} from  './styled';

interface InventoryItemProps {
  item: any
}

const InventoryItem: React.FC<InventoryItemProps> = ({item}) => {
  return (
    <InventoryItemContainer>
      <span>{item.name}</span>
      <ContentBar>
        <FilledBar quantity={item.quantity}/>
      </ContentBar>
    </InventoryItemContainer>
  )
}

export default InventoryItem;