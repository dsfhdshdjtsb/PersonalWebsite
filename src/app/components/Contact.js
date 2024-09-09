import linkedin from "../assets/linekdin.png"
;export default function Contact(){
    return (
        <>
            <h1>Contact</h1>
            <div className="flex">
                <a>
                    <Image src={linkedin}></Image>
                </a>
                <a>
                    <Image src={linkedin}></Image>
                </a>

            </div>
        </>
    );
}