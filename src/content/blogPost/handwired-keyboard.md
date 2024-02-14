---
title: 'My new handwired keyboard'
desc: 'How I built my new handwired mechanical keyboard'
date: '2024-02-13 00:03'
tags:
  [
    "Keyboard",
    "Mechanical",
    "Handwired",
  ]
order: 2
---


Hey there. 
A couple of months ago, I built my new handwired mechanical keyboard.  
Here is the final result:

![Final result front](/assets/handwired-keyboard/f1.jpg)

![Final result rear](/assets/handwired-keyboard/f2.jpg)

This keyboard is my second handwired keyboard. Today, I want to talk about the physical part of this keyboard.  
This keyboard is a coalescence of the left and right parts of the [corne](https://github.com/foostan/crkbd) keyboard (a split keyboard). I preferred a single body for this layout. Since this is a custom keyboard, I needed to design the plate by myself. I found [this 3D file](https://www.thingiverse.com/thing:4911460) from Thingiverse, and I merged them and filled the spaces on [Tinkercad](https://www.tinkercad.com/).  

After a long tussling over, the final result was this:  

![Final result of 3D design](/assets/handwired-keyboard/1.jpg)

Then I printed the plate with my `Artillery Sidewinder-x2` 3D printer.

![Printed model](/assets/handwired-keyboard/2.jpg)

I used `Kailh Choc Robin` switches.  

![Kailh Choc Robin switches](/assets/handwired-keyboard/robin.jpg)

When I put all the switches into the plate, it looked like this: 

![Swithces are inserted, front](/assets/handwired-keyboard/3.jpg)

![Swithces are inserted, rear](/assets/handwired-keyboard/4.jpg)

As you can see here, on the back, each switch has 2 metal pins. Basically, what I needed to do was, connect the switch pins by columns and rows.  
I started with columns. I glued wires as seen below:

![First column](/assets/handwired-keyboard/5.jpg)

![Second column](/assets/handwired-keyboard/6.jpg)

![Third column](/assets/handwired-keyboard/7.jpg)

![Fourth column](/assets/handwired-keyboard/8.jpg)

After placing the wire, I bent the wire to solder easily.  

![The heat shrink tubes](/assets/handwired-keyboard/9.jpg)

The heat shrink tubes are for preventing shorts on intersections of columns and rows.

Then I prepared the diodes to connect the rows.  
Why diodes? To prevent the shorts while pressing multiple keys at the same time.  

I bent one leg of each diode. Because this makes soldering the diodes to the switches easier.

![Bended diodes](/assets/handwired-keyboard/10.jpg)

Huge thanks to my gorgeous wife. She did all the soldering.  
After soldering the left half it looked like this: 

![Soldered left part](/assets/handwired-keyboard/11.jpg)

The same process was applied to the right half.  

![Soldered right part](/assets/handwired-keyboard/12.jpg)

After soldering:  

![After soldering](/assets/handwired-keyboard/13.jpg)

I needed to trim the printed case a little bit to place microcontroller.

![After trimming](/assets/handwired-keyboard/14.jpg)

I used a [splinky](https://github.com/plut0nium/0xB2) microcontroller for this keyboard.  
Splinky is a `Pro-Micro/Elite-C replacement with USB-C and RP2040`

![Splinky](/assets/handwired-keyboard/15.jpg)

After attaching the microcontroller to the board: 

![Splinky placed 1](/assets/handwired-keyboard/16.jpg)

![Splinky placed 2](/assets/handwired-keyboard/17.jpg)

![Splinky placed 3](/assets/handwired-keyboard/18.jpg)

Huge shout out to my wife again, she soldered all the wires to the microcontroller. 

![Splinky soldered](/assets/handwired-keyboard/19.jpg)

Let's talk about keycaps. I printed [this](https://www.printables.com/model/640140-mbk-choc-low-profile-keycaps).  

![Keycaps 1](/assets/handwired-keyboard/20.jpg)

![Keycaps 2](/assets/handwired-keyboard/21.jpg)

![Keycaps 3](/assets/handwired-keyboard/22.jpg)

![Keycaps 4](/assets/handwired-keyboard/23.jpg)

As you can see above, there are some burrs on the keycaps. I soaked them in nail polish remover to remove the burrs for a night.

![Nail Polish Remover](/assets/handwired-keyboard/24.jpg)

It also softened the keycaps a bit. I did not quite like that result. But not bad.

After a while, I took the keycaps out of nail polish remover. Then I mounted them onto switches.

![Putting keycaps](/assets/handwired-keyboard/25.jpg)

After mounting all the keycaps, only the back case was left to finish.  
A friend of mine helped me with this. He cut a plexiglass to the exact measurements. 

![Plexiglass back 1](/assets/handwired-keyboard/26.jpg)
![Plexiglass back 2](/assets/handwired-keyboard/27.jpg)

I hope it is helpful and/or fun to read. Thanks for your readership. 

Said