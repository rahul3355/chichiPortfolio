# Marketing & Communications Portfolio - Setup Guide

A modern, responsive portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Homepage/Hero Section**: Professional introduction with call-to-action buttons
- **About Me**: Comprehensive background, approach, and career timeline
- **Featured Projects**: 4 detailed case studies with metrics and results
  - Utsav 2025 (Pagrav Dance Company)
  - Bicentenary Festival (University of Manchester)
  - TB Mukt Bharat Campaign (The Visual House)
  - ICCR International Cultural Delegation
- **Additional Work**: Social media designs and writing samples gallery
- **Skills & Tools**: Interactive display of technical and soft skills
- **Contact Section**: Contact form and professional links
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## Windows Setup Instructions

### Prerequisites

1. **Install Node.js** (version 18.17 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Run the installer and follow the prompts
   - Verify installation by opening Command Prompt and running:
     ```cmd
     node --version
     npm --version
     ```

### Installation Steps

1. **Navigate to the project directory**
   ```cmd
   cd path\to\chichiPortfolio\portfolio-site
   ```

2. **Install dependencies**
   ```cmd
   npm install
   ```
   This will download all required packages (may take a few minutes)

3. **Run the development server**
   ```cmd
   npm run dev
   ```

4. **Open your browser**
   - Navigate to: http://localhost:3000
   - The site will automatically reload when you make changes

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Create production build |
| `npm start` | Run production build locally |
| `npm run lint` | Run ESLint to check code quality |

### Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Make your changes** to the files in:
   - `/app` - Main pages
   - `/components` - Reusable UI components
   - `/app/globals.css` - Global styles
3. **View changes** automatically in your browser at http://localhost:3000

### Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage (combines all sections)
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── Hero.tsx           # Homepage/Introduction
│   ├── About.tsx          # About Me section
│   ├── FeaturedProjects.tsx  # Project case studies
│   ├── AdditionalWork.tsx    # Work samples gallery
│   ├── Skills.tsx         # Skills & tools display
│   └── Contact.tsx        # Contact form & footer
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets (images, etc.)
├── components.json        # shadcn/ui configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

### Customization Guide

#### 1. Update Personal Information

**Hero Section** (`components/Hero.tsx`):
- Line 13: Update initials in the profile circle
- Line 18-24: Update name, title, and summary
- Lines 33-44: Update button links (CV, email, LinkedIn)

**About Section** (`components/About.tsx`):
- Lines 7-12: Update career timeline
- Lines 26-40: Update biography text

**Contact Section** (`components/Contact.tsx`):
- Line 85: Update email address
- Line 99: Update LinkedIn URL
- Line 108: Update location

#### 2. Add Your Own Images

Replace placeholder images by:
1. Adding images to the `/public` folder
2. Importing and using them in components:
   ```tsx
   import Image from "next/image"

   <Image
     src="/your-image.jpg"
     alt="Description"
     width={500}
     height={300}
   />
   ```

#### 3. Modify Colors/Theme

Edit `/app/globals.css`:
- Lines 46-79: Light mode colors
- Lines 81-113: Dark mode colors
- Line 47: Change border radius with `--radius`

#### 4. Add/Edit Projects

Edit `components/FeaturedProjects.tsx`:
- Lines 11-101: Project data array
- Each project includes: title, type, description, overview, actions, results, tools, color

### Building for Production

1. **Create production build**:
   ```cmd
   npm run build
   ```

2. **Test production build locally**:
   ```cmd
   npm start
   ```
   Then visit http://localhost:3000

3. **Deploy** to hosting platform:
   - **Vercel** (recommended): https://vercel.com
     - Connect your GitHub repository
     - Automatic deployments on every push
   - **Netlify**: https://netlify.com
   - **AWS Amplify**, **Azure**, **Google Cloud**, etc.

### Troubleshooting

**Port already in use**:
```cmd
# Kill process on port 3000
npx kill-port 3000
# Then restart dev server
npm run dev
```

**Module not found errors**:
```cmd
# Delete node_modules and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
```

**Build errors**:
```cmd
# Clear Next.js cache
rmdir /s /q .next
npm run build
```

**TypeScript errors**:
- Check for missing imports
- Ensure all required props are passed to components
- Run `npm run lint` for detailed error messages

### Next Steps

1. ✅ Review all sections and update placeholder content
2. ✅ Add your professional headshot and project images
3. ✅ Update contact information and social links
4. ✅ Test on different devices (mobile, tablet, desktop)
5. ✅ Deploy to hosting platform
6. ✅ Share your portfolio URL!

### Support & Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **shadcn/ui Components**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## License

This portfolio template is free to use and customize for personal or commercial projects.

Built with ❤️ using modern web technologies.
