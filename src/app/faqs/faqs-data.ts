// Shared FAQ content — consumed by the /faqs page (UI) and its layout
// (FAQPage JSON-LD). Keep both in sync by importing from here.
export interface FaqEntry {
  question: string;
  answer: string;
}

export const FAQS: FaqEntry[] = [
  {
    question: 'What types of video services do you offer?',
    answer:
      'We offer a comprehensive range of video production services including ad films, corporate videos, product promos, explainer videos, UGC content, testimonial videos, and animation. Our services cover everything from branded commercials and documentary films to social shorts and AI-powered video production.',
  },
  {
    question: 'How much does it cost to make a video ad?',
    answer:
      'Pricing depends on several factors including script complexity, shoot days, locations, actors, and post-production requirements. We offer budget-friendly packages tailored to your needs. Our pricing typically ranges from ₹50K for simple projects to ₹25L+ for premium commercials. Contact us for a custom quote based on your specific requirements.',
  },
  {
    question: 'How long does it take to deliver a video?',
    answer:
      'Typically, project delivery takes 5–15 working days based on project complexity. Simple social shorts may be ready in 5-7 days, while full-scale commercials can take 2-4 weeks. We also offer expedited delivery options for urgent projects. Timeline depends on factors like shoot days, revision rounds, and animation complexity.',
  },
  {
    question: 'Can you help with scriptwriting and concept development?',
    answer:
      'Absolutely! Our in-house creative team specializes in concept development, scriptwriting, and storyboard creation. We work closely with you to understand your brand objectives, target audience, and key messages. Every script is crafted to align with your brand voice and campaign goals, ensuring maximum impact.',
  },
  {
    question: 'Do you provide voiceovers and background music?',
    answer:
      'Yes, we work with a network of professional voiceover artists in multiple languages and accents. We also provide royalty-free music tracks or can license premium music based on your preferences. Our audio post-production includes sound design, mixing, and mastering to ensure broadcast-quality output.',
  },
  {
    question: 'Can you shoot at my location?',
    answer:
      'Yes, we film at client locations including offices, factories, retail outlets, and any other venue across India. Our team handles all logistics including permits, equipment transport, and on-site setup. We also have access to premium studio spaces and can suggest ideal shooting locations based on your creative vision.',
  },
  {
    question: 'Do you offer social media-optimized videos?',
    answer:
      'Absolutely! We create platform-specific content optimized for Instagram Reels, YouTube Shorts, TikTok, LinkedIn, and other social platforms. Our social videos are formatted in vertical (9:16), square (1:1), or custom aspect ratios with attention-grabbing hooks, captions, and platform-specific best practices.',
  },
  {
    question: 'Will I get revisions after the first draft?',
    answer:
      'Yes, we provide 2–3 free revisions on all projects to ensure the final output meets your expectations. Our revision process covers changes to editing, color grading, music, graphics, and more. We work collaboratively to refine the video until you are completely satisfied with the result.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer:
      'Yes! We offer budget-friendly packages specifically designed for MSMEs, startups, and D2C brands. We understand the constraints of early-stage companies and have flexible payment structures and scalable packages. Many of our startup clients have grown with us from their first video to full-scale campaigns.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is simple! Contact us via email at hello@thenextframe.in or fill out our contact form. We typically respond within 24 hours. After understanding your requirements, we will send you a detailed proposal with creative concepts, timeline, and pricing. Once approved, we kick off with a creative briefing session.',
  },
];
