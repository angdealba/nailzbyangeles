import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">Effective Date: June 17, 2025</p>
            <p className="mb-4"> This Privacy Policy explains how we collect, use, store, protect, and share your
                personal information when you interact with our website or
                book a service. We are committed to protecting your privacy and ensuring that your personal information
                is handled in compliance with the Texas Data Privacy
                and Security Act (TDPSA) and the Texas Identity Theft Enforcement and Protection Act (ITEPA).</p>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
                <p>
                    This website is owned and operated by NailzByAngeles, located in Dallas, Texas.
                    For any questions regarding this policy, you can contact us at <a
                    href="mailto:angeles.dealba6734@gmail.com"
                    className="text-pink-600 underline">angeles.dealba6734@gmail.com</a>.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. What Information We Collect</h2>
                <ul className="list-disc ml-6">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Instagram username</li>
                    <li>Uploaded images</li>
                </ul>
                <p>We do not collect or store sensitive data such as Social Security numbers, credit card numbers, or
                    government-issued identification.
                    All payments are processed securely through Stripe.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
                <p>
                    Your personal data is used solely for purposes that are essential to providing you with our
                    services. These include:
                </p>
                <ul className="list-disc ml-6">
                    <li>Scheduling and managing appointments</li>
                    <li>Communicating with you about your booking (e.g., cancellations, questions, etc.)</li>
                    <li>Responding to customer service inquiries</li>
                    <li>Keeping internal records related to your appointments</li>
                    <li>Logging appointment types and history for service quality improvements</li>
                </ul>
                <p>We do not send marketing or promotional emails.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. How Your Data Is Processed</h2>
                <p>We take the protection of your personal information seriously. Your data is stored and transmitted
                    using the following security measures:</p>
                <ul className="list-disc ml-6">
                    <li>Secure HTTPS (SSL/TLS) encryption for all data transferred between your browser and our
                        website
                    </li>
                    <li>Restricted access to client data to only those necessary for appointment processing
                        (owner/operator only)
                    </li>
                    <li>Strong password protection and role-based access controls for our admin interfaces</li>
                    <li>Back-end hosting with reputable platforms that offer industry-standard security practices (e.g.,
                        Render, Vercel)
                    </li>
                    <li>Stripe handles all payment data and is certified to PCI Service Provider Level 1—the highest
                        level of certification available
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Who Has Access to Your Data</h2>
                <p>
                    We do not sell or rent your data. Access to your personal information is limited to:
                </p>
                <ul className="list-disc ml-6">
                    <li>Website operator (owner): To manage and view appointments</li>
                    <li>Stripe: To securely process deposit payment</li>
                    <li>Google Calendar API: To record confirmed appointments (only time and service details, not full client details)</li>
                    <li>Hosting services: Our frontend is hosted on Vercel and backend on Render, both of which comply with modern security standards</li>
                </ul>
                <p>No other third-party vendors, parent companies, or subsidiaries access or share your personal information unless legally required to do so.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Data Storage and Retention</h2>
                <p>
                    Your data is stored in secure servers located within the United States. We do not transfer your data outside of the United States.
                    We retain appointment data and client contact information only for as long as needed to provide our services and comply with applicable laws.
                    You may request deletion of your data at any time.
                </p>

            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Third-Party Access</h2>
                <p>
                    We collect and process your data based on:
                </p>
                <ul className="list-disc ml-6">
                    <li>Your consent when you provide your personal information through the booking form</li>
                    <li>Our legitimate interest in providing and improving our nail services</li>
                    <li>Legal obligations requiring us to maintain transaction records</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. Your Rights Under Texas Law</h2>
                <p>Under the Texas Data Privacy and Security Act (TDPSA), you have the following rights:</p>
                <ul className="list-disc ml-6">
                    <li>Access: Request a copy of the personal data we hold about you</li>
                    <li>Correction: Request that inaccurate or incomplete data be updated</li>
                    <li>Deletion: Request that your personal data be deleted (unless retention is required by law)</li>
                    <li>Opt-out: You may opt out of any future communications or data usage beyond essential service delivery</li>
                </ul>
                <p className="mt-2">
                    Contact us at <a href="mailto:angeles.dealba6734@gmail.com"
                                     className="text-pink-600 underline">angeles.dealba6734@gmail.com</a> to exercise your
                    rights.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">9. Policy Updates</h2>
                <p>
                    We may update this privacy policy to reflect changes in our practices, legal obligations, or technology.
                    When we make material changes, we will post the updated policy with a new effective date.
                    Continued use of our site indicates acceptance of the updated policy.
                </p>
            </section>
        </div>
    );
};
