import React from 'react';
import AccountingAndFinance from './AccountingAndFinance';
import BusinessPlanning from './BusinessPlanning';
import BusinessSolutions from './BusinessSolutions';
import CompanyFormation from './CompanyFormation';
import VirtualOffice from './VirtualOffice';
import '../Services.css';

const BusinessServices = () => {
  return (
    <div className="serviceContainer">
      <h1 className="serviceTitle">Business Services in Hungary</h1>
      <p className="serviceDescription">
        Our comprehensive business services are designed to support your company’s growth and success in Hungary. From company formation to virtual office solutions, we provide a wide range of services to help you navigate the complexities of the Hungarian business environment. Explore our services below to learn more about how we can assist you.
      </p>

      <h2 className="serviceSubTitle">Our Services</h2>
      
      <h3 className="serviceSubTitle">Accounting and Finance</h3>
      <AccountingAndFinance />

      <h3 className="serviceSubTitle">Business Planning</h3>
      <BusinessPlanning />

      <h3 className="serviceSubTitle">Business Solutions</h3>
      <BusinessSolutions />

      <h3 className="serviceSubTitle">Company Formation</h3>
      <CompanyFormation />

      <h3 className="serviceSubTitle">Virtual Office</h3>
      <VirtualOffice />
    </div>
  );
};

export default BusinessServices;
