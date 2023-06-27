import HeroAbout from "@/components/HeroAbout";
import React from "react";

const page = () => {
  return (
    <>
         <HeroAbout title="our-fee" />
         
     
     <section className=" md:mt-[-150px] flex  flex-col justify-center items-center gap-7 ">
     <div className=" flex flex-col items-center justify-center gap-7">
          <h1 className="text-red-400">OUR FIXED FEES </h1>
          <p className="text-2xl md:text-4xl">FIXED FEES CIVIL CASES</p>
          <div className="w-32 h-[3px] bg-golden"></div>
        </div>
        <div className="w-[90%]  h-[1px] px-3 bg-red-800 mt-10 md:w-[700px] md:mx-auto"></div>
      <table className="mx-3 border-collapse border border-slate-400 text-lg md:text-base">
        <tbody>
          <tr className="md:h-12">
            <td width="43" className="border border-slate-300">1.</td>
            <td width="582" className="border border-slate-300">
              CONSULTATION (Up to 1 hour) (deductible from final fees).
            </td>
            <td width="87" className="border border-slate-300">£140.00</td>
          </tr>
          <tr className="md:h-24">
            <td width="43"  className="border border-slate-300">2.</td>
            <td width="582"  className="border border-slate-300">
              Housing Possession (Acting for defendant)
              <br />
              This fee includes taking witness statements and 1 Ct. appearance
              Only. Subsequent Court Appearances charged at £350.00 within
              London
            </td>
            <td width="87"  className="border border-slate-300">£650.00</td>
          </tr>
          <tr className="md:h-28">
            <td width="43"  className="border border-slate-300">3.</td>
            <td width="582"  className="border border-slate-300">
              Housing Possession (Acting for Claimant)
              <br />
              This fee excludes serving quit notices and or lodging costs to
              court but Includes first court appearance. Subsequent Court
              attendance charged At £350.00 within London
            </td>
            <td width="87"  className="border border-slate-300">£750.00</td>
          </tr>
          <tr  className="md:h-36">
            <td width="43"  className="border border-slate-300">4.</td>
            <td width="582"  className="border border-slate-300">
              Divorce Matters (Acting for Petitioner)
              <br />
              This fee is fixed for uncontested Divorce Cases and it does not
              include Cost of lodging Divorce Petition which is currently
              £550.00 to be paid Directly to the Court either by Cheque or
              Postal Orders. The fee includes Our acting up to Decree Nisi and
              application for Decree Absolute
            </td>
            <td width="87"  className="border border-slate-300">£650.00</td>
          </tr>
          <tr  className="md:h-24">
            <td width="43"  className="border border-slate-300">5.</td>
            <td width="582"  className="border border-slate-300">
              Divorce Matters (Acting for Respondent)
              <br />
              Fees include responding to Petition but excludes Court Appearance
              <br />
              Fixed at £350.00 per appearance.
            </td>
            <td width="87"  className="border border-slate-300">£550.00</td>
          </tr>
          <tr  className="md:h-24">
            <td width="43"  className="border border-slate-300">6.</td>
            <td width="582"  className="border border-slate-300">
              Ancillary relief including Property Adjustment (Claimant)
              <br />
              Includes Form E, filing Court Claim and advising client but
              excludes
              <br />
              Court appearance fixed at £450.00 per appearance.
            </td>
            <td width="87"  className="border border-slate-300">£5000.00</td>
          </tr>
       
        <tr  className="md:h-28">
          <td width="43"  className="border border-slate-300">7.</td>
          <td width="582"  className="border border-slate-300">
            Ancillary relief including property Adjustment (Respondent)
            <br />
            Includes Form E, Responding to Correspondence from Claimant
            Negotiation with the Claimant and 1(one) Court appearance Subsequent
            court appearance fixed at £450.00.
          </td>
          <td width="87"  className="border border-slate-300">£4500.00</td>
        </tr>
        <tr  className="md:h-24">
          <td width="43"  className="border border-slate-300">&nbsp;</td>
          <td width="582"  className="border border-slate-300">
            <h3>
              <strong>Employment Law</strong>
            </h3>
          </td>
          <td width="87"  className="border border-slate-300">&nbsp;</td>
        </tr>
        <tr  className="md:h-12">
          <td width="43"  className="border border-slate-300">8.</td>
          <td width="582"  className="border border-slate-300">
            Attendance at Pre-Termination interview/Representation
          </td>
          <td width="87"  className="border border-slate-300">£1,200</td>
        </tr>
        <tr  className="md:h-12">
          <td width="43"  className="border border-slate-300">&nbsp;</td>
          <td width="582"  className="border border-slate-300">ACAS Stage</td>
          <td width="87"  className="border border-slate-300">£1,500</td>
        </tr>
        <tr className="md:h-12">
          <td width="43"  className="border border-slate-300">&nbsp;</td>
          <td width="582"  className="border border-slate-300">Filing Claims to Employment Tribunal</td>
          <td width="87"  className="border border-slate-300">£700.00</td>
        </tr>
        <tr className="md:h-12">
          <td width="43"  className="border border-slate-300">&nbsp;</td>
          <td width="582"  className="border border-slate-300">First Tribunal Attendance</td>
          <td width="87"  className="border border-slate-300">£450.00</td>
        </tr>
        <tr className="md:h-12">
          <td width="43"  className="border border-slate-300">&nbsp;</td>
          <td width="582"  className="border border-slate-300">All other Attendance</td>
          <td width="87"  className="border border-slate-300">£350.00</td>
        </tr>
        <tr className="md:h-12">
          <td width="43"  className="border border-slate-300">9.</td>
          <td width="582"  className="border border-slate-300">
            Commissioners of Oaths (or swearing an affidavit/oath)
          </td>
          <td width="87"  className="border border-slate-300 ">£10.00</td>
        </tr>
        <tr className="md:h-12">
          <td width="43"  className="border border-slate-300">10.</td>
          <td width="582"  className="border border-slate-300">Deed Poll (Change of name)</td>
          <td width="87"  className="border border-slate-300">£120.00</td>
        </tr>
        </tbody>
        
      </table>
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
    </>
  );
};

export default page;
