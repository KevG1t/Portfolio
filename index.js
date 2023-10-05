let copy = document.querySelector('.slide-track').cloneNode(true)
document.querySelector('.slider').appendChild(copy)

const TOOLS = {
    HTML: './assets/languages/html5.svg',
    CSS: './assets/languages/css3.svg',
    JAVASCRIPT: './assets/languages/javascript.svg',
    TYPESCRIPT: './assets/languages/typescript.webp',
    REACT: './assets/languages/react.svg',
    VITE: './assets/languages/Vitejs-logo.svg',
    NODE: './assets/languages/node-js.svg',
    EXPRESS: './assets/languages/express.svg',
    REDUX: './assets/languages/redux.svg',
    ZUSTAND: './assets/languages/zustand.webp',
    MYSQL: './assets/languages/mysql.svg',
    POSTGRESQL: './assets/languages/postgresql.svg',
    GIT: './assets/languages/git.svg',
    GITHUB: './assets/languages/github.svg',
    TAILWIND: '/assets/languages/tailwind.webp' 
}


const PROJECTS = [
    {
        img_project: './assets/projects/ecommerce.webp',
        url: 'https://e-commerce-react-chi-ruby.vercel.app/',
        tools:['TYPESCRIPT','REACT','TAILWIND']
    },
    {
        img_project: './assets/projects/ttt_online.webp',
        url: 'https://tic-tac-toe-online-nine.vercel.app/',
        tools:['HTML','CSS','JAVASCRIPT','REACT','NODE','EXPRESS']
    },
    {
        img_project: './assets/projects/quizz.webp',
        url: 'https://kevg1t.github.io/JavaScriptQuizz/',
        tools:['HTML','CSS','JAVASCRIPT','REACT','ZUSTAND']
    },
    {
        img_project: './assets/projects/CRUD.webp',
        url: 'https://kevg1t.github.io/CRUD-Redux-Tremor-TypeScript/',
        tools:['JAVASCRIPT','REACT','TYPESCRIPT','REDUX']
    },
    {
        img_project: './assets/projects/movies.webp',
        url: 'https://kevg1t.github.io/Movies_Search/',
        tools:['HTML','CSS','JAVASCRIPT','REACT']
    },
    {
        img_project: './assets/projects/card.webp',
        url: 'https://kevg1t.github.io/Shopping-cart/',
        tools:['HTML','CSS','JAVASCRIPT','REACT']
    },
    {
        img_project: './assets/projects/ttt.webp',
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
    link.classList.add('demo', 'btn')
    cardBody.appendChild(link)
    card.appendChild(cardBody)
    projectsContent.appendChild(card)
})


const sendEmail = (event) => {
  event.preventDefault();
  const form = event.target
  const data = new FormData(form)
 
  Email.send({
    SecureToken : "a7cf8505-b43b-4047-8dd4-b2e1b4141edf",
    To : 'kevinantonioc13@gmail.com',
    From : 'kevincorrales2016@gmail.com',
    Subject : 'Contact me',
    Body : `
    Name: ${data.get('name')}
    <br> Email: ${data.get('email')}
    <br>Message: ${data.get('body')}
    `,
}).then( 
  message => {
    const toast = document.querySelector('.toast')
    toast.textContent = 'Message sed succesfully'
    toast.classList.remove('error')
    toast.classList.add('show')
    setTimeout(() => {
        toast.classList.remove('show')
      }, 3000)
}
).catch(err => {
    const toast = document.querySelector('.toast')
    toast.textContent = err
    toast.classList.add('error', 'show')
    setTimeout(() => {
        toast.classList.remove('show')
      }, 3000)
})

  form.reset();
}

const form = document.getElementById('f-form')
form.addEventListener('submit', sendEmail)


