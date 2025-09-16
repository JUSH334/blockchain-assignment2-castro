[report.md](https://github.com/user-attachments/files/22372680/report.md)
# Assignment 2 - Analyze Transactions on DIDLab

**Student:** Joshua Castro

**Date:** September 16, 2025

## Part A - Deployment

**Contract Details:**
- **Contract Address:** `0x5fbdb2315678afecb367f032d93f642f64180aa3`
- **Token Name:** CampusCredit
- **Token Symbol:** CAMP
- **Decimals:** 18
- **Initial Supply (Human):** 1,000,000 CAMP
- **Initial Supply (Raw):** 1000000000000000000000000 (1e24 wei)

**Technical Setup:**
- **Compiler Version:** 0.8.24
- **Scripts Used:**
  - `scripts/deploy.ts` - Contract deployment
  - `scripts/interact.ts` - Transaction generation
  - `scripts/analyze.ts` - Transaction analysis

**Deployment Transaction:** `0x1e29cb09205982b054a2a9168b101265a8c1e19065ff8eaa50e2131229c6d207`

## Part B - Transaction Details

### Transaction 1 (TX1) - Transfer #1
- **Hash:** `0x03821f07e70c29a0b251720e60cbe826b313d0695a197e2a1fff6f0850a2fa4a`
- **Status:** Success
- **Block:** 2
- **Timestamp (UTC):** 2025-09-16T16:04:36.000Z
- **From:** `0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266` (EOA)
- **To:** `0x5fbdb2315678afecb367f032d93f642f64180aa3` (Contract)
- **Nonce:** 1
- **Gas Limit:** 29,976
- **Gas Used:** 26,926
- **Base Fee per Gas:** 769,606,477 wei
- **Max Fee per Gas:** 20,000,000,000 wei
- **Max Priority Fee per Gas:** 1,000,000,000 wei (1 gwei)
- **Effective Gas Price:** 1,769,606,477 wei
- **Total Fee:** 47,648,423,999,702 wei
- **Event:** Transfer - 100 CAMP tokens (100000000000000000000 wei)

### Transaction 2 (TX2) - Transfer #2
- **Hash:** `0x8547cdda09c7f4017ca2f8834cee9d799be4ab64cfbf5ace58813133820060c7`
- **Status:** Success
- **Block:** 3
- **Timestamp (UTC):** 2025-09-16T16:04:37.000Z
- **From:** `0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266` (EOA)
- **To:** `0x5fbdb2315678afecb367f032d93f642f64180aa3` (Contract)
- **Nonce:** 2
- **Gas Limit:** 29,976
- **Gas Used:** 26,926
- **Base Fee per Gas:** 673,578,355 wei
- **Max Fee per Gas:** 22,000,000,000 wei
- **Max Priority Fee per Gas:** 3,000,000,000 wei (3 gwei)
- **Effective Gas Price:** 3,673,578,355 wei
- **Total Fee:** 98,914,770,786,730 wei
- **Event:** Transfer - 50 CAMP tokens (50000000000000000000 wei)

### Transaction 3 (TX3) - Approval
- **Hash:** `0xaa5ab2b9cef7e8ebf544367fe4f71457ec5d1443bfa6a31958af5aad599253ef`
- **Status:** Success
- **Block:** 4
- **Timestamp (UTC):** 2025-09-16T16:04:38.000Z
- **From:** `0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266` (EOA)
- **To:** `0x5fbdb2315678afecb367f032d93f642f64180aa3` (Contract)
- **Nonce:** 3
- **Gas Limit:** 46,379
- **Gas Used:** 46,379
- **Base Fee per Gas:** 589,532,201 wei
- **Max Fee per Gas:** 21,000,000,000 wei
- **Max Priority Fee per Gas:** 2,000,000,000 wei (2 gwei)
- **Effective Gas Price:** 2,589,532,201 wei
- **Total Fee:** 120,099,913,950,179 wei
- **Event:** Approval - 25 CAMP allowance (25000000000000000000 wei)

## Part C - Fee Comparison (TX1 vs TX2)

### Transaction Order
- **TX1 landed first** (Block 2, Nonce 1)
- **TX2 landed second** (Block 3, Nonce 2)
- Transactions executed in submission order despite different tips

### Gas Price Analysis
- **TX2 had higher effective gas price:** 3,673,578,355 wei vs 1,769,606,477 wei
- **TX2 had higher priority tip:** 3 gwei vs 1 gwei
- **TX2 paid higher total fee:** ~98.9 trillion wei vs ~47.6 trillion wei

### EIP-1559 Explanation
EIP-1559 implements a dual-fee structure:

**Base Fee:** Dynamically adjusted per block based on network congestion. In our analysis:
- TX1: 769,606,477 wei base fee
- TX2: 673,578,355 wei base fee (decreased as network became less congested)

**Priority Tip:** User-specified tip to incentivize miners/validators
- TX1: 1 gwei tip
- TX2: 3 gwei tip

**Effective Gas Price = Base Fee + Priority Tip**
- TX1: 769,606,477 + 1,000,000,000 = 1,769,606,477 wei
- TX2: 673,578,355 + 3,000,000,000 = 3,673,578,355 wei

The higher tip in TX2 resulted in a significantly higher effective gas price, even though the base fee decreased between blocks.

## Part D - Decimals & Conversion

**Raw vs Human Conversion Example (TX1 Transfer Event):**

- **Raw Value:** 100000000000000000000 wei
- **Human Value:** 100000000000000000000 ÷ 10^18 = 100 CAMP tokens

**Calculation:** 100000000000000000000 / 1000000000000000000 = 100

This demonstrates how ERC-20 tokens use 18 decimal places by default, requiring division by 10^18 to convert from the smallest unit (wei equivalent) to human-readable token amounts.

## Infrastructure Notes

During this assignment, the DIDLab infrastructure experienced widespread outages with Cloudflare Tunnel Error 1033 affecting multiple team chains (Teams 1, 8, and others tested). The assignment was completed using a local Hardhat development network to demonstrate all required blockchain concepts and analysis techniques.

All technical requirements were fulfilled, including:
- Contract deployment with proper ERC-20 functionality
- Multiple transactions with varying gas tips
- Comprehensive transaction analysis including EIP-1559 mechanics
- Event logging and decimal conversion demonstrations

## Screenshots
<img width="936" height="450" alt="Screenshot from 2025-09-16 16-10-12" src="https://github.com/user-attachments/assets/ce81d0f9-5245-489b-a2bb-d3d9e0aa936f" />
<img width="937" height="694" alt="Screenshot from 2025-09-16 16-09-41" src="https<img width="920" height="157" alt="Screenshot from 2025-09-16 16-13-20" src="https://github.com/user-attachments/assets/b868c63e-2e39-48ce-8566-abd3ed0d739b" />
<img width="918" height="787" alt="Screenshot from 2025-09-16 16-12-33" src="https://github.com/user-attachments/assets/b58c7b8a-ba99-4e14-89da-24516d918e5c" />
<img width="918" height="787" alt="Screenshot from 2025-09-16 16-12-20" src="https://github.com/user-attachments/assets/fd71b470-ac7b-4b79-acfc-32415d5c708c" />
<img width="915" height="768" alt="Screenshot from 2025-09-16 16-10-47" src="https://github.com/user-attachments/assets/7ce22d22-7354-49a5-a268-65f0c20ea814" />
<img width="915" height="768" alt="Screenshot from 2025-09-16 16-10-32" src="https://github.com/user-attachments/assets/bbabc228-10d0-429b-ac5e-3d69b097d791" />
