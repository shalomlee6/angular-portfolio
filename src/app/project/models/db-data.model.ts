import { Project } from './project.model';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Web Development',
        img:  '../../assets/img/webdev.jpg',
        tags: '#Angular #React #Node.js #Html #Css #Javascript #Typescript #Php',
        sub:  {
            projects: [
                {
                    title: 'Customer Club - In Development',
                    description: 'A 24/7 Customer Club for VIP clients, include spacial sales\n' +
                    'and discounts prices, admin section and more.',
                    // tslint:disable-next-line: max-line-length
                    present: '',
                    img: [
                        'assets/img/customer-club/1.jpg',

                    ],
                    ico: {
                        html: '<i class="fab fa-html5 fa-3x" id="html"></i>',
                        css: '<i class="fab fa-css3-alt fa-3x" id="css"></i>',
                        php: '<i class="fab fa-php fa-3x" id="php"></i>',
                        git: '<i class="fab fa-github-square fa-3x"></i>'
                    },
                    tags: ''
                },
                {
                    title: 'Israeli-Bank-system',

                    description: 'Bank Information Web Service, auto-compleate Search for an Israeli Bank by branch number or by name.\n' +
                    'Frontend: written in vanilla Javascript html and css.\n' +
                    'Backend: written in Nodejs express bodyparser and more.\n' +
                    'serves three end points: n' +
                    'a. Serves information regarding Bank names, according to received characters' +
                    'b. Serves information regarding Branch numbers, according to bank name/number' +
                    'c. Serves all information regarding Banks according to bank name and branch number' +
                    'All data is received by a free API, the data is fetched from the backend in \n' +
                    'XML format. Then the data is saved at the backend and then passed and viewed by the client  ',

                    present: '',
                    img: [
                        'assets/img/israelibank/1.jpg',

                    ],
                    ico: {
                    },
                    tags: '#Node-js #express #vanilla-javascript #html #css'
                },
                {
                    title: 'React-Todo-App',

                    description: 'A Simple Todo App In Order To Practice React Framwork.\n' ,

                    present: '',
                    img: [
                        'assets/img/react/1.jpg',
                        'assets/img/ts.png'

                    ],
                    ico: {
                    },
                    tags: '#Node-js #express #vanilla-javascript #html #css'
                },
                {
                    title: 'My Portfolio',

                    description: 'my old portfolio web site built with simple html css and javascript.\n' ,

                    present: '',
                    img: [
                        'assets/img/old-portfolio/1.jpg',

                    ],
                    ico: {
                    },
                    tags: '#javascript #html #css'
                },
                {
                    title: 'Ticker-Live-Feed',
                    description: 'A Live feed web component .\n',
                    present: '',
                    img: [
                      'assets/img/ticker/1.jpg'
                    ],
                    ico: {
                        html: '<i class="fab fa-html5 fa-3x" id="html"></i>',
                        css: '<i class="fab fa-css3-alt fa-3x" id="css"></i>',
                        php: '<i class="fab fa-php fa-3x" id="php"></i>',
                        git: '<i class="fab fa-github-square fa-3x"></i>'
                    },
                    tags: ''
                }
            ]
        }
    },
    {
        id: 2,
        title: 'Game Development',
        img: '../../assets/img/park.jpg',
        tags: '#Unity C#',
        sub:  {
            projects: [
                {
                    title: 'Nice-Guy',
                    description: 'Game Concept:\n' +
                    'Nick is a nice guy, or at least he used to be, ' +
                    'until an evil \nice giant kidnapped his true love Amy and imprisoned her.\n' +
                    'Now Nick must find a way into the prison and rescue his \n' +
                    'beloved. In a world where everything is dominated by ice \n' +
                    'giants -> rag dolls that were free in the unity assets\n' +
                    'store. One hero will fight to save his friend-zone friend\n' +
                    'that happens to be a girl from animated monsters!',
                    present: '',
                    img: [],
                    ico: [],
                    tags: ''
                },
                {
                    title: '',
                    description: '',
                    present: '',
                    img: [],
                    ico: [],
                    tags: ''
                }
            ]
        }
    },
    {
        id: 3,
        title: 'Android',
        img: '../../assets/img/android.jpg',
        tags: '#Facebook #Firebase #SQL #Java',
        sub:  {
            projects: [
                {
                  title: 'Social Crossword App - Final Project',
                  description: 'As a first year student every morning before class i would drink my coffee\n' +
                  'and trying to solve the daily morning newspaper crossword puzzle. One morning i had an idea\n' +
                  'if the questions in the crossword were not in the form of a general knowlage type questions\n' +
                  'for example:\n' +
                  'Who was the seconde man in history that walked on the moon? (answer: Buzz Aldrin)\n' +
                  'The user will get questions about his/her Family And Friends questions like:\n' +
                  // tslint:disable-next-line: quotemark
                  "What Is Your Mom's Favorite Movie?\n" +
                  // tslint:disable-next-line: quotemark
                  "Who Is Your Sister's Best Friend?\n" +
                  // tslint:disable-next-line: quotemark
                  "In this form of a Crossword Puzzle every user can be challenged with general knowlage questions\n" +
                  // tslint:disable-next-line: quotemark
                  "And personal questions about his friends and family life. Which makes the game a lot\n" +
                  'more harder to solve and a lot more interesting.\n',
                  present: '',
                  img: [],
                  ico: [],
                    tags: ''
                },
                {
                    title: '',
                    description: '',
                    present: '',
                    img: [],
                    ico: [],
                    tags: ''
                }
            ]
        }
    },
    {
        id: 4,
        title: 'Ios',
        img: '../../assets/img/ios.jpg',
        tags: '#Swift #Coredata #Firebase',
        sub:  {
            projects: [
                {
                  title: 'Word-Swipe',
                  description: 'A gaming application where the user must identify english words and accumulate as many points as possible.\n' +
                  'This game is suitable for children between the ages of 5-12, every user can improve his or her english skills, in an\n' +
                  'enjoyable way while learning new words.' + 'This app is scalable to the users english level so any words\n' +
                  'that were left unanswered will repeat in the next round. ' + ' Practice and sharp your english skills search and find new words in the gameboard.\n' +
                  "WordSwipe uses Firebase as its backend in order to keep track on every user's progress.",
                  present: '',
                  img: ['assets/img/firebase.jpg'],
                  ico: [],
                  tags: ''
                },
                {
                    title: '',
                    description: '',
                    present: '',
                    img: [],
                    ico: [],
                    tags: ''
                }
            ]
        }
    }
];
