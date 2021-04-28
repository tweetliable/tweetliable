export const Footer = ({}) => {
    return (
    <footer>
        <div className="flex flex-col sm:flex-row text-center justify-center pb-10 pt-5 p-2">
            <p> 
              Crafted by <a href = "https://github.com/tweetliable" target="_blank" className="hover:text-blue-600 underline ">Tweetliable</a> &copy; 2021
            </p>
            <div className="text-gray-500 px-3 invisible sm:visible"> | </div>
            <div> 
              <a href = "/about" className="hover:text-blue-600 underline"> About us </a>
            </div>
        </div>
      </footer>
    );
  };
  