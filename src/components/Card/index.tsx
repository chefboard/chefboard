import * as Styled from './styled';

interface CardProps {
  title: string;
  link: string;
}

const Card: React.FC<CardProps> = ({children, title, link}) => {
  return (
    <Styled.Card to={link}>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Card>
  )
}

export default Card;