export default function Project({title, description}) {
  return (
    <>
        <div className="   h-[10vw] w-[40vw] p-[1vw]" style={{direction: "ltr"}}>
            <h1 className="font-serif text-[2.5vw] text-[#413C34] m-0 p-0  align-bottom ">{title}</h1>
            <p className="font-serif text-[1.5vw] text-[#413C34] m-0 p-0  align-bottom">{description}</p>
        </div>
    </>
    
  );
}