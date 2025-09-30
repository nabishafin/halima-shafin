"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Clock, Globe } from "lucide-react";

export default function ContactForm({ meetingData, onSubmit, onBack }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize form with existing data if available
  useEffect(() => {
    if (meetingData.firstName) setFirstName(meetingData.firstName);
    if (meetingData.lastName) setLastName(meetingData.lastName);
    if (meetingData.email) setEmail(meetingData.email);
    if (meetingData.phone) setPhone(meetingData.phone);
    if (meetingData.additionalInfo)
      setAdditionalInfo(meetingData.additionalInfo);
  }, [meetingData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isFormValid) {
      setLoading(true);

      const contactData = { firstName, lastName, email, phone, additionalInfo };
      const fullData = { ...meetingData, ...contactData };

      try {
        console.log("Sending data to API:", fullData);

        // Send email via the universal API
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fullData),
        });

        const result = await response.json();
        console.log("API response:", result);

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to send email");
        }

        // Call the parent onSubmit function
        onSubmit(contactData);
      } catch (error) {
        console.error("Error in ContactForm:", error);
        setError(
          error.message || "Failed to schedule meeting. Please try again."
        );

        // Still proceed to confirmation page even if email fails
        // But show error message to user
        setTimeout(() => {
          onSubmit(contactData);
        }, 2000);
      } finally {
        setLoading(false);
      }
    }
  };

  const isFormValid = firstName && lastName && email && phone;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Panel - Meeting Summary */}
        <Card className="p-8 h-fit">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 -ml-2"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">2025</p>
              <h1 className="text-2xl font-semibold text-balance">
                Discovery Call
              </h1>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>15 Mins</span>
              </div>

              <div className="flex items-start gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5" />
                <div>
                  <p>
                    {meetingData.time} - {calculateEndTime(meetingData.time)}
                  </p>
                  <p>
                    {meetingData.date?.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>{meetingData.timezone}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Contact Form */}
        <Card className="p-8">
          <h2 className="text-xl font-semibold mb-6">Enter Details</h2>

          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-destructive text-sm">{error}</p>
              <p className="text-destructive/80 text-xs mt-1">
                Continuing to confirmation page...
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="01812-345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Is there anything you would like us to know before your appointment?"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows={4}
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(!!checked)}
              />
              <Label
                htmlFor="consent"
                className="text-sm leading-relaxed cursor-pointer"
              >
                I confirm that I want to receive updates from the company using
                the contact information provided.
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={!isFormValid || loading}
            >
              {loading ? "Scheduling..." : "Schedule Meeting"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

function calculateEndTime(startTime) {
  if (!startTime) return "";

  const [time, period] = startTime.split(" ");
  const [hours, minutes] = time.split(":").map(Number);

  let endMinutes = minutes + 15;
  let endHours = hours;

  if (endMinutes >= 60) {
    endMinutes -= 60;
    endHours += 1;
  }

  return `${endHours.toString().padStart(2, "0")}:${endMinutes
    .toString()
    .padStart(2, "0")} ${period}`;
}
