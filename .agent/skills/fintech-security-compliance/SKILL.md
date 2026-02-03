---
name: Fintech Security & Compliance
description: Expert guidance on financial platform security, data protection, and regulatory compliance for Kenyan fintech applications
---

# Fintech Security & Compliance Skill

Expert skill for building secure, compliant financial platforms in Kenya with focus on protecting user financial data and meeting regulatory requirements.

## Core Responsibilities

When building features for Shilingi Moves, always consider:

### 1. Data Security

**Financial Data Encryption**
- Encrypt all sensitive financial data at rest using AES-256
- Use TLS 1.3 for all data in transit
- Never store unencrypted account numbers, PINs, or passwords
- Implement field-level encryption for PII (Personally Identifiable Information)

**Authentication & Authorization**
- Implement multi-factor authentication (MFA) for sensitive operations
- Use JWT tokens with short expiration times (15-30 minutes)
- Implement refresh token rotation
- Apply principle of least privilege for all user roles
- Use bcrypt or Argon2 for password hashing (never MD5 or SHA1)

**API Security**
- Rate limiting on all endpoints (prevent brute force attacks)
- Input validation and sanitization on all user inputs
- Implement CORS policies appropriately
- Use API keys with IP whitelisting for third-party integrations
- Log all financial transactions and access attempts

### 2. Kenyan Regulatory Compliance

**Data Protection Act, 2019**
- Obtain explicit user consent before collecting personal data
- Provide clear privacy policy in plain language
- Allow users to access, download, and delete their data
- Appoint a Data Protection Officer if processing large volumes
- Register with the Office of the Data Protection Commissioner (ODPC)

**Central Bank of Kenya (CBK) Guidelines**
- If integrating with payment systems, comply with CBK's National Payment System regulations
- Implement proper KYC (Know Your Customer) procedures
- Monitor and report suspicious transactions (AML compliance)
- Maintain transaction records for at least 7 years
- Ensure business continuity and disaster recovery plans

**Consumer Protection**
- Display clear terms and conditions
- Transparent fee structures (no hidden charges)
- Provide customer support channels
- Implement dispute resolution mechanisms
- Ensure accessibility standards are met

### 3. Third-Party Integration Security

**Banking/Financial APIs**
- Use OAuth 2.0 for bank account connections
- Never store banking credentials
- Implement webhook signature verification
- Use sandbox environments for testing
- Have fallback mechanisms for API failures

**Data Providers**
- Vet all third-party providers for security compliance
- Sign Data Processing Agreements (DPAs)
- Regularly audit third-party access
- Implement secure API key rotation
- Monitor third-party service uptime and security incidents

### 4. Security Best Practices

**Code Security**
- Regular dependency updates and vulnerability scanning
- Static code analysis (SAST) in CI/CD pipeline
- Dynamic application security testing (DAST)
- No hardcoded secrets (use environment variables/secrets management)
- Implement Content Security Policy (CSP) headers

**Infrastructure**
- Regular security audits and penetration testing
- Database backups with encryption
- Implement Web Application Firewall (WAF)
- DDoS protection
- Regular security patches and updates
- Implement logging and monitoring for security events

**User Privacy**
- Anonymize data for analytics
- Implement data retention policies
- Provide opt-out mechanisms for marketing
- Cookie consent management
- Clear data sharing disclosures

### 5. Incident Response

**Preparation**
- Maintain incident response plan
- Define security incident classification
- Establish communication protocols
- Regular security drills

**Detection & Response**
- Real-time security monitoring
- Automated alerting for suspicious activities
- Defined escalation procedures
- Breach notification procedures (within 72 hours per Data Protection Act)

## Implementation Checklist

For every feature involving financial data:

- [ ] Data encrypted in transit and at rest
- [ ] Input validation implemented
- [ ] Rate limiting configured
- [ ] Proper authentication/authorization
- [ ] Audit logging enabled
- [ ] Privacy policy updated if needed
- [ ] User consent mechanism in place
- [ ] Security testing completed
- [ ] Code review focusing on security
- [ ] Documentation updated

## Common Vulnerabilities to Prevent

1. **SQL Injection**: Use parameterized queries or ORMs
2. **XSS (Cross-Site Scripting)**: Sanitize all user inputs and outputs
3. **CSRF**: Implement CSRF tokens
4. **Broken Authentication**: Strong password policies, MFA, session management
5. **Sensitive Data Exposure**: Encrypt, don't log sensitive data
6. **Broken Access Control**: Verify user permissions on every request
7. **Security Misconfiguration**: Secure defaults, regular updates
8. **Insufficient Logging**: Log all important events, but not sensitive data

## Kenya-Specific Considerations

- **M-Pesa Integration**: Follow Safaricom's security guidelines
- **Mobile-First**: Most users on mobile, ensure mobile app security
- **Low Bandwidth**: Optimize for slow connections without compromising security
- **Financial Inclusion**: Security shouldn't create barriers for less tech-savvy users
- **Local Hosting**: Consider data residency requirements

## Resources

- Office of the Data Protection Commissioner: https://www.odpc.go.ke
- Central Bank of Kenya: https://www.centralbank.go.ke
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- PCI DSS Standards (if handling card payments)

## When to Use This Skill

Activate this skill when:
- Designing authentication/authorization systems
- Integrating with financial APIs or payment systems
- Handling user financial data
- Planning data storage and privacy features
- Conducting security reviews
- Implementing compliance requirements
