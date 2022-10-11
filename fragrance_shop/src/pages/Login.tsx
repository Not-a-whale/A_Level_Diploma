import Announcement from "../sections/Announcement";
import Header from "../components/Header";
import {Footer} from "../components/Footer";
import '../App.css';
import '../index.css'
import '../components/Header.scss'
import '../components/Footer.scss'
import './Login.scss'

export const Login = () => {
    return (<div>
        <div>
            <Announcement />
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 mt-md-5 mb-md-5">
                        <h2 className="text-center mt-5">Login</h2>
                        <form action="/" method="POST" className="mb-5">
                            <div className="login__control mb-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="Enter valid email" name="email" id="email" />
                            </div>
                            <div className="login__control mb-4">
                                <label htmlFor="password">Password</label>
                                <input placeholder="Enter password" type="password" name="password" id="password" />
                            </div>
                            <div className="container">
                                <div className="row mt-4 mb-5">
                                    <div className="col-md-6 col-sm-12 d-flex justify-content-between">
                                        <button className="small-button big-button--white">
                                            Login
                                        </button>
                                        <button className="small-button">
                                            Sign up
                                        </button>
                                    </div>
                                    <div className="col-md-6 col-sm-12 my-md-auto mt-4 text-center">
                                        <a href="/forgot-password">Forgot password</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>);
}
