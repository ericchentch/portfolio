import Container from 'components/Layout/Container';
import { TestimonialList } from 'components/TestimonialList';
import { Paragraph } from 'pages/blog';

export default function Testimonials() {
  return (
    <Container title='Testimonials - Eric Chen'>
      <h1>Testimonials</h1>
      <Paragraph>
        Outside of being employed full-time at VMO Holding, I sometimes
        freelance on{' '}
        <a
          href={'https://www.upwork.com/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Upwork
        </a>
        , working mostly on small to medium sized projects.
        <br />
        Here are what just a few of my clients had to say:
      </Paragraph>
      <TestimonialList />
    </Container>
  );
}
