export type AboutJourneyDataType = {
  id: number;
  title: string;
  paragraphs: string[];

  tech_ids?: string[];
  icons?: { id: number; icon_src: string; label: string; dest: string }[];
  external_links?: { id: number; label: string; link: string }[];
};
