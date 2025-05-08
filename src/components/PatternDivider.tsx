
const PatternDivider = () => {
  return (
    <div className="w-full h-24 md:h-36 relative overflow-hidden bg-[#f1f1f1]">
      <div className="absolute inset-0 flex">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="h-full w-1/5 relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black" style={{ 
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%)',
              opacity: index % 2 === 0 ? 1 : 0 
            }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternDivider;
