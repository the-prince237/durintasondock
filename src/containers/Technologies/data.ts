import { IconType } from 'react-icons';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

export const items: { Icon: IconType; title: string; description: string }[] = [
  {
    Icon: DiReact,
    title: 'Front-End',
    description: 'React.js',
  },
  {
    Icon: DiFirebase,
    title: 'Back-End',
    description: 'Node and Databases',
  },
  {
    Icon: DiZend,
    title: 'UI/UX',
    description: 'tools like Figma',
  },
];
