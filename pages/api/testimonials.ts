import { NextApiHandler } from 'next';

const testimonials: NextApiHandler = (req, res) => {
  res.status(200).json([
    {
      title: 'Doesn’t feel like an contractor',
      text: "Lasha is an exceptional developer. He is a team player and is great with communicating throughout the whole project. Lasha really went above and beyond what was required from him. I really enjoyed working with Lasha and near the end of the project it didn't feel like he was a contractor anymore.",
      author: 'Duong Nguyen',
      position: 'Co-founder & CTO of Finerpoint',
      picture: 'Finerpoint',
    },
    {
      title: 'Nothing but great',
      text: 'Working with Lasha on this project was nothing but great. He consistently delivered quality code, and asked me questions along the of our website about how small things on the website should look and function. I have already scheduled another project with the developer!',
      author: 'Jack Ellis',
      position: 'Founder of CrossPlay',
      picture: 'CrossPlay',
      pictureWidth: '46px',
    },
    {
      title: 'Fun person to work with',
      text: "Lasha is very fast, writes very well-organized code, reads other people's code and works with it as needed, solves difficult UI challenges, and has a great eye for UI and UX. Lasha communicated very well throughout our work - he told us exactly what he would be able to do and how long it would take, consulted when it was necessary, and independently made suggestions and experiments when it was called for.",
      author: 'Oran Epelbaum',
      position: 'Co-founder & CTO of TrueSpots',
    },
    {
      title: 'Better than anticipated',
      text: 'Lasha was a pleasure to work with on this project. He quickly understood the task at hand and offered up options for consideration that made the outcome better than anticipated. Lasha adapted to several changes made during the life of the project without hesitation.',
      author: 'Jose Maria Lago',
      position: 'Co-founder & CEO of DAIVEC',
      picture: 'Daivec',
    },
  ]);
};

export default testimonials;
