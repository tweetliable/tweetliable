import TweetEmbed from "react-tweet-embed"

export const Tweet = ({}) => {
    return (
 
    <div>
        <div>
          <TweetEmbed id = "692527862369357824" options={{theme: 'dark' }} className="flex justify-center w-screen px-3"/>
        </div>
        <div>
          <TweetEmbed id = "1386096638998065155" options={{theme: 'dark' }} className="flex justify-center w-screen px-3"/>
        </div>
        <div>
          <TweetEmbed id = "1385914622071517184" options={{theme: 'dark' }} className="flex justify-center w-screen px-3"/>
        </div>
      </div>
    );
  };
  