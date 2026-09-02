# Birthday Automation Workflow

- **Description:** End-to-end automated birthday management system (form intake, automated reminders, Canva template flyer generation, and intentional messaging).
- **Status:** Active
- **Key Dates / Deadlines:** Ongoing / Q3 2026.

## System Architecture & Components

### 1. n8n Automation Workflows
- **Workflow 01 (Import & Clean):** `01 - Import and Clean Community Members`
  - **n8n Workflow ID:** `jdeldNun8gEbNQ6f`
  - **Source Files:** 4 raw spreadsheets (`birthday list`, `STEWARDS DATABASE`, `GUEST WELCOME FORM`, `MEMBERS BIRTHDATES ARRANGED`).
  - **Normalization:** Cleans Nigerian phone numbers to `234XXXXXXXXXX`, normalizes gender, standardizes DOB formats (`DD/MM`), and splits multi-person cells.
  - **Deduplication:** Merges duplicates across phone and Name+DOB combinations, assigns unique `MEM-XXXX` IDs.
  - **Master Destination:** Google Sheets `Community Birthday Database` (`Members` tab, Doc ID: `1CdcOK2JoFiUr3bn3QI7fMzLzNIEZ8_9K4j81c0aw9aE`).
  - **Active Credentials:** Google Sheets OAuth2 API (`BpVAIzcMpxcpC9OB`).

- **Workflow 02 (Daily Detection & Dispatch):**
  - Daily cron trigger at 07:00 WAT.
  - Queries Google Sheets for today's celebrants and 3-day heads-up alerts.
  - Dispatches notifications / queue briefs for outreach.

### 2. Assistant Skill (`birthday-message-generator`)
- **Skill Location:** `.claude/skills/birthday-message-generator/SKILL.md` (also registered in `~/.agents/skills/`).
- **Typography Standard:** Strictly enforces **Lora** serif for all graphic flyer copy, headlines, and Canva templates.
- **4 Tone Presets:**
  1. `fellowship_steward` (Faith & Fellowship Community)
  2. `tech_mentor_colleague` (Product Marketing & Tech Network)
  3. `client_partner` (Business Clients & Executives)
  4. `inner_circle` (Close Friends & Family)
- **4-Part Output Package:**
  1. Direct 1-on-1 Message (WhatsApp / SMS / DM)
  2. Community Group Blast (WhatsApp / Telegram Group)
  3. Social Flyer Copy & Canva Template Specs (Lora font)
  4. Personal Blessing & Prayer Note
