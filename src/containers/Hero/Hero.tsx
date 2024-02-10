import React from 'react';

import { Section, SectionText, SectionTitle } from '../../components/GlobalComponents';
import Button from '../../components/GlobalComponents/Button';

const Hero = (props: any) => (
  <>
    <Section row nopadding>
      <div className='mx-auto w-[80%] flex-col sm:w-full md:flex'>
        <SectionTitle main>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of JavaScript Mastery is to help aspiring and established developers to take
          their development skills to the next level and build awesome apps.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </div>
    </Section>
  </>
);

export default Hero;
