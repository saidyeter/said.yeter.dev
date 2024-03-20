---
title: "Karabiner Elements"
desc: 'Configuring keyboard shortcuts on MacOS'
date: '2024-03-21 00:42'
tags:
  [
    "Keyboard",
    "Shortcut",
    "MacOS",
  ]
order: 5
---

Hey there.  

I have been using a MacBook Air M1 2020 as my personal computer for over 2 years. And I am a .Net developer. Which means I mostly use Windows for my professional life. Nowadays I am trying to use a Linux distro as my daily driver, but I still need to use Windows sometimes. Even though, I can't use MacOS for business *because companies usually do not give a MacBook for a Net Developer*.  

## So, what?

As a software developer, I heavily use shortcuts. And, MacOS and the others have different shortcuts for common functionalities. For example, the copying is by `Control + C` in Windows and Linux. But in MacOS, it is `Command + C`. Same for `V`, `T`, `N`, `Z`, etc.  
Actually, in MacOS you can customize modifier keys, which means you can swap the `Control` and `Command` keys.  

## Isn't that enough?  

No, not for me. I heavily use navigation keys with modifiers also. For example, in Windows, I use `Control + Right Arrow` and `Control + Left Arrow` combinations to jump over words. In MacOS I need to use `Option(Alt) + Arrow Key` to do the same functionality. Same for `Backspace` and `Delete`.  

## What is the solution?

I think there is no complete solution for this problem, but `Karabiner Elements` solves a lot.  

Their website is [here](https://karabiner-elements.pqrs.org/).  

`Karabiner Elements` reads your keystrokes and manipulates in a way that you want to. 

A quick example here: 

```json
{
  "description": "Option + Backspace to Control + Backspace",
  "manipulators": [
    {
      "from": {
        "key_code": "delete_or_backspace",
        "modifiers": {
          "mandatory": [
            "control"
          ]
        }
      },
      "to": [
        {
          "key_code": "delete_or_backspace",
          "modifiers": [
            "left_option"
          ]
        }
      ],
      "type": "basic"
    }
  ]
}
```

As you can see above, this is a sample for a `Complex Modification`. It is pretty straightforward. You name it with the `description` field, and you put your manipulation(s) into the `manipulators` field. I added a manipulation that changes behavior from `Control + Backspace` to `Left Option + Backspace`. This means whenever I press the `Control + Backspace`, it runs the functionality that is provided by `Left Option + Backspace` in a MacOS computer.  

You can put conditions to run only in some apps or disable only in some apps. You can configure a functionality for holding down a key. And probably many more. You can read it [here](https://karabiner-elements.pqrs.org/docs/json/typical-complex-modifications-examples/).  

I made a lot of configuration, and am making more. I will put my configuration into my GitHub account after I feel it is fluent.  

Thanks for reading. I hope it is helpful.

Said