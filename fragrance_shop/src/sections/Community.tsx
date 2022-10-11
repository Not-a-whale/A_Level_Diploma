import blockshop from '../assets/img/blockshop.png';
import './Community.scss';

const Community = () => {
    return (<section className="community">
        <img loading="lazy" src={blockshop} alt="blogshop img" />
            <div className="community__block">
                <h4>BEAUTY CLUB</h4>
                <h2>Follow our #beautycommunity </h2>
                <p>Follow us on Instagram for daily news, motivation and inspiration in the big world of beauty and
                    wellness.</p>
                <a href="/beautystore">Follow @beautystore </a>
            </div>
    </section>)
}

export default Community;
