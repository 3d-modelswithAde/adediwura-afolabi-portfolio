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

- **Workflow 02 (Daily 7PM WAT Digest & Monthly Master List):**
  - **n8n Workflow ID:** `4igs0PRJYCkWpISb` (Active & Deployed)
  - **Branch 1 (Daily 7:00 PM WAT Digest):** Triggers daily at 19:00 WAT (18:00 UTC). Evaluates celebrants celebrating tomorrow and in the next 3 days, compiling an action-oriented digest to `adediwura.ainaafolabi@gmail.com`.
  - **Branch 2 (Monthly Master Birthday Roster):** Triggers on the 1st of each month at 08:00 WAT (07:00 UTC). Queries `Members` tab for all members born in that month and sends a sorted chronological calendar report with 1-click WhatsApp invite links.
  - **Form Intake Polling:** Completely decommissioned per user directive to prevent unwanted notifications.
  - **Human-in-the-Loop:** Strictly sends zero outgoing WhatsApp messages automatically; all notifications route to Gmail so Adediwura can design flyers in Canva and send messages manually.

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
