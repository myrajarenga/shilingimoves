# Antigravity Skills Directory

This directory contains specialized skills that extend Antigravity's capabilities for your "Shilingi Moves" project.

## What are Skills?

Skills are modular definitions that give Antigravity AI agent professional capabilities. Each skill is a folder containing:
- **SKILL.md** (required): Main instruction file with YAML frontmatter and detailed markdown instructions
- **scripts/**: Helper scripts and utilities (optional)
- **examples/**: Reference implementations (optional)
- **resources/**: Templates, assets, or additional files (optional)

## How to Use Skills

1. **Add a Skill**: Download skills from GitHub repositories and place them in this directory
2. **Activate a Skill**: Simply reference the skill in your conversation with Antigravity
3. **Automatic Loading**: Antigravity will automatically discover and read skills from this directory

## Recommended Skill Repositories

### 🌟 Large Collections
- **rmyndharis/antigravity-skills**: 300+ skills ported from Claude Code Agent
- **sickn33/antigravity-awesome-skills**: ~58 curated skills organized by role

### 📚 Learning Resources
- **rominirani/antigravity-skills**: Tutorial and examples for creating skills
- **guanyang/antigravity-skills**: Professional capabilities for full-stack development

## Skill Directory Structure

```
.agent/skills/
├── README.md (this file)
├── skill-name-1/
│   ├── SKILL.md
│   ├── scripts/
│   └── examples/
├── skill-name-2/
│   └── SKILL.md
└── ...
```

## Creating Your Own Skills

Each skill's SKILL.md should follow this format:

```markdown
---
name: Skill Name
description: Brief description of what this skill does
---

# Detailed Instructions

[Your skill instructions here...]
```

## Shilingi Moves Custom Skills

The following skills have been created specifically for this platform:

### 🛡️ **fintech-security-compliance**
Expert guidance on financial platform security, data protection, and regulatory compliance for Kenyan fintech applications.
- Covers encryption, authentication, API security
- Kenyan regulations (Data Protection Act, CBK guidelines)
- Security best practices and incident response
- KYC/AML compliance

### 📚 **financial-education-content**
Create engaging, culturally relevant financial education content for Kenyan audiences.
- Kenya-specific examples and context
- Multi-format content (articles, videos, quizzes, games)
- Progressive learning levels (beginner to advanced)
- Topics covering budgeting, investing, debt management, etc.

### 🔍 **product-comparison-system**
Design and implement effective comparison tools for financial products in the Kenyan market.
- Compare banks, loans, investments, insurance
- Smart filtering and scoring algorithms
- Mobile-optimized UX
- Data management and accuracy verification

### 🧮 **financial-calculators**
Build accurate, user-friendly financial calculators for Kenyan context.
- Budget, loan, savings, investment calculators
- Kenya-specific formulas (KRA tax, NSSF, NHIF)
- Mobile-first design with visual outputs
- Integration with other platform features

## Generic Skills You Might Add

Based on common development needs:
- **web-development**: Full-stack web development capabilities
- **api-design**: RESTful API design and implementation
- **database-modeling**: Database schema design and optimization
- **testing-strategy**: Comprehensive testing approaches
- **deployment**: CI/CD and deployment automation

## Next Steps

1. Browse the recommended GitHub repositories
2. Download skills relevant to your project needs
3. Place them in this directory
4. Start using them in your conversations with Antigravity!
