# NextJS App 02

Next.js **13.5.6** with Pages Router using Head component for metadata.

## Current Version
- **Next.js**: 13.5.6
- **React**: 18.2.0

## Breaking Changes for Next.js 15

### 1. App Router Migration
- Currently uses Pages Router (`pages/` directory)
- Should migrate to App Router (`app/` directory) for Next.js 15 best practices

### 2. Metadata API (PRIMARY ISSUE)
- Uses `<Head>` component from `next/head`
- **Fix**: Migrate to App Router and export `metadata` object
  ```tsx
  // Old (Pages Router):
  import Head from 'next/head'
  <Head><title>Page Title</title></Head>

  // New (App Router):
  export const metadata = { title: 'Page Title' }
  ```

## Installation
```bash
npm install
```

Part of **Exit Criteria Scenario 2** - Repo 2 of 10
