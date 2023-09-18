let copy = document.querySelector('.slide-track').cloneNode(true)
document.querySelector('.slider').appendChild(copy)

const TOOLS = {
    HTML: './assets/languages/html5.svg',
    CSS: './assets/languages/css3.svg',
    JAVASCRIPT: './assets/languages/javascript.svg',
    TYPESCRIPT: './assets/languages/typescript.png',
    REACT: './assets/languages/react.svg',
    VITE: './assets/languages/Vitejs-logo.svg',
    NODE: './assets/languages/node-js.svg',
    EXPRESS: './assets/languages/express.svg',
    REDUX: './assets/languages/redux.svg',
    ZUSTAND: './assets/languages/zustand.png',
    MYSQL: './assets/languages/mysql.svg',
    POSTGRESQL: './assets/languages/postgresql.svg',
    GIT: './assets/languages/git.svg',
    GITHUB: './assets/languages/github.svg' 
}


const PROJECTS = [
    {
        img_project: './assets/projects/ttt_online.jpeg',
        url: 'https://tic-tac-toe-online-nine.vercel.app/',
        tools:['HTML','CSS','JAVASCRIPT','REACT','NODE','EXPRESS']
    },
    {
        img_project: './assets/projects/quizz.jpeg',
        url: 'https://kevg1t.github.io/JavaScriptQuizz/',
        tools:['HTML','CSS','JAVASCRIPT','REACT','ZUSTAND']
    },
    {
        img_project: './assets/projects/CRUDjpeg.jpeg',
        url: 'https://kevg1t.github.io/CRUD-Redux-Tremor-TypeScript/',
        tools:['JAVASCRIPT','REACT','TYPESCRIPT','REDUX']
    },
    {
        img_project: './assets/projects/movies.jpeg',
        url: 'https://kevg1t.github.io/Movies_Search/',
        tools:['HTML','CSS','JAVASCRIPT','REACT']
    },
    {
        img_project: './assets/projects/card.jpeg',
        url: 'https://kevg1t.github.io/Shopping-cart/',
        tools:['HTML','CSS','JAVASCRIPT','REACT']
    },
    {
        img_project: './assets/projects/ttt.jpeg',
        url: 'https://kevg1t.github.io/tic-tac-toe/',
        tools:['HTML','CSS','JAVASCRIPT','REACT']
    }
]

const projectsContent = document.querySelector('.projects-content')

PROJECTS.forEach(project => {
    const card = document.createElement('div')
    card.classList.add('card');
    const figure = document.createElement('figure')
    figure.classList.add('card-img')
    const img = document.createElement('img')

    img.src = project.img_project
    img.alt = `imagen de ${project.img_project.split('/')[3]}`
    figure.appendChild(img)
    card.appendChild(figure)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    const tools = document.createElement('div')
    tools.classList.add('tools')

    project.tools.forEach(tool => {
        const TOOL = document.createElement('figure')
        TOOL.classList.add('tool')
        const img = document.createElement('img')
        img.src = TOOLS[tool]
        img.alt = tool
        TOOL.appendChild(img)
        tools.appendChild(TOOL)
    })
    cardBody.appendChild(tools)
    const link = document.createElement('a')
    link.textContent = 'Demo'
    link.href = project.url
    link.target = '_blank'
    const linkContainer = document.createElement('div')
    linkContainer.classList.add('demo', 'btn')
    linkContainer.appendChild(link)
    cardBody.appendChild(linkContainer)
    card.appendChild(cardBody)
    projectsContent.appendChild(card)
})



