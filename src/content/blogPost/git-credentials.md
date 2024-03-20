---
title: "Git Credentials"
desc: 'Configuring Git Credentials on new machine'
date: '2024-01-29 01:53'
tags:
  [
    "Git",
    "Credential",
    "Access Token",
  ]
order: 1
---

🥳 This is my first blog post 🎉

Hey there. 
Recently, I installed Linux Mint on my work computer. I struggled to configure my Git credentials for my company's self-hosted Gitlab.  

*I intentionally avoid using SSH keys, because my it-guy-brother said to me 'There can be a problem in the future if you use SSH keys for Gitlab and if you want to connect your work machine using SSH.'. So, I didn't even try :)*

On every push/pull/clone, I needed to write my username and password (or my personal access token that I created on 2nd step)

Anyway, here is how I solved it: 
- I went to 'my Gitlab profile' > 'Access Tokens' page (`custom-gitlab-domain.com/-/user_settings/personal_access_tokens`)
- I clicked the 'Add new token' button and selected read_repository and write_repository. I wrote a name for the token. *Let's say `my-pc`*. I set expiration date. And finally, I clicked the 'Create personal access token' button. *Let's say it is `my-token`*  

*Don't forget to copy the access token, because you won't be able to see it again.*


---

Edit : I forgot the most important part. You need to tell store credentials to git. To do that run this on terminal :  `git config --global credential.helper store` 

---


- I opened a terminal window and tried to clone a repo
- This time, Instead of my username, I used the name of token that I created  *which is `my-pc` from this example*
- And I used the token for password *which is `my-token` from this example*
And my problem is resolved. 

*Quick disclaimer: The personal access token is stored in `.git-credentials` file in HOME folder as plain text. So, **use at your own risk***

Thanks for reading. I hope it is helpful.

Said