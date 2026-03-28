// Next
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Personal Portfolio Website - Comănescu Andrei",
    short_name: "Comănescu Andrei",
    description: "Personal Portfolio Website",
    start_url: "/",
    display: "standalone",
  };
}
