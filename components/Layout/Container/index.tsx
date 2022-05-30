import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import { Header } from 'components/Layout/Header';
import { Footer } from 'components/Layout/Footer';
import {
  StyledContainer,
  Main,
  StyledHTML,
  Section,
  SectionGrid,
  SectionWrapper,
} from 'components/Layout/Container/styles';

interface ContainerProps {
  children: React.ReactNode;
  title?: string;
  date?: string;
}

export default function Container({ children, ...customMeta }: ContainerProps) {
  const router = useRouter();
  const meta = {
    title: 'Eric Chen – Next Developer',
    description: `Next developer, JavaScript enthusiast, and freelancer.`,
    type: 'website',
    ...customMeta,
  };

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const darkTheme = resolvedTheme === 'dark';
  useEffect(() => setMounted(true), []);

  const changeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Eric Chen' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image:alt' content={meta.title} />
      </Head>
      {mounted && (
        <Section>
          <SectionWrapper>
            <SectionGrid>
              <StyledContainer>
                <StyledHTML darkTheme={darkTheme} />
                <Header changeTheme={changeTheme} darkTheme={darkTheme} />
                <Main>
                  <StyledContainer>{children}</StyledContainer>
                </Main>
                <Footer darkTheme={darkTheme} />
              </StyledContainer>
            </SectionGrid>
          </SectionWrapper>
        </Section>
      )}
    </>
  );
}
