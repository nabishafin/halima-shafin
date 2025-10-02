"use client";

import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Globe } from "lucide-react";

const TIME_SLOTS = [
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
];

const TIMEZONES = [
  { value: "Asia/Dhaka", label: "GMT+06:00 Asia/Dhaka (GMT+6)" },
  { value: "America/New_York", label: "GMT-05:00 America/New York (EST)" },
  { value: "Europe/London", label: "GMT+00:00 Europe/London (GMT)" },
  { value: "Asia/Tokyo", label: "GMT+09:00 Asia/Tokyo (JST)" },
  { value: "Australia/Sydney", label: "GMT+11:00 Australia/Sydney (AEDT)" },
];

export default function DateTimeSelector({
  initialDate,
  initialTimezone,
  initialTime,
  onSubmit,
}) {
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [selectedTimezone, setSelectedTimezone] = useState(initialTimezone);
  const [selectedTime, setSelectedTime] = useState(initialTime);


  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      onSubmit(selectedDate, selectedTimezone, selectedTime);
    }
  };

  const isFormValid = selectedDate && selectedTime;



  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Panel - Meeting Info */}
        <Card className="p-8 h-fit">
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

              {selectedDate && selectedTime && (
                <>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 mt-0.5" />
                    <div>
                      <p>
                        {selectedTime} - {calculateEndTime(selectedTime)}
                      </p>
                      <p>
                        {selectedDate.toLocaleDateString("en-US", {
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
                    <span>
                      {
                        TIMEZONES.find((tz) => tz.value === selectedTimezone)
                          ?.label
                      }
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "Let's connect on a 15-min discovery call to explore your ideas."
                }
              </p>
            </div>
          </div>
        </Card>

        {/* Right Panel - Date & Time Selection */}
        <Card className="p-8">
          <h2 className="text-xl font-semibold mb-6">Select Date & Time</h2>

          <div className="space-y-8">
            {/* Calendar */}
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
                initialFocus
              />
            </div>

            {/* Timezone Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Time zone</label>
              <Select
                value={selectedTimezone}
                onValueChange={setSelectedTimezone}
              >
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {TIMEZONES.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Available times</label>
                <div className="grid gap-2 max-h-[300px] overflow-y-auto pr-2">
                  {TIME_SLOTS.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className="w-full justify-center"
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              className="w-full"
              size="lg"
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </div>
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
