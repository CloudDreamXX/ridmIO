interface FaqItem {
  question: string;
  answer: string[];
}

export const faqData: FaqItem[] = [
  {
    question: "What is Ridm?",
    answer: [
      "Ridm serves individuals as well as businesses with a variety of financial solutions. Individuals buy, sell, send and pay with crypto through our trading platform.",
      "For businesses, we offer an onramp as well as a checkout widget that can be utilized by digital businesses as a payment option, or a customized, integrated part of the platform itself.",
      "All our products have robust onboarding, safety and compliance protocols to ensure a comfortable experience for users and business owners.",
    ],
  },
  {
    question: "How does Ridm keep my data safe?",
    answer: [
      "We use the latest security features like two-factor authentication (OTP) and secure wallets to keep your funds safe. Ridm complies with legal and regulatory standards within the European Economic Area (EEA), ensuring a safe environment for users.",
      "Our account verification and data security procedures are all in line with regulatory standards to maximum safety for our users and their assets.",
    ],
  },
  {
    question: "In what countries is Ridm available?",
    answer: [
      "Ridm is currently available in the European Economic Area (EEA) and additional regions will be added over time. Follow our Linkedin page [linkedin.com/company] for updates regarding all aspects of our product.",
    ],
  },
];
