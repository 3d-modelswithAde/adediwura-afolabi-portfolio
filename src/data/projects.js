export const projects = [
  {
    id: 'intake-agent',
    title: 'Autonomous AI Intake & Triage Agent',
    client: 'Marcus Vance Automotive',
    type: 'Enterprise Workflow & AI Automation',
    badge: 'Production Architecture',
    badgeColor: 'gold',
    heroTag: 'Zero-Hallucination Operations Pipeline',
    summary: 'An autonomous multi-channel intake pipeline that intercepts inbound inquiries, generates CRM tickets before any processing, extracts vehicle/service intent, and issues quotes or isolates sensitive inquiries to human review.',
    problem: 'Automotive service centers routinely bleed revenue when inbound inquiries from forms, emails, and calls sit in unmonitored inboxes. Manual triage causes 4-12 hour response delays, inconsistent quote pricing, missing vehicle details, and legal risks when complaints or chargeback threats go unaddressed.',
    thinking: 'Rule #1 in business automation: Never let a customer record disappear because an AI model timed out. We established a strict "CRM Ticket First" invariant—generating the HubSpot ticket and dual tracking IDs (internal machine UUID and customer-facing TRK-XXXX) before running any AI logic. To prevent costly errors, pricing is strictly deterministic (zero hallucinations allowed on prices), and high-risk inquiries (legal threats, chargebacks) are quarantined immediately to #manual-review with all auto-replies suppressed.',
    solution: 'Built an end-to-end deterministic pipeline in n8n connecting HubSpot CRM, Gmail, Slack, and Google Sheets with multi-layer sensitivity filtering and structured JSON parsing.',
    technologies: [
      'n8n Orchestration',
      'HubSpot CRM API',
      'LLM Structured Extraction',
      'Slack Block Kit',
      'Google Sheets Audit Log',
      'Deterministic Pricing Matrix',
      'Gmail Integration'
    ],
    architecture: [
      {
        step: '01',
        title: 'Inbound Ingestion',
        actor: 'Customer',
        desc: 'Inquiry arrives via website form or customer email with vehicle details and service needs.',
        details: 'Raw payload captured and assigned unique idempotency hash.'
      },
      {
        step: '02',
        title: 'Fail-Safe CRM Ticket',
        actor: 'HubSpot',
        desc: 'Support ticket is generated immediately. Inquiries are NEVER lost, even during downstream outages.',
        details: 'Generates Dual-ID: inq_<uuid> (internal) + TRK-YYYYMMDD-XXXX (customer-facing).'
      },
      {
        step: '03',
        title: 'Sensitivity Quarantine',
        actor: 'Rule Filter',
        desc: 'Scans for legal threats, chargebacks, regulatory complaints, or property damage claims.',
        details: 'High-risk items route strictly to #manual-review; all automated replies are silenced.'
      },
      {
        step: '04',
        title: 'AI Structured Extraction',
        actor: 'AI / LLM',
        desc: 'Extracts clean Year, Make, Model, VIN, and normalized Service Code into structured JSON.',
        details: 'Uses strict system prompt and schema validation with graceful missing-info fallback.'
      },
      {
        step: '05',
        title: 'Deterministic Pricing',
        actor: 'Matrix Engine',
        desc: 'Calculates exact quote using an immutable tier table—zero LLM price hallucination.',
        details: 'Exotic/unknown vehicles automatically trigger a polite "Manual Quote Required" notice.'
      },
      {
        step: '06',
        title: 'Multi-Channel Dispatch',
        actor: 'Notification',
        desc: 'Sends formatted quote to customer, alerts advisors via Slack Block Kit, and logs to 25-col master audit.',
        details: 'Real-time master ledger update in Google Sheets for executive transparency.'
      }
    ],
    outcome: '8 standardized automated test suites passing (TC-01 through TC-08). Eliminates lead drop-off and cuts triage turnaround from hours to under 45 seconds.',
    isProduction: true
  },
  {
    id: 'voice-agent',
    title: 'Autonomous Real Estate Voice Agent',
    client: 'GText Homes / Luxury Real Estate',
    type: 'Voice AI & Telephony System',
    badge: 'Prototype & Commercial Solution',
    badgeColor: 'gold',
    heroTag: 'Conversational Inbound & Outbound Qualification',
    summary: 'A sub-second latency conversational voice agent designed to intercept luxury real estate inquiries 24/7, qualify buyer budget and location preferences, and record structured outcomes directly into CRM pipelines.',
    problem: 'In luxury real estate, a 5-minute delay in responding to an inquiry reduces lead conversion probability by 391%. High-net-worth buyers and diaspora clients frequently call outside regular office hours (WAT/EST/GMT). Human sales reps cannot be on call 24/7, leading to dropped high-ticket deals.',
    thinking: 'Buyers don\'t want robotic IVR menus ("Press 1 for Sales"). They want an intelligent, empathetic conversation that respects their time. The voice agent must sound natural, understand real estate vocabulary, ask structured qualifying questions (budget tier, investment vs. residence, preferred location), and seamlessly route qualified buyers to top human advisors with full conversation transcripts.',
    solution: 'Designed an integrated conversational telephony stack using ElevenLabs natural voice models, Twilio SIP trunking, n8n webhook listeners, and Google Sheets CRM sync with real-time Telegram sales rep notifications.',
    technologies: [
      'ElevenLabs Voice AI',
      'Twilio Telephony (SIP/Webhooks)',
      'n8n Workflow Automation',
      'Google Sheets CRM Sync',
      'Telegram Bot API',
      'Prompt Architecture'
    ],
    architecture: [
      {
        step: '01',
        title: 'Call Reception',
        actor: 'Twilio Telephony',
        desc: 'Inbound call connected or outbound qualification triggered upon web lead submission.',
        details: 'Instant sub-second connection with caller ID extraction.'
      },
      {
        step: '02',
        title: 'Voice Model Synthesis',
        actor: 'ElevenLabs',
        desc: 'Ultra-realistic, low-latency natural voice conversational agent greets the prospect.',
        details: 'Context-tuned prompt specifically trained on luxury property portfolios.'
      },
      {
        step: '03',
        title: 'Intent & Budget Qualification',
        actor: 'Voice AI',
        desc: 'Intelligently extracts investment intent, preferred estate, budget ceiling, and timeline.',
        details: 'Gracefully handles interruptions, accents, and clarification questions.'
      },
      {
        step: '04',
        title: 'Call Disposition & Logging',
        actor: 'n8n Webhook',
        desc: 'Call concludes and full audio transcript + structured JSON summary is posted to webhook.',
        details: 'Categorizes lead as High-Value, Warm, Nurture, or Unqualified.'
      },
      {
        step: '05',
        title: 'Advisor Alert & CRM Sync',
        actor: 'Telegram & Sheets',
        desc: 'Real-time notification sent to senior advisor with one-click dial link and CRM entry.',
        details: 'Advisor receives complete context before ever picking up the phone.'
      }
    ],
    outcome: 'Eliminates after-hours lead loss. Tested and packaged as a commercial proposal for luxury property developers seeking 24/7 client responsiveness.',
    isProduction: false
  },
  {
    id: 'community-birthday',
    title: 'Community Operations & Birthday Engine',
    client: 'The Visionary Nation',
    type: 'Data Normalization & Automated Operations',
    badge: 'Deployed & Active in Production',
    badgeColor: 'gold',
    heroTag: 'Multi-Sheet Deduplication & Human-in-the-Loop Digests',
    summary: 'An autonomous community management system that cleaned and deduplicated 4 disconnected spreadsheets into a normalized master database, delivering automated 7:00 PM WAT daily celebrant digests with 1-click WhatsApp links.',
    problem: 'The Visionary Nation community was tracking members across 4 separate spreadsheets with inconsistent phone formats, duplicate entries, and scattered birthdates. Administrators spent hours each week manually checking dates, missing birthdays, and struggling to coordinate celebratory flyers.',
    thinking: 'Automation must serve human relationships, not replace them with impersonal bot spam. Instead of spamming members with generic bot messages, the system was architected to be "Human-in-the-Loop": automate the tedious data consolidation and daily tracking, and deliver structured digests to leadership with one-click WhatsApp links and Canva flyer specifications using Lora typography.',
    solution: 'Built two active n8n workflows: Workflow 01 (Import, normalize Nigerian 234 phone numbers, deduplicate across phone/name, assign MEM-XXXX IDs) and Workflow 02 (Daily 7:00 PM WAT digest alerting for tomorrow and the upcoming 7-day rolling window, plus monthly master rosters).',
    technologies: [
      'n8n (Workflow ID: 4igs0PRJYCkWpISb)',
      'Google Sheets API (OAuth2)',
      'Google Drive & Forms',
      'Nigerian Phone Normalization (RegEx)',
      'Gmail Digest Automation',
      'Canva Lora Typography Standard'
    ],
    architecture: [
      {
        step: '01',
        title: 'Multi-Source Ingestion',
        actor: 'Google Sheets',
        desc: 'Extracts raw rows from 4 disconnected legacy sheets and guest welcome forms.',
        details: 'Handles multi-person cells, missing birth years, and varying date formats.'
      },
      {
        step: '02',
        title: 'Normalization Engine',
        actor: 'n8n RegEx Logic',
        desc: 'Standardizes Nigerian phone numbers to international 234XXXXXXXXXX format and DOB to DD/MM.',
        details: 'Deduplicates across phone number and Name+DOB combinations.'
      },
      {
        step: '03',
        title: 'Master Community Database',
        actor: 'Centralized Sheet',
        desc: 'Stores unique member records with MEM-XXXX identifiers as single source of truth.',
        details: 'Protected master tab with automated audit timestamps.'
      },
      {
        step: '04',
        title: 'Daily 7:00 PM WAT Trigger',
        actor: 'n8n Cron Scheduler',
        desc: 'Runs every evening at 19:00 WAT (18:00 UTC) to scan celebrants for tomorrow and the next 7 days.',
        details: 'Calculates rolling window so leadership has advance notice to design flyers.'
      },
      {
        step: '05',
        title: 'Executive Action Digest',
        actor: 'Gmail Dispatch',
        desc: 'Sends clean email digest with 1-click WhatsApp invite links directly to community leaders.',
        details: 'Zero outgoing bot spam: human leadership delivers genuine personalized fellowship.'
      }
    ],
    outcome: '100% elimination of manual date tracking; zero missed birthdays across the community; active daily production run in West Africa Time.',
    isProduction: true
  },
  {
    id: 'social-media-growth',
    title: 'Digital Growth & Social Media Track Record',
    client: "Ovie's Kitchen & Flowery Nectar Honey",
    type: 'Content Strategy & Revenue Generation',
    badge: 'Documented Case Studies',
    badgeColor: 'gold',
    heroTag: 'The Foundation: Turning Attention into Business Revenue',
    summary: 'Before designing AI workflows, I mastered the frontlines of digital customer acquisition—generating 250+ online food orders for Ovie\'s Kitchen and restructuring social discovery for artisanal brands.',
    problem: 'Building digital systems is pointless if you do not understand the human psychology of attention, trust, and conversion. Many technical builders create complex software that nobody buys because they have never operated on the frontlines of customer communication.',
    thinking: 'My social media management career taught me how businesses attract, communicate with, and convert customers online. Every workflow I build today is rooted in real-world commercial conversion paths, not theoretical software architecture.',
    solution: 'Designed end-to-end content calendars, produced 30 reels/month, streamlined bio link ordering funnels, and optimized on-page search discoverability.',
    technologies: [
      'Content Strategy & Direction',
      'Meta Business Suite',
      'TikTok Studio & CapCut',
      'Link-in-Bio Funnel Optimization',
      'On-Page Instagram SEO',
      'Canva Asset Production'
    ],
    architecture: [
      {
        step: '01',
        title: 'Customer Persona Audit',
        actor: 'Strategy',
        desc: 'Diagnosed audience friction and buying objections for local and delivery customers.',
        details: 'Identified hunger trigger moments and peak ordering hours.'
      },
      {
        step: '02',
        title: 'High-Volume Video Strategy',
        actor: 'Content Creation',
        desc: 'Produced ~30 appetizing food reels per month focused on preparation, freshness, and taste.',
        details: 'A/B tested hooks, audio trends, and visual pacing.'
      },
      {
        step: '03',
        title: 'Frictionless Ordering Funnel',
        actor: 'Conversion Setup',
        desc: 'Configured optimized link-in-bio ordering flow to minimize steps from video to paid checkout.',
        details: 'WhatsApp and direct DM ordering links configured.'
      },
      {
        step: '04',
        title: 'Performance Optimization',
        actor: 'Analytics',
        desc: 'Monitored engagement velocity and refined content calendar based on sales conversion data.',
        details: 'Iterated weekly on top-performing video formats.'
      }
    ],
    outcome: 'Ovie\'s Kitchen: 250+ online food orders and 2,000 accounts reached in the first 3 months of reviving inactive accounts. Flowery Nectar: Revamped page SEO that began consistently capturing direct Instagram purchase orders.',
    isProduction: true
  }
];
