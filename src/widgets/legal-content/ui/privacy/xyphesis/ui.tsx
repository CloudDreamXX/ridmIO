import { createRef, useEffect } from "react";
import styles from "../../styles.module.scss";
import { Title } from "shared/ui";

export const XypherisPolicy = () => {
  return (
    <div className={styles.content}>
      <p className={styles.updates}>
        Last Updated: January 31, 2025. Czech Republic and EEA
      </p>
      <Title variant="h1">Privacy policy</Title>
      <p>
        This Privacy Policy (<strong>"Privacy Policy"</strong>) describes how
        and why Ridm (<strong>"we"</strong>, <strong>"our"</strong>,{" "}
        <strong>"us"</strong>, <strong>“Ridm”</strong>) collects and otherwise
        processes personal data about you as a visitor and user of{" "}
        <a href="https://ridm.io">Ridm.io</a> as defined under the Terms of
        Service of <a href="https://ridm.io">Ridm.io</a> (hereinafter the
        <strong>“Platform”</strong>).
      </p>
      <p>
        The term <strong>"processing"</strong> is used to cover all activities
        involving your personal data, including e.g. collecting, handling,
        storing, sharing, accessing, using, transferring and disposing of your
        personal data.
      </p>
      <p>
        <strong>"Applicable Data Protection Laws"</strong> means all legislation
        and regulations, including regulations issued by relevant supervisory
        authorities, protecting the fundamental rights and freedoms of
        individuals and, in particular, their right to privacy with respect to
        the processing of personal data that from time to time apply to this
        Privacy Policy, including the Regulation (EU) 2016/679 of the European
        Parliament and of the Council of 27 April 2016 on the protection of
        natural persons with regard to the processing of personal data and on
        the free movement of such data, and repealing Directive 95/46/EC (the
        <strong>"GDPR"</strong>) as well as laws and regulations complementing
        the GDPR.
      </p>
      <p>
        <strong>"Personal data"</strong> is defined as any information relating
        to an identified or identifiable natural person.
      </p>
      <div className={styles.divider} />
      <h2>Who is the data controller for the processing of personal data?</h2>
      <div className={styles.divider} />
      <p>
        Xypheris s.r.o., a company incorporated in the Czech Republic under the
        company registration number: 22400737 and with its registered address at
        Kurzova 2222/16, 155 00, Praha 13 - Stodůlky is the data controller with
        respect to the processing of your personal data as described in this
        Privacy Policy.
      </p>
      <div className={styles.divider} />
      <h2>From where do we collect your personal data?</h2>
      <div className={styles.divider} />
      <p>
        Personal data is collected from you, as provided when you use the
        functionalities of our Platform. The Platform is subject to Terms of Use
        available here: <a href="https://ridm.io/terms-use">LINK</a>. All of the
        Terms of Use referred to herein shall be together referred to as the
        <strong>“Agreement”</strong> between Ridm and the user for the purpose
        of this Privacy Policy.
      </p>
      <div className={styles.divider} />
      <h2>Purposes of the processing of your personal data</h2>
      <div className={styles.divider} />
      <h3>Creating and using your User Account on the Platform</h3>
      <br />
      <p>
        We will process your personal data when you create and use your User
        Account for the Virtual Asset Services on the Platform as described in
        our Terms of Use.
      </p>
      <table>
        <thead>
          <tr>
            <th>Categories of personal data</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                <li>Name and Last Name</li>
                <li>Contact details</li>
                <li>E-mail address</li>
                <li>
                  Identity data from your selected method of ID used to verify
                  yourself:
                  <ul>
                    <li>
                      <strong>E-ID:</strong> First name, last name and personal
                      identification number:
                    </li>
                    <li>
                      <strong>If using an approved ID document:</strong> all the
                      data present on the document used.
                    </li>
                  </ul>
                </li>
              </ul>
            </td>
            <td>
              <p>
                <i>Contractual necessity.</i> The processing is necessary for
                the performance of the Agreement between you and Ridm or in
                order to take steps at the request of you prior to entering into
                the Agreement.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Retention period:</strong> Personal data will be retained
              during our contractual relationship.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Customer service</h3>
      <br />
      <p>
        We will process your personal data as needed to provide customer
        services, as needed.
      </p>
      <table>
        <thead>
          <tr>
            <th>Categories of personal data</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                <li>Identity data</li>
                <li>Contact details</li>
                <li>Your communication</li>
                <li>
                  Nature of the matter to be handled of our customer service
                </li>
              </ul>
            </td>
            <td>
              <p>
                <i>Legitimate interest.</i> The processing is necessary to
                fulfil our legitimate interest in improving your experience on
                the Platform and to provide you with tailored content.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Retention period:</strong> Personal data will be retained
              during our contractual relationship.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Establish, exercise and defend legal claims</h3>
      <p>
        For the purposes of establishing, exercising and defending legal claims,
        e.g. in connection with a dispute or legal process, we may process your
        personal data.
      </p>
      <table>
        <thead>
          <tr>
            <th>Categories of personal data</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i>
                All data collected that are necessary to fulfil the purpose.
              </i>
            </td>
            <td>
              <p>
                <i>Legitimate interest.</i> The processing is necessary in order
                to fulfil our legitimate interest to establish, exercise or
                defend the legal claim, e.g. in connection with a dispute or
                legal process.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Exemption for special categories of data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Special categories of personal data are only processed to
                      fulfil our legitimate interest in establishing, exercising
                      or defending legal claims.
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Retention period:</strong> Personal data will be retained
              for up to 10 years in order to establish, exercise and defend
              legal claims.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Fulfil legal obligations</h3>
      <p>
        Ridm will process your personal data for the purposes of fulfilling
        legal obligations within the area of e.g. book-keeping, accounting and
        requirements under Applicable Data Protection Laws.
      </p>
      <table>
        <thead>
          <tr>
            <th>Categories of personal data</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i>
                All data collected that are necessary to fulfil the purpose.
              </i>
            </td>
            <td>
              <p>
                <i>Legal obligation.</i> The processing is necessary to fulfil
                Ridm's legal obligations.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Retention period:</strong> Personal data will be retained
              as long as necessary to fulfil each legal obligation.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Manage and protect IT systems and services</h3>
      <p>
        In order to manage and protect our services and related IT systems, e.g.
        upon logging, troubleshooting, backup, change and problem management in
        systems and in connection with potential IT incidents, we process, to
        the extent necessary, your personal data.
      </p>
      <table>
        <thead>
          <tr>
            <th>Categories of personal data</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i>
                All data collected that are necessary to fulfil the purpose.
              </i>
            </td>
            <td>
              <p>
                <i>Legitimate interest.</i> The processing is necessary to
                fulfil our legitimate interest in managing and protecting our
                website, services and related IT systems.
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Retention period:</strong> Personal data will be retained
              as long as necessary in relation to each purpose stated above.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Disclosure and transfer of personal data</h3>
      <p>
        Where necessary, we share your personal data with others. The recipient
        is the data controller for the processing of your personal data, unless
        we have stated otherwise.
      </p>
      <table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Purpose</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>
                Public authorities (including courts), arbitration tribunals,
                external advisers and counterparties
              </strong>
            </td>
            <td>In order to exercise, establish or defend legal claims.</td>
            <td>
              <i>Legitimate interest.</i> To fulfil our legitimate interest in
              managing and defending legal claims, e.g. in relation to a
              dispute.
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                Public authorities (including courts) and external auditors
              </strong>
            </td>
            <td>
              To fulfil legal obligations in the field of taxation and
              accounting.
            </td>
            <td>
              <i>Legal obligation.</i> To fulfil our legal obligations.
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                Potential purchasers and vendors, external advisers
              </strong>
            </td>
            <td>
              Take necessary actions in connection with selling all or part of
              the business or in connection with a merger.
            </td>
            <td>
              <i>Legitimate interest.</i> To fulfil our legitimate interest in
              being able to sell all or part of the business or in connection
              with a merger.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Business partners</strong> (Payment Service Providers, AML
              screening third-parties provider, IT ecosystem providers and
              affiliation traffic providers)
            </td>
            <td>
              <p>
                Ridm will share your personal data with its business partners
                for the following purposes:
              </p>
              <ol>
                <li>Supply payment services to the user;</li>
                <li>
                  Supply of screening services for anti-money laundering, fraud
                  and similar crimes;
                </li>
                <li>
                  Supply of the Platform platform and allow the user to use all
                  of its functionalities (IT systems and cloud services); and
                </li>
                <li>
                  Connect Ridm users with offers from Ridm’s Business Partners.
                </li>
              </ol>
            </td>
            <td>
              <p>
                Regarding no 1, 2, and 3: <i>Contractual necessity</i>. The
                processing is necessary for the performance of our Agreement
                with you (i.e.
                <i>Terms and Conditions</i>) or in order to take steps at the
                request of you prior to entering into the contract.
              </p>
              <p>
                Regarding no 4: <i>Legitimate interest.</i>
              </p>
              <p>
                The processing is necessary to fulfil our legitimate interest in
                providing you with the affiliated offers connected to your use
                of the Platform.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Data processors acting on behalf of Ridm</h3>
      <p>
        In order to fulfil the purposes of the processing of your personal data,
        we transfer personal data to external parties such as service providers
        that we have engaged as well as other partners. These parties provide
        services within the areas of <i>inter alia</i> IT (such as data storage,
        support and management services), finance (e.g. our book-keeping system)
        and statistics services. These external parties will act as data
        processors of Ridm and may only process your personal data in accordance
        with our instructions and not for their own purposes. Ridm is the data
        controller for the processing of personal data that these external
        parties carry out on our behalf.
      </p>
      <h3>
        Appropriate safeguards for transfers of personal data outside of the
        EU/EEA
      </h3>
      <p>
        Should Ridm transfer or disclose your personal data to a recipient in a
        country outside of the EU/EEA (third country), Ridm will ensure that
        appropriate safeguards have been taken (such as the EU Commission's
        standard contract clauses, including other safeguards as necessary in
        each case) to protect the personal data.
      </p>
      <p>
        You are, if so provided under Applicable Data Protection Laws, upon
        request entitled to receive a copy of any documentation demonstrating
        that appropriate safeguards have been taken in order to protect your
        personal data during a transfer to a third country.
      </p>
      <p>
        If you would like to know more about the processing of your personal
        data and whether it is transferred to a third country, please contact us
        on the contact details as set out below.
      </p>
      <div className={styles.divider} />

      <h2>Cookies</h2>
      <div className={styles.divider} />
      <h3>Purpose of cookies</h3>
      <p>
        A cookie is a text file automatically saved in the browser of any User
        when visiting the Platform. This text file may contain personal data
        and/or information relating to the User's navigation.
      </p>
      <p>
        The only purpose of the cookies used on the Platform is to improve your
        browsing experience as a User. The cookies used facilitate your
        navigation by memorising some of your personal data when you access and
        navigate the Platform. Three types of cookies are used on the Platform,
        their purpose varying according to their type:
      </p>
      <ul>
        <ul>
          <li>
            <strong>Functional cookies:</strong> these cookies make it possible
            to remember your data entered during authentications or searches
            carried out on the Platform.
          </li>
          <li>
            <strong>Advertising cookies:</strong> these cookies make it possible
            to identify the consumption habits, research, and preferences of
            Users in order to offer them advertising content in line with their
            personal preferences.
          </li>
          <li>
            <strong>Security cookies:</strong> these cookies enable the securing
            of Users' personal data by ensuring the encryption of data contained
            in other cookies.
          </li>
        </ul>
      </ul>
      <h3>Managing cookies: activation and deactivation</h3>
      <p>
        It is possible for the User to manage at any time the Cookies on the
        browser he/she uses. The User can activate or deactivate them at any
        time. The means of managing cookies depend on each browser.
      </p>
      <div className={styles.divider} />
      <h2>Your rights</h2>
      <div className={styles.divider} />
      <p>
        Under Applicable Data Protection Laws, you have certain rights in
        relation to the processing of your personal data. We process your
        personal data to the extent necessary in order to fulfil your rights.
        Please submit requests for exercising your rights by contacting us on
        the contact details set out below.
      </p>
      <p>
        You have, under certain circumstances, the right to exercise the
        following rights:
      </p>
      <h3>Access</h3>
      <p>
        You may request confirmation whether or not personal data is processed
        and, if that is the case, access your personal data and additional
        information such as the purposes of the processing. You are also
        entitled to receive a copy of the personal data undergoing processing.
        If the request is made by electronic means the information will be
        provided in a commonly used electronic format if you do not request
        otherwise.
      </p>
      <table>
        <thead>
          <tr>
            <th>
              <h3>Object to certain processing</h3>
              <p>
                You have the right to object to the processing of your personal
                data based on a legitimate interest for reasons which concern
                your particular situation. In such a situation, we will stop
                using your personal data where the processing is based on a
                legitimate interest, unless we can show that the interest
                overrides your privacy interest or that the use of your personal
                data is necessary in order to manage or defend legal claims.
              </p>
            </th>
          </tr>
        </thead>
      </table>
      <h3>Rectification</h3>
      <p>
        You have at any time the right to have inaccurate personal data
        rectified, as well as, taking into account the purposes of processing,
        the right to have incomplete personal data completed which relates to
        you.
      </p>
      <h3>Erasure</h3>
      <p>
        You may have your personal data erased under certain circumstances, such
        as when your personal data is no longer needed for the purposes for
        which it was collected. However, we cannot delete your personal data if
        we e.g. are obligated under law to keep the data.
      </p>
      <h3>Restriction of processing</h3>
      <p>
        You may ask us to restrict the processing of your personal data to only
        comprise storage of your personal data under certain circumstances, such
        as when the processing is unlawful, but you do not want your personal
        data erased. If the processing of your personal data has been restricted
        we may only, besides storing the data, process your personal data with
        your consent, in order to establish, exercise or defend legal claims or
        to defend rights of others.
      </p>
      <h3>Withdrawal of consent</h3>
      <p>
        You have the right to at any time withdraw your consent to processing of
        personal data to the extent the processing is based on your consent.
      </p>
      <h3>Data Portability</h3>
      <p>
        You may ask to receive a machine-readable copy of the personal data
        processed on the basis of your consent or on the basis that the
        processing is necessary in order to perform an agreement with you, and
        which personal data have been provided to Ridm by you (data portability)
        and ask for the information to be transferred to another data controller
        (where possible).
      </p>
      <h3>Complaints to the supervisory authority</h3>
      <p>
        You acknowledge that you always have the right to lodge complaints
        pertaining to the processing of your personal data to the Personal Data
        Authority in Czech Republic{" "}
        <i>(Office for Personal Data protection - uoou.gov.cz).</i>
      </p>
      <h3>CONTACT INFORMATioN</h3>
      <p>
        If you have any questions or concerns regarding the processing of your
        personal data, please contact Ridm on the contact details set forth
        below.
      </p>
      <h3>Data controller:</h3>
      <p>Xypheris s.r.o.</p>
      <p>Company registration number: 22400737</p>
      <p>Kurzova 2222/16, 155 00, Prague 13 - Stodůlky</p>
      <h3>E-mail address:</h3>
      <a href="mailto:gdpr@ridm.io">gdpr@ridm.io</a>
    </div>
  );
};
