# Trinity Lutheran College — Website

A full-stack Next.js 14 website for Trinity Lutheran College, Gambella, Ethiopia.
Built with the App Router, MySQL, NextAuth, Tailwind CSS, and TypeScript.

---

## Tech Stack

| Layer        | Technology                      |
|--------------|---------------------------------|
| Framework    | Next.js 14 (App Router)         |
| Styling      | Tailwind CSS + custom tokens    |
| Database     | MySQL 8 via `mysql2`            |
| Auth         | NextAuth v4 (credentials)       |
| File Uploads | Local filesystem (`/public/uploads`) |
| Language     | TypeScript                      |
| Fonts        | Playfair Display + Source Sans 3|

---

## Project Structure

```
src/
├── app/
│   ├── (public)/               ← Public website pages
│   │   ├── page.tsx            ← Home
│   │   ├── about/
│   │   ├── programs/[slug]/
│   │   ├── admissions/
│   │   ├── student-services/
│   │   ├── media/
│   │   └── contact/
│   ├── (admin)/                ← Admin dashboard (auth-gated)
│   │   └── admin/
│   │       ├── page.tsx        ← Dashboard
│   │       ├── programs/
│   │       ├── media/
│   │       ├── staff/
│   │       ├── messages/
│   │       ├── admissions/
│   │       └── content/
│   └── api/                    ← REST API routes
│       ├── auth/[...nextauth]/
│       ├── programs/
│       ├── media/
│       ├── staff/
│       ├── admissions/
│       ├── messages/
│       ├── content/
│       └── contact/
├── components/
│   ├── layout/                 ← Navbar, Footer
│   └── admin/                  ← Sidebar, Header, ProgramForm
├── lib/
│   ├── db.ts                   ← MySQL pool + helpers
│   ├── auth.ts                 ← NextAuth config
│   └── upload.ts               ← File upload utility
└── types/index.ts              ← Shared TypeScript types
```

---

## Quick Start

### 1. Clone & install

```bash
git clone <your-repo>
cd trinity-lutheran-college
npm install
```

### 2. Environment variables

```bash
cp .env.local.example .env.local
# Fill in your MySQL credentials and a NEXTAUTH_SECRET
```

Generate a secret:
```bash
openssl rand -base64 32
```

### 3. Database setup

```bash
# Create the database and run the schema
mysql -u root -p < sql/schema.sql
```

This seeds:
- Default super-admin user (`admin@trinitylc.edu.et` / `Admin@1234`)
- All programs, categories, admission requirements, student services, site content

### 4. Run development server

```bash
npm run dev
# → http://localhost:3000        (public website)
# → http://localhost:3000/admin  (admin dashboard)
```

---

## Admin Credentials (seed)

| Field    | Value                    |
|----------|--------------------------|
| Email    | admin@trinitylc.edu.et   |
| Password | Admin@1234               |

> **Change the password immediately after first login.**

---

## Admin Features

| Section            | Capabilities                                        |
|--------------------|-----------------------------------------------------|
| **Dashboard**      | Stats overview, quick actions, recent messages      |
| **Programs**       | Create / edit / delete / publish programs           |
| **Media Library**  | Upload images, videos, PDFs; bulk delete; filtering |
| **Staff**          | Add/edit/remove staff & faculty profiles            |
| **Admissions**     | Edit admission requirements by group                |
| **Messages**       | Inbox for contact form submissions                  |
| **Site Content**   | Edit hero, about, contact info, college stats       |

---

## Public Pages

| Route               | Description                     |
|---------------------|---------------------------------|
| `/`                 | Home — hero, programs, services |
| `/about`            | Mission, vision, history, staff |
| `/programs`         | All programs by category        |
| `/programs/[slug]`  | Program detail + documents      |
| `/admissions`       | Admission requirements + steps  |
| `/student-services` | Library, labs, internships      |
| `/media`            | Photo albums, videos, documents |
| `/contact`          | Contact form + map              |

---

## File Uploads

Uploaded files are saved to `/public/uploads/{images|videos|documents}/`.
For production, replace `src/lib/upload.ts` with an S3/R2/Cloudflare upload adapter.

---

## Deployment (Production)

```bash
npm run build
npm start
```

Recommended: Deploy on a VPS with Nginx as reverse proxy.
Set `NEXTAUTH_URL` to your production domain in `.env.local`.

---

## Customization

- **Colors & fonts** — edit `src/app/globals.css` CSS variables
- **Nav links** — edit `src/components/layout/Navbar.tsx`
- **Footer links** — edit `src/components/layout/Footer.tsx`
- **Admin sections** — add new routes under `src/app/(admin)/admin/`
