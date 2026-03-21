import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | The Dog House Pet Salon",
  description:
    "Review The Dog House Pet Salon's Terms of Use of our website, services, and policies that ensure the best care and experience.",
  openGraph: {
    title: "Terms of Use | The Dog House Pet Salon",
    description:
      "Review The Dog House Pet Salon's Terms of Use of our website, services, and policies that ensure the best care and experience.",
    url: "https://www.thedoghouseps.com/terms-of-use/",
  },
  alternates: { canonical: "https://www.thedoghouseps.com/terms-of-use/" },
};

const sections = [
  {
    heading: "Introduction",
    text: 'These Terms of Use govern your use of The Dog House Pet Salon website (this "website"); by using this website in any manner—including creating an account, logging in, reserving a spot, scheduling a Meet & Greet, or simply browsing—you accept these terms and conditions in full. If you do not agree with these terms of use or any part thereof, you must not use this website.',
  },
  {
    heading: "Agreement",
    text: "BY ACCESSING OR USING THIS WEBSITE, YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THIS AGREEMENT AND TO COMPLY WITH ALL OF THE TERMS OF USE HEREIN. YOU MUST BE AT LEAST 18 YEARS OLD TO USE THIS SITE OR ACCEPT THIS AGREEMENT. THESE TERMS OF USE, ALONG WITH ANY PRODUCT OR SERVICE-SPECIFIC TERMS ON THIS WEBSITE, FORM YOUR SERVICE AGREEMENT WITH THE DOG HOUSE PET SALON LLC, ITS SUBSIDIARIES, AND ANY OF ITS OWNED OR OPERATED LOCAL STORES (INCLUDING FRANCHISE LOCATIONS).",
  },
  {
    heading: "Right to Use Website",
    text: "Unless otherwise stated, The Dog House Pet Salon and/or its subsidiaries hold all rights to the content and materials on this website. You may view, download (for caching purposes only), and print pages from the website for personal use, subject to the restrictions outlined below.",
    list: [
      "Republish material from this website.",
      "Sell or rent any website material.",
      "Display any website material in public for purposes other than those benefiting The Dog House Pet Salon.",
      "Reproduce, duplicate, copy, or exploit material from this website beyond personal use.",
      "Edit or modify any website material.",
      "Redistribute content from this website unless specifically made available for redistribution.",
    ],
    listPrefix: "You must not:",
  },
  {
    heading: "Acceptable Use",
    text: "You must not use this website in any way that causes, or could cause, damage to the site or impairment of its availability or accessibility. Additionally, your use must not be unlawful, illegal, fraudulent, or harmful, or connected to any such activities.",
    list: [
      "Using the website to copy, store, host, transmit, send, use, publish, or distribute any material containing spyware, viruses, Trojan horses, worms, keystroke loggers, rootkits, or other malicious software.",
      "Conducting systematic or automated data collection activities (including, but not limited to, scraping, data mining, data extraction, or data harvesting) on or in relation to our website.",
      "Using our website to transmit or send unsolicited commercial communications.",
      "Using our website for any purpose related to marketing without our express written consent.",
    ],
    listPrefix: "Prohibited actions include:",
  },
  {
    heading: "Restricted Access",
    text: "Access to certain areas of this website is restricted. The Dog House Pet Salon reserves the right to restrict access to other areas of this website, or indeed this entire website, at our discretion. If The Dog House Pet Salon provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.",
  },
  {
    heading: "User Content",
    text: "In these terms of use, \"your user content\" means material (including without limitation text, images, audio material, video material, and audio-visual material) that you submit to this website, for whatever purpose. You grant to The Dog House Pet Salon a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media. You represent and warrant that your user content will comply with these terms of use.",
  },
  {
    heading: "DMCA Notice",
    text: "If you believe that content on this website infringes your copyright, please provide a written notice containing the following information to our designated copyright agent:",
    list: [
      "A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright interest.",
      "Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works.",
      "Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed, and information reasonably sufficient to permit us to locate the material.",
      "Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and email address.",
      "A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.",
      "A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of the copyright interest.",
    ],
    listPrefix: "Send DMCA notices to: The Dog House Pet Salon, 5917 Richmond Ave., Houston, TX 77057 or by email at galleria@thedoghouseps.com. Your notice must include all of the following:",
  },
  {
    heading: "Third-Party Sites and Other Users",
    text: "This website may link to or display third-party content, including social media platforms, external websites, and user-generated content. The Dog House Pet Salon does not control, endorse, or assume responsibility for any third-party content, products, or services accessible through this website. Links to third-party sites are provided for informational purposes only and do not constitute an endorsement of those sites or their content. You agree to release The Dog House Pet Salon and its associated parties from any claims or damages related to your use of third-party content or your interactions with other users. You are solely responsible for all information you share with or obtain from other users, and The Dog House Pet Salon is not liable for any harm resulting from such interactions.",
  },
  {
    heading: "No Warranties",
    text: "This website is provided \"as is\" without any representations or warranties, express or implied. The Dog House Pet Salon makes no representations or warranties in relation to this website or the information and materials provided on this website.",
  },
  {
    heading: "Limitations of Liability",
    text: "The Dog House Pet Salon will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website: for any indirect, special or consequential loss; or for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.",
  },
  {
    heading: "Indemnity",
    text: "You hereby indemnify The Dog House Pet Salon and undertake to keep The Dog House Pet Salon indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by The Dog House Pet Salon to a third party in settlement of a claim or dispute) incurred or suffered by The Dog House Pet Salon arising out of any breach by you of any provision of these terms of use.",
  },
  {
    heading: "Breaches of These Terms of Use",
    text: "Without prejudice to The Dog House Pet Salon's other rights under these terms of use, if you breach these terms of use in any way, The Dog House Pet Salon may take such action as The Dog House Pet Salon deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website, and/or bringing court proceedings against you.",
  },
  {
    heading: "Variation",
    text: "The Dog House Pet Salon may revise these terms of use from time to time. Revised terms of use will apply to the use of this website from the date of the publication of the revised terms of use on this website. Please check this page regularly to ensure you are familiar with the current version.",
  },
  {
    heading: "Entire Agreement",
    text: "These terms of use, together with our Privacy Policy, constitute the entire agreement between you and The Dog House Pet Salon in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.",
  },
  {
    heading: "Contact Us",
    text: "If you have any questions about these Terms of Use, please contact us at 713.820.6140 or visit our Contact Us page.",
  },
];

const smsSections = [
  {
    heading: "SMS Terms of Service",
    text: 'Your use of The Dog House Pet Salon Inc. ("The Dog House Pet Salon Inc.", "we", or "us") services to receive short message services and/or multi-media services ("Messages") for marketing and non-marketing purposes from us through the Constant Contact, Inc. platform (the "SMS Services") is subject to these SMS Terms of Service (these "SMS Terms"). The SMS Services and our collection and use of your personal information is also subject to our SMS Privacy Policy. By enrolling to use, using or accessing the SMS Services, you accept and agree to these SMS Terms and our SMS Privacy Policy.',
  },
  {
    heading: "SMS Services Description",
    text: "We may send marketing and non-marketing Messages, through the SMS Services which may include transactional Messages. Marketing Messages advertise and promote our products and services and may include promotions, specials, other marketing offers, abandoned checkout reminders and other relevant information. Transactional Messages relate to an existing or ongoing transaction and may include updates and other transaction-related information. Messages may be sent using an automated technology, including an autodialer, automated system, or automatic telephone dialing system. Message frequency will vary. You agree that we and our third-party service providers may send you Messages regarding the foregoing topics and that such Messages and/or calls may be made or placed using different telephone numbers or short codes. We do not charge for Messages sent through the SMS Services but you are responsible for any Message and data rates imposed by your mobile provider, as standard data and Message rates may apply for short Message alerts. We do not share text message opt-in consents or related mobile telephone numbers with third parties, except with our service providers and vendors to provide our SMS Services.",
  },
  {
    heading: "Eligibility",
    text: "To receive SMS Services, you must be a resident of the United States and 18 years of age or older.",
  },
  {
    heading: "User Opt-In",
    text: "By providing your mobile phone number to us, you are voluntarily opting in to the SMS Services and you agree to receive recurring Messages from us at the mobile phone number associated with your opt-in, even if such number is registered on any state or federal \"Do Not Call\" list. You represent that any mobile phone number you provide to us is a valid mobile phone number of which you are the valid account owner or authorized user. If you change your mobile phone number or are no longer the valid account owner or authorized user of the mobile phone number, you are responsible for notifying us immediately at fred@thedoghouseps.com. You agree to indemnify us in full for all claims, expenses, and damages related to or caused in whole or in part by your failure to notify us if you change your mobile phone number including, but not limited to, all claims, expenses, and damages related to or arising under the Telephone Consumer Protection Act. Your use of the SMS Services is not required to make any purchase from us and your use of the SMS Services is completely voluntary.",
  },
  {
    heading: "User Opt-Out and Support",
    text: "You may opt-out of the SMS Services at any time. If you wish to opt-out of the SMS Services and stop receiving Messages from us, or you no longer agree to these SMS Terms, reply STOP, QUIT, CANCEL, OPT-OUT, or UNSUBSCRIBE to any Message from us. You may continue to receive Messages for a short period while we process your request and you may receive a one-time opt-out confirmation message. You understand and agree that the foregoing is the only reasonable method of opting out. If you want to use the SMS Services again, just opt-in as you did the first time, or text START to a Message sent by us, and we will start sending Messages to you again. For support, reply HELP to any Message from us.",
  },
  {
    heading: "SMS Disclaimer of Warranty and Liability",
    text: "The SMS Services are offered on an \"as-is\" basis and may not be available in all areas, at all times, or on all mobile providers. You agree that neither we nor our service providers will be liable for any failed, delayed, or misdirected delivery of any Message or information sent through the SMS Services. To the fullest extent permissible pursuant to applicable law, we are not responsible and will not be liable for any damages of any nature, including without limitation any incidental, special or consequential damages (such as lost profits or lost business opportunities), punitive damages or attorney fees.",
  },
  {
    heading: "SMS Modifications",
    text: "We may revise, modify, amend, suspend or cancel all or any part of the SMS Services or any of its features at any time, with or without notice. To the extent permitted by applicable law, we may also modify these SMS Terms at any time. Any such modification will take effect when it is posted to our website or websites associated with the SMS Services. You agree to review these SMS Terms periodically to ensure that you are aware of any modifications. Your continued use of the SMS Services will constitute your acceptance of those modifications or changes.",
  },
];

export default function TermsOfUsePage() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "60vh" }}>
      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: "#965B83",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: '"Bowlby One SC", Sans-serif',
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#ffffff",
            margin: 0,
          }}
        >
          Terms of Use
        </h1>
        <p
          style={{
            fontFamily: '"Outfit", Sans-serif',
            fontSize: "18px",
            color: "rgba(255,255,255,0.85)",
            marginTop: "12px",
          }}
        >
          The Dog House Pet Salon
        </p>
      </section>

      {/* Content */}
      <section style={{ padding: "40px 20px 60px", maxWidth: "900px", margin: "0 auto" }}>
        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: "32px" }}>
            <h2
              style={{
                fontFamily: '"Bowlby One SC", Sans-serif',
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "#1F2124",
                marginBottom: "12px",
                fontWeight: 400,
                borderBottom: "2px solid #965B83",
                paddingBottom: "8px",
              }}
            >
              {section.heading}
            </h2>
            <p
              style={{
                fontFamily: '"Outfit", Sans-serif',
                fontSize: "15px",
                color: "#54595F",
                lineHeight: 1.8,
                marginBottom: section.list ? "12px" : 0,
              }}
            >
              {section.text}
            </p>
            {"list" in section && section.list && (
              <>
                {section.listPrefix && (
                  <p
                    style={{
                      fontFamily: '"Outfit", Sans-serif',
                      fontSize: "15px",
                      color: "#54595F",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    {section.listPrefix}
                  </p>
                )}
                <ul
                  style={{
                    paddingLeft: "24px",
                    margin: 0,
                  }}
                >
                  {section.list.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: '"Outfit", Sans-serif',
                        fontSize: "15px",
                        color: "#54595F",
                        lineHeight: 1.8,
                        marginBottom: "6px",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </section>

      {/* SMS Services Section */}
      <section style={{ backgroundColor: "#F8F8F8", padding: "40px 20px 60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", Sans-serif',
              fontSize: "clamp(20px, 2.5vw, 28px)",
              color: "#965B83",
              marginBottom: "24px",
              fontWeight: 400,
              borderBottom: "3px solid #965B83",
              paddingBottom: "12px",
            }}
          >
            SMS Services Terms
          </h2>
          {smsSections.map((section, i) => (
            <div key={i} style={{ marginBottom: "28px" }}>
              <h3
                style={{
                  fontFamily: '"Bowlby One SC", Sans-serif',
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  color: "#1F2124",
                  marginBottom: "10px",
                  fontWeight: 400,
                  borderBottom: "1px solid #E0598A",
                  paddingBottom: "6px",
                }}
              >
                {section.heading}
              </h3>
              <p
                style={{
                  fontFamily: '"Outfit", Sans-serif',
                  fontSize: "15px",
                  color: "#54595F",
                  lineHeight: 1.8,
                }}
              >
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
