# TheNextFrame.in - Project Context

## Project Overview

**TheNextFrame** is a full-stack web application for a premium media production company based in India. The platform showcases the company's services, portfolio, blog content, and provides administrative capabilities for content management.

### Key Information
- **Project Name**: TheNextFrame
- **Version**: 1.0.0
- **Domain**: thenextframe.in
- **Type**: Media Production Company Website
- **Target Market**: India (Mumbai-based)

## Technology Stack

### Frontend
- **Framework**: Next.js 15.1.0 (React 19.0.0)
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 11.15.0
- **UI Components**: Radix UI (Accordion, Dialog, Dropdown, Select, Tabs, Toast, etc.)
- **Icons**: Lucide React 0.468.0
- **State Management**: TanStack React Query 5.62.7
- **Forms**: React Hook Form 7.54.2 + Zod 3.24.1 validation
- **Themes**: next-themes 0.4.4 (Dark mode support)
- **Media Player**: React Player 2.16.0
- **File Upload**: React Dropzone 14.3.5
- **MDX**: next-mdx-remote 5.0.0 (for blog content)
- **Syntax Highlighting**: rehype-highlight 7.0.1
- **Date Handling**: date-fns 4.1.0
- **Notifications**: Sonner 1.7.1

### Backend
- **Runtime**: Node.js >=20.0.0
- **Database**: PostgreSQL (Prisma ORM 6.1.0)
- **Authentication**: NextAuth.js 5.0.0-beta.25 with Prisma Adapter
- **Email**: Resend 4.0.1
- **Image Processing**: Sharp 0.33.5
- **API Integration**: Gemini API (for AI image generation)

### Development Tools
- **Package Manager**: npm
- **Build Tool**: Next.js with Turbopack (dev mode)
- **Linting**: ESLint 9.17.0
- **Formatting**: Prettier 3.4.2 with Tailwind plugin
- **Database Tools**: Prisma Studio
- **Containerization**: Docker (docker-compose.yml provided)

## Project Structure

```
thenextframe/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Database seeding script
├── src/
│   ├── app/                   # Next.js 15 App Router pages
│   ├── components/            # React components
│   ├── lib/
│   │   ├── auth.ts           # NextAuth configuration
│   │   ├── prisma.ts         # Prisma client instance
│   │   ├── utils.ts          # Utility functions
│   │   ├── constants.ts      # App constants and configuration
│   │   └── validations/      # Zod validation schemas
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── assets/                    # Static assets and images
├── .env.example              # Environment variables template
├── docker-compose.yml        # Docker setup for PostgreSQL
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Database Schema

The application uses PostgreSQL with the following main entities:

### Core Models

1. **User** - Admin/Editor accounts with authentication
2. **Account** - OAuth provider accounts (NextAuth)
3. **Session** - User sessions
4. **VerificationToken** - Email verification tokens

### Content Models

5. **Service** - Production services offered
   - Fields: title, slug, description, icon, image, content (JSON), features, order

6. **PortfolioItem** - Project showcase
   - Fields: title, slug, description, thumbnail, videoUrl, images, client, category, tags, featured
   - Categories: COMMERCIAL, CORPORATE, MUSIC_VIDEO, DOCUMENTARY, SHORT_FILM, WEDDING, EVENT, SOCIAL_MEDIA, ANIMATION, OTHER

7. **BlogPost** - Blog/news articles
   - Fields: title, slug, excerpt, content (MDX), coverImage, tags, category, readTime, published, featured

8. **TeamMember** - Team profiles
   - Fields: name, role, bio, image, email, phone, social links

9. **Testimonial** - Client testimonials
   - Fields: name, role, company, content, image, rating, videoUrl, featured

10. **FAQ** - Frequently asked questions
    - Fields: question, answer, category, order

11. **ContactSubmission** - Contact form submissions
    - Fields: name, email, phone, company, subject, message, service, budget, status
    - Status: NEW, READ, REPLIED, ARCHIVED

12. **SiteSetting** - Dynamic site configuration
    - Fields: key, value, type, group

13. **ClientLogo** - Client logo showcase
    - Fields: name, logo, website, order

14. **MediaAsset** - Media library
    - Fields: filename, url, type, size, width, height, alt, caption, folder
    - Types: IMAGE, VIDEO, DOCUMENT, OTHER

### User Roles
- **ADMIN** - Full access
- **EDITOR** - Content management access

## Key Features

### Public Features
- Homepage with hero section and stats
- Services showcase
- Portfolio/work gallery with filtering
- Blog with MDX support
- Team member profiles
- Client testimonials
- FAQ section
- Contact form with budget selection
- Responsive design
- Dark mode support
- SEO optimized
- Video integration (YouTube/Vimeo)

### Admin Features
- Secure authentication (NextAuth)
- Dashboard with analytics
- Content management (CRUD operations)
- Services management
- Portfolio management
- Blog post editor with MDX
- Team member management
- Testimonial management
- FAQ management
- Contact submission tracking
- Site settings configuration
- Media asset management
- Image optimization

### Technical Features
- Server-side rendering (SSR)
- Incremental Static Regeneration (ISR)
- API routes for backend operations
- Form validation with Zod
- Image optimization (AVIF/WebP)
- Security headers
- Docker deployment ready
- Database migrations
- Seed data script
- Type-safe database queries

## Environment Variables

Required environment variables (see `.env.example`):

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Authentication secret
- `NEXTAUTH_URL` - Application URL
- `ADMIN_EMAIL` - Default admin email
- `ADMIN_PASSWORD` - Default admin password
- `GEMINI_API_KEY` - Google Gemini API key
- `RESEND_API_KEY` - Email service API key
- `RESEND_FROM_EMAIL` - Sender email address
- `NEXT_PUBLIC_SITE_URL` - Public site URL
- `NEXT_PUBLIC_SITE_NAME` - Site name
- `REVALIDATE_SECRET` - ISR revalidation secret
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `CLOUDINARY_*` - Cloudinary credentials (optional)

## Development Workflow

### Setup
```bash
npm install                    # Install dependencies
docker-compose up -d           # Start PostgreSQL
npm run db:generate            # Generate Prisma client
npm run db:push                # Push schema to database
npm run db:seed                # Seed initial data
npm run dev                    # Start dev server
```

### Database Commands
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes
- `npm run db:migrate` - Create and run migrations
- `npm run db:migrate:prod` - Deploy migrations (production)
- `npm run db:seed` - Seed database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:reset` - Reset database

### Development Commands
- `npm run dev` - Development server with Turbopack
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier

## Docker Setup

The project includes Docker Compose configuration with:
- PostgreSQL 16 (Alpine)
- pgAdmin 4 for database management

**Ports:**
- PostgreSQL: 5432
- pgAdmin: 5050 (admin@thenextframe.in / admin)

## Site Configuration

### Navigation
- Home, About, Services, Portfolio, Blog, FAQs, Contact

### Admin Navigation
- Dashboard, Services, Portfolio, Blog, Team, Testimonials, FAQs, Contacts, Settings

### Stats (Homepage)
- 500+ Projects Completed
- 150+ Happy Clients
- 10+ Years Experience
- 25 Awards Won

### Budget Options
- Under ₹50,000
- ₹50,000 - ₹1,00,000
- ₹1,00,000 - ₹3,00,000
- ₹3,00,000 - ₹5,00,000
- ₹5,00,000 - ₹10,00,000
- Above ₹10,00,000
- Not Sure

### Social Platforms
- Instagram
- YouTube
- LinkedIn
- Twitter

## Assets Directory

The `assets/` folder contains 15 Gemini-generated images for the media production website:

### Image Inventory

1. **film-production-studio.png** - Professional film studio set with crew, lights, and cinema camera
2. **professional-camera-rig.png** - Cinema camera on slider/dolly rig with professional setup
3. **film-strip-spiral.png** - Creative spiral film strip showing various production scenes
4. **video-editing-workstation.png** - Professional video editing setup with curved monitor and timeline
5. **services-icons-graphic.png** - Service offerings graphic (Branded Commercials, Corporate Films, Photography, Testimonials, Educational Videos, Animation, Product Demo, Social Media Shorts)
6. **movie-production-clapperboard.png** - Film production scene with clapperboard and crew
7. **corporate-boardroom-filming.png** - Corporate boardroom with camera equipment for filming
8. **interview-podcast-setup.png** - Cozy interview/podcast setup with cameras, lights, and seating
9. **animation-workstation.png** - Animation workspace with storyboards and character design
10. **animation-character-storyboard.png** - Detailed animation desk with character sheets and digital tablet
11. **product-photography-studio.png** - Professional product photography setup (black & white, minimalist)
12. **social-media-content-creation.png** - Ring light setup for social media content with phone recording
13. **film-equipment-director-chair.png** - Film equipment set with director's chair and professional gear
14. **dark-placeholder-1.png** - Dark placeholder image
15. **dark-placeholder-2.png** - Dark placeholder image

All images are AI-generated via Google Gemini API and themed around media production, filmmaking, video editing, animation, and content creation.

## Deployment

The application is configured for:
- **Standalone output** for Docker deployment
- **Optimized image handling** with multiple formats
- **Security headers** (X-Frame-Options, X-Content-Type-Options, etc.)
- **Cache control** for API routes
- **CDN support** for static assets

## Performance Optimizations

- Server Actions for form submissions
- Optimized package imports (lucide-react, framer-motion, react-query, date-fns)
- Responsive image sizes (640px to 3840px)
- Image format optimization (AVIF, WebP)
- React Strict Mode enabled
- Powered-by header disabled

## Security Features

- NextAuth.js authentication
- CSRF protection
- XSS prevention headers
- Content Security Policy
- Secure session handling
- SQL injection protection (Prisma ORM)
- Input validation (Zod schemas)

## API Integration

### Gemini API
- Used for AI image generation
- Configured in environment variables

### Resend API
- Email notifications
- Contact form submissions
- Admin alerts

### Optional: Cloudinary
- Image upload and storage
- CDN delivery
- Image transformations

## Future Considerations

- Google Analytics integration (optional)
- Enhanced SEO features
- Multi-language support
- Advanced analytics dashboard
- Payment integration for services
- Client portal for project tracking
- Real-time chat support
- Newsletter integration

---

**Last Updated**: April 2026
**Project Status**: Active Development
**Maintainer**: TheNextFrame Team
