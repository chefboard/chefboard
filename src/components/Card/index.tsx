import * as Styled from './styled';

interface CardProps {
  title: string;
  link: string;
}

const Card: React.FC<CardProps> = ({children, title, link}) => {
  return (
    <Styled.Card to={link}>
      <h2>{title}</h2>
      {children}
    </Styled.Card>
  )
}

export default Card;