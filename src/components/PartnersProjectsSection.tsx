
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectProps {
  name: string;
  category: string;
  year: string;
}

const ProjectRow = ({ name, category, year }: ProjectProps) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-200">
    <h3 className="text-2xl md:text-4xl text-black font-light">{name}</h3>
    <div className="text-right">
      <div className="text-sm text-gray-500 mb-1">{category}</div>
      <div className="text-sm">{year}</div>
    </div>
  </div>
);

const PartnersProjectsSection = () => {
  return (
    <section id="partners-projects" className="py-16 px-6 md:py-24 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-10">
          <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
          <h2 className="text-black text-lg">Partners + Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ProjectRow name="Momentify" category="Brand, Web, Product" year="2024" />
            <ProjectRow name="Norby" category="Motion" year="2025" />
            <ProjectRow name="Spark" category="Brand, Web, Product" year="2024" />
            <ProjectRow name="Google" category="Web, Product" year="2024" />
            <ProjectRow name="Harvard" category="Brand, Web, Product" year="2025" />
            <ProjectRow name="Neon Horizons" category="Brand, Product" year="2025" />
          </div>
          <div>
            <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80"
                alt="Project showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersProjectsSection;
