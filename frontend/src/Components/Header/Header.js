import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
function Header({ title }) {
    const headerImg = 'https://static.wixstatic.com/media/f1de6a_b4afa6eab39649f88f1460ddf3601020~mv2.png/v1/crop/x_0,y_41,w_1920,h_999/fill/w_173,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f1de6a_b4afa6eab39649f88f1460ddf3601020~mv2.png';

    return (

        <header className="bg-gray-200 sticky top-0 z-[20] mx-auto flex w-full gap-5 items-end border-b border-gray-500 shadow-sm  
        px-8 py-2">
            <img className=" max-h-20" src="https://static.wixstatic.com/media/f1de6a_b4afa6eab39649f88f1460ddf3601020~mv2.png/v1/crop/x_0,y_41,w_1920,h_999/fill/w_173,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f1de6a_b4afa6eab39649f88f1460ddf3601020~mv2.png" />
            <div className="flex-grow flex items-center">
                <AiIcons.AiFillHome className="text-CIDColor" />
                <Link className="p-2 text-2xl text-CIDColor cursor-pointer hover:text-gray-700 font-light no-underline" to="/">Home</Link>
            </div>
        </header>

    );
}

export default Header;
