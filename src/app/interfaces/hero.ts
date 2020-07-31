import { Bio } from '~interfaces/bio';

export type Hero = Pick<Bio, 'description' | 'avatar'>;
