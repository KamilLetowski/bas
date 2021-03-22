import MUITextField from '@material-ui/core/TextField'

type Props = {
  label: string
  className?: string
}

const TextField: React.FC<Props> = ({ label, className }) => {
  return (
    <MUITextField className={className} variant="outlined" label={label} />
  );
};

export default TextField;
