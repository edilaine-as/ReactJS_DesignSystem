import { themes } from '@storybook/theming'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  docs: {
    theme: {
      ...themes.dark,
      fontBase: '"Roboto", sans-serif',
    }
  }
};

export default preview;
