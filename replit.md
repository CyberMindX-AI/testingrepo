# Overview

NexTrend is an AI-powered content trend prediction platform designed for social media creators and marketers. The application helps users discover trending niches, analyze content performance, and generate viral content ideas across YouTube and TikTok platforms. Built with modern web technologies, it features a comprehensive dashboard for trend insights, keyword research tools, and AI-driven content recommendations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses **Next.js 15** with the App Router pattern for server-side rendering and client-side navigation. The component architecture is built around **React Server Components (RSC)** with TypeScript support for type safety. The UI is constructed using **shadcn/ui** components built on top of **Radix UI primitives**, providing accessible and customizable interface elements.

**Styling and Design System**: Tailwind CSS handles all styling with a custom design system that supports both light and dark themes using **next-themes**. CSS variables define the color palette, and the design follows a component-first approach with consistent spacing and typography using the Geist font family.

**Animation and Interactions**: **Framer Motion** provides smooth animations and micro-interactions throughout the application, including scroll-triggered animations, page transitions, and component state changes.

## State Management and Data Flow
The application currently operates with **frontend-only data simulation** for development purposes. User authentication is simulated using localStorage, and all trend data, keywords, and content examples are hardcoded. This architecture allows for rapid prototyping while maintaining clear separation between UI logic and data sources.

**Component Structure**: Pages are organized as feature-based components with shared UI components in the `/components` directory. Each major feature (Discover, Keywords, AI Trend, etc.) has its own page component with supporting sub-components.

## Authentication System
The authentication system is currently **simulated for frontend development**. User signup and login are handled through localStorage with basic session management. The system supports user profiles with email, name, and optional profile pictures.

**Navigation Logic**: The navbar dynamically changes based on authentication state - showing "Pricing, Contact, Support" for guests and "Home, Discover, Keywords, AI Trend, Upgrade" for authenticated users.

## Content Management
The application features multiple content discovery and analysis tools:
- **Keywords/Research Tools**: Enhanced search interface with platform filters and analytics
- **Discover Page**: Trending videos with advanced filtering by outlier score, views, and publishing date
- **AI Trend Prediction**: Machine learning insights for content trends
- **Content Examples**: Curated showcase of successful content strategies

## Responsive Design
The application is fully responsive with mobile-first design principles. Components adapt to different screen sizes using Tailwind's responsive utilities, and the navigation collapses to a hamburger menu on mobile devices.

# External Dependencies

## UI and Component Libraries
- **@radix-ui/react-***: Comprehensive set of accessible, unstyled UI primitives for building the component system
- **shadcn/ui**: Pre-built component library providing styled Radix UI components
- **lucide-react**: Icon library for consistent iconography throughout the application
- **class-variance-authority**: Utility for creating component variants with consistent styling
- **clsx** and **tailwind-merge**: Utilities for conditional CSS class management

## Animation and Interaction
- **framer-motion**: Advanced animation library for smooth transitions, scroll-triggered animations, and micro-interactions
- **embla-carousel-react**: Carousel component for content display

## Form Management
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for form schemas

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **input-otp**: One-time password input component
- **cmdk**: Command palette and search interface component

## Development Tools
- **TypeScript**: Static type checking for improved code quality
- **Tailwind CSS**: Utility-first CSS framework with autoprefixer for cross-browser compatibility
- **next-themes**: Theme switching functionality for dark/light mode support

## Future Backend Integration Points
The application is architected to easily integrate with backend services:
- User authentication and session management APIs
- Real-time trend data APIs for YouTube and TikTok
- AI/ML services for trend prediction and content analysis
- Database integration for user preferences and content history
- Payment processing for subscription upgrades