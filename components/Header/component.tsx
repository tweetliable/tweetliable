export const Header = ({}) => {
  return (
  <header>
      <div className="fixed inline-flex align-middle bg-blue-400 w-screen">
        <h1 className="p-4 text-2xl"> Tweetliable </h1>
        <a href = "/" className="p-5 hover:text-white underline"> Home </a>
        <a href = "/about" className="p-5 hover:text-white underline"> About </a>
      </div>
    </header>
  );
};
