---
title: "Next Auth with CredentialsProvider"
desc: 'Using custom fields with CredentialsProvider on Next-Auth'
date: '2024-02-17 16:05'
tags:
  [
    "Next",
    "Credential",
    "Auth",
  ]
order: 3
---

Hey there.  
Recently, two of my colleagues and I started a side project. For the front end, I decided to go with `Next.js`.  
I had trouble adding new fields to the session object while using custom auth API. Now, I want to talk about how I solved it.  

To demonstrate how I solved it, I created a brand new `Next.js` project using default options.

```bash
pnpm create next-app
```

![Create next app](/assets/next-auth/1.jpg)

Then I installed `next-auth` package.
> By the way, `NextAuth.js` announced that it is becoming `Auth.js`. For more, check out the documentation on [authjs.dev](https://authjs.dev).  

``` bash
pnpm add next-auth
```
A few steps are required to set up `NextAuth.js`.  

I created a route handler in `/app/api/auth/[...nextauth]/route.ts` path. And I implemented the `CredentialsProvider` like below:

```typescript
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // retrieve user from db or external api via fetch
        if (credentials?.username == "s@yeter.com" && credentials.password == "p@ssw0rd") {
          return {
            id: "user_id",
            email: "s@yeter.com",
            image: "https://someurl.com/syeter.png",
            name: "Said"
          }
        }
        return null
      }
    })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
```

Then I created some environment variables in `env.local`

```sh
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=somesecret
```

Then I created a client component in `components/session-provider.tsx`.  

```typescript
"use client";
export { SessionProvider } from "next-auth/react";
```  
Instead of importing directly from `next-auth` in `app/layout.tsx` file, I put it into another file. With that, I can mark this component as a client component and use this client component in a server component.

Then I wrapped all the website with `SessionProvider` in `app/layout.tsx` file.

```typescript
import { SessionProvider } from '../components/session-provider'
import { getServerSession } from "next-auth";
// ...
export default async function RootLayout
// ...

const session = await getServerSession();

// ...

<SessionProvider session={session}>
  {children}
</SessionProvider>
// ...
```

Then I created a public page (`app/public/page.tsx`) and a protected page(`app/protected/page.tsx`) to test.

Finally, I need to specify the protected page should be available only for signed-in users. For this, I created a middleware on root. 

```typescript
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/protected/:path*"],
};
```

Ok, let's try it.

When I go to `http://localhost:3000/public`, it shows me the page but when I try to go `http://localhost:3000/protected`, it redirects me to `http://localhost:3000/api/auth/signin?callbackUrl=%2Fprotected` and this page is built-in sign-in page.

![Built-in sign in page](/assets/next-auth/2.jpg)

Let's login with hardcoded credentials in `/app/api/auth/[...nextauth]/route.ts`. And I am able to see the protected page. Let's see what the authenticated user is.

I changed the `app/protected/page.tsx` to this: 

```typescript
import { getServerSession } from "next-auth";

export default async function ProtectedPage() {
  const session = await getServerSession()

  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center">
      <span>protected page</span>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
```

![Authenticated user](/assets/next-auth/3.jpg)

That is good. You can see all these changes in this [MR](https://github.com/saidyeter/next-auth-custom/pull/1/files)

## All right, what is the problem?
Let's imagine we have some other properties for authenticated users like `favouriteFruit`. Let's add the `favouriteFruit` field in `app/api/auth/[...nextauth]/route.ts` at line 21.  
Since this is a custom property, Typescript will not suggest the `favouriteFruit` field. But anyway, TS also did not care what I added.  

```typescript
// ...
return {
  id: "user_id",
  email: "s@yeter.com",
  image: "https://someurl.com/syeter.png",
  name: "Said",
  favouriteFruit: "Grape"
}
// ...
```

> You can see the changes [here](https://github.com/saidyeter/next-auth-custom/pull/2/files). In the previous commit, I couldn't send the `env.local` file, because it was ignored by `.gitignore`. You can see also a copy of `env.local` in the changes. 

All right, let's sign in again and see the `favouriteFruit` field on the protected page.  
We did not implement the sign-out functionality. So, to be able to sign out I went to `http://localhost:3000/api/auth/signout`.  

After signing in again: 

![Authenticated user without the favouriteFruit field](/assets/next-auth/4.jpg)

Here is the problem. There is no `favouriteFruit` field in the authenticated user in the session object.  

What I want to do is to be able to see the `favouriteFruit` field on a page whenever I call the `getServerSession()`.

## How I solved

To solve it I used callbacks in the `NextAuth.js` options. To satisfy the TS, I imported `AuthOptions` type.  
To be able to see the `favouriteFruit` field, first, I declared `next-auth` module.

```typescript
declare module "next-auth" {
  interface User {
    // This is for the Session definition below
    // and for the CredentialsProvider.authorize method return type
    favouriteFruit: string;
  }
  interface Session {
    // with this we will be able to see all 
    // fields from the user whenever the session is required
    user: User
  }
}
```
Then I added the callback methods:

```typescript
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import type { AuthOptions } from "next-auth"

declare module "next-auth" {
  interface User {
    favouriteFruit: string;
  }
  interface Session {
    user: User
  }
}

export const authOptions: AuthOptions = {
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = { ...session.user, ...token }
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.favouriteFruit = user.favouriteFruit
      }
      return token
    }
  },
  providers: [
    CredentialsProvider({ /* ... */ })
  ]
}
//  ...
```

Then I used the exported `authOptions` in every `getServerSession` method as a parameter.  
In `app/layout.tsx` :

```typescript
import { authOptions } from "./api/auth/[...nextauth]/route";
// ...
const session = await getServerSession(authOptions);
// ..
```

And a similar addition in `app/protected/page.tsx` :

```typescript
import { authOptions } from "../api/auth/[...nextauth]/route";
// ...
const session = await getServerSession(authOptions);
// ..
```

And here it is. I can see the `favouriteFruit` field on the page.  

![Authenticated user with the favouriteFruit field](/assets/next-auth/5.jpg)

But there is a slight inconvenience. Whenever I need to get the session object, I will need to import `authOptions` again.  
So, I created a helper function to solve it.  
At the end of the `/app/api/auth/[...nextauth]/route.ts` file, I added this: 

```typescript
// ...

import { getServerSession } from "next-auth"
export function auth() {
  return getServerSession(authOptions)
}
```

Now, I can safely use the `auth` helper method wherever I need to get the session object.  
I changed the `app/layout.tsx` file :
```typescript
import { auth } from "./api/auth/[...nextauth]/route";
// ...
const session = await auth();
// ...
```

And `app/protected/page.tsx` file:
```typescript
import { auth } from "../api/auth/[...nextauth]/route";
// ...
const session = await auth();
// ...
```
You can name the `auth` method whatever you want to, and you can put the method wherever you want to.  
You can see these final changes [here](https://github.com/saidyeter/next-auth-custom/pull/3/files). And, the final source code is [here](https://github.com/saidyeter/next-auth-custom).  

I hope it is helpful and fun to read. Thank you for reading. 

Said