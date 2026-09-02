---
name: birthday-message-generator
description: Crafts intentional, hyper-personalized birthday messaging packages across 4 distinct tone presets (Faith & Fellowship, Tech Mentor/Colleague, Client/Executive, and Inner Circle). Includes 1-on-1 direct messages, community group blasts, social flyer copy with Lora typography, and blessing notes.
---

# Birthday Message Generator & Celebrant Engagement Engine

## Overview
Transform routine birthday greetings into intentional, unforgettable relationship-building moments. This skill generates multi-channel messaging packages tailored to relationship depth, cultural resonance, and community context—eliminating generic, thoughtless copy.

---

## 🎨 Design & Typography Rules
- **Font Standard:** When providing copy for flyers, graphics, Canva templates, or document exports, **always specify Lora (Serif)** as the primary font family.
- **Audience Resonance:** Craft copy with emotional warmth, cultural empathy, and sincere gratitude. Avoid cold corporate clichés and performative fluff.

---

## 🎭 The 4 Tone Presets

### Preset 1: `fellowship_steward` (Faith & Fellowship Community)
- **Target Audience:** Church members, department stewards, fellowship volunteers, unit heads, choir, ushers, ministry leaders.
- **Core Theme:** Spiritual elevation, sincere appreciation of their sacrificial service, honor for their character, and prophetic blessings for the new year.
- **Language:** Uplifting, warm, scripture-inspired without sounding overly rigid or dry.

### Preset 2: `tech_mentor_colleague` (Product Marketing & Tech Network)
- **Target Audience:** Senior PMMs, Growth Marketers, Product Managers, tech founders, transition mentors, peer collaborators.
- **Core Theme:** Honoring their craft, intellectual generosity, career milestones, leadership impact, and encouragement for continued industry influence.
- **Language:** High-conviction, professional yet conversational, authentic peer admiration.

### Preset 3: `client_partner` (Business Clients & Executives)
- **Target Audience:** Real estate leaders (e.g. GText Homes executives), agency clients, business owners, enterprise stakeholders.
- **Core Theme:** Executive appreciation, celebrating visionary leadership, sustained business growth, and gratitude for trusted partnership.
- **Language:** Prestigious, refined, consultative, and value-affirming.

### Preset 4: `inner_circle` (Close Friends & Family)
- **Target Audience:** Best friends, close confidants, siblings, day-one supporters.
- **Core Theme:** Unfiltered vulnerability, deep gratitude for life shared together, playful humor, and celebrating surviving and thriving.
- **Language:** Deeply personal, relaxed, joyful, emotional, and authentic.

---

## 📦 Output Structure: The 4-Part Celebrant Package

Whenever triggered with a celebrant's profile (name, relationship, role/service, key memories), produce a complete package:

### 1. Direct 1-on-1 Message (WhatsApp / SMS / DM)
*Goal: Highly personal, intimate, crafted to make the celebrant feel uniquely seen and valued.*

### 2. Community Group Blast (WhatsApp / Telegram Group / Slack)
*Goal: High-energy public celebration that rallies the community to shower love, honor service, and celebrate the member.*

### 3. Social Flyer Copy & Canva Template Specs
*Goal: Visual-ready copy for Instagram stories, WhatsApp status, or printed flyers.*
- **Header / Headline:** Bold title (Font: **Lora Bold**).
- **Subheading / Quote:** Inspiring one-liner (Font: **Lora Italic**).
- **Flyer Body Copy:** 2–3 sentences capturing their essence.
- **Canva Style Recommendation:** Background palette, photo placement, and typography hierarchy (**Lora**).
- **Social Media Caption:** Caption complete with relevant hashtags.

### 4. Personal Blessing & Prayer Note
*Goal: A deeply resonant prophetic or heartfelt declaration for their upcoming year of life.*

---

## ⚡ Assistant Execution Protocol

When the user provides a celebrant's details or requests birthday copy:
1. **Identify the Preset:** Infer or ask if not specified (`fellowship_steward`, `tech_mentor_colleague`, `client_partner`, or `inner_circle`).
2. **Extract Key Anchors:** Name, gender, community role, specific contributions, or standout qualities.
3. **Generate the Full 4-Part Package:** Always present all 4 deliverables cleanly formatted in markdown.
4. **Provide 5-Second Customization Placeholders:** Enclose optional personalized memories in clear `[Placeholders]`.
