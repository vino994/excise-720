import PageCard from "../components/PageCard";
import BackButton from "../components/BackButton";

export default function Screen1() {
  return (
    <div className="py-10 md:py-20">
      <div className="w-[95%] md:w-[90%] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
          <h1 className="text-2xl md:text-4xl font-semibold text-brand-mid">
            Tax Year & Quarter Ending
          </h1>
          <BackButton />
        </div>

        {/* Sub Text */}
        <p className="text-[18px] md:text-[23px] text-brand-mid mb-6">Tax Year</p>

        {/* Card */}
        <PageCard>
          <div className="flex flex-col gap-8">

            {/** Business Name */}
            <div>
              <label className="block mb-2 text-brand-mid font-semibold text-lg md:text-xl">
                Business Name*
              </label>
              <select
                className="border border-brand-mid rounded-md px-4 py-3 pr-10 w-full text-brand-mid text-lg cursor-pointer hover:border-brand-dark focus:ring-2 focus:ring-brand-dark focus:outline-none"
              >
                <option>Select Business</option>
              </select>
            </div>

            {/** Form Type */}
            <div>
              <label className="block mb-2 text-brand-mid font-semibold text-lg md:text-xl">
                Form Type*
              </label>
              <select
                className="border border-brand-mid rounded-md px-4 py-3 pr-10 w-full text-brand-mid text-lg cursor-pointer hover:border-brand-dark focus:ring-2 focus:ring-brand-dark focus:outline-none"
              >
                <option>Select Form Type</option>
              </select>
            </div>

            {/** Tax Year */}
            <div>
              <label className="block mb-2 text-brand-mid font-semibold text-lg md:text-xl">
                Tax Year*
              </label>
              <select
                className="border border-brand-mid rounded-md px-4 py-3 pr-10 w-full text-brand-mid text-lg cursor-pointer hover:border-brand-dark focus:ring-2 focus:ring-brand-dark focus:outline-none"
              >
                <option>Select Tax Year</option>
              </select>
            </div>

            {/** Tax Quarter */}
            <div>
              <label className="block mb-2 text-brand-mid font-semibold text-lg md:text-xl">
                Tax Quarter
              </label>
              <select
                className="border border-brand-mid rounded-md px-4 py-3 pr-10 w-full text-brand-mid text-lg cursor-pointer hover:border-brand-dark focus:ring-2 focus:ring-brand-dark focus:outline-none"
              >
                <option>Select Quarter</option>
              </select>
            </div>

          </div>
        </PageCard>

      </div>
    </div>
  );
}
