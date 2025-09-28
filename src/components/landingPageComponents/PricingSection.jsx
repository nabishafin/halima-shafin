"use client";
import bgImage from "../../../public/what-banner.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, CirclePlus, ChevronDown, ChevronUp } from "lucide-react";

export function PricingSection() {
  const [packageType, setPackageType] = useState("Basic");
  const [selectedService, setSelectedService] = useState("Re-define");
  const [expandedServices, setExpandedServices] = useState({});

  const services = [
    {
      id: "Re-define",
      name: "Re: Define",
      type: "main",
    },
    {
      id: "Re-design",
      name: "Re: Design",
      type: "main",
    },
    {
      id: "Re-present",
      name: "Re: Present",
      type: "parent",
      children: [
        "Personal Branding",
        "Podcasts",
        "Product Content",
        "Content Creation",
        "Events",
        "Campaign Films",
      ],
    },
    {
      id: "Re-scale",
      name: "Re: Scale",
      type: "main",
    },
    {
      id: "Re-structure",
      name: "Re: Structure",
      type: "main",
    },
  ];

  const toggleServiceExpansion = (serviceId) => {
    setExpandedServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const serviceData = {
    "Re-define": {
      description:
        "Complete brand identity transformation to redefine your market presence and positioning.",
      baseFeatures: [
        "Naming & tagline",
        "Voice & tone guide",
        "Primary logo & visual system",
        "Brand patterns & illustrations",
        "Brand guidelines",
        "Launch mockups",
      ],
      standardFeatures: [
        "Market research",
        "Brand strategy & DNA",
        "Messaging framework",
        "Storytelling system",
        "Value proposition",
        "Brand architecture",
        "Social media templates",
        "Investor / pitch decks",
      ],
      eliteFeatures: [
        "Website design",
        "Website development",
        "SEO foundations",
      ],
    },
    "Re-design": {
      description:
        "Comprehensive product design and packaging solutions to elevate your physical offerings.",
      baseFeatures: ["Up to 2 product designs", "Up to 2 tech packs"],
      standardFeatures: [
        "Up to 5 product designs",
        "Up to 5 tech packs",
        "Full packaging suite",
        "Up to 2 Surface pattern designs",
        "Basic collateral design",
        "Ongoing graphics support",
      ],
      eliteFeatures: [
        "Ongoing product design",
        "Ongoing tech pack design",
        "Ongoing Surface pattern design",
        "Complete packaging system",
        "Advanced collateral design",
        "Dedicated design oversight",
      ],
    },
    // Re: Present Children Services
    "Personal Branding": {
      description:
        "Professional personal branding content to establish your authority and presence.",
      baseFeatures: [
        "Professional headshots",
        "Bio & profile optimization",
        "Social media content strategy",
        "Basic video introductions",
        "1x revision per deliverable",
        "Platform-specific formatting",
      ],
      standardFeatures: [
        "30 min strategy call",
        "Extended content package",
        "Video testimonials",
        "Professional lighting setup",
        "2x revision per deliverable",
        "Multi-platform adaptation",
      ],
      eliteFeatures: [
        "Complete personal brand kit",
        "Ongoing content creation",
        "Media training session",
        "Crisis management guide",
        "Priority scheduling",
        "Dedicated brand manager",
      ],
    },
    Podcasts: {
      description:
        "End-to-end podcast production for professional audio and video content.",
      baseFeatures: [
        "Up to 4 hours shoot time",
        "1x 45 min edited episode",
        "1x revision",
        "Captions",
        "Includes equipment for 2 people",
        "Audio enhancement",
      ],
      standardFeatures: [
        "Video podcast option",
        "Custom intro/outro",
        "Advanced audio mastering",
        "2x revision per episode",
        "Social media clips",
        "Multi-camera setup",
      ],
      eliteFeatures: [
        "Transcript included",
        "Distribution support",
        "Live streaming setup",
        "Guest coordination",
        "Performance analytics",
        "Season planning",
      ],
    },
    "Product Content": {
      description:
        "Professional product showcasing content for e-commerce and marketing.",
      baseFeatures: [
        "Product photography",
        "Basic video demonstrations",
        "Feature highlight reels",
        "1x revision per product",
        "White background shots",
        "Multi-angle coverage",
      ],
      standardFeatures: [
        "Lifestyle integration",
        "Advanced lighting setup",
        "2x revision per product",
        "Comparison videos",
        "User testimonial integration",
        "Packaging showcase",
      ],
      eliteFeatures: [
        "3D product visualization",
        "Interactive content",
        "AR integration ready",
        "Complete product launch kit",
        "International adaptation",
        "Ongoing product updates",
      ],
    },
    "Content Creation": {
      description:
        "Strategic content creation for digital platforms and marketing campaigns.",
      baseFeatures: [
        "Monthly content calendar",
        "Basic graphic templates",
        "Social media posts",
        "1x revision per content",
        "Platform optimization",
        "Performance tracking",
      ],
      standardFeatures: [
        "Advanced content strategy",
        "Custom graphics package",
        "Video content integration",
        "2x revision per content",
        "A/B testing versions",
        "Audience engagement analysis",
      ],
      eliteFeatures: [
        "Complete content ecosystem",
        "AI content optimization",
        "Multi-platform automation",
        "Real-time analytics dashboard",
        "Competitor analysis",
        "Content repurposing system",
      ],
    },
    Events: {
      description:
        "Comprehensive event coverage and promotional content creation.",
      baseFeatures: [
        "Event photography coverage",
        "Highlight reel (up to 2 mins)",
        "Social media snippets",
        "1x revision per deliverable",
        "Basic editing",
        "Quick turnaround",
      ],
      standardFeatures: [
        "Multi-camera setup",
        "Extended coverage time",
        "Live social media updates",
        "2x revision per deliverable",
        "Drone footage",
        "Interview recordings",
      ],
      eliteFeatures: [
        "Full event documentary",
        "Real-time editing",
        "Virtual event integration",
        "Post-event analysis",
        "Sponsor highlight packages",
        "Year-round event partnership",
      ],
    },
    "Campaign Films": {
      description:
        "Professional campaign video production for marketing and brand initiatives.",
      baseFeatures: [
        "Up to 60 sec campaign video",
        "Script development",
        "Basic storyboarding",
        "1x revision",
        "Multi-platform formatting",
        "Music licensing",
      ],
      standardFeatures: [
        "Extended video length",
        "Advanced storytelling",
        "Professional voiceover",
        "2x revision",
        "Custom animation elements",
        "A/B testing versions",
      ],
      eliteFeatures: [
        "Complete campaign package",
        "Celebrity/influencer integration",
        "International adaptation",
        "Performance tracking setup",
        "Ongoing optimization",
        "Dedicated campaign manager",
      ],
    },
    "Re-scale": {
      description:
        "Strategic growth marketing and scaling solutions to expand your digital footprint.",
      baseFeatures: [
        "Growth audit & strategy",
        "Basic SEO",
        "2 Social media management",
        "4 email campaigns / month",
        "Influencer roadmap",
        "Growth reporting",
      ],
      standardFeatures: [
        "Core SEO",
        "3 Social media management",
        "Paid ads",
        "8 email campaigns / month",
        "Influencer outreach & partnerships",
        "Community management",
        "PR management",
        "Growth reporting & analytics",
      ],
      eliteFeatures: [
        "Advanced SEO",
        "Multi-channel paid ads",
        "High-frequency social media management",
        "CRM-linked email marketing",
        "Influencer + PR campaigns",
        "Conversion optimisation (CRO)",
        "Event activations",
        "Growth reporting & analytics",
      ],
    },
    "Re-structure": {
      description:
        "Operational transformation and systems implementation for sustainable business growth.",
      baseFeatures: [
        "Operations audit",
        "Workflow streamlining",
        "CRM / inventory / PM setup",
        "Supply chain health check",
        "Basic reporting",
      ],
      standardFeatures: [
        "Full systems implementation",
        "Supply chain consulting",
        "Production optimisation",
        "Advanced dashboards",
        "Team workflow design",
      ],
      eliteFeatures: [
        "End-to-end restructure",
        "Supply chain transformation",
        "Team scaling & training",
        "ERP & automation rollouts",
        "Digital transformation",
        "Crisis & risk advisory",
        "Ongoing ops leadership",
      ],
    },
  };

  const getServiceContent = () => {
    const isBasic = packageType === "Basic";
    const isStandard = packageType === "Standard";
    const isElite = packageType === "Elite";

    const defaultData = {
      description:
        "Professional business transformation services tailored to your growth needs.",
      baseFeatures: [
        "Initial consultation",
        "Basic strategy development",
        "Core implementation",
        "Progress reporting",
        "1x revision",
        "Final delivery",
      ],
      standardFeatures: [
        "Priority support",
        "Advanced features",
        "Extended consulting",
      ],
      eliteFeatures: [
        "Extended revisions",
        "Rush delivery",
        "Comprehensive consultation",
        "Dedicated support",
      ],
    };

    const data = serviceData[selectedService] || defaultData;

    let features = [...data.baseFeatures];
    if (isStandard || isElite)
      features = [...features, ...data.standardFeatures];
    if (isElite) features = [...features, ...data.eliteFeatures];

    return {
      description:
        data.description +
        (isElite
          ? " Premium comprehensive solution with ongoing support."
          : isStandard
          ? " Enhanced with advanced features and extended services."
          : " Essential foundation for getting started."),
      features,
    };
  };

  const content = getServiceContent();

  return (
    <div
      id="pricing"
      className=" text-white px-4 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 md:px-6 py-16 md:py-20">
        <div className="w-full md:w-10/12 mx-auto text-center">
          <div className="flex justify-start mb-4 md:mb-6">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <CirclePlus className="w-6 h-6 text-white" />
              <span className="text-md md:text-2xl  font-semibold text-white text-start">
                Simple Pricing.
              </span>
            </motion.div>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-[80px] font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Pricing.
          </motion.h1>
        </div>
      </section>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 md:mb-8">
          <h2 className="text-lg md:text-xl font-medium">Services</h2>

          <div className="flex gap-2 flex-wrap justify-center">
            {["Basic", "Standard", "Elite"].map((type) => (
              <button
                key={type}
                onClick={() => setPackageType(type)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm transition-all ${
                  packageType === type
                    ? "bg-white text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Services List */}
          <div className="bg-[#161616] rounded-2xl p-4 md:p-6 space-y-2 md:space-y-4">
            {services.map((service) => (
              <div key={service.id} className="space-y-2">
                <button
                  onClick={() => {
                    if (service.type === "parent") {
                      toggleServiceExpansion(service.id);
                    } else {
                      setSelectedService(service.id);
                    }
                  }}
                  className={`text-base md:text-lg text-left w-full transition-colors flex items-center justify-between ${
                    selectedService === service.id
                      ? "text-orange-400 font-medium"
                      : "text-white hover:text-orange-300"
                  }`}
                >
                  <span>{service.name}</span>
                  {service.type === "parent" && (
                    <span className="ml-2">
                      {expandedServices[service.id] ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  )}
                </button>

                {/* Child Services */}
                {service.type === "parent" && expandedServices[service.id] && (
                  <div className="ml-4 space-y-2 border-l-2 border-gray-600 pl-4">
                    {service.children.map((childService) => (
                      <button
                        key={childService}
                        onClick={() => setSelectedService(childService)}
                        className={`text-sm md:text-base text-left w-full transition-colors block ${
                          selectedService === childService
                            ? "text-orange-400 font-medium"
                            : "text-gray-400 hover:text-orange-300"
                        }`}
                      >
                        {childService}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Content + Features */}
          <div className="col-span-2 bg-[#161616] rounded-2xl p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Content */}
              <div className="space-y-4 md:space-y-8">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {content.description}
                </p>

                {/* Removed price display and buttons */}
              </div>

              {/* Features */}
              <div className="space-y-2 md:space-y-4">
                {content.features.map((feature, index) => {
                  const currentServiceData = serviceData[selectedService];
                  const baseLength =
                    currentServiceData?.baseFeatures?.length || 0;
                  const standardLength =
                    currentServiceData?.standardFeatures?.length || 0;
                  const eliteLength =
                    currentServiceData?.eliteFeatures?.length || 0;

                  const isStandardFeature =
                    (packageType === "Standard" || packageType === "Elite") &&
                    index >= baseLength &&
                    index < baseLength + standardLength;

                  const isEliteFeature =
                    packageType === "Elite" &&
                    index >= baseLength + standardLength;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 md:gap-3 "
                    >
                      <Plus
                        size={8}
                        className="w-4 md:w-6 h-4 md:h-6 text-white flex-shrink-0 bg-[#686868] p-[1px] rounded-full "
                      />
                      <span
                        className={`text-sm md:text-base ${
                          isEliteFeature
                            ? "text-orange-400"
                            : isStandardFeature
                            ? "text-blue-400"
                            : "text-white"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-10/12 mx-auto text-center mt-16">
        {/* Top indicator */}
        <motion.div
          className="flex items-center justify-start gap-2 mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="">
            <CirclePlus className="w-6 h-6 text-white" />
          </div>
          <span className="text-md md:text-2xl font-[600] text-white">
            Looking for more?
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-2xl md:text-4xl  font-[700] text-balance leading-tight md:px-60 px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-white">
            Add a 30min strategy session in our elite package
          </span>{" "}
          <span className="text-[#8c8989] ">
            to strengthen your project. We'll shape a solution that fits your
            business, not ours. Dark gradient background
          </span>
        </motion.h1>
      </div>
    </div>
  );
}
