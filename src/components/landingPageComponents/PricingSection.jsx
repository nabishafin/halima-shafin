"use client";
import { useState, useEffect } from "react";
import { Plus, CirclePlus, ChevronDown, ChevronUp, X } from "lucide-react";
import Link from "next/link";
import FixedButton from "../ui/FixedButton";
import EnquireButton from "../ui/EnquireButton";

export function PricingSection() {
  const [packageType, setPackageType] = useState("Essential");
  const [selectedService, setSelectedService] = useState("Re-define");
  const [expandedServices, setExpandedServices] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleServiceSelect = (event) => {
      const { serviceId } = event.detail;
      const parentService = services.find((s) => s.id === "Re-present");
      if (parentService && parentService.children.includes(serviceId)) {
        setExpandedServices((prev) => ({ ...prev, "Re-present": true }));
        setSelectedService(serviceId);
      } else {
        setSelectedService(serviceId);
      }
    };

    window.addEventListener("selectService", handleServiceSelect);
    return () =>
      window.removeEventListener("selectService", handleServiceSelect);
  }, []);

  const services = [
    { id: "Re-define", name: "Re: Define", type: "main" },
    { id: "Re-design", name: "Re: Design", type: "main" },
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
    { id: "Re-scale", name: "Re: Scale", type: "main" },
    { id: "Re-structure", name: "Re: Structure", type: "main" },
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
        "Essential collateral design",
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
    "Personal Branding": {
      description:
        "Professional personal branding content to establish your authority and presence.",
      baseFeatures: [
        "Professional headshots",
        "Bio & profile optimization",
        "Social media content strategy",
        "Essential video introductions",
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
        "Essential video demonstrations",
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
        "Essential graphic templates",
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
        "Essential editing",
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
        "Essential storyboarding",
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
        "Essential SEO",
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
        "Essential reporting",
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

  const workflowPhases = [
    {
      number: "(001)",
      title: ".Connect",
      description:
        "Let's connect on a 15-min discovery call to explore your ideas.",
      payment: "0%",
    },
    {
      number: "(002)",
      title: ".Confirm",
      description: "Lock in your shoot slot with a deposit",
      payment: "50%",
    },
    {
      number: "(003)",
      title: ".Craft",
      description: "Lights, camera, action, time to craft your content",
      payment: "0%",
    },
    {
      number: "(004)",
      title: ".Create",
      description:
        "Your footage enters the edit lab with 2 rounds of smart tweaks.",
      payment: "25%",
    },
    {
      number: "(005)",
      title: ".Circulate",
      description:
        "Get your final assets, optimised and ready to share with the world.",
      payment: "25%",
    },
  ];

  const getServiceContent = () => {
    const isEssential = packageType === "Essential";
    const isStandard = packageType === "Standard";
    const isElite = packageType === "Elite";

    const defaultData = {
      description:
        "Professional business transformation services tailored to your growth needs.",
      baseFeatures: [
        "Initial consultation",
        "Essential strategy development",
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
    <div className="relative">
      {/* Modal */}
      {isModalOpen && (
        <div
          className="absolute inset-0 backdrop-blur-md bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#1a1a1a] rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-800 px-6 py-4 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CirclePlus className="w-5 h-5" />
                <h3 className="text-lg font-semibold">How it works</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="hover:bg-gray-800 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 bg-white">
              {/* Table Header */}
              <div className="grid grid-cols-[80px_1fr_1fr_80px] gap-4 pb-4 border-b border-gray-800 text-sm text-gray-400">
                <div></div>
                <div>Phases</div>
                <div>Description</div>
                <div className="text-right">Payment</div>
              </div>

              {/* Workflow Phases */}
              <div className="space-y-0">
                {workflowPhases.map((phase, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[80px_1fr_1fr_80px] gap-4 py-6 border-b border-gray-800 last:border-b-0"
                  >
                    <div className="text-gray-500 text-sm">{phase.number}</div>
                    <div className="font-medium">{phase.title}</div>
                    <div className="text-gray-400 text-sm">
                      {phase.description}
                    </div>
                    <div className="text-right font-medium">
                      {phase.payment}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div id="pricing" className="text-white px-4 py-16 bg-black">
        <section className="flex items-center justify-center px-4 md:px-6 py-8 md:py-16">
          <div className="w-full md:w-10/12 mx-auto text-center">
            <div className="flex justify-start mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <CirclePlus className="w-6 h-6 text-white" />
                <span className="text-md md:text-2xl font-semibold text-white text-start">
                  Simple Pricing.
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold leading-tight">
              Pricing.
            </h1>
          </div>
        </section>

        {/* Pricing Section */}
        <div className="max-w-6xl mx-auto">
          {/* Package Type Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-medium">Services</h2>
            <div className="flex gap-2 flex-wrap w-full md:w-auto">
              {["Essential", "Standard", "Elite"].map((type) => (
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

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Desktop Services List */}
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

                  {service.type === "parent" &&
                    expandedServices[service.id] && (
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

            {/* Desktop Content + Features */}
            <div className="md:col-span-2 bg-[#161616] rounded-2xl p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Left Column - Description + How it works button */}
                <div className="space-y-6">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {content.description}
                  </p>

                  {/* How it works button below description */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="relative overflow-hidden bg-[#2e2e2e] text-white px-6 py-2 border-[1px] rounded-full
                   hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <span className="relative text-sm z-10">How it works</span>
                  </button>
                </div>

                {/* Right Column - Features + Enquire button */}
                <div className="space-y-4">
                  <div className="space-y-2 md:space-y-4">
                    {content.features.map((feature, index) => {
                      const currentServiceData = serviceData[selectedService];
                      const baseLength =
                        currentServiceData?.baseFeatures?.length || 0;
                      const standardLength =
                        currentServiceData?.standardFeatures?.length || 0;
                      const isStandardFeature =
                        (packageType === "Standard" ||
                          packageType === "Elite") &&
                        index >= baseLength &&
                        index < baseLength + standardLength;
                      const isEliteFeature =
                        packageType === "Elite" &&
                        index >= baseLength + standardLength;

                      return (
                        <div
                          key={index}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <Plus
                            size={16}
                            className="w-4 md:w-5 h-4 md:h-5 text-white flex-shrink-0 bg-[#686868] p-[2px] rounded-full mt-0.5"
                          />
                          <span
                            className={`text-sm md:text-base ${
                              isEliteFeature
                                ? "text-orange-400"
                                : isStandardFeature
                                ? "text-[#edd8c5]"
                                : "text-white"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Enquire button below features */}
                  <Link href={"/meeting"}>
                    <button
                      className="bg-[#2e2e2e] text-white border-[1px] p-2 w-full rounded-full mt-2
                     hover:bg-white hover:text-black 
                     transition-colors duration-300 ease-in-out"
                    >
                      Enquire
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Image Style: Left Services, Right Features */}
          <div className="md:hidden bg-[#161616] rounded-2xl p-4">
            <div className="grid grid-cols-[40%_60%] gap-4">
              {/* Left Column: Service Names */}
              <div className="space-y-1">
                {services.map((service) => (
                  <div key={service.id} className="space-y-1">
                    <button
                      onClick={() => {
                        if (service.type === "parent") {
                          toggleServiceExpansion(service.id);
                        } else {
                          setSelectedService(service.id);
                        }
                      }}
                      className={`text-left w-full py-2 transition-colors text-sm ${
                        selectedService === service.id
                          ? "text-orange-400 font-medium"
                          : "text-white"
                      }`}
                    >
                      {service.name}
                    </button>

                    {service.type === "parent" &&
                      expandedServices[service.id] && (
                        <div className="pl-3 space-y-1 border-l border-gray-600">
                          {service.children.map((childService) => (
                            <button
                              key={childService}
                              onClick={() => setSelectedService(childService)}
                              className={`text-left w-full py-1.5 transition-colors text-xs block ${
                                selectedService === childService
                                  ? "text-orange-400 font-medium"
                                  : "text-gray-400"
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

              {/* Right Column: Features */}
              <div className="space-y-2">
                {content.features.map((feature, index) => {
                  const currentServiceData = serviceData[selectedService];
                  const baseLength =
                    currentServiceData?.baseFeatures?.length || 0;
                  const standardLength =
                    currentServiceData?.standardFeatures?.length || 0;
                  const isStandardFeature =
                    (packageType === "Standard" || packageType === "Elite") &&
                    index >= baseLength &&
                    index < baseLength + standardLength;
                  const isEliteFeature =
                    packageType === "Elite" &&
                    index >= baseLength + standardLength;

                  return (
                    <div key={index} className="flex items-start gap-1.5">
                      <Plus
                        size={10}
                        className="w-3 h-3 text-white flex-shrink-0 bg-[#686868] p-[2px] rounded-full mt-0.5"
                      />
                      <span
                        className={`text-xs leading-tight ${
                          isEliteFeature
                            ? "text-orange-400"
                            : isStandardFeature
                            ? "text-[#edd8c5]"
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

            {/* Mobile Buttons */}
            <div className="mt-6 space-y-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#2e2e2e] hover:bg-white hover:text-black text-white p-2 w-full rounded-md transition-all duration-300"
              >
                How it works
              </button>
              <Link href={"/meeting"}>
                <EnquireButton />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full md:w-10/12 mx-auto text-center mt-12 md:mt-16">
          <div className="flex items-center justify-start gap-2 mb-5">
            <CirclePlus className="w-6 h-6 text-white" />
            <span className="text-md md:text-2xl font-semibold text-white">
              Looking for more?
            </span>
          </div>

          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-balance leading-tight md:px-40 lg:px-60 px-0">
            <span className="text-white">
              Add a 30min strategy session in our elite package
            </span>{" "}
            <span className="text-[#8c8989]">
              to strengthen your project. We'll shape a solution that fits your
              business, not ours.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
