// Types
import { GeneralActions } from "./GeneralActions";
import { GeneralState } from "./GeneralState";
import { GeneralThunks } from "./GeneralThunks";

export type GeneralStore = GeneralState & GeneralActions & GeneralThunks;
