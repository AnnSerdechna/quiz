
interface AnswerProps {
  id: string
  answerText: string
  isCorrect?: boolean
}

interface QuizeProps {
  id: string
  questionText: string
  answers: AnswerProps[]
}

export const quizeData: QuizeProps[] = [
  {
    id: '1',
    questionText: 'What is Node.js primarily used for?',
    answers: [
      {
        id: '1',
        answerText: 'Mobile app development',
      },
      {
        id: '2',
        answerText: 'Server-side scripting',
        isCorrect: true,
      },
      {
        id: '3',
        answerText: 'Database management',
      },
      {
        id: '4',
        answerText: 'Game development',
      },
    ]
  },
  {
    id: '2',
    questionText: 'Which of these modules is built into Node.js by default?',
    answers: [
      {
        id: '5',
        answerText: 'fs',
        isCorrect: true,
      },
      {
        id: '6',
        answerText: 'express',
      },
      {
        id: '7',
        answerText: 'lodash',
      },
      {
        id: '8',
        answerText: 'body-parser',
      },
    ]
  },
  {
    id: '3',
    questionText: 'What does the fs module in Node.js stand for?',
    answers: [
      {
        id: '9',
        answerText: 'File Synchronization',
      },
      {
        id: '10',
        answerText: 'File System',
        isCorrect: true,
      },
      {
        id: '11',
        answerText: 'Function Storage',
      },
      {
        id: '12',
        answerText: 'File Security',
      },
    ]
  },
  {
    id: '4',
    questionText: 'How does Node.js handle asynchronous operations?',
    answers: [
      {
        id: '13',
        answerText: 'Using threads',
      },
      {
        id: '14',
        answerText: 'Using callbacks, promises, and async/await',
        isCorrect: true,
      },
      {
        id: '15',
        answerText: 'Through multiple processes',
      },
      {
        id: '16',
        answerText: 'By blocking the event loop',
      },
    ]
  },
  {
    id: '5',
    questionText: 'What command is used to install a package in Node.js?',
    answers: [
      {
        id: '17',
        answerText: 'node install',
      },
      {
        id: '18',
        answerText: 'npm start',
      },
      {
        id: '19',
        answerText: 'npm install',
        isCorrect: true,
      },
      {
        id: '20',
        answerText: 'install npm',
      },
    ]
  },
  {
    id: '6',
    questionText: 'What is the purpose of the package.json file in a Node.js project?',
    answers: [
      {
        id: '21',
        answerText: 'To store sensitive data',
      },
      {
        id: '22',
        answerText: 'To define project metadata and dependencies',
        isCorrect: true,
      },
      {
        id: '23',
        answerText: 'To manage version control',
      },
      {
        id: '24',
        answerText: 'To initialize the database',
      },
    ]
  },
  {
    id: '7',
    questionText: 'Which of the following is a framework commonly used with Node.js for web applications?',
    answers: [
      {
        id: '25',
        answerText: 'React',
      },
      {
        id: '26',
        answerText: 'Angular',
      },
      {
        id: '27',
        answerText: 'Express',
        isCorrect: true,
      },
      {
        id: '28',
        answerText: 'Vue',
      },
    ]
  },
  {
    id: '8',
    questionText: 'What method is used to read a file synchronously in Node.js?',
    answers: [
      {
        id: '29',
        answerText: 'fs.readFile()',
      },
      {
        id: '30',
        answerText: 'fs.openSync()',
      },
      {
        id: '31',
        answerText: 'fs.readFileSync()',
        isCorrect: true,
      },
      {
        id: '32',
        answerText: 'fs.openFile()',
      },
    ]
  },
  {
    id: '9',
    questionText: 'Which of the following is true about Node.js?',
    answers: [
      {
        id: '33',
        answerText: 'It is based on the Java programming language',
      },
      {
        id: '34',
        answerText: 'It is single-threaded and non-blocking',
        isCorrect: true,
      },
      {
        id: '35',
        answerText: 'It requires a web server like Apache to run',
      },
      {
        id: '36',
        answerText: 'It is only for frontend development',
      },
    ]
  },
  {
    id: '10',
    questionText: 'What is the purpose of the require function in Node.js?',
    answers: [
      {
        id: '37',
        answerText: 'To make HTTP requests',
      },
      {
        id: '38',
        answerText: 'To include external modules',
        isCorrect: true,
      },
      {
        id: '39',
        answerText: 'To handle events',
      },
      {
        id: '40',
        answerText: 'To close the server',
      },
    ]
  },
]