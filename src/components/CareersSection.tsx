
const CareersSection = () => {
  return (
    <section id="careers" className="bg-haptic-brown py-16 px-6 md:py-24 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-10">
          <div className="w-2 h-2 bg-haptic-orange rounded-full mr-3"></div>
          <h2 className="text-white text-lg">Working at Haptic</h2>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-haptic-orange mb-16 leading-tight">
          Great work starts with<br />
          great people — join us.
        </h2>
        
        <div className="flex items-center mb-10">
          <div className="w-2 h-2 bg-haptic-orange rounded-full mr-3"></div>
          <h2 className="text-white text-lg">Open Roles</h2>
        </div>
        
        <div className="mb-12 text-white hover:text-orange-600">
          <div className="flex justify-between items-center border-b border-white/20 py-6">
            <h3 className="text-3xl md:text-4xl font-light">Senior Designer</h3>
            <div className="flex gap-12">
              <div className="">Remote/Hybrid</div>
              <div >Full-time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
