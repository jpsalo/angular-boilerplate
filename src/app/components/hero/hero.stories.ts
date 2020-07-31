import { HeroComponent } from './hero.component';

export default {
  title: 'Hero',
};

export const Default = () => ({
  component: HeroComponent,
  props: {
    hero: {description: '#qwerty'}
  }
});
