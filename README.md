# next-renders-nothing

This repository exist to demonstrate a bug in Next.js.

## To Reproduce

1. Install and run the development server, `npm install && npm run dev`
1. Visit [http://localhost:3000](http://localhost:3000)
1. Click any of the links to see the app break
1. Remove the `src/app/(default)/test/[...all]/loading.tsx` file and the app works again

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
