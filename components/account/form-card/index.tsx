import * as Styled from './styles';

type Props = {
  title: string;
  swapLabel: string;
  onSwapClick: () => void;
};

const FormCard: React.FC<Props> = ({
  onSwapClick,
  swapLabel,
  title,
  children,
}) => {
  return (
    <div>
      <Styled.Title>{title}</Styled.Title>
      {children}
      <Styled.SwapLabel onClick={onSwapClick}>
        {swapLabel}
      </Styled.SwapLabel>
    </div>
  );
};

export default FormCard;
