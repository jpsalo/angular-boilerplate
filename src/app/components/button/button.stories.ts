import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello button',
    clicked: action('click'),
  },
});
