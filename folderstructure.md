# Frontend Folder Structure

```text
frontend/
├── .env.local
├── .gitignore
├── app/
│   ├── (public)/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   └── terms/
│   │       └── page.tsx
│   ├── admin/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── auth/
│   │   ├── google/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── providers/
│   │       └── GoogleProvider.tsx
│   ├── dashboard/
│   │   ├── notes/
│   │   ├── page.tsx
│   │   ├── pyq/
│   │   └── quiz/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Auth/
│   │   └── loginPage.tsx
│   ├── admin/
│   │   └── AdminUsersPanel.tsx
│   ├── dashboard/
│   └── landing/
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── services/
│   └── admin.ts
├── tsconfig.json
└── types/
```

Generated or local-only folders that exist in the workspace but are not expanded here:

- `.git/`
- `.next/`
- `node_modules/`