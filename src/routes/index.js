// import Home from '../pages/home/Home'
import Subject from '../pages/home/subject/Subject'
import Competition from '../pages/home/competition/Competition'
import About from '../pages/home/about/About'
import Submit from '../pages/home/submit/Submit'
import Work from '../pages/home/work/Work'

const routes = [
    // {
    //     path: '/home',
    //     element: <Home/>,
    //     children: [
            { path: 'subject', element: <Subject/> },
            { path: 'competition', element: <Competition/> },
            { path: 'about', element: <About/> },
            { path: 'work', element: <Work/> },
            { path: 'submit', element: <Submit/> }
    //     ]
    // }
]

export default routes