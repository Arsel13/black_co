import React from "react";

export default function Services(props) {
  return (
    <div ref={props.refProp} className="w-4/5 md:w-1/2 m-auto py-12">
      <h1 className="text-3xl md:text-6xl text-themeOrange text-center mb-16">OUR SERVICES</h1>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
        <div className="text-center space-y-4 p-5 shadow-2xl rounded-xl bg-white">
          <h1 className="text-2xl font-bold">LEASING</h1>
          <p className="text-sm">
            BLAC & CO REAL ESTATE offers a dedicated team of Leasing Agents who
            are specialised in their designated areas with complete knowledge on
            the current Rental market, available facilities within or nearby
            community that may include – restaurants, supermarkets, bus stops &
            nearest metro stations, schools, children play areas, hospital &
            clinics and also leisure facilities.
          </p>
        </div>
        <div className="text-center space-y-4 p-5 shadow-2xl rounded-xl bg-white">
          <h1 className="text-2xl font-bold">SELLING</h1>
          <p className="text-sm">
            Interested in Selling your Property ?? contact BLAC & CO REAL
            ESTATE. We market your property with the best Portals using the
            latest CRM. Our Photography team shoot High-resolution Pictures to
            enlighten the best parts of the Property. The property will be
            marketed via – Online media by advertising it on all the live
            portals
          </p>
        </div>
        <div className="text-center space-y-4 p-5 shadow-2xl rounded-xl bg-white">
          <h1 className="text-2xl font-bold">BUYING</h1>
          <p className="text-sm">
            We help you with your home buying needs from start to finish through
            our well experienced Real estate advisors, Not only Real estate
            advisors, we are having In-House team of international financial
            Advisors, Experts and researchers. So What are you waiting for? Let
            us buy for you.
          </p>
        </div>
        <div className="text-center space-y-4 p-5 shadow-2xl rounded-xl bg-white">
          <h1 className="text-2xl font-bold">MORTGAGES</h1>
          <p className="text-sm">
            As a completely free service, BLAC & CO Mortgage Services works for
            you to find a mortgage that fits your specific requirements.There
            are a lot of components to understand: interest rates, amount of
            borrowing, mortgage calculators, costs, fixed and variable products
            and more! BLAC & CO Mortgage Service offers exclusive products and
            services which will save you thousands in upfront costs and interest
            throughout the duration of the loan.
          </p>
        </div>
      </div>
    </div>
  );
}
