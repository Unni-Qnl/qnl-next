import { COMMON_API_URL, HR_API_URL, LEAD_API_URL } from "@/constants";

export const APP_API_ROUTES = {
  insights: `${COMMON_API_URL}insights/web/listing`,
  caseStudy: `${COMMON_API_URL}case-studies/web/listing`,
  services: `${COMMON_API_URL}services/web/listing`,
  newsLetter: `${COMMON_API_URL}news-letters/web/listing`,
  policies: `${COMMON_API_URL}legal-pages/web/listing`,
  socialMediaLinks: `${COMMON_API_URL}social-media-link/web/listing`,
  content: `${COMMON_API_URL}content-section/web/listing`,
  platform: `${COMMON_API_URL}platforms/web/listing`,

  jobListing: `${HR_API_URL}jobs/web/listing`,
  regionListing: `${HR_API_URL}jobs/web/region-listing`,
  countryOptions: `${HR_API_URL}locations/country-listing`,
  applyJob: `${HR_API_URL}applications/customer/job-application`,
  locations: `${HR_API_URL}locations/web/listing`,
  globalRegions: `${HR_API_URL}locations/web/gobal-region`,

  contactUs: `${LEAD_API_URL}leads/public/enquiry-submit`,
};
