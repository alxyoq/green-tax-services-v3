"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

// Form validation schema using Zod
const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = form;

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your message has been sent successfully. We'll get back to you soon.");
    }, 1500);
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-heading font-semibold mb-3">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Your message has been sent successfully. A member of our team will get back to you as soon as possible.
        </p>
        <Button asChild>
          <Link href="/" className="inline-flex items-center gap-2">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="What is your message about?"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Please provide details about your inquiry"
          className="min-h-[120px]"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>.
      </p>
    </form>
  );
}
