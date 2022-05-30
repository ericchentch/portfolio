import { useState } from 'react';
import { ChildrenStringProps } from 'lib/types';
import { COLOR_SPOTIFY_GREEN } from 'lib/colorPalette';

import { DividerBorder, StepLi, MoreButton } from 'components/Timeline/styles';

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi>
      <div>
        <svg viewBox='0 0 24 24'>
          <g
            fill='none'
            stroke={COLOR_SPOTIFY_GREEN}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
            <path d='M22 4L12 14.01l-3-3' />
          </g>
        </svg>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const FullTimeline = () => (
    <>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title='Started at University'>
          I started studying Software Engineer at FPT University Hanoi.
        </Step>
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <h3>Timeline</h3>
      <Year>2021</Year>
      <ul>
        <Step title='Joined VMO Holding'>
          I'm thrilled about this new role as a Front-end Developer, helping
          create enterprise web applications for several services.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title='Wrote First Project'>
          {' '}
          <a
            href='https://github.com/edunhnil/student-management'
            target='_blank'
            rel='noopener noreferrer'
          >
            My first project
          </a>
          , currently takes me 224 hours to finish . <br />
          It is a small project about managing students.
        </Step>
        <Step title='Freelancer'>
          I'm very exited to face with new challenges on Upwork. The grind has
          just begun!
        </Step>
        <Step title='Start my first job at VietIS as internship '>
          My role at{' '}
          <a
            href='https://vietis.com.vn/'
            target='_blank'
            rel='noopener noreferrer'
          >
            VietIS
          </a>{' '}
          is Back-end Developer using Java Spring Boot and ASP.Net, helping
          create rest-api support for web development.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <MoreButton type='button' onClick={() => showFullTimeline(true)}>
          See More
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </MoreButton>
      )}
    </>
  );
};
