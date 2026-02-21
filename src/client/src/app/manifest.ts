// Next
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Personal Portfolio Website - Comanescu Andrei",
    short_name: "Comanescu Andrei",
    description: "Personal Portfolio Website",
    start_url: "/",
    display: "standalone",
  };
}
