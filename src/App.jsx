// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import entryPage1  from "./assets/entryPage1.png"
import entryPage2  from "./assets/entryPage2.png"
import Group1  from "./assets/Group1.svg"
import Group2  from "./assets/Group2.svg"

import WelcomePage from './components/WelcomePage'
import SignUp from './components/SignUp'

import GoalsPage from './pages/GoalsPage';
import TrackingPage from './pages/TrackingPage';
import SchedulePage from './pages/SchedulePage';


const firstPage = {
  cardImage: entryPage1,
  title: "Track Your Goal",
  para: "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
  redirect: "/SecondEntryPage",
  nextIcon: Group1
}

const secondPage = {
  cardImage: entryPage2,
  title: "Get Burn",
  para: "Let’s keep burning to achieve your goals, it hurts only temporarily,if you give up now you will be in pain forever.",
  redirect: "/SignUpPage",
  nextIcon: Group2
}

const signup = {
  id: 'signup',
  title: "Create an account",
  inputFields : [
    { label: "First Name", type: "text", placeholder: "First Name" },
    { label: "Last Name", type: "text", placeholder: "Last Name" },
    { label: "Email", type: "email", placeholder: "Email" },
    { label: "Password", type: "password", placeholder: "Password" },
  ],
  btn: "Create an account",
  linkText : 'Already have an account?',
  linkBtn : 'Login'
}

const login = {
  id: 'login',
  title: "Welcome Back",
  inputFields : [
    { label: "Email", type: "email", placeholder: "Email" },
    { label: "Password", type: "password", placeholder: "Password" },
  ],
  btn: "Sign In",
  linkText : "Don't have an account yet?",
  linkBtn : 'Create an account'
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<WelcomePage {...firstPage} />} />
      <Route exact path="/secondEntryPage" element={<WelcomePage {...secondPage} />} />
      <Route exact path="/SignUpPage" element={<SignUp {...signup} />} />
      <Route exact path="/LoginPage" element={<SignUp {...login} />} />
      <Route exact path="/GoalsPage" element={<GoalsPage />} />
      <Route exact path="/TrackingPage" element={<TrackingPage />} />
      <Route exact path="/SchedulePage" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
