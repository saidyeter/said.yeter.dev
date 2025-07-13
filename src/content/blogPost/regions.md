---
title: "Regions in C#"
desc: 'Are regions really terrible?'  
date: '2025-07-13 20:00'
tags:
  [
    "C#", "Regions"
  ]
order: 7
---

Hey there! I saw that a video about Regions in C# by Nick Chapsas. I thought it would be great for me to write a blog post about it.

![Nick's YouTube Video](/assets/regions/yt-thumbnail-nick.png)

Video is : https://youtu.be/c2FUIh1UWUQ

First and foremost, he started to the video by saying how much he hated regions and he mostly talks about how it looks bad. This felt that he looks at to the regions by feeling style perspective more than technical reasons.

Before my takes, I should say that I strongly disagree with him.

> [01:55](https://youtu.be/c2FUIh1UWUQ?t=115): But the fact that I added a region hides the fact that I have done something wrong and it doesn't encourage me to go ahead and fix it. ...

As he said the problem is not the region, the problem is the wrong code. We all have worked before with messy codes. When I want to change an if statement in a thousands of lines of a cs file, why would I distract myself with unrelated code or definitions on the file?

> [04:30](https://youtu.be/c2FUIh1UWUQ?t=270): ... in fact the regions here do act as comments that's really what they are but in a different way and the collapsibility even here does not really exist ...

As he said here the regions are like comments. If I had an ability collapse a comment why whould not I use it? 

I m not defending the unnecessary comments like 'this is a constructor' on top of a constructor or 'this is someManager' on 'public SomeManager SomeManager { get; set; }' line. 

```csharp
// this is someManager
public SomeManager SomeManager { get; set; }

// or 

// this is a constructor
public SomeManager()
{
  // ..
}
```

I m also not defending putting single line of property in 'properties' region.
```csharp
#region fields
private readonly IConfiguration _configuration;
#endregion
```
And I m not defending the messy code.

I m defending hiding unrelated code in the region scope outside of my task scope.  
Because not all of us are writing the code from scratch. At least me. I m mostly making changes on existing code.  

If you might want to say 'bro, fix your code instead of putting regions'. This is unrealistic.  
This can go far away from region topic. But let me just say these: You wont always have time and opportunity to refactor and split into proper methods. When you get a chance to make refactor, you wont always have tests cover all scenarios or you wont always have people to test. You wont even have people know business always.  
Again this can go far away from region topic.  

But I m glad I have region.  

Here is a scenario: You have a class, there are 10-15 fields, one constructor and all fields are initialized in the constructor. Why would not I hide them, seeing them is meaningless while you are working on a single method. 

```csharp
public class BillService 
{
    #region fields
    private readonly ILogger<BillService> _logger;
    private readonly IConfiguration _configuration;
    private readonly IAccountService _accountService;
    private readonly ISubscriptionService _subscriptionService;
    private readonly IPaymentService _paymentService;
    private readonly IMessagePublisherService _messagePublisherService;
    private readonly IUserService _userService;
    private readonly INotificationService _notificationService;
    private readonly IBillRepository _billRepository;
    private readonly IThirdPartyManager _thirdPartyManager;
    private readonly IUtilityService _utilityService;
    private readonly IRateLimitService _rateLimitService;
    #endregion

    #region ctor
    public BillService(
        ILogger<BillService> logger,
        IConfiguration configuration,
        IAccountService accountService,
        ISubscriptionService subscriptionService,
        IPaymentService paymentService,
        IMessagePublisherService messagePublisherService,
        IUserService userService,
        INotificationService notificationService,
        IBillRepository billRepository,
        IThirdPartyManager thirdPartyManager,
        IUtilityService utilityService,
        IRateLimitService rateLimitService)
    {
        _logger = logger;
        _configuration = configuration;
        _accountService = accountService;
        _subscriptionService = subscriptionService;
        _paymentService = paymentService;
        _messagePublisherService = messagePublisherService;
        _userService = userService;
        _notificationService = notificationService;
        _billRepository = billRepository;
        _thirdPartyManager = thirdPartyManager;
        _utilityService = utilityService;
        _rateLimitService = rateLimitService;
    }
    #endregion

    #region methods
    // all methods 
    #endregion
}
```
Here is the gist: https://gist.github.com/saidyeter/6d81b84944bf289d31f6da4648fd3e36

I hope it is helpful and fun to read. Thank you for reading. 

Said

