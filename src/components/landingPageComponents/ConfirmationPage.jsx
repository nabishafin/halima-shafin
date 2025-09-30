"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function ConfirmationPage({ meetingData }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <div className="animate-pulse">
              <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-balance">
              Meeting Scheduled Successfully!
            </h1>
            <p className="text-muted-foreground text-lg">
              {"We've sent a confirmation email with all the details."}
            </p>
          </div>

          {/* Meeting Details */}
          <Card className="p-6 text-left space-y-4 bg-muted/50">
            <h2 className="font-semibold text-lg">Meeting Details</h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Discovery Call</p>
                  <p className="text-muted-foreground">
                    {meetingData.date
                      ? meetingData.date.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "Date not specified"}
                  </p>
                </div>
              </div>

              {meetingData.time && (
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    {meetingData.time} - {calculateEndTime(meetingData.time)}{" "}
                    (15 minutes)
                  </p>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">{meetingData.timezone}</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">{meetingData.email}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">{meetingData.phone}</p>
              </div>
            </div>
          </Card>

          {/* Attendee Info */}
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              Scheduled for{" "}
              <span className="font-medium text-foreground">
                {meetingData.firstName} {meetingData.lastName}
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => window.location.reload()}
            >
              Schedule Another Meeting
            </Button>
            <Button className="flex-1" onClick={() => window.print()}>
              Print Details
            </Button>
          </div>
        </div>
      </Card>
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
