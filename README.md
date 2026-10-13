# Ledgerflow

Ledgerflow is a premium minimal workspace concept for connecting QuickBooks Online companies with AI-powered MCP tools. The current deliverable is a polished UI prototype using mock data so the product flow and information architecture can be reviewed before backend integration.

## Team

- **Afaq Ahmad** — Developer
- **Zulqarnain Ahmad** — Team member

## What is finished

- Premium minimal visual direction with a clean accounting-focused workspace.
- Responsive application shell with navigation, header actions, company context, and account controls.
- Mock-data dashboard with financial overview cards, activity, connected companies, and MCP tool summaries.
- Mock Companies page for reviewing connected QuickBooks organizations and connection states.
- Mock MCP Tools page with tool categories, search/filter affordances, status badges, and tool detail presentation.
- Mock Reports page for financial reporting cards, report status, and analysis-oriented summaries.
- Mock Audit Log page for tracking representative write operations and security events.
- Mock Settings page for workspace preferences, company controls, permissions, and account configuration.
- QuickBooks/MCP product language and content structure aligned with the supplied requirements.
- Vercel starter favicon assets and related default branding removed.
- Project documentation updated with the project team and current implementation status.

## What remains

### Backend and MCP platform

- Review the existing proof of concept and convert the UI prototype into a production application.
- Implement a remote TypeScript MCP server with a secure HTTPS `/mcp` endpoint and the official MCP SDK.
- Add a modular MCP tool registry, reusable QuickBooks service layer, structured responses, validation, centralized errors, logging, health checks, and monitoring.

### QuickBooks Online integration

- Implement OAuth 2.0 authorization, callback handling, secure token storage, automatic refresh, sandbox/production configuration, rate-limit handling, and permission-aware API access.
- Connect the UI to live QuickBooks data instead of mock data.
- Add read and write workflows for the agreed approximately 120-tool scope, including entities, invoices, bills, payments, reports, banking, journal entries, attachments, and documents.

### Multi-company security

- Add company connection, selection, and switching flows.
- Enforce separate credentials and isolated company contexts for every request.
- Support company-specific read-only/read-write permissions, authorized cross-company comparisons, write-operation audit logs, and explicit protection for delete/void actions.

### Accounting intelligence and validation

- Build reconciliation diagnostics, month-end close reviews, duplicate and uncategorized transaction checks, collectability analysis, cash-flow forecasts, KPI datasets, management reporting, and financial statement explanations.
- Add unit, integration, tool-level, sandbox, security, and MCP-client compatibility testing.
- Prepare installation, configuration, API/tool documentation, deployment instructions, GitHub delivery, production deployment support, and final source-code/IP handover.

## Proposal

See [PROPOSAL.md](./PROPOSAL.md) for the requested two-line proposal beginning with “QBO MCP”.

## Current data notice

All displayed companies, transactions, reports, activity, tools, and account details are mock data. No QuickBooks credentials or live accounting records are currently connected.

## Development direction

The recommended delivery sequence is: platform and authentication foundation, multi-company context and permissions, reusable QuickBooks services, core MCP tools, advanced accounting analysis, then full sandbox validation and production deployment.
