import {useTheme} from "next-themes"
import { RiMoonClearLine } from "react-icons/ri"

export const Header = ({}) => {
  const {theme, setTheme} = useTheme()
  return (
  <header className="pb-20">
      <div className="fixed flex bg-blue-400 dark:bg-blue-900 w-screen">
        <a href = "/" className="p-4 text-2xl justify-start hover:text-blue-600"> Tweetliable </a>
        
        <div className="w-screen flex justify-end pr-3">
          <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="align-middle p-6 h-12 w-12 order-2 md:order-3"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        > <RiMoonClearLine style={{width: "20px", height: "20px"}} className="align-middle"/></button>
        </div>
             
      </div>
    </header>
  );
};
