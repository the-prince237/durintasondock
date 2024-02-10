'use client';

import { Acomplishments, BgAnimation, Hero, Projects, Technologies, Timeline } from '../containers';
import { Section } from '@/components/GlobalComponents';

export default function Home() {
  return (
    <>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </>
  );
}
