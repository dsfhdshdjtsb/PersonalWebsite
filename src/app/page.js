import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="fixed ml-[5vw] h-[70%] w-[95vw] flex items-center ">
      <Frame />
    </div>
      
    </>
    
    
  );
}

const Frame = () => {
  return (
    <>
      <div className="h-[25vw] w-[25vw] bg-blue-100 rounded-full ">
        {/* <Image src="/images/IMG_20210725_142013.jpg" layout="fill" objectFit="cover" className="rounded-full" /> */}
      </div>
    </>
  );
}
