import MobileView from "./mobileview/Mobilepage";
import DesktopView from "./desktopview/Desktoppage";
import { View } from "@/app/components/view/View";

export default function Page() {
  return (
    <View mobileView={<MobileView />}>
      <DesktopView />
    </View>
  );
}
