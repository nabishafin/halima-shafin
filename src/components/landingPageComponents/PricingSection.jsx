"use client";
import bgImage from "../../../public/what-banner.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, CirclePlus } from "lucide-react";

export function PricingSection() {
  const [selectedTier, setSelectedTier] = useState("Halfday");
  const [packageType, setPackageType] = useState("Basic");
  const [selectedService, setSelectedService] = useState("Podcasts");

  const services = [
    "Talking Heads",
    "Shorts",
    "Podcasts",
    "Event Reels",
    "Adverts",
    "Vlogs",
    "Documentaries",
    "Corporate events",
    "Short films",
    "Visualizers",
    "Campaigns",
  ];

  const getServiceContent = () => {
    const tierMultiplier = selectedTier === "Halfday" ? 5 : 10;
    const isBasic = packageType === "Basic";
    const isStandard = packageType === "Standard";
    const isElite = packageType === "Elite";

    const serviceData = {
      "Talking Heads": {
        description: `${tierMultiplier}x High quality talking head videos, professionally shot to establish your brand authority.`,
        baseFeatures: [
          "Up to 60 secs per clip",
          "4 hours batch shooting",
          "Colour correction",
          "Audio enhancement",
          "1x revision per clip",
          "Captions",
        ],
        standardFeatures: [
          "30 min strategy call",
          "2x revision per clip",
          "Up to 90 secs per clip",
        ],
        eliteFeatures: [
          "Professional lighting",
          "Multiple angles",
          "Custom graphics",
          "Priority support",
        ],
      },
      Shorts: {
        description: `${tierMultiplier}x High quality short form videos, batch produced to help you maintain consistent output.`,
        baseFeatures: [
          "Up to 60 secs per clip",
          "4 hours batch shooting",
          "Colour correction",
          "Audio enhancement",
          "Captions",
        ],
        standardFeatures: [
          "30 min strategy call",
          "2x revision per clip",
          "Up to 90 secs per clip",
        ],
        eliteFeatures: [
          "Music",
          "Basic Animation",
          "B-rolls",
          "Advanced editing",
        ],
      },
      Podcasts: {
        description: `${tierMultiplier} High quality end-end video and audio podcast production.`,
        baseFeatures: [
          "Up to 4 hours shoot time",
          "1x 45 min edited episode",
          "1x revision",
          "Captions",
          "Includes equipment for 2 people",
        ],
        standardFeatures: [
          "Video podcast option",
          "Custom intro/outro",
          "Advanced audio mastering",
        ],
        eliteFeatures: [
          "Transcript included",
          "Social media clips",
          "Distribution support",
          "Live streaming setup",
        ],
      },
      "Event Reels": {
        description: `${tierMultiplier}x Dynamic event highlight reels capturing your most important moments.`,
        baseFeatures: [
          "Up to 2 mins per reel",
          "Multi-camera editing",
          "Colour correction",
          "Audio sync",
          "1x revision per reel",
          "Music licensing",
        ],
        standardFeatures: [
          "Drone footage",
          "Same-day delivery",
          "Live streaming setup",
        ],
        eliteFeatures: [
          "Multiple format delivery",
          "Custom graphics package",
          "Extended coverage",
          "Priority editing",
        ],
      },
      Adverts: {
        description: `${tierMultiplier}x Professional advertisement videos designed to convert viewers into customers.`,
        baseFeatures: [
          "Up to 30 secs per ad",
          "Script consultation",
          "Professional voiceover",
          "Brand alignment",
          "1x revision per ad",
          "Multiple formats",
        ],
        standardFeatures: [
          "A/B testing versions",
          "Advanced animations",
          "Custom music",
        ],
        eliteFeatures: [
          "Performance analytics",
          "Platform optimization",
          "Extended versions",
          "Dedicated account manager",
        ],
      },
    };

    const defaultData = {
      description: `${tierMultiplier}x High quality videos professionally produced for your business needs.`,
      baseFeatures: [
        "Professional production",
        "Quality editing",
        "Colour correction",
        "Audio enhancement",
        "1x revision",
        "Final delivery",
      ],
      standardFeatures: [
        "Priority support",
        "Advanced editing",
        "Custom graphics",
      ],
      eliteFeatures: [
        "Extended revisions",
        "Rush delivery",
        "Consultation included",
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
          ? " Premium quality with advanced editing."
          : isStandard
          ? " Enhanced with professional features."
          : " Essential features for getting started."),
      features,
    };
  };

  const basePrices = { Halfday: 500, Fullday: 900 };

  const getMultiplier = () => {
    switch (packageType) {
      case "Basic":
        return 0.8;
      case "Standard":
        return 1;
      case "Elite":
        return 1.5;
      default:
        return 1;
    }
  };

  const getPrice = () => Math.round(basePrices[selectedTier] * getMultiplier());

  const tiers = ["Halfday", "Fullday"];
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

          <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-lg font-medium transition-all ${
                  selectedTier === tier
                    ? "bg-white text-black"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

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
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(service)}
                className={`text-base md:text-lg text-left w-full transition-colors ${
                  selectedService === service
                    ? "text-orange-400 font-medium"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {service}
              </button>
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
                <div className="text-xl md:text-2xl font-bold text-white">
                  ${getPrice()}
                </div>

                <div className="flex gap-2 md:gap-4 flex-wrap">
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-white hover:text-black bg-transparent rounded-full px-4 py-2 text-sm"
                  >
                    Example
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-white hover:text-black bg-transparent rounded-full px-4 py-2 text-sm"
                  >
                    How it works
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 md:space-y-4">
                {content.features.map((feature, index) => {
                  const isStandardFeature =
                    (packageType === "Standard" || packageType === "Elite") &&
                    index >=
                      content.features.length -
                        (packageType === "Elite" ? 6 : 3);
                  const isEliteFeature =
                    packageType === "Elite" &&
                    index >= content.features.length - 3;

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
            to strengthen your project. We’ll shape a solution that fits your
            business, not ours. Dark gradiend background
          </span>
        </motion.h1>
      </div>
    </div>
  );
}
