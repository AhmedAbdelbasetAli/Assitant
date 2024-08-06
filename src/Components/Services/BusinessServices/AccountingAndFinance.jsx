import React from 'react';
import '../Services.css';

const AccountingAndFinance = () => {
  return (
    <div className="serviceContainer">
      <h2 className="serviceTitle">Accounting and Finance Services in Hungary</h2>
      <p className="serviceDescription">
      Conducting business abroad necessitates a thorough understanding of local tax laws and financial regulations. Having professional accountants manage your books ensures compliance, avoids fines, and optimizes financial management. Learn more about our services or visit our finance site at <a href="https://simpleaccountant.hu/" target="_blank" rel="noopener noreferrer">https://simpleaccountant.hu/</a>.      </p>

      <h3 className="serviceSubTitle">Finding an Accountant</h3>
      <p className="serviceDescription">
        In Hungary, companies are required to submit regular accounting reports in Hungarian from the date of their incorporation. We understand that regulations can vary significantly between countries, and we aim to make our clients fully aware of their responsibilities in Hungary. We offer assistance to ensure compliant operations. For more information, check out our fact sheet on taxation and regulations.
      </p>
      <p className="serviceDescription">
        It is essential for those applying for or holding a residence permit in Hungary to maintain accurate financial records, as these are reviewed by immigration authorities.
      </p>

      <h3 className="serviceSubTitle">Business Accounting Services</h3>
      <p className="serviceDescription">
        Our comprehensive accounting and financial services include bookkeeping, payroll, financial controlling, profit and loss calculations, cash flow projections, and more. We specialize in serving small and medium-sized businesses owned by foreigners. This focus, combined with our expertise in related areas such as business planning and residency permits, provides unparalleled service. Our team, comprising senior accountants, junior colleagues, and external specialists like VAT and customs experts, meets all your accounting needs.
      </p>
      <p className="serviceDescription">
        For more details, please refer to our fact sheet <a href="#" target="_blank" rel="noopener noreferrer">here</a>.
      </p>

      <h3 className="serviceSubTitle">Pricing</h3>
      <p className="serviceDescription">
        Our accounting fees are based on your business activity and volume. All packages include services from an English-speaking certified accountant, tax authority representation during inspections, and liability insurance to cover potential accounting errors. Some activities may incur higher fees due to risk levels. We strive to offer cost-effective solutions and can collaborate with your staff to optimize workload sharing.
      </p>
      <p className="serviceDescription">
        <a href="#" target="_blank" rel="noopener noreferrer">Contact us for a customized quote</a>.
      </p>

      <h3 className="serviceSubTitle">FAQs</h3>
      <ul className="serviceDescription">
        <li><strong>What are the most important deadlines for me?</strong></li>
        <ul>
          <li>Submitting invoices and bank statements to the accountant: 5th of each month</li>
          <li>Reporting sick leaves, salaries, or bonuses: 1st of each month</li>
          <li>Reporting any changes in the company’s operations: within 5 working days</li>
        </ul>
        <li><strong>What are the most important dates for my accountant?</strong></li>
        <ul>
          <li>Fiscal year closing / annual reports due: May 31st for the previous fiscal year</li>
          <li>VAT declarations and payments: on the 20th of each month</li>
          <li>Payroll taxes & social contributions: on the 12th of each month</li>
          <li>Corporate tax advances: quarterly on the 20th of July, October, January, and April</li>
          <li>Local business tax advance: March 15th and September 15th</li>
        </ul>
        <li><strong>What are the basic corporate taxes I have to pay in Hungary?</strong></li>
        <ul>
          <li>Local business tax: 2% on net revenues</li>
          <li>Corporate tax: 9% on profits after expenses</li>
          <li>Dividend tax: 15% plus an additional 13% social contribution tax for Hungarian residents</li>
          <li>VAT: 27%</li>
        </ul>
        <li><strong>What is VAT?</strong></li>
        <p>
          VAT (Value Added Tax) in Hungary is 27%. It is included in the price of goods and services. Companies charge VAT to individual buyers or non-VAT registered corporate EU buyers. International traders may be exempt from charging VAT.
        </p>
        <li><strong>How do I issue an invoice?</strong></li>
        <p>
          Invoices must be issued through licensed software or official invoice booklets. Unlicensed methods are not acceptable. We recommend licensed invoicing software for compliance and convenience.
        </p>
        <li><strong>Do I need an accountant?</strong></li>
        <p>
          Yes, all companies in Hungary must submit regular accounting reports in Hungarian. Our services ensure you meet these obligations and operate compliantly.
        </p>
      </ul>
    </div>
  );
};

export default AccountingAndFinance;
