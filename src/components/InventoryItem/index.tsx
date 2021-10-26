import {ContentBar, FilledBar, InventoryItemContainer, Percentage, Estimate, QuantityContainer} from  './styled';

export type InventoryItemType = {
  name: string;
  availableQuantity: number;
  ideal: number;
  inventoryInDays: number;
}

export interface InventoryItemProps {
  item: InventoryItemType;
}

const InventoryItem: React.FC<InventoryItemProps> = ({item}) => {
  const percentage = (item.availableQuantity / item.ideal * 100).toFixed()
  
  return (
    <InventoryItemContainer>
      <span>{item.name}</span>
      <QuantityContainer>
        <ContentBar>
          <FilledBar quantity={percentage}/>
        </ContentBar>
        <Percentage>{percentage}%</Percentage>
        <Estimate>{item.inventoryInDays} {item.inventoryInDays > 1 ? 'dias' : 'dia'}</Estimate>
      </QuantityContainer>
    </InventoryItemContainer>
  )
}

export default InventoryItem;