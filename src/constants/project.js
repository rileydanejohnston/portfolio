import aroundImg from '../images/around-main-page.png';
import newsImg from '../images/news-main-cropped.png';
import portfolioImg from '../images/portfolio.png';
import dotcotImg from '../images/dotcot.png';
import portlandImg from '../images/portland.png';

export const projectData = [
  {
    title: 'News Explorer',
    summary: 'A news app where users can search for news, create an account, and save articles.',
    features: [
      'React, JavaScript, News API, Styled-Components',
      'Express.js, Node.js, MongoDB',
      'Deployed with Google Cloud'
    ],
    liveLink: 'https://www.my-news-explorer.students.nomoreparties.sbs',
    demoLink: 'https://www.loom.com/share/15c90be6c7cc4f018fda792be4a1f7b0',
    repoLink: 'https://github.com/rileydanejohnston/news-explorer-frontend',
    image: newsImg,
    altText: 'Around The U.S. home page'
  },
  {
    title: 'Around The U.S.',
    summary: 'A social media site where users create accounts, post photos, and interact with photos.',
    features: [
      'React, JavaScript, CSS',
      'Express.js, Node.js, MongoDB',
      'Deployed with Google Cloud'
    ],
    liveLink: 'https://www.around-the-us.students.nomoreparties.site',
    demoLink: 'https://www.loom.com/share/d4e0d3b5ecb145a9a897f135fe692965',
    repoLink: 'https://github.com/rileydanejohnston/react-around-api-full',
    image: aroundImg,
    altText: 'News Explorer home page'
  },
  {
    title: 'My Portfolio',
    summary: 'My personal website to display my work and who I am.',
    features: [
      'React, JavaScript, Styled-Components, Particle.js, React SizeMe',
      'Deployed with Netlify'
    ],
    liveLink: 'https://rileydanejohnston.github.io/portfolio',
    demoLink: 'UNDER CONSTRUCTION',
    repoLink: 'https://github.com/rileydanejohnston/portfolio',
    image: portfolioImg,
    altText: 'Portfolio home page'
  },
  {
    title: 'DotCot',
    summary: 'A platform where investors can browser, filter, and select startups based on custom criteria. I was a frontend developer on the project.',
    features: [
      'React, JavaScript, Styled-Components, React SizeMe',
    ],
    liveLink: 'https://peaceful-woodland-39661.herokuapp.com/welcome',
    demoLink: 'UNDER CONSTRUCTION',
    repoLink: 'https://github.com/vgalilei/venturecat',
    image: dotcotImg,
    altText: 'VentureCat home page'
  },
  {
    title: 'From Portland To Portland',
    summary: 'A site about travel destinations in the United States. This project was used to practice responsive design, flexbox, grid, and transitions.',
    features: [
      'CSS, HTML',
    ],
    liveLink: 'https://rileydanejohnston.github.io/web_project_3/',
    demoLink: 'UNDER CONSTRUCTION',
    repoLink: 'https://github.com/rileydanejohnston/web_project_3',
    image: portlandImg,
    altText: 'From Portland To Portland home page'
  },
];