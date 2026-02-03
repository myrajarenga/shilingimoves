# Shilingi Moves Development Rules

## 🛡️ Security-First Principles

**Security is NOT optional. Every feature, every line of code, every decision must prioritize security.**

---

## Core Security Rules

### Rule 1: Never Trust User Input
- **ALWAYS** validate and sanitize ALL user inputs
- Use parameterized queries (NEVER string concatenation for SQL)
- Sanitize HTML outputs to prevent XSS
- Validate file uploads (type, size, content)
- Reject invalid input - don't try to fix it
- Use whitelist validation (allow known good) over blacklist (block known bad)

### Rule 2: Encrypt Everything Sensitive
- **ALWAYS** encrypt sensitive data at rest (AES-256 minimum)
- **ALWAYS** use HTTPS/TLS 1.3 for data in transit
- **NEVER** store passwords in plain text (use bcrypt or Argon2)
- **NEVER** store API keys, secrets, or credentials in code
- Use environment variables for all secrets
- Implement field-level encryption for PII (names, ID numbers, phone numbers)
- Encrypt financial account numbers and transaction data

### Rule 3: Authentication & Authorization are Sacred
- **REQUIRE** authentication for all user-specific data and actions
- **VERIFY** authorization on EVERY request (never trust client-side checks)
- Implement multi-factor authentication (MFA) for sensitive operations
- Use short-lived JWT tokens (15-30 minutes max)
- Implement refresh token rotation
- Apply principle of least privilege (users only access what they need)
- Session timeout after inactivity (15 minutes for sensitive areas)
- **NEVER** pass credentials in URLs or logs

### Rule 4: Kenyan Data Protection Compliance
- **OBTAIN** explicit user consent before collecting personal data
- **PROVIDE** clear privacy policy in simple English/Swahili
- **ALLOW** users to access, download, and delete their data
- **REGISTER** with Office of the Data Protection Commissioner (ODPC)
- **COMPLY** with Data Protection Act, 2019
- **NOTIFY** users within 72 hours of any data breach
- **MAINTAIN** data processing records

### Rule 5: Third-Party Integration Security
- **VET** all third-party services for security compliance
- **SIGN** Data Processing Agreements (DPAs) with all data processors
- **USE** OAuth 2.0 for banking/financial API connections
- **NEVER** store user banking credentials
- **VERIFY** webhook signatures from third parties
- **ROTATE** API keys regularly (at least quarterly)
- **MONITOR** third-party service security incidents
- **IMPLEMENT** fallback mechanisms for third-party failures

### Rule 6: Secure Coding Practices
- **NO** hardcoded secrets (use secrets manager or environment variables)
- **NO** sensitive data in logs (no passwords, tokens, account numbers)
- **UPDATE** dependencies regularly (weekly security checks)
- **RUN** static code analysis (SAST) before every merge
- **REVIEW** all code changes with security lens
- **USE** Content Security Policy (CSP) headers
- **IMPLEMENT** rate limiting on all endpoints
- **ADD** audit logging for all financial transactions

### Rule 7: Financial Data Protection
- **LOG** all financial transactions (who, what, when, amount)
- **IMPLEMENT** transaction limits and velocity checks
- **MONITOR** for suspicious activity patterns
- **COMPLY** with Central Bank of Kenya (CBK) regulations
- **MAINTAIN** transaction records for minimum 7 years
- **VERIFY** transactions before processing
- **IMPLEMENT** fraud detection mechanisms
- **ENABLE** transaction alerts for users

### Rule 8: API Security
- **REQUIRE** API authentication on all endpoints
- **IMPLEMENT** rate limiting (prevent brute force and DDoS)
- **VALIDATE** all request parameters
- **USE** CORS policies appropriately
- **VERSION** APIs properly (don't break compatibility without notice)
- **DOCUMENT** security requirements in API docs
- **MONITOR** API usage for anomalies
- **ROTATE** API keys and secrets

### Rule 9: Error Handling & Logging
- **NEVER** expose internal errors to users (generic messages only)
- **LOG** security events (failed logins, authorization failures)
- **MONITOR** logs for security incidents
- **ALERT** on suspicious patterns
- **DO NOT** log sensitive data (passwords, tokens, full card numbers)
- **RETAIN** security logs for at least 90 days
- **IMPLEMENT** centralized logging

### Rule 10: Incident Response
- **MAINTAIN** incident response plan
- **DEFINE** security incident classification
- **ESTABLISH** communication protocols
- **CONDUCT** regular security drills
- **NOTIFY** affected users promptly per Data Protection Act
- **DOCUMENT** all incidents and responses
- **LEARN** from incidents (post-mortem analysis)

---

## Development Standards

### Before Writing ANY Code

1. **Review relevant security skill** (`fintech-security-compliance`)
2. **Ask**: Does this handle sensitive data? If yes, how will I protect it?
3. **Ask**: What could go wrong? How will I prevent it?
4. **Ask**: Does this comply with Kenyan regulations?

### Code Review Checklist (MANDATORY)

Every code change MUST pass this security checklist:

- [ ] Input validation implemented
- [ ] Output sanitization applied (prevent XSS)
- [ ] SQL injection prevention (parameterized queries)
- [ ] Authentication required (if accessing user data)
- [ ] Authorization verified (user can only access their own data)
- [ ] Sensitive data encrypted
- [ ] No secrets in code (environment variables used)
- [ ] Rate limiting configured
- [ ] Error handling doesn't expose internals
- [ ] Audit logging added (for financial operations)
- [ ] CSRF protection enabled (for state-changing operations)
- [ ] HTTPS enforced
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] Dependencies up to date (no known vulnerabilities)

### Testing Requirements (MANDATORY)

Every feature MUST include:

- [ ] Security tests (SQL injection, XSS attempts, authorization bypass)
- [ ] Input validation tests (boundary values, invalid inputs)
- [ ] Authentication/authorization tests
- [ ] Rate limiting tests
- [ ] Error handling tests
- [ ] Encryption verification tests (for sensitive data)

---

## Mobile & Performance Rules

### Rule 11: Mobile-First, Always
- **DESIGN** for mobile screens first
- **OPTIMIZE** for slow 3G networks (common in Kenya)
- **MINIMIZE** bundle size (< 500KB initial load)
- **LAZY LOAD** non-critical resources
- **CACHE** appropriately (but never cache sensitive data)
- **TEST** on actual Kenyan network conditions

### Rule 12: Performance Doesn't Compromise Security
- **NEVER** skip security checks for performance
- **BALANCE** security and UX (make secure path easy)
- **OPTIMIZE** secure operations (but don't remove them)
- **CACHE** public data only (never user-specific data)

---

## Kenya-Specific Rules

### Rule 13: Cultural & Contextual Appropriateness
- **USE** Kenyan Shillings (KES) in all financial displays
- **REFERENCE** local financial institutions (KCB, Equity, M-Pesa, etc.)
- **CONSIDER** both salaried and self-employed users
- **SUPPORT** both urban and rural contexts
- **PROVIDE** content in English (Swahili subtitles/translations where helpful)
- **RESPECT** communal financial obligations (harambee, family support)
- **UNDERSTAND** informal savings (chamas, table banking)

### Rule 14: Regulatory Compliance (Kenya)
- **COMPLY** with Data Protection Act, 2019
- **FOLLOW** Central Bank of Kenya (CBK) guidelines
- **REGISTER** with ODPC as data controller
- **IMPLEMENT** KYC (Know Your Customer) where required
- **MONITOR** for AML (Anti-Money Laundering) compliance
- **UPDATE** tax calculations per KRA (annually)
- **STAY** informed of regulatory changes

---

## Prohibited Actions

### NEVER DO THESE:

1. ❌ Store passwords in plain text or reversible encryption
2. ❌ Put API keys, secrets, or credentials in code
3. ❌ Trust user input without validation
4. ❌ Use string concatenation for SQL queries
5. ❌ Expose internal errors or stack traces to users
6. ❌ Log sensitive data (passwords, tokens, full account numbers)
7. ❌ Skip authentication checks "just for testing"
8. ❌ Disable security features for convenience
9. ❌ Hard-code sensitive configuration
10. ❌ Allow unrestricted file uploads
11. ❌ Use MD5 or SHA1 for passwords (use bcrypt or Argon2)
12. ❌ Store financial data unencrypted
13. ❌ Share user data without explicit consent
14. ❌ Skip authorization checks (verify on every request)
15. ❌ Use HTTP for sensitive data (HTTPS only)
16. ❌ Ignore security warnings from dependency scans
17. ❌ Deploy without security testing
18. ❌ Collect more data than necessary
19. ❌ Keep user data longer than required
20. ❌ Use weak session management

---

## Quality Standards

### Rule 15: Code Quality
- **WRITE** clean, readable, maintainable code
- **COMMENT** complex logic (especially security-related)
- **USE** meaningful variable/function names
- **FOLLOW** consistent code style
- **REFACTOR** code smells immediately
- **DELETE** dead code (don't comment out)

### Rule 16: Testing Standards
- **MINIMUM** 80% code coverage for critical paths
- **TEST** all security features thoroughly
- **AUTOMATE** tests (run on every commit)
- **INCLUDE** edge cases and error scenarios
- **VERIFY** fixes with regression tests

### Rule 17: Documentation
- **DOCUMENT** all security decisions
- **UPDATE** docs when code changes
- **EXPLAIN** complex security implementations
- **PROVIDE** examples for other developers
- **MAINTAIN** runbooks for incidents

---

## Accessibility & Inclusivity Rules

### Rule 18: Accessibility is Required
- **MEET** WCAG AA standards minimum
- **TEST** with screen readers
- **ENSURE** keyboard navigation works
- **PROVIDE** alt text for images
- **USE** semantic HTML
- **MAINTAIN** sufficient color contrast
- **SUPPORT** browser zoom (up to 200%)

### Rule 19: Inclusive Design
- **DESIGN** for various literacy levels
- **AVOID** financial jargon (or explain it)
- **USE** simple, clear language
- **PROVIDE** visual aids and examples
- **CONSIDER** users with disabilities
- **TEST** with diverse user groups

---

## Monitoring & Maintenance

### Rule 20: Continuous Security
- **MONITOR** application security continually
- **SCAN** dependencies weekly for vulnerabilities
- **PATCH** security issues within 24-48 hours
- **AUDIT** access logs regularly
- **REVIEW** security policies quarterly
- **UPDATE** security skills and knowledge
- **CONDUCT** penetration testing (at least annually)
- **RUN** security drills (bi-annually)

---

## When In Doubt

### The Security Decision Framework:

1. **Is this secure?** If you're not sure, it probably isn't. Research or ask.
2. **Could this be exploited?** Think like an attacker. What could go wrong?
3. **Does this comply with regulations?** Check Data Protection Act and CBK guidelines.
4. **Would I trust this with my own money?** If no, don't ship it.

### Golden Rules:

- **Security FIRST, features second**
- **When security conflicts with convenience, security wins**
- **If you're unsure, ask or research - don't guess**
- **Better to over-protect than under-protect financial data**
- **Assume breach mentality - how do we limit damage?**

---

## Enforcement

These rules are **MANDATORY**, not suggestions. 

- All code must pass security checklist before merge
- Security violations block deployment
- Regular security audits will verify compliance
- Team members are empowered to raise security concerns

**Remember: We're handling people's money and financial futures. Security is our responsibility.**

---

## Resources

- [fintech-security-compliance skill](skills/fintech-security-compliance/SKILL.md)
- Office of Data Protection Commissioner: https://www.odpc.go.ke
- Central Bank of Kenya: https://www.centralbank.go.ke
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- Kenya Data Protection Act, 2019: http://kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/2019/TheDataProtectionAct_No24of2019.pdf

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Review Schedule:** Quarterly or when regulations change
