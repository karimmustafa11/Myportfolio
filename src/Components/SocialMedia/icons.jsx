import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialMediaIcons() {
    return (
        <div className="flex justify-center space-x-6 mt-8">

            {/* 1. LinkedIn */}
            <a
                href="https://www.linkedin.com/in/karim-mustafa-949207318/"
                target="_blank"
                className="
          bg-[#0A66C2] text-white 
          w-12 h-12 rounded-full flex items-center justify-center 
          text-2xl font-bold 
          shadow-lg shadow-[#0A66C2]/70  /* الـ Glow الأولي */
          transition-all duration-300 ease-in-out
          
          hover:bg-[#0077B5] 
          hover:shadow-2xl hover:shadow-[#0077B5]/90 
          hover:scale-110 hover:rotate-12 
        "
            >
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            {/* 2. GitHub */}
            <a
                href="https://github.com/karimmustafa11"
                target="_blank"
                className="
          bg-[#24292E] text-white 
          w-12 h-12 rounded-full flex items-center justify-center 
          text-2xl font-bold 
          shadow-lg shadow-[#24292E]/70 /* الـ Glow الأولي */
          transition-all duration-300 ease-in-out
          
          hover:bg-gray-700 
          hover:shadow-2xl hover:shadow-gray-700/90
          hover:scale-110 hover:rotate-12
        "
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>

            {/* 3. Instagram */}
            <a
                href="https://www.instagram.com/karim_mustafa8/#"
                target="_blank"
                className="
          bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white 
          w-12 h-12 rounded-[50%] flex items-center justify-center 
          text-2xl font-bold 
          shadow-lg shadow-pink-500/70 /* الـ Glow الأولي */
          transition-all duration-300 ease-in-out
          
          hover:opacity-95 
          hover:shadow-2xl hover:shadow-purple-600/90 
          hover:scale-110 hover:rotate-12
        "
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* 4. Facebook */}
            <a
                href="https://www.facebook.com/krym.mstfy.mr/"
                target="_blank"
                className="
          bg-[#1877F2] text-white 
          w-12 h-12 rounded-full flex items-center justify-center 
          text-2xl font-bold 
          shadow-lg shadow-[#1877F2]/70 /* الـ Glow الأولي */
          transition-all duration-300 ease-in-out
          
          /* تأثير الهوفر الأروش */
          hover:bg-[#3B5998] 
          hover:shadow-2xl hover:shadow-[#3B5998]/90
          hover:scale-110 hover:rotate-12
        "
            >
                <FontAwesomeIcon icon={faFacebookF} />
            </a>

        </div>
    );
}

export default SocialMediaIcons;