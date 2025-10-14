---
slug: what-manufacturing-needs-from-metrology
title: What Manufacturing Actually Needs from Metrology (And Rarely Gets)
author: Roberto Calvi
date: 2025-10-14
excerpt: I spent my first week in automotive manufacturing watching a $2M component sit on a cart for three days, waiting to be measured.
featuredImage: /images/blog/metrology-gap.png

tags:
  - metrology
  - manufacturing
  - automotive
  - quality
---

# What Manufacturing Actually Needs from Metrology (And Rarely Gets)

I've watched Body-in-Whites sit on carts for days, waiting to be measured.

A body fails a downstream quality check. Production is convinced it was within spec when it left their station. But to prove it, the body needs to go to the metrology lab—where it waits in queue behind dozens of other parts, gets measured in an 8-hour cycle, and generates a report that arrives 24 hours after the measurement completes.

By the time you have data, you've built at least 1,500 more bodies.

This isn't an exception. This is Tuesday.

Coming from a physics background where metrology is considered one of the most rigorous and demanding disciplines—where the ability to measure a phenomenon accurately determines whether you can even study it—I expected automotive metrology departments to operate with similar precision and urgency.

What I found instead was a massive gap between what manufacturing *needs* from metrology and what it actually *gets*.

## The Real Requirements

Let's start with what manufacturing engineering actually needs to do their job well:

**Fast feedback loops.** When a process drifts, hours matter. Sometimes minutes matter. Waiting days for measurement data means you're building thousands of parts based on assumptions while the evidence sits in a queue.

**Large sample sizes.** You can't understand process distributions from n=3. Yet small sample sizes have become standard in production metrology simply because throughput is so limited. We wouldn't accept making process decisions on three data points in any other engineering discipline, but we've normalized it in dimensional measurement.

**Measurement of actual process variation.** Not temperature drift between the shop floor and the metrology room. Not deformation from transport and fixturing. Not the difference between Monday morning and Friday afternoon lab conditions. The actual process variation happening on the manufacturing line.

**Accessibility.** When manufacturing engineers need to add measurement points to troubleshoot an issue, they shouldn't need to submit a request, wait for programming, and hope for availability three weeks from now.

## What Most Metrology Departments Deliver Instead

Now let's look at what typically gets delivered:

**Slow feedback.** Measurement cycles measured in hours or days. Queue times that push critical data out to next-week problem-solving meetings. By the time you have data, the process has already moved on.

**Tiny sample sizes.** Three repetitions has become an industry standard not because it's statistically adequate, but because it's all the throughput allows. We've let our measurement capacity dictate our statistical rigor rather than the other way around.

**Confounded measurements.** When you transport a part from a 85°F shop floor to a 68°F metrology lab, let it sit for temperature stabilization, fixture it on a granite table with clamping forces it will never see in assembly, you're measuring a different thing than what exists in production. The delta between production reality and metrology measurement includes temperature effects, transport deformation, and fixturing artifacts—none of which tell you about your actual manufacturing process.

**Limited accessibility.** Want to add measurement points? Submit a request. Need to check something quickly? Get in the queue. Troubleshooting an urgent issue? Hope the metrology department has availability and the programming bandwidth.

**Geographic separation.** The metrology lab is physically isolated from production—by necessity of environmental control, but with the unintended consequence of creating organizational and workflow separation. Metrology becomes a service department you send parts to, not a manufacturing capability you use.

## Why This Gap Exists

This isn't about bad people or lazy engineering. The gap exists because metrology departments were architected around the constraints of specific measurement technologies that required:

- Stringent environmental control (temperature, vibration, cleanliness)
- Highly skilled operators with specialized training
- Significant programming time for each measurement routine
- Careful handling and fixturing protocols

These constraints drove specific architectural decisions: centralized labs, specialized departments, batch-style workflows, limited accessibility.

And here's the thing—**these were the right decisions given those constraints.**

But when your architecture is optimized around technology constraints rather than manufacturing needs, you end up with a metrology system that technically works but systematically underserves its actual purpose.

## The Questions Worth Asking

I'm not suggesting there's a simple fix or that this problem is easy. But I think it's worth asking:

**What would metrology look like if we designed it around manufacturing requirements first, and technology constraints second?**

What if we started with:

- Feedback loops measured in minutes, not days
- Sample sizes of 30+ as standard practice, not aspiration
- Measurement happening at process temperature, in process location
- Operators empowered to add measurement points as needed
- Metrology integrated into production flow rather than separated from it

And then asked: what technology architecture would enable that?

Some of you reading this have already started asking these questions. You've felt the friction of waiting for metrology data while production keeps running. You've made decisions with inadequate sample sizes because that's what was available. You've suspected that some of your measurement variation is temperature artifact, not process variation.

**The gap between what manufacturing needs and what metrology delivers isn't inevitable. It's a design choice we've inherited and haven't questioned.**

Over the coming weeks, I'll be exploring what happens when you do question it—what modern metrology architecture can look like when you flip the constraints, what the economics actually show when you calculate true total cost of ownership, and how some manufacturing organizations are already making this transition.

But first, I'm curious: **What does the gap look like in your organization? Where does metrology become the bottleneck instead of the enabler?**

---

*This is part 1 of a series on rethinking metrology architecture for modern manufacturing. Next: "The Hidden Cost of Metrology Bottlenecks."*