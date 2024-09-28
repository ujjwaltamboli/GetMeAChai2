import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="text-white h-[44vh] flex flex-col items-center justify-center">
        <div className="text-4xl font-serif font-bold flex flex-col items-center justify-center">
          <p>Buy Me A Chai</p>
          <img src="/coffee-lover.gif" width={80}/>
        </div>
        <span>A crowd funding platform for creators. Get funded by your fans and followers. Start now! </span>
        <div>
        <button type="button" className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
        
      </div>
      <div className="bg-white h-1 opacity-10">sdf</div>
      <div className="flex flex-col items-center h-80 ">
      <p className="text-2xl font-bold m-9 text-purple-800 font-serif">Your fans can buy you a chai</p>
      <div className="flex justify-arround items-center text-center">
        <div className="text-white font-bold text-center flex flex-col items-center justify-center mx-11">
          <img className="text-black rounded-full bg-white p-0" src="/man-image.jpg" width={88}/>
          <p className="font-bold">Fans want to help</p>
          <p>Your fans are available for you to help you</p>
        </div>
        <div className="text-white text-center flex flex-col items-center justify-center mx-11">
          <img className="text-black rounded-full bg-white p-0" src="/dollar.gif" width={88}/>
          <p className="font-bold">Fans want to help</p>
          <p>Your fans are available for you to help you</p>
        </div>
        <div className="text-white font-bold text-center flex flex-col items-center justify-center mx-11">
          <img className="text-black rounded-full bg-white p-0" src="/client.jpg" width={88}/>
          <p className="font-bold">Fans want to help</p>
          <p>Your fans are available for you to help you</p>
        </div>
      </div>
      </div>
      <div className="bg-white h-1 opacity-10">sdf</div>
      <div className="flex flex-col items-center justify-around mx-auto pb-32 pt-14 ">
        <p className="text-2xl font-bold text-white mb-14">Learn More About Us</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Tb1CLQuJOsE?si=_vFasj3CgxPETA8n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}
