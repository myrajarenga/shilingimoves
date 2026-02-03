---
description: Testing workflow for Shilingi Moves features
---

# Shilingi Moves Testing Workflow

Comprehensive testing workflow for ensuring quality and reliability of the Shilingi Moves platform.

## Test Types

### 1. Unit Tests
Test individual functions and components in isolation.

// turbo
```powershell
# Run all unit tests
npm test
```

// turbo
```powershell
# Run tests in watch mode (during development)
npm test -- --watch
```

// turbo
```powershell
# Run tests with coverage report
npm test -- --coverage
```

### 2. Integration Tests
Test how components work together.

```powershell
# Run integration tests
npm run test:integration
```

### 3. End-to-End (E2E) Tests
Test complete user flows.

```powershell
# Run E2E tests
npm run test:e2e
```

### 4. Manual Testing Checklist

#### For Every Feature
- [ ] Test on mobile (Chrome Mobile, Safari iOS)
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Test with slow network (throttled connection)
- [ ] Test with screen reader (NVDA, VoiceOver)
- [ ] Test keyboard navigation (no mouse)
- [ ] Test on actual Kenyan network (if possible)

#### Calculator Testing
- [ ] Test with minimum values
- [ ] Test with maximum values
- [ ] Test with zero
- [ ] Test with negative numbers (should reject)
- [ ] Test with very large numbers
- [ ] Verify calculations against Excel/manual
- [ ] Test all interactive elements (sliders, inputs)
- [ ] Test chart rendering
- [ ] Test save/share functionality

#### Content Testing
- [ ] Verify all links work
- [ ] Check images load properly
- [ ] Test video playback
- [ ] Verify quiz logic
- [ ] Test on mobile devices
- [ ] Check for typos and grammatical errors
- [ ] Verify Kenya-specific references accurate

#### Comparison Tool Testing
- [ ] Test filtering functionality
- [ ] Test sorting by different columns
- [ ] Verify data accuracy (check sources)
- [ ] Test with multiple products
- [ ] Test mobile card view
- [ ] Test save/pin functionality
- [ ] Verify last updated dates shown

#### Security Testing (Sensitive Features)
- [ ] Test SQL injection attempts
- [ ] Test XSS (cross-site scripting) attempts
- [ ] Verify authentication required
- [ ] Test authorization (can't access others' data)
- [ ] Verify rate limiting works
- [ ] Check HTTPS enforcement
- [ ] Test session expiration
- [ ] Verify sensitive data encrypted

## Test Data

### Use Realistic Kenyan Scenarios

**Income Ranges**
- Low income: KES 15,000 - 30,000/month
- Middle income: KES 50,000 - 150,000/month
- High income: KES 200,000+/month

**Common Expenses**
- Rent: KES 10,000 - 50,000
- Transport: KES 3,000 - 15,000
- Food: KES 8,000 - 25,000
- NHIF: KES 500 - 1,700
- NSSF: Varies by income

**Typical Loans**
- Mobile loans: KES 500 - 50,000
- Personal loans: KES 50,000 - 500,000
- Mortgages: KES 2M - 10M

## Performance Testing

### Load Time Testing
// turbo
```powershell
# Build production bundle and check size
npm run build
```

**Targets:**
- Initial load: < 3 seconds on 3G
- Time to interactive: < 5 seconds
- Calculator response: < 100ms
- Page transitions: < 200ms

### Lighthouse Audit
```powershell
# Run Lighthouse (requires Chrome)
npm run lighthouse
```

**Target Scores:**
- Performance: > 85
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

## Browser Testing Matrix

### Mobile
- [ ] Chrome Android (latest)
- [ ] Safari iOS (latest)
- [ ] Firefox Android
- [ ] Samsung Internet

### Desktop
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## Accessibility Testing

### Automated
// turbo
```powershell
# Run accessibility tests
npm run test:a11y
```

### Manual
- [ ] Navigate entire page with keyboard only (Tab, Enter, Esc)
- [ ] Test with screen reader (NVDA on Windows, VoiceOver on Mac/iOS)
- [ ] Check color contrast meets WCAG AA standards
- [ ] Verify all images have alt text
- [ ] Ensure forms have proper labels
- [ ] Test with browser zoom at 200%

## Security Testing

### Before Production Deployment
// turbo
```powershell
# Check for known vulnerabilities in dependencies
npm audit
```

```powershell
# Fix vulnerabilities if found
npm audit fix
```

### Security Checklist
- [ ] No API keys or secrets in code
- [ ] Environment variables used for sensitive config
- [ ] HTTPS enforced
- [ ] CSRF protection enabled
- [ ] Content Security Policy configured
- [ ] Input validation on all forms
- [ ] Rate limiting on sensitive endpoints
- [ ] SQL injection protection (parameterized queries)
- [ ] XSS protection (sanitized outputs)

## Regression Testing

When fixing bugs or updating features:

1. **Verify the fix works**
   - Test the specific scenario that was broken
   - Test edge cases related to the fix

2. **Check for new breakages**
   - Run full test suite
   - Manually test related features
   - Check common user flows

3. **Performance check**
   - Ensure fix didn't slow things down
   - Run Lighthouse before and after

## User Acceptance Testing (UAT)

### Beta Testing
1. Recruit 10-20 Kenyan users (diverse backgrounds)
2. Provide test scenarios
3. Collect feedback via surveys/interviews
4. Observe users (if possible) - note confusion points
5. Iterate based on feedback

### Test Scenarios
- "Create a monthly budget for KES 60,000 salary"
- "Find the best savings account for KES 100,000"
- "Calculate how long to save KES 500,000 for car"
- "Compare three mobile loan options"
- "Learn about investing in government bonds"

## Bug Reporting

When you find a bug:

1. **Document it clearly**
   - What you expected to happen
   - What actually happened
   - Steps to reproduce
   - Screenshots/video if applicable
   - Browser/device information

2. **Classify severity**
   - Critical: Feature completely broken or security issue
   - High: Major functionality affected
   - Medium: Functionality works but has issues
   - Low: Minor cosmetic issues

3. **Create GitHub issue**
   ```
   Title: [Component] Brief description
   
   **Expected:** 
   What should happen
   
   **Actual:** 
   What happens instead
   
   **Steps:**
   1. Step one
   2. Step two
   3. Bug occurs
   
   **Environment:**
   - Browser: Chrome 120
   - OS: Windows 11
   - Screen size: 1920x1080
   ```

## Test Automation

### Continuous Integration
Tests should run automatically on:
- Every pull request
- Every commit to main branch
- Nightly (full test suite + E2E)

### Pre-commit Hooks
// turbo
```powershell
# Set up pre-commit hooks (if using Husky)
npm run prepare
```

This will automatically run:
- Linting
- Unit tests
- Type checking

## Kenya-Specific Testing

### Data Accuracy
- [ ] KRA tax brackets current (check annually)
- [ ] NSSF rates current
- [ ] NHIF rates current
- [ ] Bank interest rates reasonable (check quarterly)
- [ ] Exchange rates current (if using currency converter)
- [ ] Financial product data verified from official sources

### Cultural Appropriateness
- [ ] Language is respectful and inclusive
- [ ] Examples relatable to Kenyan context
- [ ] No assumptions about financial literacy
- [ ] Considers both urban and rural users
- [ ] Appropriate imagery (if using photos)

## Performance on Kenyan Networks

Test on simulated network conditions:
- Slow 3G (400ms RTT, 400kbps down, 400kbps up)
- Fast 3G (562ms RTT, 1.6Mbps down, 768kbps up)
- 4G (typical Safaricom/Airtel performance)

Tools:
- Chrome DevTools Network Throttling
- TestMy.net for real network speed tests

## Checklist Before Release

- [ ] All tests passing
- [ ] No critical/high severity bugs
- [ ] Lighthouse scores meet targets
- [ ] Accessibility audit passed
- [ ] Security audit completed
- [ ] Cross-browser testing done
- [ ] Mobile testing completed
- [ ] Performance acceptable on slow networks
- [ ] Data accuracy verified
- [ ] Privacy policy updated (if needed)
- [ ] User documentation/help updated
- [ ] Staging environment testing completed
- [ ] Backup plan prepared if rollback needed

## Resources

- [Testing Best Practices](../docs/testing-guide.md)
- [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)
- [Accessibility Guide](../docs/accessibility.md)
