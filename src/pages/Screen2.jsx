import PageCard from "../components/PageCard";
import BackButton from "../components/BackButton";
import BreadcrumbDropdown from "../components/BreadcrumbDropdown";
import { FaRegSave } from "react-icons/fa";

export default function Screen2() {
  return (
    <div className="py-10 md:py-20">
      <div className="w-[95%] md:w-[90%] mx-auto">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
          <h1 className="text-2xl md:text-4xl font-semibold text-brand-mid">
            Environmental Taxes
          </h1>
          <BackButton />
        </div>

        {/* Breadcrumb Row */}
        <div className="flex flex-wrap items-center gap-2 text-[18px] md:text-[23px] text-brand-mid mb-6 md:mb-10">

          <span>Tax Year</span>
          <span>/</span>

          <BreadcrumbDropdown
            label="Form 720"
            options={["720", "721", "722", "723", "724"]}
          />
          <span>/</span>

          <BreadcrumbDropdown
            label="Environmental Taxes"
            options={[
              "ODCs",
              "Imported Products",
              "Oil Spill Tax",
              "Gasoline Tax",
              "Other Taxes"
            ]}
          />
          <span>/</span>

          <span className="whitespace-nowrap">
            98 - Ozone Depleting Chemicals (ODCs)
          </span>
        </div>

        {/* Page Card */}
        <PageCard>

          {/* Header Bar */}
          <div className="-mt-6 -mx-3 bg-brand-dark text-white px-4 py-6 md:py-7 rounded-t-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-semibold">
                98 - Ozone Depleting Chemicals (ODCs)
              </h1>

              <p className="text-xl md:text-2xl">
                Tax End Month and Tax Year:{" "}
                <span className="font-bold">March 2025</span>
              </p>
            </div>
          </div>

          {/* Checkbox */}
          <div className="py-4 md:py-6">  
            <label className="flex items-start md:items-center gap-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-brand-mid font-medium text-[18px] md:text-[22px] leading-snug">
                The Business has no excise - taxable activity (file as “None”)
              </span>
            </label>
          </div>

          {/* Table */}
          <div className="mt-4 overflow-x-auto rounded-md ">
            <table className="min-w-[700px] w-full border-collapse">

              {/* HEADER */}
              <thead>
                <tr className="bg-brand-dark text-white text-sm md:text-base">
                  <th className="pl-6 pr-4 py-4 text-left border-r border-white rounded-tl-md">
                    Tax Date
                  </th>
                  <th className="pl-6 pr-4 py-4 text-left border-r border-white">
                    ODCs Name
                  </th>
                  <th className="pl-6 pr-4 py-4 text-left border-r border-white">
                    No. of Pounds
                  </th>
                  <th className="pl-6 pr-4 py-4 text-left border-r border-white">
                    Tax Rate
                  </th>
                  <th className="pl-6 pr-4 py-4 text-left border-r border-white">
                    Tax Amount
                  </th>
                  <th className="pl-6 pr-4 py-4 text-left rounded-tr-md">
                    Action
                  </th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                <tr className="border border-gray-300">

                  <td className="p-4">
                    <input
                      type="date"
                      className="border border-brand-mid px-3 py-2 rounded-md w-full text-brand-mid"
                    />
                  </td>

                  <td className="p-4">
                    <select className="border border-brand-mid px-3 py-2 pr-10 rounded-md w-full text-brand-mid">
                      <option>Select ODC name</option>
                    </select>
                  </td>

                  <td className="p-4">
                    <input
                      type="number"
                      className="border border-brand-mid px-3 py-2 rounded-md w-full text-brand-mid"
                    />
                  </td>

                  <td className="p-4">
                    <input
                      type="text"
                      value="$0.000"
                      readOnly
                      className="border border-brand-mid px-3 py-2 rounded-md w-full text-brand-mid bg-gray-50"
                    />
                  </td>

                  <td className="p-4">
                    <input
                      type="text"
                      value="$0.00"
                      readOnly
                      className="border border-brand-mid px-3 py-2 rounded-md w-full text-brand-mid bg-gray-50"
                    />
                  </td>

                  <td className="p-4 text-left text-red-600 cursor-pointer">
                    🗑️
                  </td>

                </tr>
              </tbody>

            </table>
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10 gap-4">

            {/* Left Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-dark text-white px-7 py-2 rounded-md shadow-sm flex items-center gap-2 cursor-pointer hover:bg-brand-mid">
                <FaRegSave className="text-sm" />
                <span>Save</span>
              </button>

              <button className="border border-brand-dark px-5 py-2 rounded-md text-brand-dark font-medium cursor-pointer hover:bg-brand-dark hover:text-white transition">
                Proceed to Summary →
              </button>

              <button className="border border-brand-dark px-5 py-2 rounded-md text-brand-dark font-medium cursor-pointer hover:bg-brand-dark hover:text-white transition">
                Proceed to Deposit →
              </button>
            </div>

            {/* Add Row */}
            <button className="bg-brand-dark text-white px-5 py-2 rounded-md shadow-sm flex items-center gap-2 cursor-pointer hover:bg-brand-mid">
              ➕ Add Row
            </button>

          </div>

        </PageCard>
      </div>
    </div>
  );
}
