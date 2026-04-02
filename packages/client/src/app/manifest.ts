// Next
import type { MetadataRoute } from "next";
// Data
import { APP_DEFAULT_TITLE, APP_NAME, APP_DESCRIPTION } from "@/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_DEFAULT_TITLE,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    start_url: "/",
    display: "standalone",
  };
}
