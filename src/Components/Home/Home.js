import SSCArea from './SSCArea';
import Hero from './Hero';

const Home = () => {
    return (
            <div>
                <div className="text-center">
                    <Hero title="Test Yourself Online"></Hero>
                </div>
                <div className="text-center">
                    <blockquote>পরীক্ষা দেয়ার জন্য <a href="/entry">লগইন</a> কর</blockquote>  
                </div>
                <div className="mt-5 text-center">
                  <SSCArea/>
                </div>
            </div>
    );
};

export default Home;