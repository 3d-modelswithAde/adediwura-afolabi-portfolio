export const projects = [
  {
    id: 'intake-agent',
    title: 'Autonomous AI Intake & Lead Qualification Engine',
    client: 'Marcus Vance Automotive',
    type: 'Enterprise GTM Workflow & AI Automation',
    badge: 'Production GTM Architecture',
    badgeColor: 'gold',
    heroTag: 'Zero-Hallucination GTM Operations Pipeline',
    summary: 'An autonomous multi-channel intake pipeline that intercepts inbound inquiries, generates CRM tickets before any processing, extracts vehicle/service intent, and issues quotes or isolates sensitive inquiries to human review.',
    problem: 'Automotive centers lose high-intent leads when inquiries sit unmonitored for 4–12 hours, creating inconsistent pricing and lost revenue.',
    thinking: '"CRM First" invariant recording the HubSpot deal and dual tracking IDs before running AI extraction, coupled with an immutable deterministic pricing engine to prevent hallucinations.',
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
    outcome: '8 standardized automated test suites passing; triage turnaround slashed from hours to under 45 seconds.',
    isProduction: true
  },
  {
    id: 'voice-agent',
    title: 'Autonomous Real Estate Voice Agent',
    client: 'Gtext Homes / Luxury Real Estate',
    type: 'Voice AI & Conversational GTM Prototype',
    badge: 'Prototype & Commercial GTM Solution',
    badgeColor: 'gold',
    heroTag: 'Conversational Inbound & Outbound Qualification',
    summary: 'A sub-second latency conversational voice agent designed to intercept luxury real estate inquiries 24/7, qualify buyer budget and location preferences, and record structured outcomes directly into CRM pipelines.',
    problem: 'Diaspora buyers frequently call after hours; a 5-minute response delay drops lead conversion probability by 391%.',
    thinking: 'Natural voice telephony (ElevenLabs + Twilio) that qualifies budget tiers, handles objections, and alerts human advisors via Telegram with full call context.',
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
    outcome: 'Eliminates after-hours lead loss; packaged as an active commercial proposal for luxury property developers.',
    isProduction: false
  },
  {
    id: 'community-birthday',
    title: 'Community Operations & Engagement Engine',
    client: 'The Visionary Nation',
    type: 'Data Normalization & Lifecycle Operations',
    badge: 'Deployed & Active in Production',
    badgeColor: 'gold',
    heroTag: 'Multi-Sheet Deduplication & Human-in-the-Loop Engagement',
    summary: 'An autonomous community management system that cleaned and deduplicated 4 disconnected spreadsheets into a normalized master database, delivering automated 7:00 PM WAT daily celebrant digests with 1-click WhatsApp links.',
    problem: 'Member tracking scattered across 4 disparate spreadsheets caused administrative friction and missed lifecycle touchpoints.',
    thinking: 'Automated data deduplication and daily 7:00 PM WAT leadership digests with 1-click WhatsApp links and Canva Lora flyer specs for authentic human-in-the-loop engagement.',
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
    outcome: '100% elimination of manual date tracking; zero missed milestones; active daily production run in WAT/USC.',
    isProduction: true
  },
  {
    id: 'social-media-growth',
    title: 'Digital Growth & Social Conversion Track Record',
    client: "Ovie's Kitchen & Flowery Nectar Honey",
    type: 'Content Strategy & Direct Revenue Generation',
    badge: 'Documented Case Studies',
    badgeColor: 'gold',
    heroTag: 'The Foundation: Turning Attention into Business Revenue',
    summary: 'Before designing AI workflows, I mastered the frontlines of digital customer acquisition—generating 250+ online food orders for Ovie\'s Kitchen and restructuring social discovery for artisanal brands.',
    problem: 'Technical products and marketing assets fail if the builder does not understand the frontline psychology of buyer trust and friction.',
    thinking: 'High-volume video content combined with frictionless link-in-bio ordering funnels and keyword-targeted on-page search discovery.',
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
    outcome: 'Generated 250+ online orders in 3 months for Ovie’s Kitchen; established organic search discovery for Flowery Nectar Honey.',
    isProduction: true
  }
];
