import { HeaderComponent } from './header.component';

export default {
  title: 'Header',
};

export const Text = () => ({
  component: HeaderComponent,
  props: {
    title: 'Hello Adder',
  },
});
