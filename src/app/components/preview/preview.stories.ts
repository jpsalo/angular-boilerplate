import { PreviewComponent } from './preview.component';

export default {
  title: 'Preview',
};

export const Even = () => ({
  component: PreviewComponent,
  props: {
    type: 'even',
  },
});

export const Odd = () => ({
  component: PreviewComponent,
  props: {
    type: 'odd',
  },
});
