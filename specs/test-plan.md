# ParaBank test plan

## Application Overview

ParaBank is a demo online banking application with authentication, account services, funds transfer, bill payment, transaction lookup, profile updates, and loan requests. The test plan focuses on validating core user journeys and key validation behaviors in a fresh browser session.

## Test Scenarios

### 1. Authentication and session

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login and logout

**File:** `tests/auth/login-logout.spec.ts`

**Steps:**
  1. Open the ParaBank home page in a fresh browser session
    - expect: The Customer Login form is displayed
  2. Enter valid credentials from the configured environment variables and submit the login form
    - expect: The application shows the Account Services area and the user is authenticated
  3. Click the Log Out link
    - expect: The user returns to the Customer Login page

#### 1.2. Invalid login handling

**File:** `tests/auth/invalid-login.spec.ts`

**Steps:**
  1. Open the home page and submit an invalid username or password
    - expect: The application shows an authentication error message
  2. Try logging in again with a valid password
    - expect: The user can successfully authenticate after the failed attempt

### 2. Account services navigation

**Seed:** `tests/seed.spec.ts`

#### 2.1. Core account service pages are accessible

**File:** `tests/smoke/account-services-navigation.spec.ts`

**Steps:**
  1. Log in with valid credentials
    - expect: The Accounts Overview page is reachable from the account services menu
  2. Navigate to Transfer Funds, Bill Pay, Find Transactions, Update Contact Info, and Request Loan
    - expect: Each page loads with the expected heading and no unexpected errors
  3. Log out from the application
    - expect: The login page is shown again

### 3. Funds transfer

**Seed:** `tests/seed.spec.ts`

#### 3.1. Transfer funds with valid data

**File:** `tests/transactions/transfer-funds.spec.ts`

**Steps:**
  1. Open the Transfer Funds page after login
    - expect: The transfer form is displayed with available accounts
  2. Select valid source and destination accounts, enter a valid amount, and submit the form
    - expect: The transfer confirmation page is shown and the transaction is recorded
  3. Return to the account overview
    - expect: The updated balances or transaction history reflect the transfer

#### 3.2. Transfer funds validation

**File:** `tests/transactions/transfer-funds-validation.spec.ts`

**Steps:**
  1. Attempt a transfer with a blank amount or invalid account selection
    - expect: The form blocks submission and shows validation feedback
  2. Submit a transfer that exceeds available balance
    - expect: The application reports the error and prevents the transaction

### 4. Bill pay

**Seed:** `tests/seed.spec.ts`

#### 4.1. Submit a bill payment successfully

**File:** `tests/billing/bill-pay.spec.ts`

**Steps:**
  1. Open the Bill Pay page after login
    - expect: The bill payment form is displayed
  2. Enter valid payee, account, amount, and address details
    - expect: The confirmation page appears and the payment is accepted
  3. Verify the transaction in the account history or transaction view
    - expect: The payment is visible as a completed transaction

#### 4.2. Bill pay validation

**File:** `tests/billing/bill-pay-validation.spec.ts`

**Steps:**
  1. Submit the bill pay form with missing required fields
    - expect: The application prevents submission and highlights the invalid fields
  2. Enter an invalid amount or date
    - expect: The form shows a clear validation error

### 5. Transaction lookup and account history

**Seed:** `tests/seed.spec.ts`

#### 5.1. Find transactions by available criteria

**File:** `tests/transactions/find-transactions.spec.ts`

**Steps:**
  1. Open the Find Transactions page after login
    - expect: The search form is displayed
  2. Search using a known transaction reference or date range
    - expect: Matching transactions are returned and displayed correctly
  3. Clear the search and repeat with another criterion
    - expect: The results update correctly without leaving stale data behind

### 6. Profile and loan request

**Seed:** `tests/seed.spec.ts`

#### 6.1. Update contact information

**File:** `tests/profile/update-contact-info.spec.ts`

**Steps:**
  1. Open the Update Contact Info page after login
    - expect: The profile form is shown with the current contact details
  2. Change one or more profile values and submit the form
    - expect: The form confirms the update successfully
  3. Refresh or navigate away and back
    - expect: The updated values are preserved as expected

#### 6.2. Request a loan with valid and invalid data

**File:** `tests/loans/request-loan.spec.ts`

**Steps:**
  1. Open the Request Loan page and submit a valid loan application
    - expect: The application is accepted and the confirmation message is shown
  2. Attempt another submission with missing or invalid loan details
    - expect: The page reports validation errors and blocks submission
