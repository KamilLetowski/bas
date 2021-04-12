import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import TextField from '@/components/form-controls/text-field';
import DatePicker from '@/components/form-controls/date-picker';
import Yup from '@/plugins/yup';
import { fieldIsRequired } from 'constants/formValidationMessages';
import gameService, { Game } from '@/services/gameService';
import SpinnerControl from '@/components/shared/spinner-control';
import useLoading from '@/hooks/useLoading';
import { useGameContext } from '@/providers/game';
import toastService from '@/services/toastService';

import * as Styled from './styles';

const validationSchema = Yup.object().shape({
  title: Yup.string().required(fieldIsRequired('tytuł')),
  description: Yup.string().required(fieldIsRequired('opis')),
  publishDate: Yup.date().nullable().required(fieldIsRequired('data wydania')),
  url: Yup.string().required(fieldIsRequired('link do zdjęcia')),
})

const GameForm = () => {
  const { isLoading, asyncLoadingChange } = useLoading();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { refetchGames } = useGameContext();

  const submitForm = async (game: Game) => {
    try {
      // await asyncLoadingChange(() => gameService.create(game));
      refetchGames();
      toastService.success('Gra została dodana pomyślnie');
    } catch (error) {

    }
  }

  return (
    <SpinnerControl isLoading={isLoading}>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <TextField control={control} name="title" label="Tytuł" size="small" />
        <TextField
          control={control}
          name="description"
          label="Opis"
          size="small"
          multiline
          rows={3}
        />
        <DatePicker
          control={control}
          label="Data wydania"
          name="publishDate"
          disableFuture
        />
        <TextField
          control={control}
          name="url"
          label="Link do zdjęcia"
          size="small"
        />
        <Styled.SubmitButton type="submit" variant="outlined">
          dodaj grę
      </Styled.SubmitButton>
      </Styled.Form>
    </SpinnerControl>
  );
};

export default GameForm;
