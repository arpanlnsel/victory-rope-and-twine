import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";

const PrivacyPolicyPage = async () => {
  const client = createClient();

  const doc = await client.getSingle("privacy_policy_page");

  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("privacy_policy_page");

  return Seo(page);
}

export default PrivacyPolicyPage;
