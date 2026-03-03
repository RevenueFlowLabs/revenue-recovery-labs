# revenue-recovery-labs

A Next.js landing page starter project for Revenue Recovery Labs.

## Setup

1. **Install dependencies**

```bash
npm install
```

2. **Environment Variables**

Create a `.env` file in the project root with the following keys (already provided in example):

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
LEMON_SQUEEZY_API_KEY=...
```

3. **Run development server**

```bash
npm run dev
```

4. **Build & start**

```bash
npm run build
npm start
```

## Project Structure

- `pages/` – Next.js pages.
- `components/` – Reusable React components (includes `LandingPage.jsx`).
- `styles/` – Tailwind CSS configuration and global styles.
- `.env` – environment configuration (ignored by git).

## Notes

This project uses Tailwind CSS and imports icons from `lucide-react`. Adjust or extend as needed.