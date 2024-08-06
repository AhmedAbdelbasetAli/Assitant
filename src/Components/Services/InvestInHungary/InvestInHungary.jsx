import React from 'react';
import FranchiseOpportunities from './FranchiseOpportunities';
import RealEstateResidenceProgram from './RealEstateResidenceProgram';
import PropertyInvestment from './PropertyInvestment';
import '../Services.css';

const InvestInHungary = () => {
  return (
    <div className="serviceContainer">
      <h1 className="serviceTitle">Invest in Hungary</h1>
      <p className="serviceDescription">
        Hungary offers a wealth of investment opportunities for individuals and businesses alike. Whether you are interested in franchising, real estate, or other property investments, our services are designed to help you navigate the Hungarian market and make informed investment decisions. Explore our services below to learn more about how we can assist you in your investment journey.
      </p>

      <h2 className="serviceSubTitle">Our Investment Services</h2>

      <h3 className="serviceSubTitle">Franchise Opportunities</h3>
      <FranchiseOpportunities />

      <h3 className="serviceSubTitle">Real Estate Residence Program (RERP)</h3>
      <RealEstateResidenceProgram />

      <h3 className="serviceSubTitle">Property Investment</h3>
      <PropertyInvestment />
    </div>
  );
};

export default InvestInHungary;
