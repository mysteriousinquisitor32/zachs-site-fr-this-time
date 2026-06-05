import Nav from "../elements/nav";
import NextJsWatermark from "../elements/NextJsWatermark";

export default function About() {
    return (
        <div className="flex justify-center align-center flex-col items-center">
            <Nav activePage="About" />
            <div className="w-full h-[50vh] items-center justify-center m-5 zachABOUTTTimage">

            </div>
            <div className="flex w-[90%] h-0.5 bg-black rounded justify-center align-center items-center mb-5"></div>
            <h1 className="flex text-center justify-center">Made with Next js, React, Tailwind css, & Node.js</h1>
            <p>& made with ❤️💜💚🧡 by the mysterious inquisitor and squaredsypher.</p>
            <div className="flex w-full h-full flex-row flex-wrap justify-center"> {/** Photo grid of all the tools i used */}
                <img src="/tailwind.png" className="w-[150px] h-[150px] object-contain" />
                <img src="/nextjslogo.png" className="w-[150px] h-[150px] object-contain" />
                <img src="/React.png" className="w-[150px] h-[150px] object-contain" />
                <img src="/NodeJs.png" className="w-[150px] h-[150px] object-contain" />
                <div className="flex w-50 h-50 justify-self-right wojakpoint"></div>
            </div>
        </div>
    )
}