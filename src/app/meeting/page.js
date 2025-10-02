"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const DateTimeSelector = dynamic(() => import("@/components/landingPageComponents/DateTimeSelector"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ContactForm = dynamic(() => import("@/components/landingPageComponents/ContactForm"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ConfirmationPage = dynamic(() => import("@/components/landingPageComponents/ConfirmationPage"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


export default function MeetingScheduler() {
  const [step, setStep] = useState("datetime"); // "datetime" | "contact" | "confirmation"
  const [meetingData, setMeetingData] = useState({
    date: null,
    timezone: "Asia/Dhaka",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });



  const handleDateTimeSubmit = (date, timezone, time) => {
    setMeetingData((prev) => ({
      ...prev,
      date: date ? new Date(date) : null,
      timezone,
      time,
    }));
    setStep("contact");
  };

  const handleContactSubmit = async (contactData) => {
    const updatedData = { ...meetingData, ...contactData };
    setMeetingData(updatedData);

    // Proceed to confirmation page
    setStep("confirmation");
  };

  const handleBack = () => {
    setStep("datetime");
  };

  return (
    <>
      {step === "datetime" && (
        <DateTimeSelector
          initialDate={meetingData.date}
          initialTimezone={meetingData.timezone}
          initialTime={meetingData.time}
          onSubmit={handleDateTimeSubmit}
        />
      )}
      {step === "contact" && (
        <ContactForm
          meetingData={meetingData}
          onSubmit={handleContactSubmit}
          onBack={handleBack}
        />
      )}
      {step === "confirmation" && (
        <ConfirmationPage meetingData={meetingData} />
      )}
    </>
  );
}
