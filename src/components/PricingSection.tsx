
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  icon: string;
  iconBg: string;
  packageName: string;
  description: string;
  price: string;
  features: string[];
  badge?: string;
  badgeColor?: string;
}

const PricingCard = ({
  icon,
  iconBg,
  packageName,
  description,
  price,
  features,
  badge,
  badgeColor,
}: PricingCardProps) => (
  <div className="flex flex-col h-full bg-black border-r border-gray-800">
    <div className="p-6">
      <div className={`w-10 h-10 ${iconBg} flex items-center justify-center rounded-md mb-4`}>
        <span className="text-white">{icon}</span>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-3xl font-light text-white">{packageName}</h3>
        {badge && (
          <span className={`text-xs px-3 py-1 rounded-full ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      
      <p className="text-sm text-gray-400 mb-8">{description}</p>
      
      <div className="text-4xl text-white font-normal mb-4">
        {price}<span className="text-lg text-gray-400">/Month</span>
      </div>
      
      <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white hover:text-black">
        Book a call
      </Button>
    </div>
    
    <div className="mt-auto p-6 pt-10 border-t border-gray-800 grid grid-cols-2 gap-3">
      {features.map((feature, index) => (
        <div key={index} className="text-xs text-gray-400">
          {feature}
        </div>
      ))}
    </div>
  </div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center p-6 md:p-10">
          <div className="w-2 h-2 bg-haptic-orange rounded-full mr-3"></div>
          <h2 className="text-white text-lg">Pricing + Contact</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          <PricingCard
            icon="⊡"
            iconBg="bg-haptic-yellow"
            packageName="Tactile"
            description="Great for teams who work in weekly sprints, and need design and strategy support for improving existing areas or developing new features of their product"
            price="£7,500"
            features={[
              "Dedicated Senior Designer",
              "Weekly Sprint Call",
              "Async Loom updates",
              "Unlimited slack comms",
              "Dedicated Design Director",
              "Scalable with your needs"
            ]}
            badge="Subscription"
            badgeColor="bg-gray-800"
          />
          
          <PricingCard
            icon="○"
            iconBg="bg-blue-600"
            packageName="Immersive"
            description="For teams who alongside product work need support on brand, marketing and website design & build."
            price="£15,500"
            features={[
              "Access to our full team",
              "Daily Standups",
              "Async Loom updates",
              "Unlimited slack comms",
              "Dedicated Design Director",
              "Scalable with your needs",
              "Pause or cancel anytime"
            ]}
            badge="Subscription"
            badgeColor="bg-gray-800"
          />
          
          <PricingCard
            icon="❙❙❙"
            iconBg="bg-haptic-orange"
            packageName="Sprint"
            description="2 weeks to deliver a product feature, brand or landing page. A dedicated team of vertical specialists will be assigned to deliver incredible results at breakneck speed."
            price="£10,000"
            features={[
              "A specially curated team",
              "Weekly Sprint Call",
              "Async Loom updates",
              "Unlimited slack comms",
              "Dedicated Design Director",
              "Scalable with your needs"
            ]}
            badge="Fast Turnaround"
            badgeColor="bg-haptic-orange"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
