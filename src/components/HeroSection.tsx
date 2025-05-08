import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-haptic-orange py-0 px-6 md:py-24 md:px-12 w-screen ">
      <div className="max-w-6xl  flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-4xl md:text-5xl sm:text-6xl font-normal text-black mb-0 leading-tight">
          We help <span className="inline-flex items-center">⦿</span> ambitious
          <br />
          teams turn bold visions
          <br />
          into <span className="inline-flex items-center">⦿</span> lasting
          impact
        </h1>

       
       
       
        <div className="bg-white max-md:mb-8 p-4 flex items-center justify-between rounded-md max-w-xs space-x-8 text-neutral-950 hover:text-yellow-50 hover:bg-black">
          <img className="rounded-md border-gray-500 border-2  size-16 " src="https://media.istockphoto.com/id/969474236/photo/stripe-background.jpg?s=612x612&w=0&k=20&c=GJ9ppEwBqHLCQlw51aiS-eHHfesUCweQjkOzkUL8yfM=" alt="" />
        <div className="">
            <div className="text-sm font-medium text-gray-400">Hiring</div>
            <div >Senior Designer</div>
          </div>
          
          <Button variant="outline" size="sm" className="bg-white text-black">
            +
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
