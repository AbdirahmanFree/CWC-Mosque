import hero from "../assets/cwcMosque-hero.png" 
export default function Home(){

    return(
        <div className="">
            <img 
            className="h-screen w-screen" 
            src={hero}/>
            <div className="cinzel-font">
                Whats up
            </div>
            <div className="montserrat-font">
                my name is abdi
            </div>
        </div>
    )
}