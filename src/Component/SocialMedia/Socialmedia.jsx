import { FaFacebookSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { } from 'react-scroll';
const Socialmedia = () => {
    return (
        <div className='flex text-3xl justify-center text-slate-400 gap-8 me-40'>
            <a href='https://www.facebook.com/titumir.gtc/'> <FaFacebookSquare />  </a>

            <a href='https://www.aedin.com/in/titumiranan/'> <FaLinkedinIn /></a>
            <a href='https://github.com/titumiranan123'> <FaGithub /></a>
        </div>
    );
};

export default Socialmedia;