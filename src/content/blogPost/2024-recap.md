---
title: "2024 recap"
desc: 'Configuring Git Credentials on new machine'
date: '2025-03-06 00:44'
tags:
  [
    "2024"
  ]
order: 6
---

Hey there! I saw that a couple of people I follow made a recap of the past year, and I thought it would be great for me to write one too. If I keep writing recaps, I can see how I change over time.

I already had this domain and personal website, and I was planning to write some blog posts. However, I struggled to find topics to write about. Then I decided to start small and let it grow from there. I'll admit, writing my thoughts publicly is challenging for me because everyone has opinions on everything. I’ve always been a thinker before speaking, and sometimes, sharing my thoughts feels cringe-worthy. It can be discouraging. 😄

I started writing in January 2024, but now I see that my last blog post was almost a year ago. I have another topic in mind, so hopefully, I’ll continue.

I was living in Fethiye. My wife was working there, but then we moved to Marmaris because she started a new job here. This brought some changes. Our new home is bigger than our place in Fethiye, with a better balcony, kitchen, and living room. I reserved a room as my office, where I have my desk, a 3D printer, a drawer, a bookshelf, and boxes for my tools. It’s modest, and I like it.

The modem is in the living room, and the WiFi signal was too weak for me to work in my office. I had an access point device, but I broke its antenna. We patched it, but the connection was inconsistent. Even when it wasn’t broken, it was slow. So, I did some research and bought a mesh WiFi system. It came with two devices, one next to the modem and the other in my office. I got the TP-Link Deco X60, a WiFi 6 router, and so far, I’m happy with it.

On my desk, I have my 4-year-old MacBook Air M1 (16GB RAM / 256GB storage), an LG 34" monitor, my third hand-wired/handmade keyboard, a Logitech MX Anywhere 3 mouse, a webcam, and a light.

![My Desk](/assets/2024-recap/my-desk.jpg)

A friend from a company I worked at a few years ago asked me to build a mobile app. He wrote the backend, and I wrote the mobile app. Delivering this app was a great experience for me. I used React Native with Expo and TypeScript. A few years ago, I wrote another React Native app without Expo because it didn’t seem stable or reliable at the time. But now, in my opinion, Expo is the only choice for writing a React Native app. You don’t need Android IDE, SDK, or runtime bloatware. You don’t even need Xcode unless you want to run the app on a simulator. Expo has an app called Expo Go, just install it on your phone, scan the QR code, and you're good to go. When you're ready, Expo can build and submit your app to the App Store. For Apple submission, you might need Xcode at some point, but it’s not mandatory for development.

Enough about Expo. Let me talk about the app I built. I won’t go over all the tech behind it, but I’ll highlight some issues I encountered:

We decided to save all notifications on the phone. I wrote a function to save notifications to SQLite when they arrived, but sometimes it worked, and sometimes it didn’t. I’m not sure if Expo’s notification handler was the issue. We should have made the notification page fetch notifications from an endpoint instead.

There’s a list page for people with profile pictures. If you use map inside a ScrollView, it starts downloading all the pictures at once, which is inefficient. You need to use a virtualized list so that items render only when they’re in the viewport. This way, only the pictures visible on the screen get downloaded, a huge performance win. I used FlashList.

React Query is the de facto choice for managing async state. Please don’t use useState + useEffect for API fetching. There are plenty of resources online explaining why.

Zod is a popular package for object validation. I used it in many side projects for form validation and felt like I should use it for everything. The backend had a Swagger JSON file, and I found this [website](https://openapi-zod-client.vercel.app/) that converts Swagger JSON into a REST client using Zod. But it used a package called Zodios, which I struggled to make work. Eventually, I decided to extract only the Zod schemas and write the fetch methods myself. This became hard to track, so I wrote a small script to generate all GET fetch methods. However, I had to manually adjust POST/PUT methods, which wasn’t fun. I should have done more research or reconsidered my approach.

Expo Update! It’s like magic. Normally, if you make a small UI change (e.g., updating a title or style), you’d need to create a new release, and users would have to update the app from the store. But with Expo Update, you can push small changes to Expo, and the app updates itself when launched. However, it doesn’t work for native dependencies or permission-related changes, like adding camera functionality.

I could talk more about the app, but that’s not the focus of this post.

Another thing I did in 2024 was trying Linux again as my daily driver. My home server runs Ubuntu 24, so I thought, why not use it as my main system? I replaced my MacBook Air with my home server (a mini PC with a 13th-gen Intel i5.)

I tried for a while but didn’t want to wipe everything and start fresh since I had configurations for my home server, including applications and a Samba server. So I attempted to use it as a daily driver alongside those setups. It was worth a shot.

Here’s the thing: if your hardware isn’t well-supported by Linux, it’s painful. After a few months, I faced some issues. My webcam, which supports 1080p, wouldn’t work at that resolution. Browsers consumed too much memory, slowing down my workflow. I also tried running Android apps using Waydroid, but they wouldn’t run smoothly, sometimes freezing my PC. Eventually, I gave up and switched back to my MacBook Air.

The main issue with my MacBook Air was storage. I was constantly running out of space. Xcode, Docker, Android SDK, and emulators took up a lot of room. Weirdly, over 100GB was allocated to “System Data”. I tried various online fixes, but nothing worked. So, I backed up my files and formatted my Mac. Turns out, macOS runs fine with just 20GB allocated for system data. Now, my MacBook Air is back on track, and I’m still using it. It works fine. I just have to be mindful of storage (and sometimes RAM usage, but not often).

I haven’t given up on Linux yet. Framework makes Linux laptops, and they recently [announced](https://www.youtube.com/live/-8k7jTF_JCg?si=21eLARHDIlyhQzF_&t=1811) new products, including a customizable keyboard module. I’m planning to buy one when it’s available.

Speaking of keyboards. I’m deep into this niche hobby. I’ve been using mechanical keyboards for four years. And for the past two years, I’ve been using hand-wired keyboards that I built with my wife’s help (she does the soldering 😄). I wrote another [blog post](/blog-post/handwired-keyboard) about my second hand-wired keyboard. In 2024, I built my third one, which I’ve been using for a couple of months. The layout is similar to my second one, but the new one has Bluetooth support.

![My 3rd handmade keyboard](/assets/2024-recap/3rd-kb.jpg)

In December 2024, I started another mobile app with the same friend. This time, I used openapi-fetch instead of Zod, which made working with APIs much easier. Also, we fixed the notification issue by fetching notifications from an endpoint instead of storing them locally. The project is still ongoing, so if I do a 2025 recap, I’ll mention it.

In my daily work, my primary focus has been migrating from IIS to Kubernetes. Most of my work revolved around writing Dockerfiles and GitLab CI/CD YAML files to support this transition.

One major challenge we faced was managing internal NuGet packages. Previously, these packages were stored in a Git repository, requiring developers to clone the entire repository just to access a few packages. This approach was inefficient, especially for CI/CD pipelines, as it forced downloads of hundreds of packages unnecessarily. To address this, we introduced Nexus as our internal NuGet store. I worked on automating pipelines to upload packages to Nexus whenever changes were made.

Another key improvement involved handling sensitive configuration data. In our IIS setup, credentials were stored in a JSON file, which wasn’t suitable for a reproducible pipeline since we couldn’t store sensitive data in the repository. To resolve this, we adopted HashiCorp Vault for securely managing credentials. My task involved extracting sensitive data from JSON files and storing it in Vault for the development and UAT environments. This migration is still in progress, and we aim to complete it by the end of the year.

One last thing for this blog post is, my company launched an Internal Growth program, and I enrolled in courses on AWS Lambda, Linux Administration, and frontend development. Having worked with AWS Lambda in my previous job, I wanted to deepen my knowledge, so I took another AWS course that goes beyond Lambda functions. The Linux course helped reinforce key concepts, as I’ve been using Linux for a while.

Overall, this program has been a great opportunity to expand my skills, and I plan to work on more projects this year to solidify my learning.

There you have it, thanks for reading!

Said