import type { SceneName } from "~src/@types/SceneName";

export type RootStackParamList = {
  [SceneName.Authentication]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
