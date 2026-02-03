---
name: Financial Calculators
description: Build accurate, user-friendly financial calculators for Kenyan context
---

# Financial Calculators Skill

Expert skill for creating intuitive, accurate financial calculators that help users make informed money decisions.

## Essential Calculators for Shilingi Moves

### 1. Budget Calculator

**Purpose**: Help users create realistic monthly budgets

**Inputs**
- Monthly income (after tax)
- Additional income sources
- Fixed expenses (rent, NHIF, NSSF, loans)
- Variable expenses (food, transport, utilities)
- Savings goals

**Calculations**
- Total income
- Total expenses
- Surplus/deficit
- Percentage allocation per category
- 50/30/20 rule comparison (needs/wants/savings)

**Outputs**
- Visual breakdown (pie chart/bar chart)
- Recommendations for rebalancing
- Comparison to recommended allocations
- Action items

**Kenya-Specific Features**
- M-Pesa transaction import
- Include harambee/family support category
- Matatu/transport costs
- School fees planning
- Chama contributions

### 2. Loan Calculator

**Purpose**: Compare loan options and understand true cost

**Inputs**
- Loan amount needed
- Interest rate (annual %)
- Loan tenure (months/years)
- Processing fee
- Insurance charges
- Other fees

**Calculations**
- Monthly payment (using amortization formula)
- Total interest paid
- Total cost (principal + all charges)
- Annual Percentage Rate (APR)
- Payment schedule/amortization table

**Outputs**
- Monthly payment amount
- Total amount repayable
- Payment breakdown chart
- Amortization schedule
- Early payoff scenarios

**Advanced Features**
- Compare multiple loans side-by-side
- Show impact of extra payments
- Calculate time saved by paying more
- CRB impact warning for defaults
- Affordability check (payment vs income ratio)

**Formulas**
```
Monthly Payment = P × [r(1+r)^n] / [(1+r)^n - 1]
Where:
P = Principal loan amount
r = Monthly interest rate (annual rate / 12 / 100)
n = Number of payments (months)

APR = [(Total Interest + Fees) / Principal] / Years × 100
```

### 3. Savings Goal Calculator

**Purpose**: Plan how to reach financial goals

**Inputs**
- Goal amount (e.g., KES 500,000 for car down payment)
- Current savings
- Monthly contribution
- Interest rate (if interest-bearing account)
- Time frame (months/years)

**Calculations**
- Time to reach goal
- Or monthly amount needed to reach goal by date
- Total interest earned
- Final amount with compound interest

**Outputs**
- Timeline to goal
- Monthly savings needed
- Progress visualization
- Milestones (25%, 50%, 75% complete)
- Encouragement messages

**Goal Categories**
- Emergency fund (3-6 months expenses)
- Down payment (house, car)
- Education (kids' school fees)
- Wedding/event
- Business capital
- Vacation

**Formula**
```
Future Value = P × [(1+r)^n - 1] / r + PV × (1+r)^n
Where:
P = Monthly payment
r = Monthly interest rate
n = Number of months
PV = Present value (current savings)
```

### 4. Investment Return Calculator

**Purpose**: Project investment growth over time

**Inputs**
- Initial investment
- Monthly contribution (optional)
- Expected annual return (%)
- Time horizon (years)
- Management fees (%)

**Calculations**
- Future value with compound interest
- Total contributions
- Total returns
- Net return after fees
- Real return (adjusted for inflation)

**Outputs**
- Final portfolio value
- Growth chart over time
- Breakdown (contributions vs returns)
- Impact of fees on returns
- Comparison scenarios (different return rates)

**Investment Types**
- Money market funds (6-10% return)
- Government bonds (12-14% return)
- Unit trusts (varies by fund)
- Stocks/NSE (historical averages)
- Fixed deposits (bank rates)

**Formula**
```
FV = PV(1+r)^n + PMT × [(1+r)^n - 1] / r
Where:
FV = Future value
PV = Present value (initial investment)
PMT = Monthly payment
r = Monthly return rate
n = Number of months
```

### 5. Debt Payoff Calculator

**Purpose**: Create a debt elimination strategy

**Inputs**
- List of debts (name, balance, interest rate, minimum payment)
- Extra payment amount available
- Payoff strategy (snowball vs avalanche)

**Calculations**
- Time to debt freedom
- Total interest paid
- Monthly payment schedule
- Debt-free date
- Savings with extra payments

**Outputs**
- Payoff timeline
- Order of debt elimination
- Progress visualization
- Interest savings
- Motivation metrics

**Strategies**
- Snowball (smallest balance first)
- Avalanche (highest interest first)
- Custom order

### 6. Retirement Calculator

**Purpose**: Plan for retirement (NSSF + personal savings)

**Inputs**
- Current age
- Retirement age (60 or desired)
- Current retirement savings
- Monthly contribution (NSSF + private)
- Expected return rate
- Retirement expenses (monthly)
- Life expectancy

**Calculations**
- Total saved at retirement
- Monthly retirement income
- Years money will last
- Savings gap (if insufficient)
- Required monthly contribution

**Kenya Context**
- NSSF contributions (Tier I & II)
- Pension fund options
- Post-retirement medical costs

### 7. Tax Calculator

**Purpose**: Estimate income tax and take-home pay

**Inputs**
- Gross monthly salary
- Or annual income (for self-employed)
- NSSF contributions
- NHIF contributions
- Other deductions (pension, insurance relief)

**Calculations**
- PAYE (Pay As You Earn) based on KRA brackets
- Relief (personal relief KES 2,400/month)
- Net salary
- Effective tax rate

**Outputs**
- Take-home pay
- Tax breakdown
- Deductions summary
- Tax optimization tips

**KRA Tax Brackets (Update as needed)**
```
2024 rates:
0 - 24,000: 10%
24,001 - 32,333: 25%
Above 32,333: 30%
Personal relief: KES 2,400/month
```

### 8. Emergency Fund Calculator

**Purpose**: Determine adequate emergency savings

**Inputs**
- Monthly essential expenses
- Number of months coverage (3-6 recommended)
- Current emergency fund balance

**Calculations**
- Target emergency fund
- Funding gap
- Monthly savings needed
- Time to reach target

**Outputs**
- Target amount
- Current progress percentage
- Savings plan
- Risk assessment

### 9. Currency Converter

**Purpose**: For diaspora and international transactions

**Inputs**
- Amount
- From currency (USD, GBP, EUR, etc.)
- To currency (KES)

**Features**
- Real-time exchange rates (CBK mid-market)
- Show transfer fees (various providers)
- Compare M-Pesa vs bank vs remittance services
- Historical rates

**API Integration**
- CBK exchange rates
- Or use exchangerate-api.com

### 10. Compound Interest Calculator

**Purpose**: Demonstrate power of compounding

**Inputs**
- Principal amount
- Interest rate
- Compounding frequency (monthly, quarterly, annually)
- Time period

**Visual Output**
- Growth chart
- Comparison of different rates
- Impact of time horizon
- Interest earned vs principal

## Calculator Design Principles

### User Experience

**Input Design**
- Clear labels with examples
- Input validation (no negative numbers)
- Helpful placeholders (e.g., "e.g., KES 50,000")
- Currency formatting (KES)
- Sliders for common ranges
- Tooltips for complex terms

**Output Design**
- Large, readable results
- Visual charts (mobile-friendly)
- Explanations of results
- Action recommendations
- Share/save results
- Print-friendly view

**Mobile Optimization**
- Thumb-friendly inputs
- Collapsible sections
- Progressive disclosure
- Fast calculations (no lag)
- Offline capability

### Accuracy Standards

**Precision**
- Round to 2 decimal places for currency
- Use standard financial formulas
- Account for Kenya-specific factors
- Regular formula verification

**Transparency**
- Show calculation method
- "How this is calculated" section
- Assumptions clearly stated
- Disclaimers for estimates

**Updates**
- Tax rates (annual KRA updates)
- Interest rates (quarterly review)
- Inflation rate (from KNBS)
- Exchange rates (daily or real-time)

### Educational Integration

**Contextual Learning**
- Explain terms inline
- Link to related articles
- Tips based on results
- Warning for risky scenarios

**What-If Scenarios**
- Adjust sliders to see impact
- Compare scenarios side-by-side
- Show sensitivity to inputs

## Technical Implementation

### Frontend
```javascript
// Example: Loan Payment Calculator
function calculateLoanPayment(principal, annualRate, months) {
  const monthlyRate = annualRate / 12 / 100;
  const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                  (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(payment * 100) / 100;
}
```

### Form Validation
- Required fields
- Numeric validation
- Range validation (reasonable limits)
- Format validation (currency)

### Performance
- Instant calculations (no server round-trip)
- Client-side JavaScript
- Cached results
- Debounce rapid inputs

### Accessibility
- Keyboard navigation
- Screen reader compatible
- High contrast mode
- Clear error messages

## Integration Points

**With Product Comparison**
- Pre-fill calculator with product data
- Calculate across multiple products
- Show in comparison table

**With AI Assistant**
- Natural language inputs ("Calculate loan for 100k at 15%")
- Explain results
- Suggest calculator based on question

**With Goals Tracker**
- Auto-create goals from calculator
- Track progress
- Adjust calculations based on actual progress

## Testing Checklist

For each calculator:

- [ ] Test with various input ranges
- [ ] Verify calculations against Excel/manual
- [ ] Test edge cases (zero, max values)
- [ ] Mobile responsive
- [ ] Input validation working
- [ ] Error handling
- [ ] Charts rendering correctly
- [ ] Results shareable/saveable
- [ ] Accessibility tested
- [ ] Load time < 2 seconds

## When to Use This Skill

Activate this skill when:
- Building new financial calculators
- Implementing calculation formulas
- Designing calculator UX
- Updating tax rates or financial formulas
- Testing calculator accuracy
- Integrating calculators with other features
