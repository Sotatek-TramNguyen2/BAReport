# REQUEST FOR PROPOSAL (RFP) (V2)

**Project:** Automated AI Listing Manager & Ecosystem Integration | DADA Real Estate

## Company Details

- **Company Name:** DADA REAL ESTATE
- **Email:** hello@dadaestate.co
- **Phone:** +357 94042413

---

## 1. Objective

DADA Real Estate (Limassol, Cyprus) is looking to hire a professional IT infrastructure / AI automation contractor to build an automated AI Listing Manager.

The system must replace manual listing data entry into our core database, Qobrix CRM. The AI solution will capture data from multiple source streams, analyze text, plans, and files using LLMs and computer vision, and automatically create or update property profiles in the CRM.

---

## 2. Data Ingestion Sources

The AI system must monitor and ingest unstructured property documentation, text blocks, and media attachments from:

- **Google Drive:** Monitor designated folders with subfolders representing specific projects. Automatically assign files to correct projects.
- **Emails:** Parse property updates and attachments sent by developers and private owners.
- **WhatsApp & Telegram:** Internal bots or monitored chats where agents or developers drop photos, price lists, or layout text.
- **Web Scrapers & Portals:** Live data capturing from regional platforms (e.g., Bazaraki, BuySell, etc.) for commercial, residential, and mixed-use objects.
- **[NEW] Developer Website Scraping/Monitoring:** The system must dynamically monitor selected developer portals/websites to pull instant updates on price lists, newly released phases, and immediate live unit availability.

---

## 3. Core AI & CRM Engine Functions

- **LLM Entity Extraction:** Extract text metadata including area dimensions ($m^2$), bedroom/bathroom counts, price, precise asset type, and developer commission structures.
- **Computer Vision & OCR:** Scan architectural plans, read floor layouts, and auto-categorize photos into correct media asset slots (e.g., kitchen, sea view, bedroom) within Qobrix.
- **Dynamic Database Logic:** Intelligently determine whether to create a new project with multiple sub-units or update prices and availability ("Available", "Sold", "Reserved") on existing entities based on incoming developer spreadsheets or scraped website tables.

---

## 4. PLACY.AI Downstream Integration

The backend property data pipeline directly connects to our client acquisition funnel through Placy.ai as follows:

- **Lead Traffic:** Traffic from Meta Ads, WhatsApp, TikTok, YouTube, and our website is received by Placy.ai.
- **First Contact:** Placy.ai automatically registers the client, interviews them about their requirements (under human supervision), and passes this data as a Lead into Qobrix CRM.
- **Matching System:** Qobrix cross-references this new Lead against the inventory fields maintained by our AI Listing Manager and sends tailored matching options back to Placy.ai to show the client.
