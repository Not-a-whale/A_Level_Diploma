import Announcement from "../sections/Announcement";
import Header from "../components/Header";
import {Footer} from "../components/Footer";
import '../App.css';
import '../index.css'
import '../components/Header.scss'
import '../components/Footer.scss'
import './Blog.scss'
import blog_1 from '../assets/img/blog/1.png'
import blog_2 from '../assets/img/blog/2.png'
import blog_3 from '../assets/img/blog/3.png'
import blog_4 from '../assets/img/blog/4.png'
import blog_5 from '../assets/img/blog/5.png'

export const Blog = () => {
    return (<div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="blog__heading text-center">Latest News</h2>
                </div>
            </div>
        </div>
        <section className="blog__container">
            <h6 className="d-none"></h6>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 blog__item container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 blog__avatar">
                                <img loading="eager" src={blog_1} alt="blog nature image 1" />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 mt-md-2 blog__text">
                                <h2 className="">‘Solar Bond’ Demand Goes Through the Roof</h2>
                                <h4 className="">September 29, 2021 / 4:34 PM</h4>
                                <p className="">From bronzers that enhance your tan to ones that help you contour like a
                                    pro, check out our pick of the creme de le creme of bronzers to add a...</p>
                                <a className="" href="/">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 blog__item container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 blog__avatar">
                                <img loading="eager" src={blog_2} alt="blog nature image 2" />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 mt-md-2 blog__text">
                                <h2 className="">How Often Should You Shower? Celebrities Ignite a Ferocious Debate</h2>
                                <h4 className="">June 21, 2021 / 5:20 PM</h4>
                                <p className="">Hollywood types including Jake Gyllenhaal, Mila Kunis, Ashton Kutcher
                                    and Dax Shepard take a lax approach to hygiene, stoking a contentious uproar...</p>
                                <a className="" href="/">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 blog__item container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 blog__avatar">
                                <img loading="lazy" src={blog_3} alt="blog nature image 3" />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 mt-md-2 blog__text">
                                <h2 className="">How Often Should You Shower? Celebrities Ignite a Ferocious Debate</h2>
                                <h4 className="">June 21, 2021 / 5:20 PM</h4>
                                <p className="">Hollywood types including Jake Gyllenhaal, Mila Kunis, Ashton Kutcher
                                    and Dax Shepard take a lax approach to hygiene, stoking a contentious uproar...</p>
                                <a className="" href="/">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 blog__item container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 blog__avatar">
                                <img loading="lazy" src={blog_4} alt="blog nature image 4" />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 mt-md-2 blog__text">
                                <h2 className="">Companies Need More Workers. Why Do They Reject Millions of
                                    Résumés?</h2>
                                <h4 className="">May 19, 2021 / 5:20 PM</h4>
                                <p className="">Companies are desperate to hire, and yet some workers still can’t seem
                                    to find jobs. Here may be one reason why: The software that sorts through...</p>
                                <a className="" href="/">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 blog__item container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 blog__avatar">
                                <img loading="lazy" src={blog_5} alt="blog nature image 1" />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 mt-md-2 blog__text">
                                <h2 className="">This Quick Trick Makes Steamed Mussels Sensational</h2>
                                <h4 className="">March 8, 2021 / 5:20 PM</h4>
                                <p className="">“They grow just a few miles away, on Casco Bay,” said the restaurant’s
                                    French-born chef, Frédéric Eliot. “I’m sure other French people will argue...</p>
                                <a className="" href="/">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container container__bottom">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <a href="/">
                        <button className="small-button">View more</button>
                    </a>
                </div>
            </div>
        </div>
    </div>);
}
