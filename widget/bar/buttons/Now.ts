import icons from "lib/icons";
import PanelButton from "../PanelButton";
import options from "options";
import { clock } from "lib/variables";

const { action } = options.bar.now;
const { format } = options.bar.date;

const time = Utils.derive([clock, format], (c, f) => c.format(f) || "");
const n = await Service.import("notifications");
const notifications = n.bind("notifications");

const date = () =>
  Widget.Label({
    justification: "center",
    label: time.bind(),
  });

const messages = () =>
  Widget.Icon({
    visible: notifications.as((n) => n.length > 0),
    icon: icons.notifications.message,
  });

export default () =>
  PanelButton({
    window: "now",
    on_clicked: action.bind(),
    child: Widget.Box({
      children: [date(), messages()],
    }),
  });
