---
description: Fires off a full Claude Code instance in the background for Next.js development tasks
argument-hint: [prompt] [model] [report-file]
allowed-tools: Bash, BashOutput, Read, Edit, MultiEdit, Write, Grep, Glob, WebFetch, WebSearch, TodoWrite, Task
---

# Background Claude Code

Run a Claude Code instance in the background to perform Next.js development tasks autonomously while you continue working.

## Variables

`USER_PROMPT: $1`
`MODEL: $2 (defaults to 'sonnet' if not provided)`
`REPORT_FILE: $3 (defaults to './agents/background/nextjs-background-report-DAY-NAME_HH_MM_SS.md' if not provided)`

## Instructions

- Capture timestamp in a variable FIRST to ensure consistency across file creation and references
- Create the initial report file with header BEFORE launching the background agent
- Fire off a new Claude Code instance using the Bash tool with run_in_background=true
- IMPORTANT: Pass the 'USER_PROMPT' exactly as provided with no modifications
- Set the model to either 'sonnet' or 'opus' based on 'MODEL' parameter
- Configure Claude Code with all necessary flags for automated Next.js development
- All report format instructions are embedded in the --append-system-prompt
- Use --print flag to run in non-interactive mode
- Include Next.js specific context: TypeScript, React, App Router, Tailwind CSS, and modern web development practices


