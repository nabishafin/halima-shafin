"use client";

import { useState } from "react";
import ConfirmationPage from "@/components/landingPageComponents/ConfirmationPage";
import ContactForm from "@/components/landingPageComponents/ContactForm";
import DateTimeSelector from "@/components/landingPageComponents/DateTimeSelector";

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
    // Ensure date is properly stored
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

    // Email is now sent from ContactForm component
    // So we just proceed to confirmation page
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
