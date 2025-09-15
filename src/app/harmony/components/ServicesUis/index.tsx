import serviceImage from "@/assets/whatwedo/service-img.webp";
import tablet from "@/assets/harmony/tablet.svg";
import marketing from "@/assets/harmony/marketing-2.webp";
import phone from "@/assets/harmony/content-system.svg";
import smphone from "@/assets/harmony/sm-phone.svg";
import smtablet from "@/assets/harmony/sm-tablet.svg";
import digitalStrategy from "@/assets/harmony/content-marketing.webp";

type Props = {};

export default function ServicesUis({}: Props) {
  return (
    <div>
      <div className="bg-[linear-gradient(360deg,#E8E9F6_-28.16%,#8E99CE_106.58%)] sm:bg-[linear-gradient(270deg,#E8E9F6_0%,#8E99CE_100%)] flex flex-col sm:flex-row sm:items-center md:gap-[2rem] lg:gap-[2.667rem] xl:gap-[3.333rem] 2xl:gap-[4rem] 3xl:gap-[5rem]">
        <div className='order-2 sm:order-1 relative before:absolute before:inset-0 before:content-[""] before:bg-[linear-gradient(180deg,#BCC2E2_0.12%,rgba(193,198,228,0.1)_100%)] sm:before:bg-[linear-gradient(270deg,#B5BCDF_0%,rgba(193,198,228,0.1)_100%)] w-full sm:w-[12.375rem] md:w-[20.5rem] lg:w-[27.333rem] xl:w-[34.167rem] 2xl:w-[41rem] 3xl:w-[51.25rem] h-[4.313rem] sm:h-[11.875rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[37.5rem]'>
          <img
            className="w-full h-full object-cover object-center"
            loading="lazy"
            src={serviceImage.src}
            alt="B2B Lead Generation & Account-Based Marketing (ABM)"
          />
        </div>
        <div className="text-[#272727] flex-1 order-1 sm:order-2 p-4 sm:p-0">
          <h4 className="font-semibold  text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            Brand Strategy & Identity
          </h4>
          <ul className="list-disc list-outside ml-4 md:ml-8 mt-2 text-[0.75rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
            <li>Brand positioning & storytelling frameworks</li>
            <li>Visual identity & logo systems</li>
            <li>Packaging design consulting</li>
            <li>Seasonal campaign branding</li>
            <li>Brand guideline creation</li>
          </ul>
        </div>
      </div>

      <div className="bg-[linear-gradient(270deg,#E6C7B8_0%,#EC997B_100%)] flex flex-col sm:flex-row sm:items-center relative">
        <div className="flex-1 p-4 sm:pl-4 md:pl-[5rem] lg:pl-[6.667rem] xl:pl-[8.333rem] 2xl:pl-[10rem] 3xl:pl-[12.5rem]">
          <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            Performance Marketing & Growth
          </h4>
          <ul className="list-disc list-outside ml-4 md:ml-8 mt-2 text-[0.75rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
            <li>Meta (Facebook/Instagram) and Google Ads management</li>
            <li>E-commerce sales funnel strategy & optimization</li>
            <li>Retargeting and dynamic product ad campaigns</li>
            <li>Influencer marketing planning & execution</li>
            <li>Marketplace (Amazon, Flipkart) ad campaigns</li>
            <li>
              Campaign analytics, reporting & creative performance optimization
            </li>
          </ul>
        </div>
        <div className="overflow-hidden relative w-full sm:w-[190px] md:w-[20.5rem] lg:w-[27.333rem] xl:w-[34.167rem] 2xl:w-[41rem] 3xl:w-[51.25rem] h-[4.438rem] sm:h-[11.875rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[37.5rem]">
          <img
            className="w-full h-full object-cover object-center hidden sm:block"
            src={tablet.src}
            alt="Performance Marketing & Media Planning"
          />
          <img
            className="w-full h-full object-cover object-center sm:hidden"
            src={smtablet.src}
            alt="Performance Marketing & Media Planning"
          />
        </div>
      </div>

      <div className="bg-[linear-gradient(270deg,#476087_0%,#469EDB_100%)] sm:bg-[linear-gradient(270deg,#476087_0%,#469EDB_100%)] flex flex-col sm:flex-row sm:items-center md:gap-[2rem] lg:gap-[2.667rem] xl:gap-[3.333rem] 2xl:gap-[4rem] 3xl:gap-[5rem]">
        <div className='relative order-2 sm:order-1 before:absolute before:inset-0 before:content-[""] before:bg-[linear-gradient(180deg,#409ECB_0.12%,rgba(212,246,255,0.05)_100%)] sm:before:bg-[linear-gradient(270.19deg,#4783B6_2.36%,rgba(72,131,181,0)_38.08%)] w-full sm:w-[12.375rem] md:w-[20.5rem] lg:w-[27.333rem] xl:w-[34.167rem] 2xl:w-[41rem] 3xl:w-[51.25rem] h-[4.438rem] sm:h-[11.875rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[37.5rem]'>
          <img
            className="w-full h-full object-cover object-center"
            loading="lazy"
            src={marketing.src}
            alt="Marketing Technology & Automation"
          />
        </div>
        <div className="flex-1 order-1 sm:order-2 p-4 sm:pr-4 md:pr-0">
          <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            B2B Lead Generation & Retail Franchise <br /> Marketing
          </h4>
          <ul className="list-disc list-outside ml-4 md:ml-8 mt-2 text-[0.75rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
            <li>Lead-gen campaigns for B2B buyers & distributors</li>
            <li>Franchisee recruitment campaigns</li>
            <li>
              Sales enablement assets (catalogs, decks, brochures, one-pagers)
            </li>
            <li>LinkedIn lead-gen and content campaigns</li>
          </ul>
        </div>
      </div>

      <div className="bg-[linear-gradient(270deg,#CCD6E2_0%,#C5AC94_100%)] flex flex-col sm:flex-row sm:items-center">
        <div className="text-[#272727] flex-1 p-4 sm:pl-4 md:pl-[5rem] lg:pl-[6.667rem] xl:pl-[8.333rem] 2xl:pl-[10rem] 3xl:pl-[12.5rem]">
          <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            Digital Experience Design (UI/UX & UX <br /> Writing)
          </h4>
          <ul className="list-disc list-outside ml-4 md:ml-8 mt-2 text-[0.75rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
            <li>Shopify / WooCommerce website UX audits & redesign</li>
            <li>Mobile app interface design for retail/eCommerce brands</li>
            <li>
              UX writing for product pages, CTAs, notifications, onboarding
            </li>
            <li>Conversion rate optimization (CRO) for online stores</li>
          </ul>
        </div>
        <div className="overflow-hidden relative w-full sm:w-[12.375rem] md:w-[20.5rem] lg:w-[27.333rem] xl:w-[34.167rem] 2xl:w-[41rem] 3xl:w-[51.25rem] h-[4.438rem] sm:h-[11.875rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[37.5rem]">
          <img
            className="w-full h-full object-cover hidden sm:block"
            src={phone.src}
            alt="CX Design & Content Systems"
          />
          <img
            className="w-full h-full object-cover sm:hidden"
            src={smphone.src}
            alt="CX Design & Content Systems"
          />
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,#39291C_0%,#6C5743_100%)] sm:bg-[linear-gradient(90deg,#AC9073_18.7%,#39291C_100%)] flex flex-col sm:flex-row sm:items-center md:gap-[2rem] lg:gap-[2.667rem] xl:gap-[3.333rem] 2xl:gap-[4rem] 3xl:gap-[5rem]">
        <div className='relative order-2 sm:order-1 before:absolute before:inset-0 before:content-[""] before:bg-[linear-gradient(180deg,#594634_5.44%,rgba(0,0,0,0)_78.8%)] sm:before:bg-[linear-gradient(270deg,#887159_2.14%,rgba(0,0,0,0)_98.05%)] w-full sm:w-[12.375rem] md:w-[20.5rem] lg:w-[27.333rem] xl:w-[34.167rem] 2xl:w-[41rem] 3xl:w-[51.25rem] h-[3.438rem] sm:h-[11.875rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[37.5rem]'>
          <img
            className="w-full h-full object-cover object-center"
            loading="lazy"
            src={digitalStrategy.src}
            alt="Marketing Technology & Automation"
          />
        </div>
        <div className="flex-1 p-4 sm:pr-4 md:pr-0 order-1 sm:order-2">
          <h4 className="font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]">
            Content Marketing
          </h4>
          <ul className="list-disc list-outside ml-4 md:ml-8 mt-2 text-[0.75rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]">
            <li>Product storytelling articles & eCommerce blogs</li>
            <li>SEO-focused website and product content</li>
            <li>Email marketing strategy, automation & content</li>
            <li>Seasonal campaign and festival-focused content</li>
            <li>UGC (User-Generated Content) management strategy</li>
          </ul>
        </div>
      </div>

      {/* <div className='bg-[linear-gradient(90deg,#C17F53_0%,#E7CD73_100%)] flex flex-col sm:flex-row sm:items-center'>
        <div className='flex-1 p-4 sm:pl-4 md:pl-[5rem] lg:pl-[6.667rem] xl:pl-[8.333rem] 2xl:pl-[10rem] 3xl:pl-[12.5rem]'>
          <h4 className='font-semibold text-[0.875rem] md:text-[1rem] lg:text-[1.333rem] xl:text-[1.667rem] 2xl:text-[2rem] 3xl:text-[2.5rem]'>
            SEO & Organic Growth Architecture
          </h4>
          <ul className='list-disc list-outside ml-4 md:ml-8 mt-2 text-[0.75rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem] 3xl:text-[1.5rem]'>
            <li>Technical SEO for Enterprise Sites</li>
            <li>Content Clustering & Semantic Optimization</li>
            <li>Cross-market Localization Strategy</li>
          </ul>
        </div>
        <div className='overflow-hidden relative w-full sm:w-[12.375rem] md:w-[20.5rem] lg:w-[27.333rem] xl:w-[34.167rem] 2xl:w-[41rem] 3xl:w-[51.25rem] h-[4.438rem] sm:h-[11.875rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[37.5rem]'>
          <img className='w-full h-full object-cover object-bottom hidden sm:block' src={seo} alt="SEO & Organic Growth Architecture" />
          <img className='w-full h-full object-cover object-bottom sm:hidden' src={smseo} alt="SEO & Organic Growth Architecture" />
        </div>
      </div> */}
    </div>
  );
}
