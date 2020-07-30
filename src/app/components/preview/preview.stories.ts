import { PreviewComponent } from './preview.component';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Preview',
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ]
};

export const Case = () => ({
  component: PreviewComponent,
  props: {
    name: 'Preview',
    description: 'Viewed it!',
    slug: '',
  },
});
