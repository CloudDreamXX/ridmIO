import { createRef, useEffect } from "react";
import styles from "../../styles.module.scss";
import { Title } from "shared/ui";

export const XypherisTerms = () => {
  return (
    <ol className={styles.content}>
      <p className={styles.updates}>
        Last Updated: January 31, 2025. Czech Republic and EEA
      </p>
      <Title variant="h1">Term of Use</Title>
      <h2>
        <li> Introduction</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - <a href="https://ridm.io">Ridm.io</a> is operated by Xypheris s.r.o.
          (<strong>"we" </strong>
          <strong>"our"</strong>,<strong>"us"</strong>, <strong>“Ridm”</strong>)
          a company incorporated in the Czech Republic under the company
          registration number: 22400737 and with its registered address at
          Kurzova 2222/16, 155 00, Praha 13 - Stodůlky and a Virtual Asset
          Service Provider registered with the Financial Analytical Office of
          Czech Republic (FAU).{" "}
        </li>
        <li>
          {" "}
          - Ridm is an online platform accessible via the internet for end-users
          to access a range of virtual asset services offered by us (the
          <strong>“Virtual Asset Services”</strong>). By accessing or using our
          services, you agree to comply with and be bound by these Terms of
          Service (the <strong>“Terms of Service”</strong>).
        </li>
        <li>
          {" "}
          - Please read carefully these Terms of Service and ensure that you
          understand these terms. If you do not understand these Terms of
          Service, please contact us before starting to use the Platform at{" "}
          <a href="mailto:support@ridm.io">support@ridm.io</a>.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Definitions</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - <strong>“End-user”</strong> shall mean any private individual
          accessing and using the Platform provided by Ridm.
        </li>
        <li>
          {" "}
          - <strong>“Platform”</strong> shall mean the online platform which
          allows End-users to access and use the Virtual Asset Services provided
          by Ridm by creating an account.
        </li>
        <li>
          {" "}
          - <strong>“User Account”</strong> shall mean the account created by
          the End-user in order to use the online platform and the Virtual Asset
          Services provided by Ridm.
        </li>
        <li>
          {" "}
          - <strong>“Virtual Asset”</strong> shall mean a digital representation
          of value or rights that can be transferred, stored, or traded
          electronically. Virtual Assets may include cryptocurrencies, tokens,
          or other forms of digital assets, which are typically based on
          blockchain technology.
        </li>
        <li>
          {" "}
          - <strong>“Fiat Currency”</strong> refers to a legal tender issued and
          regulated by a central bank or a government authority, which derives
          its value from governmental decree rather than intrinsic value or
          backing by a physical commodity.
        </li>
        <li>
          {" "}
          - <strong>“Virtual Asset Buy Service”</strong> shall mean the
          execution of an exchange transaction provided by Ridm whereby the
          End-user sends Fiat Currency and receives Virtual Assets at an agreed
          purchase price.
        </li>
        <li>
          {" "}
          - <strong>“Virtual Asset Sell Service”</strong> shall mean the
          execution of an exchange transaction provided by Ridm whereby the
          End-user sends Virtual Assets and receives Fiat Currency at an agreed
          purchase price.
        </li>
        <li>
          {" "}
          - <strong>“Virtual Asset Send Service”</strong> shall mean a service
          enabling the transmission of Virtual Assets from one End-user or
          wallet to another.
        </li>
        <li>
          {" "}
          - <strong>“Custodial Wallet Service”</strong> service in which a third
          party holds and manages virtual assets on behalf of users, maintaining
          control over private keys and facilitating transactions.
        </li>
        <li>
          {" "}
          - <strong>“Virtual Asset Services”</strong> shall mean Virtual Asset
          Buy Service, Virtual Asset Sell Service, Virtual Asset Send Service
          and Custodial Wallet Service under these Terms of Service.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Account Registration and Verification</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li> - To create a User Account, you confirm that:</li>
        <ol type="a">
          <li> - you are a resident of the European Economic Area; and</li>
          <li> - you are at least 18 years old; and</li>
          <li>
            {" "}
            - you have read and accepted these Terms of Service and the Privacy
            policy of Ridm; and
          </li>
          <li>
            {" "}
            - you undertake to provide accurate and up-to-date information and
            documentation related to you and the use of your User Account;
          </li>
          <li>
            {" "}
            - you comply with all applicable laws and regulations applicable to
            you and the use of your User Account.
          </li>
        </ol>
        <li> - In order to be able to use your User Account, you need to:</li>
        <ol type="a">
          <li> - Dispose of a valid e-mail address; and</li>
          <li> - Set-up a password; and</li>
          <li> - Complete the KYC Process during the onboarding process.</li>
        </ol>
        <li>
          {" "}
          - In compliance with Anti-money laundering (AML) and combating the
          financing of terrorism (CFT) regulations, we are required to verify
          your identity before you are provided with any of the Virtual Asset
          Services (the <strong>“KYC Process”</strong>). For this purpose, we
          require you to share accurate and up-to-date personal information and
          documentation about you.
        </li>
        <li>
          {" "}
          - In the event where any of the conditions provided under sections 3.1
          and 3.2 of these Terms of Service are not met or any of the
          information requested regarding the KYC Process, Ridm reserves the
          right to refuse your access to the Platform or the creation of your
          User Account.
        </li>
        <li>
          {" "}
          - Further, Ridm reserves the right to cancel, suspend or terminate
          your use of the Platform or your User Account at any time without
          notice if you do not comply with these Terms of Service.
        </li>
        <li>
          {" "}
          - Any personal information you provide to Ridm for the purpose of
          creating or using your User Account and the Virtual Asset Services
          will be collected and processed in accordance with the Privacy Policy
          of Ridm available on our website.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Services Offered</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - Ridm is a Virtual Asset Service Provider registered with the
          Financial Analytical Office of Czech Republic (FAU), any End-user
          accessing the Platform and accepting these Terms of Service from
          outside Czech Republic hereby confirms that they do so on their own
          initiative without solicitation from Ridm.
        </li>
        <li>
          {" "}
          - In order to use the Virtual Asset Services through the Platform,
          End-users need to create a User Account subject to the terms set-out
          in section 3 above.
        </li>
        <li>
          {" "}
          - In order to access the Custodial Wallet Service on the Platform, you
          need to log-in your User Account where you can consult the balance of
          your Custodial Wallet. When accessing your User Account on the
          Platform, you can buy, sell or send Virtual Assets from your Custodial
          Wallet.
        </li>
        <li>
          {" "}
          - In order to access the Virtual Asset Buy Service on the Platform,
          you need to dispose of a valid Payment Method supported on the
          Platform as described in section 6 of these Terms of Service. When
          using the Virtual Asset Buy Service on the Platform, you need to
          select the amount and the type of Virtual Asset that you wish to buy
          with Fiat Currency, the Platform will disclose the exchange rate of
          your purchase before executing the transaction. Once the transaction
          is completed, you will receive the purchased Virtual Asset on your
          Custodial Wallet available in your User Account.
        </li>
        <li>
          {" "}
          - In order to access the Virtual Asset Sell Service on the Platform,
          you need to dispose of a Custodial Wallet in your User Account with an
          available balance of Virtual Assets. When using the Virtual Asset Sell
          Service on the Platform, you need to select the amount of Virtual
          Asset available in your Custodial Wallet that you wish to sell for
          Fiat Currency and a valid payment method for receiving Fiat Currency,
          the Platform will disclose the exchange rate of your purchase before
          executing the transaction.
        </li>
        <li>
          {" "}
          - In order to access the Virtual Asset Send Service on the Platform,
          you need to dispose of a Custodial Wallet in your User Account with an
          available balance of Virtual Assets. When using the Virtual Asset Send
          Service on the Platform, you need to select the amount of Virtual
          Asset available in your Custodial Wallet that you wish to send and a
          valid destination wallet where the Virtual Assets shall be sent.
        </li>
        <li>
          {" "}
          - The Platform may impose transaction limits to your use of the
          Virtual Asset Services, including but not limited to:
        </li>
        <ol type="a">
          <li> - Maximum transaction values;</li>
          <li> - Daily, weekly, or monthly volume restrictions;</li>
          <li>
            {" "}
            - Limits on withdrawals or deposits, subject to compliance and
            anti-money laundering (AML) controls.
          </li>
        </ol>
        <li>
          {" "}
          - End-users acknowledge that transactions may be delayed or rejected
          due to compliance verifications by Ridm.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Supported Virtual Assets</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - The Virtual Asset Services provided through the Platform only
          support the following Virtual Assets:
        </li>
        <ol type="a">
          <li> - Bitcoin (BTC)</li>
          <li> - Ethereum (ETH)</li>
          <li> - Litecoin (LTC)</li>
          <li> - Algorand (ALGO)</li>
        </ol>
        <li>
          {" "}
          - Please note that the list of supported Virtual may change, please
          refer to our website or these Terms of Service for up-to-date
          information.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Supported Payment Methods and Fiat Currencies</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - The supported payment methods for the Virtual Asset Buy Service are
          Bank transfers and Credit or debit cards.
        </li>
        <li>
          {" "}
          - The supported payment methods for the Virtual Asset Sell Service are
          Bank transfers only.
        </li>
        <li>
          {" "}
          - The supported Fiat Currencies for Virtual Asset Buy/Sell Services
          are EUROS and CZECH CROWN.
        </li>
        <li>
          {" "}
          - Please note that the list of supported Payment Methods and Fiat
          Currencies may change, please refer to our website or these Terms of
          Service for up-to-date information.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Fees and Exchange Rates</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - The fees and the exchange rate for the Virtual Asset Buy/Sell/Send
          Services are displayed prior to transaction completion. By proceeding
          with a transaction, you agree to the applicable fees and the exchange
          rate.
        </li>
        <li>
          {" "}
          - By accessing Virtual Asset Buy/Sell/Send Services, you acknowledge
          that such transactions may be subject to Blockchain transaction fees
          which are outside the control of Ridm. Please note that the fees and
          the exchange rate disclosed as provided in section 7.1 herein exclude
          any blockchain transaction fees and that such blockchain transaction
          fees may incur for any Virtual Asset Buy/Sell/Send transaction. For
          more information, please refer directly to the relevant Blockchain
          network fees listing. End-users acknowledge that the execution time,
          costs, and finality of transactions depend on blockchain conditions,
          such as gas fees, network activity, and consensus mechanisms, which
          the Provider does not control.
        </li>
        <li>
          {" "}
          - The maintenance of a Custodial Wallet and a User Account is free of
          charge.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Refunds</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - Due to the inherent nature of blockchain technology and the
          characteristics of Virtual Asset transactions, all transactions
          executed through the Platform are final, irrevocable, and
          non-refundable. Once a transaction has been submitted and confirmed on
          the blockchain, it cannot be reversed, canceled, or modified under any
          circumstances.
        </li>
        <li>
          {" "}
          - End-users acknowledge and accept that Ridm does not issue refunds
          for any Virtual Asset transactions, including but not limited to:
        </li>
        <ol type="a">
          <li> - Purchases of Virtual Assets;</li>
          <li> - Sales or exchanges of Virtual Assets;</li>
          <li> - Transfers of Virtual Assets;</li>
          <li> - Any fees associated with the use of the Platform.</li>
        </ol>
        <li>
          {" "}
          - Blockchain transactions are executed by decentralized networks and
          are outside the control of the Ridm. End-users are solely responsible
          for verifying and confirming the accuracy of all transaction details
          before execution.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Platform Limitations</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - The Platform is provided on an "as-is" and "as-available" basis.
          While Ridm endeavors to maintain continuous operation of the Platform,
          End-users acknowledge that the availability and performance of the
          Platform may be affected by factors beyond the Ridm's control,
          including but not limited to:
        </li>
        <ol type="a">
          <li>
            {" "}
            - Network disruptions, system outages, or cybersecurity incidents;
          </li>
          <li>
            {" "}
            - Software bugs, technical errors, or infrastructure failures;
          </li>
          <li>
            {" "}
            - Periodic maintenance, updates, or modifications to improve
            functionality and security;
          </li>
          <li> - Blockchain delays and interruptions.</li>
        </ol>
        <li>
          {" "}
          - Ridm does not guarantee uninterrupted access to the Platform and
          shall not be liable for any temporary suspension, slowdown, or
          inaccessibility of services due to unforeseen circumstances or
          required maintenance.
        </li>
        <li>
          {" "}
          - The availability of Virtual Asset Services offered through the
          Platform may be restricted due to:
        </li>
        <ol type="a">
          <li> - Regulatory requirements in certain jurisdictions;</li>
          <li> - Security concerns or risk assessments conducted by Ridm;</li>
          <li> - Third-party service provider limitations.</li>
        </ol>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>RISK DISCLOSURE AND DISCLAIMERS</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - END-USERS ACKNOWLEDGE THAT THE VIRTUAL ASSET SERVICES CARRY INHERENT
          RISKS, INCLUDING MARKET VOLATILITY AND POTENTIAL LOSS OF FUNDS. THE
          TRADING, HOLDING, AND USE OF VIRTUAL ASSETS INVOLVE INHERENT RISKS.
          VIRTUAL ASSETS ARE NOT ISSUED OR GUARANTEED BY ANY CENTRAL BANK OR
          GOVERNMENT AUTHORITY, AND THEIR VALUE MAY FLUCTUATE SIGNIFICANTLY DUE
          TO VARioUS FACTORS, INCLUDING BUT NOT LIMITED TO SUPPLY AND DEMAND
          DYNAMICS, REGULATORY DEVELOPMENTS, MARKET SPECULATioN, AND
          TECHNOLOGICAL ADVANCEMENTS. Ridm DOES NOT PROVIDE ANY FORM OF
          GUARANTEE REGARDING THE STABILITY, LIQUIDITY, OR FUTURE VALUE OF
          VIRTUAL ASSETS. END-USERS SHOULD CAREFULLY ASSESS THEIR FINANCIAL
          SITUATioN, INVESTMENT OBJECTIVES, AND RISK TOLERANCE BEFORE ENGAGING
          IN ANY VIRTUAL ASSET-RELATED ACTIVITIES.
        </li>
        <li>
          {" "}
          - Ridm facilitates access to Virtual Asset Services but does not own,
          control, or operate the underlying blockchain networks on which such
          virtual assets are recorded and transacted. Users acknowledge that:
        </li>
        <ol type="a">
          <li>
            {" "}
            - Transactions executed through the Platform are dependent on
            decentralized blockchain networks, which are not operated or
            maintained by Ridm;
          </li>
          <li>
            {" "}
            - Ridm has no authority to modify, reverse, or cancel transactions
            once they have been submitted to a blockchain and that Blockchain
            transactions are or irreversible nature;
          </li>
          <li>
            {" "}
            - The functionality, security, and performance of blockchain
            networks are outside Ridm’s control.
          </li>
        </ol>
        <li>
          {" "}
          - End-users accept all risks associated with the operation of
          blockchain networks, including but not limited to:
        </li>
        <ol type="a">
          <li> - Network congestion or delays in transaction confirmation;</li>
          <li>
            {" "}
            - Blockchain protocol changes, hard forks, or network upgrades;
          </li>
          <li>
            {" "}
            - Irreversible loss of assets due to sending funds to incorrect or
            incompatible addresses;
          </li>
          <li> - Blockchain Interruptions and Failures.</li>
        </ol>
        <li> - End-users are solely responsible for:</li>
        <ol type="a">
          <li>
            {" "}
            - Verifying all transaction details before submission, including
            recipient addresses and network fees;
          </li>
          <li>
            {" "}
            - Using compatible wallets and adhering to best practices for
            blockchain transactions;
          </li>
          <li>
            {" "}
            - Understanding the risks of irreversible transactions and
            blockchain immutability.
          </li>
        </ol>
        <li>
          {" "}
          - Ridm does not provide financial, investment, or trading advice. All
          Virtual Asset transactions conducted through the Platform are solely
          the responsibility of the End-user. Ridm does not make any
          representations or warranties regarding potential profits, returns, or
          investment success.
        </li>
        <li>
          {" "}
          - By using the Platform, End-users confirm that they have read,
          understood, and accepted the risks outlined in this disclaimer. Ridm
          shall not be held liable for any direct, indirect, or consequential
          losses arising from the use of Virtual Assets or Virtual Asset
          Services offered on the Platform.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Taxation</li>
      </h2>
      <div className={styles.divider} />
      <p>
        End-users acknowledge and agree that they are solely responsible for
        determining, calculating, reporting, and fulfilling any tax obligations
        arising from their use of the virtual asset services provided by the
        Platform, in accordance with applicable laws and regulations in their
        country of residence, citizenship, or tax jurisdiction.
      </p>
      <div className={styles.divider} />
      <h2>
        <li>Limitation of Liability</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - Ridm shall not be liable for any losses, errors, or delays arising
          from blockchain-related issues, including:
        </li>
        <ol type="a">
          <li> - Temporary or permanent network failures or outages;</li>
          <li>
            {" "}
            - Double-spending attacks, consensus failures, or chain
            reorganizations;
          </li>
          <li>
            {" "}
            - Exploits, attacks, or vulnerabilities in blockchain protocols or
            third-party smart contracts;
          </li>
          <li>
            {" "}
            - Unavailability of validator nodes or miners affecting transaction
            finality.
          </li>
        </ol>
        <li>
          {" "}
          - Ridm does not guarantee the perpetual availability of any blockchain
          network and reserves the right to discontinue support for specific
          networks or virtual assets if required by regulatory, technical, or
          security considerations.
        </li>
        <li>
          {" "}
          - Ridm shall not be responsible for recovering lost or mistakenly sent
          Virtual Assets, nor for addressing technical malfunctions caused by
          third-party blockchain networks.
        </li>
        <li>
          {" "}
          - Ridm shall not be held liable for any losses, damages, or
          opportunity costs resulting from transaction delays, reversals, or
          failures caused by network conditions, third-party failures, or user
          errors (such as incorrect wallet addresses).
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Amendments</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - Ridm reserves the right to modify, suspend, or terminate the support
          of any Virtual Asset Service or functionality of the Platform at its
          sole discretion and without prior notice if required by regulatory,
          technical, or operational reasons.
        </li>

        <li>
          {" "}
          - Ridm reserves the right to update, modify, or discontinue any aspect
          of the Platform, including technical features, supported virtual
          assets, or system functionalities, to comply with regulatory
          requirements or improve service quality. Any significant changes
          affecting user rights or service availability shall be communicated in
          accordance with applicable legal obligations.
        </li>
        <li>
          {" "}
          - Ridm may update these Terms of Service from time to time. Changes
          will be communicated via our website or directly to your e-mail if you
          dispose of a User Account.
        </li>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Termination</li>
      </h2>
      <div className={styles.divider} />
      <ol>
        <li>
          {" "}
          - These Terms of Service shall remain in force and effect as long as
          the End-user maintains an active User Account on the Platform.
        </li>
        <li>
          {" "}
          - The End-user may request to terminate their User Account and cease
          using the Platform at any time by submitting a written request via
          email to <a href="mailto:support@ridm.io">support@ridm.io</a> and by
          confirming their identity. The User Account termination shall be
          considered final and irreversible. The End-user acknowledges that they
          may lose access to any remaining balances, transaction history, or
          other data associated with their account once closure is completed.
        </li>
        <li> - Ridm will process the User Account closure request upon:</li>
        <ol type="a">
          <li>
            {" "}
            - Verification of the User’s identity and ownership of the account;
          </li>
          <li>
            {" "}
            - Settlement of any outstanding transactions, fees, or obligations
            owed to Ridm or third parties;
          </li>
          <li>
            {" "}
            - Settlement of the outstanding balances of Virtual Asset of the
            End-user in accordance with the Virtual Asset Sell Services terms
            hereunder.
          </li>
        </ol>
        <li>
          {" "}
          - Ridm reserves the right to terminate these Terms of Service and
          close the User’s account at its sole discretion, with or without prior
          notice, in the following circumstances:
        </li>
        <ol type="a">
          <li>
            {" "}
            - Breach of these Terms of Service or any other applicable policies
            by the End-user;
          </li>
          <li>
            {" "}
            - Non-compliance with legal or regulatory obligations, including
            AML/CTF laws;
          </li>
          <li>
            {" "}
            - Suspicion of fraudulent, illegal, or unauthorized activities
            related to the User Account;
          </li>
          <li>
            {" "}
            - Abuse, misuse, or circumvention of Platform functionalities;
          </li>
          <li> - Inactivity of the account for a prolonged period;</li>
          <li>
            {" "}
            - Force majeure events or circumstances requiring the
            discontinuation of Platform or the Virtual Asset Services;
          </li>
          <li>
            {" "}
            - Regulatory action, law enforcement requests, or legal obligations
            requiring User Account suspension or closure.
          </li>
        </ol>
        <li>
          {" "}
          - Ridm may, at its discretion, notify the End-user of the impending
          termination and provide a reasonable timeframe for the withdrawal of
          remaining balances unless prohibited by law or regulatory
          restrictions.
        </li>
        <li>
          {" "}
          - Upon termination, the User’s access to the Platform, User Account,
          and related Virtual Asset Services shall be permanently revoked. Any
          remaining balances must be withdrawn before the effective termination
          date unless regulatory restrictions or unresolved disputes prevent
          such withdrawal. Ridm retains the right to withhold funds if required
          by applicable laws, regulatory requirements, or ongoing
          investigations.
        </li>
        <li>
          {" "}
          - Termination of these Terms of Service does not relieve either party
          of any outstanding obligations incurred before the termination date,
          including:
        </li>
        <ol type="a">
          <li> - Settlement of pending transactions;</li>
          <li> - Payment of outstanding fees or liabilities;</li>
          <li>
            {" "}
            - Compliance with post-termination obligations under applicable
            laws, including data retention rules.
          </li>
        </ol>
        <li>
          {" "}
          - Notwithstanding termination, the following provisions shall survive
          and continue to apply as required by law or their nature, including
          but not limited to:
        </li>
        <ol type="a">
          <li>
            {" "}
            - Liability, indemnification, and dispute resolution clauses;
          </li>
          <li> - Data protection and confidentiality obligations;</li>
          <li>
            {" "}
            - AML/CTF compliance and record-keeping requirements under European
            financial regulations.
          </li>
        </ol>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Governing Law</li>
      </h2>
      <div className={styles.divider} />
      <p>
        These Terms of Use are governed by the laws of the Czech Republic. Any
        disputes arising shall be subject to the exclusive jurisdiction of the
        Czech courts.
      </p>
    </ol>
  );
};
