import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUpForm from "../Signup/signup"
import LoginForm from "../Login/Login"

const NavigationStack=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={SignUpForm}></Route>
            <Route path="/login" Component={LoginForm}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default NavigationStack