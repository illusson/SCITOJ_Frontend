import Subject from '../pages/home/subject/Subject'
import Competition from '../pages/home/competition/Competition'
import About from '../pages/home/about/About'
import Submit from '../pages/home/submit/Submit'
import Work from '../pages/home/work/Work'
import {Navigate} from 'react-router-dom'

const routes = [
    { path: '/subject', element: <Subject/> },
    { path: '/competition', element: <Competition/> },
    { path: '/about', element: <About/> },
    { path: '/work', element: <Work/> },
    { path: '/submit', element: <Submit/> },
    { path: '/', element: <Navigate to='/subject'/> }
]

export default routes