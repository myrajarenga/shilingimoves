---
description: Development workflow for Shilingi Moves platform
---

# Shilingi Moves Development Workflow

This workflow guides you through the development process for new features on the Shilingi Moves platform.

## Before Starting Development

### 1. Review Relevant Skills
Based on the feature you're building, review the appropriate skills:
- **Security-sensitive features** (auth, payments, data): Review `fintech-security-compliance` skill
- **Content features** (articles, videos, quizzes): Review `financial-education-content` skill  
- **Comparison tools**: Review `product-comparison-system` skill
- **Calculator features**: Review `financial-calculators` skill

### 2. Check Dependencies
// turbo
```powershell
# Ensure all dependencies are installed
npm install
```

### 3. Create Feature Branch
// turbo
```powershell
# Create and switch to feature branch
git checkout -b feature/your-feature-name
```

## Development Process

### 4. Set Up Environment
// turbo
```powershell
# Copy environment template if not exists
if (!(Test-Path .env)) { Copy-Item .env.example .env }
```

### 5. Start Development Server
// turbo
```powershell
# Start the development server
npm run dev
```

### 6. Build the Feature
Follow these guidelines:
- **Mobile-first**: Design for mobile screens first, then scale up
- **Kenya context**: Use local examples, KES currency, relevant financial products
- **Security**: Follow security checklist from the skill if handling sensitive data
- **Accessibility**: Ensure screen reader compatibility and keyboard navigation
- **Performance**: Optimize for slower connections

### 7. Run Tests
// turbo
```powershell
# Run test suite
npm test
```

### 8. Check Code Quality
// turbo
```powershell
# Run linter
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### 9. Security Check (for sensitive features)
If your feature handles financial data, authentication, or user PII:
- [ ] Data encrypted in transit and at rest
- [ ] Input validation implemented
- [ ] Rate limiting configured
- [ ] Proper authentication/authorization
- [ ] Audit logging enabled
- [ ] No hardcoded secrets

### 10. Build Production Bundle
```powershell
# Test production build
npm run build
```

### 11. Commit Changes
```powershell
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "feat: Add [feature description]"
```

### 12. Push to Remote
```powershell
# Push feature branch
git push origin feature/your-feature-name
```

## Feature-Specific Checklists

### For Financial Calculators
- [ ] Formulas verified against manual calculations
- [ ] Kenya-specific rates/taxes updated
- [ ] Mobile-optimized inputs (sliders, large touch targets)
- [ ] Results are shareable
- [ ] Linked to relevant educational content
- [ ] Accessibility tested

### For Educational Content
- [ ] Uses Kenyan examples and context
- [ ] Simple, jargon-free language
- [ ] Includes practical action steps
- [ ] Mobile-friendly format
- [ ] Has engagement element (quiz, discussion)
- [ ] Fact-checked and accurate

### For Comparison Tools
- [ ] Data is current (check last updated date)
- [ ] Sortable and filterable
- [ ] Mobile card view implemented
- [ ] Clear disclaimers shown
- [ ] Links to calculators
- [ ] User can save comparisons

### For Community Features
- [ ] Moderation system in place
- [ ] User privacy protected
- [ ] Reporting mechanism for inappropriate content
- [ ] Mobile-friendly UI
- [ ] Notifications system (if applicable)

## Troubleshooting

### Development Server Won't Start
```powershell
# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

### Build Failures
```powershell
# Check for TypeScript errors
npm run type-check

# Check build logs
npm run build -- --verbose
```

### Test Failures
```powershell
# Run tests in watch mode to see failures
npm test -- --watch

# Run specific test file
npm test -- path/to/test/file
```

## Next Steps

After completing development:
1. Create pull request on GitHub
2. Request code review
3. Address review comments
4. Merge to main branch
5. Deploy to staging for testing
6. Deploy to production

## Resources

- [Skills Directory](../.agent/skills/)
- [Project Documentation](../docs/)
- GitHub Repository
- Staging Environment URL
- Production Environment URL
