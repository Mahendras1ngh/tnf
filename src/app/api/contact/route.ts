import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

// Server-side validation for the public contact form.
const contactApiSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100),
  email: z.string().trim().email('Please enter a valid email address'),
  // Full phone incl. country code, e.g. "+91 9876543210"
  phone: z
    .string()
    .trim()
    .regex(
      /^\+\d{1,4}[\s-]?\d{6,14}$/,
      'Please enter a valid phone number'
    )
    .optional()
    .or(z.literal('')),
  company: z.string().trim().max(100).optional().or(z.literal('')),
  service: z.string().trim().max(100).optional().or(z.literal('')),
  budget: z.string().trim().max(100).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  // Honeypot — bots fill this; humans never see it.
  website: z.string().max(0).optional().or(z.literal('')),
});

async function sendNotificationEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.ADMIN_EMAIL;
  if (!apiKey || !from || !to) return; // email not configured — skip silently

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New enquiry from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || '—'}`,
        `Company: ${data.company || '—'}`,
        `Service: ${data.service || '—'}`,
        `Budget: ${data.budget || '—'}`,
        '',
        'Message:',
        data.message,
      ].join('\n'),
    });
  } catch (err) {
    // Don't fail the submission if the email provider errors.
    console.error('Contact email notification failed:', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactApiSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { website, ...data } = parsed.data;

    // Silently accept honeypot hits without persisting (bot).
    if (website) {
      return NextResponse.json({ success: true });
    }

    await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        service: data.service || null,
        budget: data.budget || null,
        message: data.message,
      },
    });

    await sendNotificationEmail(data);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
