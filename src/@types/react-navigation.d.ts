import type { SceneName } from "~src/@types/SceneName";

export type RootStackParamList = {
  [SceneName.Authentication]: undefined;
  [SceneName.Home]: undefined;
  [SceneName.AddContact]: undefined;
  [SceneName.Profile]: undefined;
  [SceneName.Logout]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
