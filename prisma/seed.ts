import { PrismaClient, PortfolioCategory, ContactStatus, ServiceCategory } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const adminPassword = await hash(process.env.ADMIN_PASSWORD || 'admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@thenextframe.in' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@thenextframe.in',
      name: 'Admin',
      password: adminPassword,
      role: 'ADMIN',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create Services - 12 services from thenextframe.in
  const services = await Promise.all([
    // Film & Brand Category
    prisma.service.upsert({
      where: { slug: 'branded-commercials' },
      update: {},
      create: {
        title: 'Branded Commercials',
        slug: 'branded-commercials',
        description: 'Hero TVCs and brand films that capture attention and drive action. From 15-second spots to 3-minute narratives.',
        icon: 'Film',
        category: 'FILM_BRAND',
        tags: ['TVC', 'Brand Film', 'Hero Commercial'],
        investment: '₹8-25L',
        turnaround: '4-8 weeks',
        features: [
          'Concept Development',
          'Scriptwriting',
          'Professional Crew',
          'Post-Production',
          'Color Grading',
          'Motion Graphics',
        ],
        order: 1,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'corporate-films' },
      update: {},
      create: {
        title: 'Corporate Films',
        slug: 'corporate-films',
        description: 'Company stories, culture videos, and internal communications that align your team and impress stakeholders.',
        icon: 'Building2',
        category: 'FILM_BRAND',
        tags: ['Company Story', 'Culture Video', 'Internal Comms'],
        investment: '₹3-12L',
        turnaround: '3-6 weeks',
        features: [
          'Company Profiles',
          'Culture Videos',
          'Internal Communications',
          'Stakeholder Presentations',
          'Event Coverage',
          'Leadership Interviews',
        ],
        order: 2,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'testimonials' },
      update: {},
      create: {
        title: 'Testimonials',
        slug: 'testimonials',
        description: 'Authentic customer success stories that build trust and drive conversions.',
        icon: 'MessageSquare',
        category: 'FILM_BRAND',
        tags: ['Customer Stories', 'Case Studies', 'Reviews'],
        investment: '₹1.5-6L',
        turnaround: '2-4 weeks',
        features: [
          'Customer Interviews',
          'Case Study Development',
          'B-Roll Capture',
          'Professional Editing',
          'Multi-Format Delivery',
          'Social Media Cuts',
        ],
        order: 3,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'documentary' },
      update: {},
      create: {
        title: 'Documentary',
        slug: 'documentary',
        description: 'Long-form storytelling that explores your brand heritage, impact, or industry insights.',
        icon: 'FileText',
        category: 'FILM_BRAND',
        tags: ['Brand Documentary', 'Impact Film', 'Heritage Story'],
        investment: '₹10-30L',
        turnaround: '6-12 weeks',
        features: [
          'Research & Development',
          'Interview Filming',
          'B-Roll Capture',
          'Archival Integration',
          'Narrative Editing',
          'Distribution Strategy',
        ],
        order: 4,
        isActive: true,
      },
    }),
    // Performance & Social Category
    prisma.service.upsert({
      where: { slug: 'social-shorts' },
      update: {},
      create: {
        title: 'Social Shorts',
        slug: 'social-shorts',
        description: 'Platform-optimized content for Instagram, YouTube, and TikTok that stops the scroll.',
        icon: 'Share2',
        category: 'PERFORMANCE_SOCIAL',
        tags: ['Reels', 'Shorts', 'TikTok'],
        investment: '₹50K-3L',
        turnaround: '1-3 weeks',
        features: [
          'Platform-Specific Content',
          'Vertical Video Production',
          'Trending Format Adaptation',
          'Quick Turnaround',
          'Content Calendars',
          'Performance Analytics',
        ],
        order: 5,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'product-demos' },
      update: {},
      create: {
        title: 'Product Demos',
        slug: 'product-demos',
        description: 'Clear, compelling explainers and unboxing videos that showcase your product value.',
        icon: 'Package',
        category: 'PERFORMANCE_SOCIAL',
        tags: ['Explainer', 'Unboxing', 'Tutorial'],
        investment: '₹1-5L',
        turnaround: '2-4 weeks',
        features: [
          'Product Showcase',
          'Feature Highlights',
          'Tutorial Creation',
          'Unboxing Videos',
          'Comparison Videos',
          'Multi-Platform Delivery',
        ],
        order: 6,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'educational' },
      update: {},
      create: {
        title: 'Educational',
        slug: 'educational',
        description: 'E-learning content, training videos, and instructional series that engage and inform.',
        icon: 'GraduationCap',
        category: 'PERFORMANCE_SOCIAL',
        tags: ['E-learning', 'Training', 'Course Content'],
        investment: '₹2-8L',
        turnaround: '3-6 weeks',
        features: [
          'Curriculum Development',
          'Interactive Content',
          'Screen Recording',
          'Voiceover Production',
          'Quiz Integration',
          'LMS Compatibility',
        ],
        order: 7,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'performance-ads' },
      update: {},
      create: {
        title: 'Performance Ads',
        slug: 'performance-ads',
        description: 'High-converting video ads designed for Meta, Google, and YouTube campaigns.',
        icon: 'TrendingUp',
        category: 'PERFORMANCE_SOCIAL',
        tags: ['Meta Ads', 'Google Ads', 'YouTube Ads'],
        investment: '₹80K-4L',
        turnaround: '1-3 weeks',
        features: [
          'A/B Testing Variants',
          'Platform Optimization',
          'Hook Development',
          'CTA Integration',
          'Performance Tracking',
          'Rapid Iteration',
        ],
        order: 8,
        isActive: true,
      },
    }),
    // Adjacent Crafts Category
    prisma.service.upsert({
      where: { slug: 'photography' },
      update: {},
      create: {
        title: 'Photography',
        slug: 'photography',
        description: 'Product photography, brand photography, and lifestyle shoots that complement your video content.',
        icon: 'Camera',
        category: 'ADJACENT_CRAFTS',
        tags: ['Product', 'Brand', 'Lifestyle'],
        investment: '₹40K-2L',
        turnaround: '1-2 weeks',
        features: [
          'Product Photography',
          'Brand Photography',
          'Lifestyle Shoots',
          'Event Coverage',
          'Post-Processing',
          'Multi-Format Delivery',
        ],
        order: 9,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'animation' },
      update: {},
      create: {
        title: 'Animation & Motion',
        slug: 'animation',
        description: '2D/3D animation, motion graphics, and kinetic typography for dynamic visual storytelling.',
        icon: 'Sparkles',
        category: 'ADJACENT_CRAFTS',
        tags: ['2D/3D', 'Motion Graphics', 'Explainer'],
        investment: '₹1.5-8L',
        turnaround: '2-5 weeks',
        features: [
          '2D Animation',
          '3D Animation',
          'Motion Graphics',
          'Kinetic Typography',
          'Logo Animation',
          'Character Animation',
        ],
        order: 10,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'ai-video' },
      update: {},
      create: {
        title: 'AI Video',
        slug: 'ai-video',
        description: 'Cutting-edge AI-powered video creation for rapid content production and personalization.',
        icon: 'Wand2',
        category: 'ADJACENT_CRAFTS',
        tags: ['AI Generated', 'Personalization', 'Synthetic'],
        investment: '₹60K-4L',
        turnaround: '1-2 weeks',
        features: [
          'AI-Generated Content',
          'Personalized Videos',
          'Rapid Production',
          'Scale Content Creation',
          'Voice Synthesis',
          'Avatar Generation',
        ],
        order: 11,
        isActive: true,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'post-production' },
      update: {},
      create: {
        title: 'Post & Edit',
        slug: 'post-production',
        description: 'Professional editing, color grading, and post-production services for your existing footage.',
        icon: 'Scissors',
        category: 'ADJACENT_CRAFTS',
        tags: ['Editing', 'Color Grading', 'Post'],
        investment: '₹50K-3L',
        turnaround: '1-3 weeks',
        features: [
          'Professional Editing',
          'Color Grading',
          'Sound Design',
          'Visual Effects',
          'Motion Graphics',
          'Final Delivery',
        ],
        order: 12,
        isActive: true,
      },
    }),
  ]);
  console.log('✅ Services created:', services.length);

  // Create Portfolio Items
  const portfolioItems = await Promise.all([
    prisma.portfolioItem.upsert({
      where: { slug: 'brand-x-summer-campaign' },
      update: {},
      create: {
        title: 'Brand X Summer Campaign',
        slug: 'brand-x-summer-campaign',
        description: 'A vibrant summer campaign for Brand X featuring dynamic visuals and energetic storytelling that increased brand engagement by 150%.',
        thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        client: 'Brand X',
        category: 'COMMERCIAL',
        tags: ['Summer', 'Lifestyle', 'Brand Campaign'],
        featured: true,
        order: 1,
        serviceId: services[0].id,
      },
    }),
    prisma.portfolioItem.upsert({
      where: { slug: 'tech-startup-profile' },
      update: {},
      create: {
        title: 'Tech Startup Company Profile',
        slug: 'tech-startup-profile',
        description: 'A sleek company profile video for an innovative tech startup, showcasing their culture, products, and vision for the future.',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        client: 'TechStart Inc.',
        category: 'CORPORATE',
        tags: ['Corporate', 'Technology', 'Startup'],
        featured: true,
        order: 2,
        serviceId: services[1].id,
      },
    }),
    prisma.portfolioItem.upsert({
      where: { slug: 'indie-artist-music-video' },
      update: {},
      create: {
        title: 'Indie Artist - "Midnight Dreams"',
        slug: 'indie-artist-music-video',
        description: 'A visually stunning music video for indie artist featuring dreamlike sequences and innovative visual effects.',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        client: 'Indie Records',
        category: 'MUSIC_VIDEO',
        tags: ['Music Video', 'Indie', 'Visual Effects'],
        featured: true,
        order: 3,
        serviceId: services[2].id,
      },
    }),
    prisma.portfolioItem.upsert({
      where: { slug: 'ocean-conservation-documentary' },
      update: {},
      create: {
        title: 'Ocean Conservation Documentary',
        slug: 'ocean-conservation-documentary',
        description: 'A powerful documentary highlighting ocean conservation efforts and the people working to protect marine life.',
        thumbnail: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        client: 'Ocean Foundation',
        category: 'DOCUMENTARY',
        tags: ['Documentary', 'Conservation', 'Nature'],
        featured: false,
        order: 4,
        serviceId: services[3].id,
      },
    }),
    prisma.portfolioItem.upsert({
      where: { slug: 'fashion-brand-social-content' },
      update: {},
      create: {
        title: 'Fashion Brand Social Campaign',
        slug: 'fashion-brand-social-content',
        description: 'A comprehensive social media content series for a fashion brand, including reels, stories, and engaging posts.',
        thumbnail: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        client: 'Style Co.',
        category: 'SOCIAL_MEDIA',
        tags: ['Social Media', 'Fashion', 'Reels'],
        featured: true,
        order: 5,
        serviceId: services[4].id,
      },
    }),
    prisma.portfolioItem.upsert({
      where: { slug: 'fintech-explainer-animation' },
      update: {},
      create: {
        title: 'FinTech App Explainer',
        slug: 'fintech-explainer-animation',
        description: 'An engaging animated explainer video for a fintech application, simplifying complex financial concepts.',
        thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        client: 'FinApp Solutions',
        category: 'ANIMATION',
        tags: ['Animation', 'Explainer', 'FinTech'],
        featured: false,
        order: 6,
        serviceId: services[5].id,
      },
    }),
  ]);
  console.log('✅ Portfolio items created:', portfolioItems.length);

  // Create Team Members
  const teamMembers = await Promise.all([
    prisma.teamMember.upsert({
      where: { id: 'team-1' },
      update: {},
      create: {
        id: 'team-1',
        name: 'Rajesh Kumar',
        role: 'Founder & Creative Director',
        bio: 'With over 15 years of experience in film production, Rajesh leads TheNextFrame with a vision to create impactful visual stories.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        email: 'rajesh@thenextframe.in',
        linkedin: 'https://linkedin.com/in/rajeshkumar',
        order: 1,
      },
    }),
    prisma.teamMember.upsert({
      where: { id: 'team-2' },
      update: {},
      create: {
        id: 'team-2',
        name: 'Priya Sharma',
        role: 'Head of Production',
        bio: 'Priya brings exceptional organizational skills and creative insight to every project, ensuring seamless production workflows.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        email: 'priya@thenextframe.in',
        linkedin: 'https://linkedin.com/in/priyasharma',
        order: 2,
      },
    }),
    prisma.teamMember.upsert({
      where: { id: 'team-3' },
      update: {},
      create: {
        id: 'team-3',
        name: 'Arjun Mehta',
        role: 'Lead Cinematographer',
        bio: 'Award-winning cinematographer with a keen eye for visual storytelling and technical excellence.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        email: 'arjun@thenextframe.in',
        instagram: 'https://instagram.com/arjunmehta',
        order: 3,
      },
    }),
    prisma.teamMember.upsert({
      where: { id: 'team-4' },
      update: {},
      create: {
        id: 'team-4',
        name: 'Sneha Patel',
        role: 'Post-Production Supervisor',
        bio: 'Sneha oversees all post-production operations, from editing to color grading, ensuring every frame is perfect.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
        email: 'sneha@thenextframe.in',
        linkedin: 'https://linkedin.com/in/snehapatel',
        order: 4,
      },
    }),
  ]);
  console.log('✅ Team members created:', teamMembers.length);

  // Create Testimonials
  const testimonials = await Promise.all([
    prisma.testimonial.upsert({
      where: { id: 'testimonial-1' },
      update: {},
      create: {
        id: 'testimonial-1',
        name: 'Vikram Singh',
        role: 'Marketing Director',
        company: 'Brand X',
        content: 'TheNextFrame transformed our brand vision into a stunning visual campaign. Their creativity and professionalism exceeded our expectations. The team understood our brand perfectly and delivered exceptional results.',
        rating: 5,
        featured: true,
        order: 1,
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-2' },
      update: {},
      create: {
        id: 'testimonial-2',
        name: 'Ananya Reddy',
        role: 'CEO',
        company: 'TechStart Inc.',
        content: 'Working with TheNextFrame was an absolute pleasure. They captured the essence of our company culture and created a video that truly represents who we are. Highly recommended!',
        rating: 5,
        featured: true,
        order: 2,
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-3' },
      update: {},
      create: {
        id: 'testimonial-3',
        name: 'Karan Malhotra',
        role: 'Independent Artist',
        company: 'Indie Records',
        content: 'The music video TheNextFrame created for me was beyond my imagination. They brought my artistic vision to life with incredible attention to detail and creative flair.',
        rating: 5,
        featured: true,
        order: 3,
      },
    }),
    prisma.testimonial.upsert({
      where: { id: 'testimonial-4' },
      update: {},
      create: {
        id: 'testimonial-4',
        name: 'Meera Kapoor',
        role: 'Brand Manager',
        company: 'Style Co.',
        content: 'Our social media engagement skyrocketed after TheNextFrame created our content strategy. Their understanding of digital platforms and visual storytelling is unmatched.',
        rating: 5,
        featured: false,
        order: 4,
      },
    }),
  ]);
  console.log('✅ Testimonials created:', testimonials.length);

  // Create FAQs
  const faqs = await Promise.all([
    prisma.fAQ.upsert({
      where: { id: 'faq-1' },
      update: {},
      create: {
        id: 'faq-1',
        question: 'What types of video production services do you offer?',
        answer: 'We offer a comprehensive range of video production services including commercial production, corporate videos, music videos, documentaries, social media content, and animation/motion graphics. Each service is tailored to meet your specific needs and objectives.',
        category: 'Services',
        order: 1,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-2' },
      update: {},
      create: {
        id: 'faq-2',
        question: 'How long does a typical video production project take?',
        answer: 'Project timelines vary based on complexity and scope. A simple corporate video might take 2-3 weeks, while a commercial or music video could take 4-8 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.',
        category: 'Process',
        order: 2,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-3' },
      update: {},
      create: {
        id: 'faq-3',
        question: 'What is your pricing structure?',
        answer: 'Our pricing is project-based and depends on factors like video length, complexity, crew size, equipment needs, and post-production requirements. We provide detailed quotes after understanding your specific requirements during our initial consultation.',
        category: 'Pricing',
        order: 3,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-4' },
      update: {},
      create: {
        id: 'faq-4',
        question: 'Do you handle the entire production process?',
        answer: 'Yes, we offer end-to-end production services. This includes concept development, scriptwriting, pre-production planning, filming, post-production (editing, color grading, sound design), and final delivery in your required formats.',
        category: 'Process',
        order: 4,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-5' },
      update: {},
      create: {
        id: 'faq-5',
        question: 'Can you work with our existing brand guidelines?',
        answer: 'Absolutely! We work closely with your brand guidelines to ensure all visual content aligns with your brand identity. We can also help develop or refine visual guidelines specifically for video content if needed.',
        category: 'Services',
        order: 5,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-6' },
      update: {},
      create: {
        id: 'faq-6',
        question: 'What equipment do you use?',
        answer: 'We use industry-standard professional equipment including cinema cameras (RED, ARRI, Blackmagic), professional lighting, grip equipment, and state-of-the-art audio recording gear. Our post-production suite includes the latest software for editing, color grading, and visual effects.',
        category: 'Equipment',
        order: 6,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-7' },
      update: {},
      create: {
        id: 'faq-7',
        question: 'Do you offer revisions?',
        answer: 'Yes, we include revision rounds in our project scope. Typically, we offer 2-3 rounds of revisions to ensure the final product meets your expectations. Additional revisions can be accommodated at an agreed rate.',
        category: 'Process',
        order: 7,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-8' },
      update: {},
      create: {
        id: 'faq-8',
        question: 'Can you handle projects outside of India?',
        answer: 'Yes, we have experience working on international projects and can coordinate productions across different locations. We have a network of trusted partners and crew members in various countries to ensure smooth execution.',
        category: 'General',
        order: 8,
      },
    }),
  ]);
  console.log('✅ FAQs created:', faqs.length);

  // Create Blog Posts
  const blogPosts = await Promise.all([
    prisma.blogPost.upsert({
      where: { slug: 'the-art-of-visual-storytelling' },
      update: {},
      create: {
        title: 'The Art of Visual Storytelling in Video Production',
        slug: 'the-art-of-visual-storytelling',
        excerpt: 'Discover the key elements that make visual storytelling compelling and how to apply them in your video projects.',
        content: `# The Art of Visual Storytelling in Video Production

Visual storytelling is at the heart of every great video production. It's not just about capturing beautiful images – it's about weaving those images into a narrative that resonates with your audience.

## Understanding Your Audience

Before you pick up a camera, you need to understand who you're creating for. What are their pain points? What inspires them? What keeps them engaged?

## The Three-Act Structure

Even the shortest videos benefit from a clear structure:

1. **Setup**: Introduce the context and characters
2. **Confrontation**: Present the challenge or opportunity
3. **Resolution**: Show the transformation or solution

## Visual Language

Every frame communicates something. Consider:

- **Composition**: How elements are arranged in the frame
- **Lighting**: The mood and atmosphere you create
- **Color**: The emotional palette of your story
- **Movement**: Camera motion and pacing

## Conclusion

Great visual storytelling requires both technical skill and emotional intelligence. At TheNextFrame, we combine both to create videos that don't just look good – they feel right.`,
        coverImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200',
        tags: ['Storytelling', 'Video Production', 'Creative'],
        category: 'Production Tips',
        readTime: 5,
        published: true,
        featured: true,
        publishedAt: new Date('2024-01-15'),
        authorId: admin.id,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'choosing-right-video-format-for-social-media' },
      update: {},
      create: {
        title: 'Choosing the Right Video Format for Social Media',
        slug: 'choosing-right-video-format-for-social-media',
        excerpt: 'A comprehensive guide to optimizing your video content for different social media platforms.',
        content: `# Choosing the Right Video Format for Social Media

Each social media platform has its own specifications and audience behaviors. Here's how to optimize your video content for maximum impact.

## Instagram

- **Reels**: 9:16 aspect ratio, up to 90 seconds
- **Feed Posts**: 1:1 or 4:5, up to 60 seconds
- **Stories**: 9:16, up to 15 seconds per slide

## YouTube

- **Standard**: 16:9 aspect ratio
- **Shorts**: 9:16, up to 60 seconds
- **Resolution**: 1080p minimum, 4K preferred

## LinkedIn

- **Feed Videos**: 1:1 or 16:9
- **Native uploads perform better than links
- **Subtitles are essential** – most viewers watch without sound

## TikTok

- **Format**: 9:16 vertical
- **Duration**: 15-60 seconds optimal
- **Hook viewers in first 3 seconds**

## Key Takeaways

1. Always optimize for mobile-first viewing
2. Add captions for accessibility and silent viewing
3. Create platform-specific versions when possible
4. Test and iterate based on analytics`,
        coverImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200',
        tags: ['Social Media', 'Video Marketing', 'Digital Strategy'],
        category: 'Marketing',
        readTime: 4,
        published: true,
        featured: false,
        publishedAt: new Date('2024-02-20'),
        authorId: admin.id,
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: 'behind-the-scenes-commercial-production' },
      update: {},
      create: {
        title: 'Behind the Scenes: What Goes Into a Commercial Production',
        slug: 'behind-the-scenes-commercial-production',
        excerpt: 'Take a peek behind the curtain and learn about the meticulous process of creating a professional commercial.',
        content: `# Behind the Scenes: What Goes Into a Commercial Production

Ever wondered what happens before, during, and after a commercial shoot? Let's break down the entire process.

## Pre-Production (2-4 weeks)

### Creative Development
- Client briefing and requirements gathering
- Concept development and storyboarding
- Script writing and approval

### Planning
- Location scouting
- Casting and talent booking
- Equipment and crew scheduling
- Permits and logistics

## Production (1-3 days)

### On Set
- Call sheets and crew coordination
- Hair, makeup, and wardrobe
- Lighting and camera setup
- Multiple takes and angles
- Client supervision and real-time feedback

## Post-Production (2-4 weeks)

### Editing Phase
- Assembly cut and rough cuts
- Client feedback rounds
- Color grading and correction
- Sound design and music
- Visual effects (if needed)
- Final master and deliverables

## The Investment

A quality commercial requires investment in:
- **Time**: Proper planning prevents poor performance
- **Talent**: Skilled crew makes all the difference
- **Equipment**: Professional gear ensures quality
- **Creativity**: Fresh ideas that resonate

The result? A commercial that doesn't just advertise – it connects.`,
        coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
        tags: ['Behind the Scenes', 'Commercial Production', 'Process'],
        category: 'Industry Insights',
        readTime: 6,
        published: true,
        featured: true,
        publishedAt: new Date('2024-03-10'),
        authorId: admin.id,
      },
    }),
  ]);
  console.log('✅ Blog posts created:', blogPosts.length);

  // Create Site Settings
  const siteSettings = await Promise.all([
    prisma.siteSetting.upsert({
      where: { key: 'site_name' },
      update: {},
      create: {
        key: 'site_name',
        value: 'TheNextFrame',
        type: 'string',
        group: 'general',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'site_tagline' },
      update: {},
      create: {
        key: 'site_tagline',
        value: 'Crafting Visual Stories That Inspire',
        type: 'string',
        group: 'general',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'contact_email' },
      update: {},
      create: {
        key: 'contact_email',
        value: 'hello@thenextframe.in',
        type: 'string',
        group: 'contact',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'contact_phone' },
      update: {},
      create: {
        key: 'contact_phone',
        value: '+91 98765 43210',
        type: 'string',
        group: 'contact',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'contact_address' },
      update: {},
      create: {
        key: 'contact_address',
        value: '123 Film Studio Lane, Andheri West, Mumbai, Maharashtra 400053',
        type: 'string',
        group: 'contact',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'social_instagram' },
      update: {},
      create: {
        key: 'social_instagram',
        value: 'https://instagram.com/thenextframe',
        type: 'string',
        group: 'social',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'social_youtube' },
      update: {},
      create: {
        key: 'social_youtube',
        value: 'https://youtube.com/@thenextframe',
        type: 'string',
        group: 'social',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'social_linkedin' },
      update: {},
      create: {
        key: 'social_linkedin',
        value: 'https://linkedin.com/company/thenextframe',
        type: 'string',
        group: 'social',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'social_twitter' },
      update: {},
      create: {
        key: 'social_twitter',
        value: 'https://twitter.com/thenextframe',
        type: 'string',
        group: 'social',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'meta_description' },
      update: {},
      create: {
        key: 'meta_description',
        value: 'TheNextFrame is a premium media production company specializing in commercials, corporate videos, music videos, and documentaries. We craft visual stories that inspire and drive results.',
        type: 'string',
        group: 'seo',
      },
    }),
    prisma.siteSetting.upsert({
      where: { key: 'showreel_url' },
      update: {},
      create: {
        key: 'showreel_url',
        value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        type: 'string',
        group: 'general',
      },
    }),
  ]);
  console.log('✅ Site settings created:', siteSettings.length);

  // Create Client Logos
  const clientLogos = await Promise.all([
    prisma.clientLogo.upsert({
      where: { id: 'client-1' },
      update: {},
      create: {
        id: 'client-1',
        name: 'Brand X',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
        website: 'https://brandx.com',
        order: 1,
      },
    }),
    prisma.clientLogo.upsert({
      where: { id: 'client-2' },
      update: {},
      create: {
        id: 'client-2',
        name: 'TechStart Inc.',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
        website: 'https://techstart.com',
        order: 2,
      },
    }),
    prisma.clientLogo.upsert({
      where: { id: 'client-3' },
      update: {},
      create: {
        id: 'client-3',
        name: 'Style Co.',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
        website: 'https://styleco.com',
        order: 3,
      },
    }),
    prisma.clientLogo.upsert({
      where: { id: 'client-4' },
      update: {},
      create: {
        id: 'client-4',
        name: 'FinApp Solutions',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
        website: 'https://finapp.com',
        order: 4,
      },
    }),
    prisma.clientLogo.upsert({
      where: { id: 'client-5' },
      update: {},
      create: {
        id: 'client-5',
        name: 'Ocean Foundation',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
        website: 'https://oceanfoundation.org',
        order: 5,
      },
    }),
    prisma.clientLogo.upsert({
      where: { id: 'client-6' },
      update: {},
      create: {
        id: 'client-6',
        name: 'Indie Records',
        logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
        website: 'https://indierecords.com',
        order: 6,
      },
    }),
  ]);
  console.log('✅ Client logos created:', clientLogos.length);

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
