export default [
  {
    id: 1,
    question: 'Javascript is an __________ language',
    options: ['Object Oriented', 'Object-Based', 'Procedural'],
  },
  {
    id: 2,
    question: 'What is the correct command to create a new React project?',
    options: [
      'npm create-react-app',
      'npx create-react-app',
      'npx create-react-app myReactApp',
    ],
  },
  {
    id: 3,
    question: "What does 'myReactApp' refer to in the following command?",
    options: [
      'A reference to an existing app',
      'The type of app to create',
      'The name you want to use for the new app',
    ],
  },
  {
    id: 4,
    question:
      'What command is used to start the React local development server?',
    options: ['npm build', 'npm run dev', 'npm start'],
  },
  {
    id: 5,
    question:
      'What is the default local host port that a React development server uses?',
    options: ['3500', '5000', '3000'],
  },
  {
    id: 6,
    question: 'To develop and run React code, Node.js is required.',
    options: ['True', 'False', "Don't Know"],
  },
  {
    id: 7,
    question: 'Which keyword creates a constant in JavaScript?',
    options: ['constant', 'let', 'const'],
  },
  {
    id: 8,
    question: "A copy of the 'real' DOM that is kept in memory is called what?",
    options: ['Shadow DOM', 'React DOM', 'Virtual DOM'],
  },
  {
    id: 9,
    question: 'React component names must begin with an uppercase letter.',
    options: ['True', 'False', "Don't Know"],
  },
  {
    id: 10,
    question:
      'Which operator can be used to conditionally render a React component?',
    options: ['::', '??', '&&'],
  },
];

export const answers = [0, 2, 2, 2, 2, 0, 2, 2, 0, 2];
