---
name: Product Comparison System
description: Design and implement effective comparison tools for financial products in the Kenyan market
---

# Product Comparison System Skill

Expert skill for building comparison engines that help users make informed decisions about financial products in Kenya.

## Core Principles

### 1. Comparison Categories

**Banking Products**
- Savings accounts (interest rates, minimum balance, fees)
- Current accounts (monthly charges, transaction limits)
- Money market funds (returns, minimum investment)
- Fixed deposits (tenure, rates, early withdrawal penalties)
- Salary accounts (benefits, requirements)

**Loan Products**
- Personal loans (interest rates, processing fees, repayment period)
- Mobile loans (Tala, Branch, M-Shwari, KCB M-Pesa, Fuliza)
- Bank loans (requirements, approval time, collateral)
- Mortgage loans (rates, down payment, tenure)
- SACCO loans (benefits for members)
- Asset financing (cars, equipment)

**Investment Products**
- Unit trusts/Mutual funds (returns, minimum investment, fees)
- Government securities (T-bills, bonds - rates, tenure)
- Stocks (NSE performance, dividends)
- Real Estate Investment Trusts (REITs)
- Pension schemes (returns, management fees)

**Insurance Products**
- Health insurance (coverage, premium, hospital network)
- Life insurance (term, whole life, endowment policies)
- Motor insurance (comprehensive vs third-party)
- Home insurance (coverage, premium)
- Education insurance policies

**Mobile Money & Digital Services**
- M-Pesa vs Airtel Money vs T-Kash (transaction fees)
- Mobile banking apps (features, usability)
- Digital wallets
- International remittance services

### 2. Comparison Criteria Framework

**Essential Data Points**
For each product type, collect:

**Quantitative Metrics**
- Interest rates (APR for loans, returns for investments)
- Fees (monthly, transaction, processing, penalty)
- Minimum requirements (balance, deposit, investment)
- Maximum limits
- Tenure/duration options
- Processing time

**Qualitative Factors**
- Eligibility requirements
- Application process (online vs in-person)
- Customer service quality (ratings)
- User experience (app/platform ratings)
- Flexibility (early withdrawal, prepayment)
- Additional benefits/perks

**Risk Indicators**
- Credit risk (for investments)
- Default history (for lenders)
- Regulatory compliance status
- Customer complaints (from CBK, CMA)

### 3. User Experience Design

**Comparison Table Features**
- Side-by-side view (max 3-4 products on mobile)
- Sticky headers for scrolling
- Sortable columns
- Filterable by multiple criteria
- Highlight differences
- Show "best for" recommendations
- Pin favorite products

**Smart Filtering**
```
Example filters:
- Interest rate range
- Loan amount needed
- Repayment period
- Minimum investment
- Risk tolerance
- Monthly income level
- Employment type (salaried/self-employed)
```

**Personalization**
- Save comparisons for later
- Get recommendations based on profile
- Set alerts for rate changes
- See products you qualify for
- Hide irrelevant products

**Mobile Optimization**
- Card view for mobile (swipe between products)
- Progressive disclosure (expand for details)
- Quick comparison (2-3 key metrics)
- Full details on tap

### 4. Data Management

**Data Collection Strategy**
- Web scraping (with legal compliance)
- API integrations with banks/providers
- Manual research and verification
- Crowdsourced user reports
- Official regulatory sources (CBK, CMA)

**Data Freshness**
- Update frequency by product type
- Last updated timestamp display
- Alert users to outdated data
- Verification badges

**Data Quality**
- Verify from official sources
- Cross-reference multiple sources
- User feedback on accuracy
- Regular audits
- Disclaimer for estimates

### 5. Comparison Logic & Algorithms

**Scoring System**
Create composite scores based on:
```
Example: Loan Product Score
- Interest rate (40% weight)
- Processing fees (20%)
- Approval time (15%)
- Repayment flexibility (10%)
- Customer reviews (10%)
- Additional benefits (5%)
```

**Matching Algorithm**
Based on user profile:
- Income level
- Credit score/CRB status
- Employment type
- Financial goals
- Risk tolerance
- Timeline

**"Best For" Labels**
- Best for low income
- Best for quick approval
- Best for low interest
- Best for no collateral
- Best overall value

### 6. Transparency & Disclosure

**Clear Disclaimers**
- "Rates shown are indicative and may vary"
- "Always verify with provider before applying"
- Disclose affiliate relationships
- Show calculation methodology

**Potential Pitfalls**
- Hidden fees
- Variable rate risks
- Penalty charges
- Terms & conditions highlights
- CRB listing risks

**Educational Context**
- Explain why lower rate isn't always better
- Total cost of credit/ownership
- Break down APR vs interest rate
- Show examples with actual numbers

### 7. Integration Points

**With Other Platform Features**

**Calculators**
- Link to loan calculator with pre-filled data
- Investment return projections
- Affordability checks

**Educational Content**
- Link to relevant articles
- "How to choose" guides
- Video explanations

**Community**
- User reviews and ratings
- Discussion threads
- Expert opinions

**AI Assistant**
- "Help me choose" conversational flow
- Explain comparison results
- Answer product-specific questions

## Database Schema Considerations

```
Product Base Model:
- id, category, provider_name, product_name
- last_updated, verification_status, source_url

Product-Specific Attributes:
- Loans: interest_rate, max_amount, max_tenure, processing_fee
- Savings: interest_rate, min_balance, monthly_fee
- Insurance: premium_range, coverage_limit, deductible

User Interactions:
- saves, views, clicks, applications
- reviews, ratings
- feedback on accuracy
```

## Implementation Checklist

For each comparison feature:

- [ ] Define comparison criteria
- [ ] Design mobile-first UI
- [ ] Implement filtering system
- [ ] Build sorting functionality
- [ ] Add personalization
- [ ] Create scoring algorithm
- [ ] Integrate with calculators
- [ ] Add educational context
- [ ] Implement data verification
- [ ] Set up update schedule
- [ ] Add user feedback mechanism
- [ ] Create share functionality
- [ ] Test with real users
- [ ] Add tracking/analytics

## API Integration Examples

**Central Bank of Kenya (CBK)**
- Interest rate corridor
- Inflation rates
- Exchange rates

**Nairobi Securities Exchange (NSE)**
- Stock prices
- Market indices

**Financial Institutions**
- Bank APIs for current rates
- Insurance provider APIs
- Investment platform APIs

## Legal & Ethical Considerations

- Not providing financial advice (just comparison)
- Clear affiliate disclosure
- Data privacy compliance
- Accuracy verification
- Regular content review
- Unbiased presentation
- Accessibility for all users

## When to Use This Skill

Activate this skill when:
- Designing product comparison interfaces
- Building comparison algorithms and scoring systems
- Creating product data models
- Implementing filtering and sorting logic
- Integrating with financial institution APIs
- Ensuring comparison accuracy and transparency
- Optimizing comparison UX for mobile
