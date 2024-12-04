import { Bluetooth } from "@components/PageComponents/Config/Bluetooth.tsx";
import { Device } from "@components/PageComponents/Config/Device.tsx";
import { Display } from "@components/PageComponents/Config/Display.tsx";
import { LoRa } from "@components/PageComponents/Config/LoRa.tsx";
import { Network } from "@components/PageComponents/Config/Network.tsx";
import { Position } from "@components/PageComponents/Config/Position.tsx";
import { Power } from "@components/PageComponents/Config/Power.tsx";
import { Security } from "@components/PageComponents/Config/Security.tsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/UI/Tabs.tsx";
import { useDevice } from "@core/stores/deviceStore.ts";

export const DeviceConfig = (): JSX.Element => {
  const { metadata } = useDevice();

  const tabs = [
    {
      label: "Device",
      element: Device,
      count: 0,
    },
    {
      label: "Position",
      element: Position,
    },
    {
      label: "Power",
      element: Power,
    },
    {
      label: "Network",
      element: Network,
      // disabled: !metadata.get(0)?.hasWifi,
    },
    {
      label: "Display",
      element: Display,
    },
    {
      label: "LoRa",
      element: LoRa,
    },
    {
      label: "Bluetooth",
      element: Bluetooth,
    },
    {
      label: "Security",
      element: Security,
    },
  ];

  return (
    <Tabs defaultValue="Device">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.label} value={tab.label}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.label} value={tab.label}>
          <tab.element />
        </TabsContent>
      ))}
    </Tabs>
  );
};
