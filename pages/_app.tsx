import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { pl } from "date-fns/locale";

import GameProvider from '@/providers/game';
import UserProvider from '@/providers/user';
import RequestStatusProvider from '@/providers/request-status';

import { GlobalStyle } from '../styles';
import Layout from '../components/layout';

import { theme } from '@/plugins/theme';
import '@/plugins/fontAwesome';
import '@/plugins/toastifyStyles.css';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pl}>
      <RequestStatusProvider>
        <GameProvider>
          <UserProvider>
            <Layout>
              <GlobalStyle />
              <ToastContainer />
              <Component {...pageProps} />
            </Layout>
          </UserProvider>
        </GameProvider>
      </RequestStatusProvider>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
}

export default MyApp
