import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTest';

const renderWithTranslation = (component: ReactNode) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);

export default renderWithTranslation;
