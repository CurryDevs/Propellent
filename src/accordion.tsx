import React, { useState } from "react";
import plus from "./assets/plus.png";

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (id: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div
      id="accordion-flush"
      className="w-full sm:w-[658px] md:w-[756px] !transition-all flex flex-col"
    >
      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728] border-gray-200 gap-3 z-40"
        id="accordion-flush-heading-1"
        onClick={() => toggleAccordion("accordion-flush-body-1")}
      >
        <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
          Is there a free trial available?
        </span>
        <img
          src={plus}
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-1"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
          alt=""
        />
      </button>
      <div
        id="accordion-flush-body-1"
        className={`transition-all duration-500 ${
          isOpen["accordion-flush-body-1"]
            ? "h-[95px] sm:h-[68px] md:h-[40px]"
            : "h-0"
        }`}
      >
        <div className="pb-5">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-1"] ? "opacity-100 delay-150" : ""
            } transition-all duration-300 opacity-0`}
          >
            Yes, you can sign up and use Brevix with a free trial to explore
            all features before deciding.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728] gap-3 z-40 border-t-2 border-gray-200"
        id="accordion-flush-heading-2"
        onClick={() => toggleAccordion("accordion-flush-body-2")}
      >
        <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
          Can I change my plan later?
        </span>
        <img
          src={plus}
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-2"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
          alt=""
        />
      </button>
      <div
        id="accordion-flush-body-2"
        className={`transition-all ${
          isOpen["accordion-flush-body-2"]
            ? "h-[150px] sm:h-[120px] md:h-[68px]"
            : "h-0"
        }`}
      >
        <div className="pb-5 border-b border-gray-200">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-2"] ? "opacity-100 delay-150" : ""
            } transition-all duration-300 opacity-0`}
          >
            Yes, you can upgrade, downgrade, or cancel your plan at any time from
            your account settings.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#0f1728] border-t-2 border-gray-200 gap-3 z-40"
        id="accordion-flush-heading-3"
        onClick={() => toggleAccordion("accordion-flush-body-3")}
      >
        <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px]">
          What is your cancellation policy?
        </span>
        <img
          src={plus}
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-3"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
          alt=""
        />
      </button>
      <div
        id="accordion-flush-body-3"
        className={`transition-all duration-500 ${
          isOpen["accordion-flush-body-3"]
            ? "h-[150px] sm:h-[120px] md:h-[68px]"
            : "h-0"
        }`}
      >
        <div className="pb-5 border-b border-gray-200">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-3"] ? "opacity-100 delay-150" : ""
            } transition-all duration-300 opacity-0`}
          >
            You can cancel your subscription anytime. Your access will remain
            until the end of the billing period.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right select-none text-[#0f1728] border-t-2 border-gray-200 gap-3 z-40"
        onClick={() => toggleAccordion("accordion-flush-body-4")}
      >
        <span className="text-[18px] text-left leading-[24.3px] tracking-[-0.36px] cursor-pointer">
          Can other info be added to an invoice?
        </span>
        <img
          src={plus}
          className={`min-w-4 h-4 transition-all duration-300 ease-in-out ${
            isOpen["accordion-flush-body-4"] ? "rotate-[45deg]" : "rotate-0"
          } shrink-0`}
          alt=""
        />
      </button>
      <div
        id="accordion-flush-body-4"
        className={`transition-all duration-500 ${
          isOpen["accordion-flush-body-4"]
            ? "h-[150px] sm:h-[120px] md:h-[68px]"
            : "h-0"
        }`}
      >
        <div className="pb-5 border-b border-gray-200">
          <p
            className={`mb-2 text-[#475466] text-[16px] leading-[24px] ${
              isOpen["accordion-flush-body-4"] ? "opacity-100 delay-150" : ""
            } transition-all duration-300 opacity-0`}
          >
            Yes, you can add custom information to your invoices, such as company
            details or tax information, during checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
