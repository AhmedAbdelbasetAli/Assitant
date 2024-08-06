import React from 'react';
import BusinessImmigration from './BusinessImmigration';
import FamilyVisas from './FamilyVisas';
import GoldenVisa from './GoldenVisa';
import HungarianInvestmentImmigrationProgram from './HungarianInvestmentImmigrationProgram';
import ResidencePermit from './ResidencePermit';
import WorkPermit from './WorkPermit';
import '../Services.css';

const ImmigrationServices = () => {
  return (
    <div className="serviceContainer">
      <h1 className="serviceTitle">Immigration Services in Hungary</h1>
      <p className="serviceDescription">
        Our comprehensive immigration services are designed to support your move to Hungary. Whether you are looking to start a business, bring your family, or simply seek a new opportunity, we provide a wide range of services to help you navigate the complexities of the Hungarian immigration system. Explore our services below to learn more about how we can assist you.
      </p>

      <h2 className="serviceSubTitle">Our Services</h2>

      <h3 className="serviceSubTitle">Business Immigration</h3>
      <BusinessImmigration />

      <h3 className="serviceSubTitle">Family Visas</h3>
      <FamilyVisas />

      <h3 className="serviceSubTitle">Golden Visa</h3>
      <GoldenVisa />

      <h3 className="serviceSubTitle">Hungarian Investment Immigration Program</h3>
      <HungarianInvestmentImmigrationProgram />

      <h3 className="serviceSubTitle">Residence Permit</h3>
      <ResidencePermit />

      <h3 className="serviceSubTitle">Work Permit</h3>
      <WorkPermit />
    </div>
  );
};

export default ImmigrationServices;
