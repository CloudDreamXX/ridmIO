import { createRef, useEffect } from "react";
import styles from "../../styles.module.scss";
import { Title } from "shared/ui";
import classNames from "classnames";

export const XypherisTerms = () => {
  return (
    <ol className={classNames(styles.content, styles.terms)}>
      <p className={styles.updates}>
        Last Updated: January 31, 2025. Czech Republic and EEA
      </p>
      <Title variant="h1">Term of Use</Title>
      <h2>
        <li>Introduction</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            <a href="https://ridm.io">Ridm.io</a> is operated by Xypheris s.r.o.
            (<strong>"we" </strong>
            <strong>"our"</strong>,<strong>"us"</strong>,{" "}
            <strong>“Ridm”</strong>) a company incorporated in the Czech
            Republic under the company registration number: 22400737 and with
            its registered address at Kurzova 2222/16, 155 00, Praha 13 -
            Stodůlky and a Virtual Asset Service Provider registered with the
            Financial Analytical Office of Czech Republic (FAU).{" "}
          </p>
        </li>
        <br />
        <br />
        <li>
          <p>
            {" "}
            Ridm is an online platform accessible via the internet for end-users
            to access a range of virtual asset services offered by us (the
            <strong>“Virtual Asset Services”</strong>). By accessing or using
            our services, you agree to comply with and be bound by these Terms
            of Service (the <strong>“Terms of Service”</strong>).
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Please read carefully these Terms of Service and ensure that you
            understand these terms. If you do not understand these Terms of
            Service, please contact us before starting to use the Platform at{" "}
            <a href="mailto:support@ridm.io">support@ridm.io</a>.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Definitions</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            <strong>“End-user”</strong> shall mean any private individual
            accessing and using the Platform provided by Ridm.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“Platform”</strong> shall mean the online platform which
            allows End-users to access and use the Virtual Asset Services
            provided by Ridm by creating an account.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“User Account”</strong> shall mean the account created by
            the End-user in order to use the online platform and the Virtual
            Asset Services provided by Ridm.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“Virtual Asset”</strong> shall mean a digital representation
            of value or rights that can be transferred, stored, or traded
            electronically. Virtual Assets may include cryptocurrencies, tokens,
            or other forms of digital assets, which are typically based on
            blockchain technology.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“Fiat Currency”</strong> refers to a legal tender issued and
            regulated by a central bank or a government authority, which derives
            its value from governmental decree rather than intrinsic value or
            backing by a physical commodity.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“Virtual Asset Buy Service”</strong> shall mean the
            execution of an exchange transaction provided by Ridm whereby the
            End-user sends Fiat Currency and receives Virtual Assets at an
            agreed purchase price.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“Virtual Asset Sell Service”</strong> shall mean the
            execution of an exchange transaction provided by Ridm whereby the
            End-user sends Virtual Assets and receives Fiat Currency at an
            agreed purchase price.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“Virtual Asset Send Service”</strong> shall mean a service
            enabling the transmission of Virtual Assets from one End-user or
            wallet to another.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“Custodial Wallet Service”</strong> service in which a third
            party holds and manages virtual assets on behalf of users,
            maintaining control over private keys and facilitating transactions.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            <strong>“Virtual Asset Services”</strong> shall mean Virtual Asset
            Buy Service, Virtual Asset Sell Service, Virtual Asset Send Service
            and Custodial Wallet Service under these Terms of Service.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Account Registration and Verification</li>
        <br />
      </h2>
      <ol>
        <li>
          <p> To create a User Account, you confirm that:</p>
        </li>
        <ol type="a">
          <li>
            <p> you are a resident of the European Economic Area; and</p>
          </li>
          <li>
            <p> you are at least 18 years old; and</p>
          </li>
          <li>
            <p>
              {" "}
              you have read and accepted these Terms of Service and the Privacy
              policy of Ridm; and
            </p>
          </li>
          <li>
            <p>
              {" "}
              you undertake to provide accurate and up-to-date information and
              documentation related to you and the use of your User Account;
            </p>
          </li>
          <li>
            <p>
              {" "}
              you comply with all applicable laws and regulations applicable to
              you and the use of your User Account.
            </p>
          </li>
          <br />
        </ol>
        <li>
          <p> In order to be able to use your User Account, you need to:</p>
        </li>
        <ol type="a">
          <li>
            <p> Dispose of a valid e-mail address; and</p>
          </li>
          <li>
            <p> Set-up a password; and</p>
          </li>
          <li>
            <p> Complete the KYC Process during the onboarding process.</p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            In compliance with Anti-money laundering (AML) and combating the
            financing of terrorism (CFT) regulations, we are required to verify
            your identity before you are provided with any of the Virtual Asset
            Services (the <strong>“KYC Process”</strong>). For this purpose, we
            require you to share accurate and up-to-date personal information
            and documentation about you.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            In the event where any of the conditions provided under sections 3.1
            and 3.2 of these Terms of Service are not met or any of the
            information requested regarding the KYC Process, Ridm reserves the
            right to refuse your access to the Platform or the creation of your
            User Account.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Further, Ridm reserves the right to cancel, suspend or terminate
            your use of the Platform or your User Account at any time without
            notice if you do not comply with these Terms of Service.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Any personal information you provide to Ridm for the purpose of
            creating or using your User Account and the Virtual Asset Services
            will be collected and processed in accordance with the Privacy
            Policy of Ridm available on our website.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Services Offered</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            Ridm is a Virtual Asset Service Provider registered with the
            Financial Analytical Office of Czech Republic (FAU), any End-user
            accessing the Platform and accepting these Terms of Service from
            outside Czech Republic hereby confirms that they do so on their own
            initiative without solicitation from Ridm.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            In order to use the Virtual Asset Services through the Platform,
            End-users need to create a User Account subject to the terms set-out
            in section 3 above.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            In order to access the Custodial Wallet Service on the Platform, you
            need to log-in your User Account where you can consult the balance
            of your Custodial Wallet. When accessing your User Account on the
            Platform, you can buy, sell or send Virtual Assets from your
            Custodial Wallet.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            In order to access the Virtual Asset Buy Service on the Platform,
            you need to dispose of a valid Payment Method supported on the
            Platform as described in section 6 of these Terms of Service. When
            using the Virtual Asset Buy Service on the Platform, you need to
            select the amount and the type of Virtual Asset that you wish to buy
            with Fiat Currency, the Platform will disclose the exchange rate of
            your purchase before executing the transaction. Once the transaction
            is completed, you will receive the purchased Virtual Asset on your
            Custodial Wallet available in your User Account.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            In order to access the Virtual Asset Sell Service on the Platform,
            you need to dispose of a Custodial Wallet in your User Account with
            an available balance of Virtual Assets. When using the Virtual Asset
            Sell Service on the Platform, you need to select the amount of
            Virtual Asset available in your Custodial Wallet that you wish to
            sell for Fiat Currency and a valid payment method for receiving Fiat
            Currency, the Platform will disclose the exchange rate of your
            purchase before executing the transaction.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            In order to access the Virtual Asset Send Service on the Platform,
            you need to dispose of a Custodial Wallet in your User Account with
            an available balance of Virtual Assets. When using the Virtual Asset
            Send Service on the Platform, you need to select the amount of
            Virtual Asset available in your Custodial Wallet that you wish to
            send and a valid destination wallet where the Virtual Assets shall
            be sent.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            The Platform may impose transaction limits to your use of the
            Virtual Asset Services, including but not limited to:
          </p>
        </li>
        <ol type="a">
          <li>
            <p> Maximum transaction values;</p>
          </li>
          <li>
            <p> Daily, weekly, or monthly volume restrictions;</p>
          </li>
          <li>
            <p>
              {" "}
              Limits on withdrawals or deposits, subject to compliance and
              anti-money laundering (AML) controls.
            </p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            End-users acknowledge that transactions may be delayed or rejected
            due to compliance verifications by Ridm.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Supported Virtual Assets</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            The Virtual Asset Services provided through the Platform only
            support the following Virtual Assets:
          </p>
        </li>
        <ol type="a">
          <li>
            <p> Bitcoin (BTC)</p>
          </li>
          <li>
            <p> Ethereum (ETH)</p>
          </li>
          <li>
            <p> Litecoin (LTC)</p>
          </li>
          <li>
            <p> Algorand (ALGO)</p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            Please note that the list of supported Virtual may change, please
            refer to our website or these Terms of Service for up-to-date
            information.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Supported Payment Methods and Fiat Currencies</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            The supported payment methods for the Virtual Asset Buy Service are
            Bank transfers and Credit or debit cards.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            The supported payment methods for the Virtual Asset Sell Service are
            Bank transfers only.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            The supported Fiat Currencies for Virtual Asset Buy/Sell Services
            are EUROS and CZECH CROWN.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Please note that the list of supported Payment Methods and Fiat
            Currencies may change, please refer to our website or these Terms of
            Service for up-to-date information.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Fees and Exchange Rates</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            The fees and the exchange rate for the Virtual Asset Buy/Sell/Send
            Services are displayed prior to transaction completion. By
            proceeding with a transaction, you agree to the applicable fees and
            the exchange rate.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            By accessing Virtual Asset Buy/Sell/Send Services, you acknowledge
            that such transactions may be subject to Blockchain transaction fees
            which are outside the control of Ridm. Please note that the fees and
            the exchange rate disclosed as provided in section 7.1 herein
            exclude any blockchain transaction fees and that such blockchain
            transaction fees may incur for any Virtual Asset Buy/Sell/Send
            transaction. For more information, please refer directly to the
            relevant Blockchain network fees listing. End-users acknowledge that
            the execution time, costs, and finality of transactions depend on
            blockchain conditions, such as gas fees, network activity, and
            consensus mechanisms, which the Provider does not control.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            The maintenance of a Custodial Wallet and a User Account is free of
            charge.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Refunds</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            Due to the inherent nature of blockchain technology and the
            characteristics of Virtual Asset transactions, all transactions
            executed through the Platform are final, irrevocable, and
            non-refundable. Once a transaction has been submitted and confirmed
            on the blockchain, it cannot be reversed, canceled, or modified
            under any circumstances.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            End-users acknowledge and accept that Ridm does not issue refunds
            for any Virtual Asset transactions, including but not limited to:
          </p>
        </li>
        <ol type="a">
          <li>
            <p> Purchases of Virtual Assets;</p>
          </li>
          <li>
            <p> Sales or exchanges of Virtual Assets;</p>
          </li>
          <li>
            <p> Transfers of Virtual Assets;</p>
          </li>
          <li>
            <p> Any fees associated with the use of the Platform.</p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            Blockchain transactions are executed by decentralized networks and
            are outside the control of the Ridm. End-users are solely
            responsible for verifying and confirming the accuracy of all
            transaction details before execution.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Platform Limitations</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            The Platform is provided on an "as-is" and "as-available" basis.
            While Ridm endeavors to maintain continuous operation of the
            Platform, End-users acknowledge that the availability and
            performance of the Platform may be affected by factors beyond the
            Ridm's control, including but not limited to:
          </p>
        </li>
        <ol type="a">
          <li>
            <p>
              {" "}
              Network disruptions, system outages, or cybersecurity incidents;
            </p>
          </li>
          <li>
            <p> Software bugs, technical errors, or infrastructure failures;</p>
          </li>
          <li>
            <p>
              {" "}
              Periodic maintenance, updates, or modifications to improve
              functionality and security;
            </p>
          </li>
          <li>
            <p> Blockchain delays and interruptions.</p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            Ridm does not guarantee uninterrupted access to the Platform and
            shall not be liable for any temporary suspension, slowdown, or
            inaccessibility of services due to unforeseen circumstances or
            required maintenance.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            The availability of Virtual Asset Services offered through the
            Platform may be restricted due to:
          </p>
        </li>
        <ol type="a">
          <li>
            <p> Regulatory requirements in certain jurisdictions;</p>
          </li>
          <li>
            <p> Security concerns or risk assessments conducted by Ridm;</p>
          </li>
          <li>
            <p> Third-party service provider limitations.</p>
          </li>
          <br />
        </ol>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>RISK DISCLOSURE AND DISCLAIMERS</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            END-USERS ACKNOWLEDGE THAT THE VIRTUAL ASSET SERVICES CARRY INHERENT
            RISKS, INCLUDING MARKET VOLATILITY AND POTENTIAL LOSS OF FUNDS. THE
            TRADING, HOLDING, AND USE OF VIRTUAL ASSETS INVOLVE INHERENT RISKS.
            VIRTUAL ASSETS ARE NOT ISSUED OR GUARANTEED BY ANY CENTRAL BANK OR
            GOVERNMENT AUTHORITY, AND THEIR VALUE MAY FLUCTUATE SIGNIFICANTLY
            DUE TO VARioUS FACTORS, INCLUDING BUT NOT LIMITED TO SUPPLY AND
            DEMAND DYNAMICS, REGULATORY DEVELOPMENTS, MARKET SPECULATioN, AND
            TECHNOLOGICAL ADVANCEMENTS. Ridm DOES NOT PROVIDE ANY FORM OF
            GUARANTEE REGARDING THE STABILITY, LIQUIDITY, OR FUTURE VALUE OF
            VIRTUAL ASSETS. END-USERS SHOULD CAREFULLY ASSESS THEIR FINANCIAL
            SITUATioN, INVESTMENT OBJECTIVES, AND RISK TOLERANCE BEFORE ENGAGING
            IN ANY VIRTUAL ASSET-RELATED ACTIVITIES.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Ridm facilitates access to Virtual Asset Services but does not own,
            control, or operate the underlying blockchain networks on which such
            virtual assets are recorded and transacted. Users acknowledge that:
          </p>
        </li>
        <ol type="a">
          <li>
            <p>
              {" "}
              Transactions executed through the Platform are dependent on
              decentralized blockchain networks, which are not operated or
              maintained by Ridm;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Ridm has no authority to modify, reverse, or cancel transactions
              once they have been submitted to a blockchain and that Blockchain
              transactions are or irreversible nature;
            </p>
          </li>
          <li>
            <p>
              {" "}
              The functionality, security, and performance of blockchain
              networks are outside Ridm’s control.
            </p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            End-users accept all risks associated with the operation of
            blockchain networks, including but not limited to:
          </p>
        </li>
        <ol type="a">
          <li>
            <p> Network congestion or delays in transaction confirmation;</p>
          </li>
          <li>
            <p>
              {" "}
              Blockchain protocol changes, hard forks, or network upgrades;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Irreversible loss of assets due to sending funds to incorrect or
              incompatible addresses;
            </p>
          </li>
          <li>
            <p> Blockchain Interruptions and Failures.</p>
          </li>
          <br />
        </ol>
        <li>
          <p> End-users are solely responsible for:</p>
        </li>
        <ol type="a">
          <li>
            <p>
              {" "}
              Verifying all transaction details before submission, including
              recipient addresses and network fees;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Using compatible wallets and adhering to best practices for
              blockchain transactions;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Understanding the risks of irreversible transactions and
              blockchain immutability.
            </p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            Ridm does not provide financial, investment, or trading advice. All
            Virtual Asset transactions conducted through the Platform are solely
            the responsibility of the End-user. Ridm does not make any
            representations or warranties regarding potential profits, returns,
            or investment success.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            By using the Platform, End-users confirm that they have read,
            understood, and accepted the risks outlined in this disclaimer. Ridm
            shall not be held liable for any direct, indirect, or consequential
            losses arising from the use of Virtual Assets or Virtual Asset
            Services offered on the Platform.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Taxation</li>
        <br />
      </h2>
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
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            Ridm shall not be liable for any losses, errors, or delays arising
            from blockchain-related issues, including:
          </p>
        </li>
        <ol type="a">
          <li>
            <p> Temporary or permanent network failures or outages;</p>
          </li>
          <li>
            <p>
              {" "}
              Double-spending attacks, consensus failures, or chain
              reorganizations;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Exploits, attacks, or vulnerabilities in blockchain protocols or
              third-party smart contracts;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Unavailability of validator nodes or miners affecting transaction
              finality.
            </p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            Ridm does not guarantee the perpetual availability of any blockchain
            network and reserves the right to discontinue support for specific
            networks or virtual assets if required by regulatory, technical, or
            security considerations.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Ridm shall not be responsible for recovering lost or mistakenly sent
            Virtual Assets, nor for addressing technical malfunctions caused by
            third-party blockchain networks.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Ridm shall not be held liable for any losses, damages, or
            opportunity costs resulting from transaction delays, reversals, or
            failures caused by network conditions, third-party failures, or user
            errors (such as incorrect wallet addresses).
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Amendments</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            Ridm reserves the right to modify, suspend, or terminate the support
            of any Virtual Asset Service or functionality of the Platform at its
            sole discretion and without prior notice if required by regulatory,
            technical, or operational reasons.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Ridm reserves the right to update, modify, or discontinue any aspect
            of the Platform, including technical features, supported virtual
            assets, or system functionalities, to comply with regulatory
            requirements or improve service quality. Any significant changes
            affecting user rights or service availability shall be communicated
            in accordance with applicable legal obligations.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Ridm may update these Terms of Service from time to time. Changes
            will be communicated via our website or directly to your e-mail if
            you dispose of a User Account.
          </p>
        </li>
        <br />
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Termination</li>
        <br />
      </h2>
      <ol>
        <li>
          <p>
            {" "}
            These Terms of Service shall remain in force and effect as long as
            the End-user maintains an active User Account on the Platform.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            The End-user may request to terminate their User Account and cease
            using the Platform at any time by submitting a written request via
            email to <a href="mailto:support@ridm.io">support@ridm.io</a> and by
            confirming their identity. The User Account termination shall be
            considered final and irreversible. The End-user acknowledges that
            they may lose access to any remaining balances, transaction history,
            or other data associated with their account once closure is
            completed.
          </p>
        </li>
        <br />
        <li>
          <p> Ridm will process the User Account closure request upon:</p>
        </li>
        <ol type="a">
          <li>
            <p>
              {" "}
              Verification of the User’s identity and ownership of the account;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Settlement of any outstanding transactions, fees, or obligations
              owed to Ridm or third parties;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Settlement of the outstanding balances of Virtual Asset of the
              End-user in accordance with the Virtual Asset Sell Services terms
              hereunder.
            </p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            Ridm reserves the right to terminate these Terms of Service and
            close the User’s account at its sole discretion, with or without
            prior notice, in the following circumstances:
          </p>
        </li>
        <ol type="a">
          <li>
            <p>
              {" "}
              Breach of these Terms of Service or any other applicable policies
              by the End-user;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Non-compliance with legal or regulatory obligations, including
              AML/CTF laws;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Suspicion of fraudulent, illegal, or unauthorized activities
              related to the User Account;
            </p>
          </li>
          <li>
            <p> Abuse, misuse, or circumvention of Platform functionalities;</p>
          </li>
          <li>
            <p> Inactivity of the account for a prolonged period;</p>
          </li>
          <li>
            <p>
              {" "}
              Force majeure events or circumstances requiring the
              discontinuation of Platform or the Virtual Asset Services;
            </p>
          </li>
          <li>
            <p>
              {" "}
              Regulatory action, law enforcement requests, or legal obligations
              requiring User Account suspension or closure.
            </p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            Ridm may, at its discretion, notify the End-user of the impending
            termination and provide a reasonable timeframe for the withdrawal of
            remaining balances unless prohibited by law or regulatory
            restrictions.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Upon termination, the User’s access to the Platform, User Account,
            and related Virtual Asset Services shall be permanently revoked. Any
            remaining balances must be withdrawn before the effective
            termination date unless regulatory restrictions or unresolved
            disputes prevent such withdrawal. Ridm retains the right to withhold
            funds if required by applicable laws, regulatory requirements, or
            ongoing investigations.
          </p>
        </li>
        <br />
        <li>
          <p>
            {" "}
            Termination of these Terms of Service does not relieve either party
            of any outstanding obligations incurred before the termination date,
            including:
          </p>
        </li>
        <ol type="a">
          <li>
            <p> Settlement of pending transactions;</p>
          </li>
          <li>
            <p> Payment of outstanding fees or liabilities;</p>
          </li>
          <li>
            <p>
              {" "}
              Compliance with post-termination obligations under applicable
              laws, including data retention rules.
            </p>
          </li>
          <br />
        </ol>
        <li>
          <p>
            {" "}
            Notwithstanding termination, the following provisions shall survive
            and continue to apply as required by law or their nature, including
            but not limited to:
          </p>
        </li>
        <ol type="a">
          <li>
            <p> Liability, indemnification, and dispute resolution clauses;</p>
          </li>
          <li>
            <p> Data protection and confidentiality obligations;</p>
          </li>
          <li>
            <p>
              {" "}
              AML/CTF compliance and record-keeping requirements under European
              financial regulations.
            </p>
          </li>
          <br />
        </ol>
      </ol>
      <div className={styles.divider} />
      <h2>
        <li>Governing Law</li>
        <br />
      </h2>
      <p>
        These Terms of Use are governed by the laws of the Czech Republic. Any
        disputes arising shall be subject to the exclusive jurisdiction of the
        Czech courts.
      </p>
    </ol>
  );
};
