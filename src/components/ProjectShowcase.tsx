import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ClientProps {
  logo: string;
  name: string;
  description: string;
}

const ClientCard = ({ logo, name, description }: ClientProps) => (
  <div className="flex items-center gap-3 mt-4">
    <div className="w-10 h-10 flex items-center justify-center">
      <span className="text-base font-semibold">{logo}</span>
    </div>
    <div>
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-xs">{description}</p>
    </div>
  </div>
);

const ClientBlock = () => (
  <div className="min-w-[300px] max-w-[300px] md:min-w-0 md:max-w-xs flex-shrink-0 mx-2">
    <AspectRatio >
      <img
        src="https://t3.ftcdn.net/jpg/10/60/96/52/240_F_1060965201_zmbvhFPPjtHqKMLYFEoHUuUacOsCLRRj.jpg"
        alt="Resource Library Project"
        className="object-cover w-full h-full rounded-lg"
        loading="lazy"
      />
    </AspectRatio>
    <ClientCard
      logo="📘"
      name="Harvard"
      description="Empowering youth with neuroscience"
    />
  </div>
);

const ProjectShowcase = () => {
  return (
    <section className="w-full overflow-x-auto md:overflow-x-visible">
      <div className="flex flex-row md:flex-nowrap items-start md:justify-center gap-4 p-4 md:overflow-visible overflow-x-scroll">
        {/* Repeatable Client Blocks */}
        <ClientBlock />
        <ClientBlock />
        <ClientBlock />
        <ClientBlock />
      </div>
    </section>
  );
};

export default ProjectShowcase;
