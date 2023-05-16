import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Practice } from './Practice'

// Routes the web application to different pages

const Main = () => (
    <Routes>
        <Route
            path='/home'
            element={
                <>
                    <Home />
                </>
            }
        ></Route>
        <Route
            path='/'
            element={
                <>
                    <Practice />
                </>
            }
        ></Route>
    </Routes>
)

export default Main
