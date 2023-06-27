import Complaint from "@/components/Complaint";
import Complaint2 from "@/components/Complaint2";
import HeroAbout from "@/components/HeroAbout";
import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="">
      <HeroAbout title="About us" />
      <div className="flex flex-col gap-5 justify-center items-center pb-5">
        {" "}
        <h1 className="text-3xl">ABOUT US – “We advise you the way it is”</h1>
        <div className="w-56 h-[2px] bg-golden"></div>
      </div>
      <div className="flex gap-7 justify-center items-center my-5 relative container max-w-screen-xl md:mx-auto">
        <div className="flex-1 bg-red-700 pt-4 pl-4">
          <Image
            src="/images/office.png"
            width={400}
            height={400}
            quality={70}
            alt="logo "
            cover
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-start items-start ">
          <h1 className="text-xl text-red-500 w-[90%] font-extrabold">
            Church Street Solicitors Ltd is based in Stratford, East London.{" "}
          </h1>
          <p className="text-base w-[90%]">
            The firm started operations in June 2015 with the sole aim of
            providing our clients with high quality legal services in the areas
            of Immigration, Family, Crime, Civil Litigation, Housing and
            Employment Law. We pride ourselves in our ability to advise you
            correctly and also to provide you with high standard and
            personalised professional services.{" "}
          </p>
          <p className="text-base w-[90%]">
            We also have a strong focus on the needs of our clients. We fully
            understand that they depend on us sometimes in difficult and
            life-changing situations, for instance, when their liberty is at
            stake, being served with notice of deportation by Home Office or
            financial adjustments after non-amicable divorce matters.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center py-5">
        {" "}
        <h1 className="text-3xl">Why choose Church Street Solicitors Ltd</h1>
        <div className="w-56 h-[2px] bg-golden"></div>
      </div>
      <div className="flex gap-7 justify-center items-center my-5 relative container max-w-screen-xl md:mx-auto">
        <div className="flex-1 bg-red-700 pt-4 pl-4">
          <Image
            src="/images/aboutus1.jpg"
            width={400}
            height={300}
            quality={70}
            alt="logo "
            cover
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-start items-start ">
          <h1 className="text-xl  w-[90%] font-extrabold">
            Our track record speaks volume.{" "}
          </h1>
          <p className="text-base w-[90%]">
            We will always provide you with detailed advice about your matter
            from the start.
          </p>
          <p className="text-base w-[90%]">
            We would work diligently with you to ensure that your instructions
            are fully carried out to your desired satisfactions.
          </p>
          <p className="text-base w-[90%]">
            We pride ourselves in our high success rates in our clients’
            applications to the Home Office and also in appeal related matters.
          </p>
          <h1 className="text-xl  w-[90%] font-extrabold">
            No Hidden Charges{" "}
          </h1>
          <p className="text-base w-[90%]">
            We are not publicly funded. We normally charge fixed fees with no
            hidden extras.
          </p>
          <p className="text-base w-[90%]">
            {" "}
            We know that money is important but it is not the be-all and
            end-all. We accept payment by installments.
          </p>
        </div>
      </div>

      {/* phase2 */}

      <div className="flex gap-7 justify-center items-center my-7 relative container max-w-screen-xl md:mx-auto">
        <div className="flex-1 flex flex-col gap-5 justify-start items-start ">
          <h1 className="text-xl  w-[90%] font-extrabold">
            Client Care, Client Satisfaction{" "}
          </h1>
          <p className="text-base w-[90%]">
            We aim to meet your needs efficiently, professionally and with
            utmost care and sensitivity.
          </p>
          <p className="text-base w-[90%]">
            We understand that no two matters are the same and no two clients
            are the same. Hence, we strive to ensure your total satisfaction at
            the completion of your matter.
          </p>
          <p className="text-base w-[90%]">
            We pride ourselves in our high success rates in our clients’
            applications to the Home Office and also in appeal related matters.
          </p>

          <p className="text-base w-[90%]">
            We are always available to take your call or to see you on
            appointment or in an emergency.
          </p>
          <h1 className="text-xl  w-[90%] font-extrabold">
            Confidentiality and how we handle your details:
          </h1>
          <p className="text-base w-[90%]">
            {" "}
            We operate a strict confidentiality policy in our practice in
            compliance with the rules governing us by our regulators (SRA).
          </p>
          <p className="text-base w-[90%]">
            {" "}
            Our main priority is to ensure our client’s personal data is
            securely stored and maintained in accordance with the General Data
            Protection Regulation (GDPR).{" "}
          </p>
        </div>
        <div className="flex-1 bg-red-700 pb-4 pr-4">
          <Image
            src="/images/About-Us-2.png"
            width={400}
            height={300}
            quality={70}
            alt="logo "
            cover
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <Complaint/>
      <Complaint2/>
    </div>
  );
};

export default about;
