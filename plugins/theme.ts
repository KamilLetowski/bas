export interface Theme {
  palette: {
    dark: string;
    lightDark: string;
    white: string;
    lightWhite: string;
    error: string;
    success: string;
  };
}

export const theme: Theme = {
  palette: {
    dark: '#333',
    lightDark: '#444',
    lightWhite: '#ddd',
    white: '#fff',
    error: '#ff1a47',
    success: '#4BB543',
  },
};

export type ColorVariant = 'dark' | 'white';
