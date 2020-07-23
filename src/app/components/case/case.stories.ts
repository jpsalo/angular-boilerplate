import { CaseComponent } from './case.component';

export default {
  title: 'Case',
};

export const Even = () => ({
  component: CaseComponent,
  props: {
    type: 'even',
  },
});

export const Odd = () => ({
  component: CaseComponent,
  props: {
    type: 'odd',
  },
});
