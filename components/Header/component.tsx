export const Header = ({}) => {
  return (
  <header className="pb-20">
      <div className="fixed inline-flex bg-blue-400 w-screen">
        <h1 className="p-4 text-2xl justify-start"> Tweetliable </h1>
        <div className="w-screen flex justify-end pr-3">
        <a href = "/" className="p-5 hover:text-white underline"> Home </a>
        <a href = "/about" className="p-5 hover:text-white underline"> About </a>
        </div>
      </div>
    </header>
  );
};
