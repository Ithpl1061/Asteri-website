# Asteri Website - PostgreSQL Database Schema Details

This document outlines the database schema required for the Asteri website, scanned page by page as per the navigation menu.

## 1. Home Page (`/`)

The Home page features several sections that could be dynamic and driven by a database:

**Tables Needed:**

*   **`services`** (For "What We Do" section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `sequence_number` (VARCHAR) - e.g., "01", "02"
    *   `title` (VARCHAR) - e.g., "AI Consulting and Strategy"
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`industries`** (For "Industries We Serve" section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `icon_name` (VARCHAR) - To store the Lucide icon reference
    *   `title_line_1` (VARCHAR) - e.g., "Banking &"
    *   `title_line_2` (VARCHAR) - e.g., "Financial Services"
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`testimonials`** (For the Testimonials section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `author_name` (VARCHAR)
    *   `author_role` (VARCHAR)
    *   `content` (TEXT)
    *   `avatar_url` (VARCHAR)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`home_page_content`** (Optional: For CMS purposes)
    *   `id` (SERIAL PRIMARY KEY)
    *   `section_name` (VARCHAR) - e.g., "Hero", "About Us", "Quote"
    *   `heading` (TEXT)
    *   `subheading` (TEXT)
    *   `content_text` (TEXT)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

## 2. About Page (`/about`)

The About page introduces the core team and company mission/vision.

**Tables Needed:**

*   **`team_members`** (For the Visionaries section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `name` (VARCHAR) - e.g., 'Avinash Abnave'
    *   `role` (VARCHAR) - e.g., 'Chief Executive Officer'
    *   `experience` (TEXT) - e.g., '10+ years of experience...'
    *   `image_url` (VARCHAR) - Path to the image
    *   `linkedin_url` (VARCHAR)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`about_page_content`** (Optional: For CMS purposes to manage text blocks)
    *   `id` (SERIAL PRIMARY KEY)
    *   `section_name` (VARCHAR) - e.g., 'Mission', 'Vision', 'Culture & Values'
    *   `heading` (VARCHAR)
    *   `content_text` (TEXT)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)


## 3. Services Page (`/services`)

The Services page outlines core offerings, the working process, and technology partners.

**Tables Needed:**

*   **`service_details`** (For the Core Services section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `title` (VARCHAR) - e.g., 'Salesforce'
    *   `subtitle` (VARCHAR) - e.g., 'Consulting'
    *   `short_description` (TEXT)
    *   `full_description` (TEXT)
    *   `link_url` (VARCHAR)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`work_processes`** (For the 'How We Work' / 'Our Process' section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `step_number` (INTEGER)
    *   `title` (VARCHAR) - e.g., 'Understand', 'Design'
    *   `description` (TEXT)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`partners`** (For the Platforms & Partners grid)
    *   `id` (SERIAL PRIMARY KEY)
    *   `name` (VARCHAR) - e.g., 'AWS', 'Salesforce'
    *   `logo_url` (VARCHAR) - Path to partner logo image
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)


## 4. Solutions Page (`/solutions`)

The Solutions page details specific transformation and modernization solutions, along with their business outcomes.

**Tables Needed:**

*   **`solutions_details`** (For the Core Solutions/Services cards)
    *   `id` (SERIAL PRIMARY KEY)
    *   `title_main` (VARCHAR) - e.g., 'Enterprise Digital Transformation'
    *   `title_secondary` (VARCHAR) - For split text effects like 'Cloud Modernization'
    *   `subtitle` (VARCHAR) - e.g., 'Solutions'
    *   `short_description` (VARCHAR)
    *   `full_description` (TEXT)
    *   `link_url` (VARCHAR)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`solutions_outcomes`** (For the Outcomes section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `title` (VARCHAR) - e.g., 'Faster Processes', 'Reduced Costs'
    *   `description` (TEXT)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)


## 5. Industries Page (`/industries`)

The Industries page explores domain expertise across various sectors (like Banking & Financial Services) in detail.

**Tables Needed:**

*   **`industry_details`** (Detailed content for each industry)
    *   `id` (SERIAL PRIMARY KEY)
    *   `industry_id` (INTEGER) - Foreign key to `industries.id` (from Home page)
    *   `name` (VARCHAR) - e.g., 'Banking & Financial Services'
    *   `challenges_description` (TEXT) - e.g., 'High-stakes security and shifting regulatory landscapes.'
    *   `solutions_description` (TEXT) - e.g., 'Systems designed for resilience'
    *   `impact_description` (TEXT) - e.g., 'Where Security Holds, And Speed Doesn''t Break.'
    *   `image_url` (VARCHAR) - Path to industry specific image
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)


## 6. Partnership Page (`/Partnership`)

The Partnership page highlights the company's verified expertise and partner ecosystem.

**Tables Needed:**

*   **`partner_ecosystem_details`** (Detailed info for partners like Salesforce, ZionIT)
    *   `id` (SERIAL PRIMARY KEY)
    *   `partner_name` (VARCHAR) - e.g., 'Salesforce'
    *   `subtitle` (VARCHAR) - e.g., 'Certified Salesforce Partner'
    *   `description` (TEXT)
    *   `logo_url` (VARCHAR)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`partnership_principles`** (For the Partnership Principles section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `title` (VARCHAR) - e.g., 'Certified', 'Vetted'
    *   `description` (TEXT)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)


## 7. Products Page (`/products`)

The Products page lists authorized software that the company resells and implements, and the operational benefits they enable.

**Tables Needed:**

*   **`products`** (For the software products carousel)
    *   `id` (SERIAL PRIMARY KEY)
    *   `name` (VARCHAR) - e.g., 'Salesforce', 'Zoho', '1dox.ai'
    *   `type` (VARCHAR) - e.g., 'CRM & Cloud Platform'
    *   `description` (TEXT)
    *   `logo_url` (VARCHAR)
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`product_enablers`** (For the 'WHAT IT ENABLES' section)
    *   `id` (SERIAL PRIMARY KEY)
    *   `title` (VARCHAR) - e.g., 'Smarter Operations', 'Faster Decisions'
    *   `icon_name` (VARCHAR) - Lucide icon name, e.g., 'Settings', 'Timer'
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)


## 8. Case Studies Page (`/case-studies`)

The Case Studies page highlights real success stories, focusing on the situation, approach, and outcome.

**Tables Needed:**

*   **`case_studies`** (For the detailed case study panels)
    *   `id` (SERIAL PRIMARY KEY)
    *   `industry_name` (VARCHAR) - e.g., 'Banking & Financial Services'
    *   `situation_text` (TEXT)
    *   `approach_list` (JSONB or TEXT) - To store the bulleted list of approaches/metrics (e.g., '40% faster lead response time')
    *   `outcome_text` (TEXT)
    *   `image_url` (VARCHAR) - Path to associated image if any
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)


## 9. Blog Page (`/blog`)

The Blog page lists insights, featured posts, recent posts, and a newsletter subscription form.

**Tables Needed:**

*   **`blog_categories`**
    *   `id` (SERIAL PRIMARY KEY)
    *   `name` (VARCHAR) - e.g., 'Cloud', 'SAP & ERP', 'AI & Data'
    *   `created_at` (TIMESTAMP)

*   **`blog_posts`**
    *   `id` (SERIAL PRIMARY KEY)
    *   `category_id` (INTEGER) - Foreign key to `blog_categories.id`
    *   `title` (VARCHAR)
    *   `content` (TEXT)
    *   `image_url` (VARCHAR)
    *   `is_featured` (BOOLEAN) - Default FALSE
    *   `is_accent` (BOOLEAN) - For special styling, Default FALSE
    *   `created_at` (TIMESTAMP)
    *   `updated_at` (TIMESTAMP)

*   **`newsletter_subscribers`**
    *   `id` (SERIAL PRIMARY KEY)
    *   `email` (VARCHAR) - UNIQUE
    *   `subscribed_at` (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)


## 10. Contact Page (`/contact`)

The Contact page provides contact details and a form for users to send inquiries.

**Tables Needed:**

*   **`contact_messages`** (Stores form submissions)
    *   `id` (SERIAL PRIMARY KEY)
    *   `name` (VARCHAR)
    *   `email` (VARCHAR)
    *   `message` (TEXT)
    *   `status` (VARCHAR) - e.g., 'new', 'read', 'replied' (Default 'new')
    *   `submitted_at` (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)

*   **`company_settings`** (Optional: To store dynamic contact details)
    *   `id` (SERIAL PRIMARY KEY)
    *   `key` (VARCHAR) - e.g., 'contact_email', 'contact_phone_india', 'contact_address'
    *   `value` (TEXT)
    *   `updated_at` (TIMESTAMP)
