import HeroAbout from "@/components/HeroAbout";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <HeroAbout title="our-fee" />
      <section className=" flex  flex-col justify-center items-center gap-7 ">
        <div className=" flex flex-col items-center justify-center gap-7">
          <h1 className="text-red-400">OUR FIXED FEES </h1>
          <p className="text-2xl md:text-4xl">FIXED FEES CIVIL CASES</p>
          <div className="w-32 h-[3px] bg-golden"></div>
        </div>
        <div className=" w-full md:w-[700px] py-16 ">
          <div className="w-full  h-[2px]  bg-red-800"></div>
          <div className="px-4 md:px-0 py-7">
            <div className=" flex border-r-[2px]  border-b-[2px] border-l-[2px]  gap-7 py-3 ">
              <div className="border-r-2 px-3 py-2 h-full flex justify-center items-center">
                <span>1</span>
              </div>
              <div className="text-start flex justify-center items-center">
                <span>
                  CONSULTATION (Up to 1 hour) (deductible from final fees).
                </span>
              </div>
              <div className=" border-l-2 ml-20 px-3 flex justify-center items-center">
                <span className="">£140.00</span>
              </div>
            </div>
            <div className=" flex items-center justify-between border-r-[2px]  border-b-[2px] border-l-[2px]  gap-7 py-3 ">
              <div className="border-r-2 px-3 py-2 h-full">2</div>
              <div className="text-start">
                Housing Possession (Acting for defendant) This fee includes
                taking witness statements and 1 Ct. appearance Only. Subsequent
                Court Appearances charged at £350.00 within London
              </div>
              <div className=" border-l-2 px-3">£650.00</div>
            </div>
            <div className=" flex items-center justify-between border-r-[2px]  border-b-[2px] border-l-[2px]  gap-7 py-3 ">
              <div className="border-r-2 px-3 py-2 h-full">3</div>
              <div className="text-start">
                Housing Possession (Acting for Claimant) This fee excludes
                serving quit notices and or lodging costs to court but Includes
                first court appearance. Subsequent Court attendance charged At
                £350.00 within London
              </div>
              <div className=" border-l-2 px-3">£750.00</div>
            </div>
            <div className=" flex items-center justify-between border-r-[2px]  border-b-[2px] border-l-[2px]  gap-7 py-3 ">
              <div className="border-r-2 px-3 py-2 h-full">4</div>
              <div className="text-start">
                Divorce Matters (Acting for Petitioner) This fee is fixed for
                uncontested Divorce Cases and it does not include Cost of
                lodging Divorce Petition which is currently £550.00 to be paid
                Directly to the Court either by Cheque or Postal Orders. The fee
                includes Our acting up to Decree Nisi and application for Decree
                Absolute
              </div>
              <div className=" border-l-2 px-3">£650.00</div>
            </div>
            <div className=" flex items-center justify-between border-r-[2px]  border-b-[2px] border-l-[2px]  gap-7 py-3 ">
              <div className="border-r-2 px-3 py-2 h-full">5</div>
              <div className="text-start">
                Divorce Matters (Acting for Respondent) Fees include responding
                to Petition but excludes Court Appearance Fixed at £350.00 per
                appearance.
              </div>
              <div className=" border-l-2 px-3">£550.00</div>
            </div>
            <div className=" flex items-center justify-between border-r-[2px]  border-b-[2px] border-l-[2px]  gap-7 py-3 ">
              <div className="border-r-2 px-3 py-2 h-full">6</div>
              <div className="text-start">
                Ancillary relief including Property Adjustment (Claimant)
                Includes Form E, filing Court Claim and advising client but
                excludes Court appearance fixed at £450.00 per appearance.
              </div>
              <div className=" border-l-2 px-3">£5000.00</div>
            </div>
            <div className=" flex items-center justify-between border-r-[2px]  border-b-[2px] border-l-[2px]  gap-7 py-3 ">
              <div className="border-r-2 px-3 py-2 h-full">7</div>
              <div className="text-start">
                Ancillary relief including property Adjustment (Respondent)
                Includes Form E, Responding to Correspondence from Claimant
                Negotiation with the Claimant and 1(one) Court appearance
                Subsequent court appearance fixed at £450.00.
              </div>
              <div className=" border-l-2 px-3">£4500.00</div>
            </div>
            <div className=" flex items-center justify-start gap-7 border-r-[2px]  border-b-[2px] border-l-[2px]   py-3 ">
              <div className="border-r-2 px-3 py-2 h-full "></div>
              <div className=" pl-2  text-3xl font-semibold ">
                Employment Law
              </div>
              <div className=" border-l-2 px-3 "></div>
            </div>
            <div className=" flex border-r-[2px]  border-b-[2px] border-l-[2px]  gap-7 py-3 ">
              <div className="border-r-2 px-3 py-2 h-full">8</div>
              <div className="text-start flex justify-center items-center">
                <span>
                  {" "}
                  Attendance at Pre-Termination interview/Representation
                </span>
              </div>
              <div className=" border-l-2 ml-20 px-3">£1200.00</div>
            </div>
            <div className=" flex items-center justify-start gap-7 border-r-[2px]  border-b-[2px] border-l-[2px]   py-3 ">
              <div className="border-r-2  py-2 h-full flex-[1] px-1 "></div>
              <div className=" flex-[20]  ">ACAS Stage</div>
              <div className=" border-l-2 px-3 flex-[3]">£1500</div>
            </div>
            <div className=" flex items-center justify-start gap-7 border-r-[2px]  border-b-[2px] border-l-[2px]   py-3 ">
              <div className="border-r-2  py-2 h-full flex-[1] px-1"></div>
              <div className=" flex-[20]  ">
                Filing Claims to Employment Tribunal
              </div>
              <div className=" border-l-2 px-3 flex-[3]">£700.00</div>
            </div>
            <div className=" flex items-center justify-start gap-7 border-r-[2px]  border-b-[2px] border-l-[2px]   py-3 ">
              <div className="border-r-2  py-2 h-full flex-[1] px-1 "></div>
              <div className=" flex-[20]  ">First Tribunal Attendance</div>
              <div className=" border-l-2 px-3 flex-[3]">£450.00</div>
            </div>
            <div className=" px-2 md:px-0  flex items-center justify-start gap-7 border-r-[2px]  border-b-[2px] border-l-[2px]   py-3 ">
              <div className="border-r-2  py-2 h-full flex-[1] px-3 md:px-1 "></div>
              <div className=" flex-[20] text-base md:text-base ">
                All other Attendance
              </div>
              <div className=" border-l-2 px-3 flex-[3]">£350.00</div>
            </div>
            <div className=" px-2 md:px-0  flex items-center justify-start gap-7 border-r-[2px]  border-b-[2px] border-l-[2px]   py-3 ">
              <div className="border-r-2  py-2 h-full flex-[1] flex items-center justify-center">
                <span className="px-3">9</span>
              </div>
              <div className=" flex-[20]  ">
                Commissioners of Oaths (or swearing an affidavit/oath)
              </div>
              <div className=" border-l-2 px-3 flex-[3]">£700.00</div>
            </div>
            <div className=" px-2 md:px-0 flex items-center justify-start gap-7 border-r-[2px]  border-b-[2px] border-l-[2px]   py-3 ">
              <div className="border-r-2  py-2 h-full flex-[1] flex items-center justify-center ">
                <span className="px-2">10</span>
              </div>
              <div className=" flex-[20]  ">Deed Poll (Change of name)</div>
              <div className=" border-l-2 px-3 flex-[3]"> £120.00</div>
            </div>
          </div>
        </div>
        <div className="py-10 px-4 w-full flex flex-col justify-center items-center md:w-[700px] md:mx-auto">
          <div className="w-full  h-[2px] px-3 bg-red-800 mb-10"></div>
          <h1 className="text-lg text-center pl-2 mb-7">
            Please book an appointment to talk to us about your need.{" "}
          </h1>
          <h5 className="text-3xl text-center font-extrabold">
            Church Street Solicitors Ltd – “Professional Advice”.
          </h5>
        </div>
      </section>
    </div>
  );
};

export default page;
