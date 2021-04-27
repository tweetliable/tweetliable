import { AiFillGithub } from "react-icons/ai"

export const About = ({}) => {
    return(
        <div className="text-center justify-center">
            <h1 className="text-3xl pb-3"> What is Tweetliable? </h1>
            <p className="pb-10 px-5"> Myanmar reliable news webiste from twitter news source </p>
            <div>
                <div className="text-2xl"> An open source website </div>
                <a href="https://github.com/tweetliable" target="_blank"> 
                    <AiFillGithub style={{width: "50px", height: "50px"}} className="flex justify-center items-center pt-3"/>
                </a>
            </div>
            <div className="text-2xl pt-10"> Where we get news from? </div>
            <ul className="p-5">
                <li> Myanmar_Now_Eng </li>
                <li> IrrawaddyNews </li>
                <li> dvbburmese</li>
                <li> MizzimaNews </li>
                <li> Khitthitofficial </li>
            </ul>
        </div>
    );
};