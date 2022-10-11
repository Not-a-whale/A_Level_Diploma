import './MainBlog.scss';
import main_blog_1 from "../assets/img/main_blog/1.png";
import main_blog_2 from "../assets/img/main_blog/2.png";
import main_blog_3 from "../assets/img/main_blog/3.png";


const MainBlog = () => {
    return (<section className="main_blog">
        <h2 className="main_blog__heading text-center">Beauty Club Blog</h2>
        <div className="container-fluid main_blog__container">
            <div className="row main_blog__row main_blog__row--top d-flex justify-content-between">
                <div className="col-md-4 main_blog__item">
                    <img loading="lazy" src={main_blog_1} alt="woman sitting" className="w-100" />
                        <h3 className="mt-3"><a href="./">FALL-ING FOR YOU — BEAUTY TRENDS WE'RE OBSESSING OVER</a></h3>
                        <h4 className="main_blog__subheading">
                            APRIL 29, 2019
                        </h4>
                        <a href="./articles/beauty/1" className="main_blog__link">cONTINUE READING</a>
                </div>
                <div className="col-md-4 main_blog__item">
                    <img loading="lazy" src={main_blog_2} alt="woman sitting" className="w-100" />
                        <h3 className="mt-3"><a href="./">Routine rebel — Beauty tips</a></h3>
                        <h4 className="main_blog__subheading">
                            APRIL 29, 2019
                        </h4>
                        <a href="./articles/beauty/1" className="main_blog__link">cONTINUE READING</a>
                </div>
                <div className="col-md-4 main_blog__item">
                    <img loading="lazy" src={main_blog_3} alt="woman sitting" className="w-100" />
                        <h3 className="mt-3"><a href="./">Routine rebel — Beauty tips</a></h3>
                        <h4 className="main_blog__subheading">
                            February 2, 2018
                        </h4>
                        <a href="./articles/beauty/1" className="main_blog__link">cONTINUE READING</a>
                </div>
            </div>
            <div className="row main_blog__row main_blog__row--bottom d-flex justify-content-center flex-nowrap mt-md-5">
                <div className="medium-button my-auto">
                    <a href="/blog" className="text-white">View more</a>
                </div>
            </div>
        </div>
    </section>)
}

export default MainBlog;

