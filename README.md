# Copper-Asana-Google Sheets Automation

This Google Apps Script project automates the integration between Copper CRM, Asana, and Google Sheets. It enables seamless creation and updating of Copper opportunities based on Asana project data, synchronizes custom fields and relationships, and logs actions for auditing.

## Features

- **Webhooks & API Integration:**  
  Handles incoming web requests to create or update Copper opportunities based on Asana project data.
- **Custom Field Sync:**  
  Syncs custom fields (lawyer, law firm, case details, etc.) between Asana and Copper.
- **Logging:**  
  Logs all actions and data to a specified Google Sheet.
- **Zapier Integration:**  
  Uses webhooks to trigger further automation in external systems.
- **Modular Functions:**  
  Separate scripts for setup, stage updates, and utility functions.

## File Overview

- `triggers.js` — Handles web requests and routes tasks.
- `createCopperSetup.js` — Creates Copper opportunities and syncs fields/relations.
- `UpdateStage.js` — Updates Copper opportunity stages.
- `utils.js` — Fetches Asana project data.
- `const.js` — Stores API keys, emails, custom field IDs, and webhook URLs (**replace with your own**).
- `Code.js` — Placeholder for custom functions.
- `appsscript.json` / `.clasp.json` — Project and deployment configuration.

## Setup

1. **Replace Placeholders:**  
   - Update all values in `const.js` marked as `YOUR_*` with your actual API keys, emails, custom field IDs, webhook URLs, and sheet IDs.
   - **Do not commit your real credentials to version control.**

2. **Google Apps Script Project:**  
   - Deploy the scripts as a new Apps Script project.
   - Set up necessary triggers and permissions.

3. **External Integrations:**  
   - Ensure your Zapier webhooks and Asana/Copper API access are configured.

## Security

- **Never commit real API keys, emails, or sensitive credentials to version control.**
- Use placeholders in code and supply credentials securely at runtime.

