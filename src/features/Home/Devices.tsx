import styles from "./Devices.module.scss";
import {
  GamingConsole,
  Laptop,
  Phone,
  SmartTv,
  Tablet,
  VRHeadset,
} from "../../images/devices";

const devices = [
  {
    name: "Smartphones",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    image: <Phone />,
  },
  {
    name: "Tablet",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    image: <Tablet />,
  },
  {
    name: "Smart TV",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    image: <SmartTv />,
  },

  {
    name: "Laptops",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    image: <Laptop />,
  },

  {
    name: "Gaming Consoles",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    image: <GamingConsole />,
  },

  {
    name: "Headsets",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    image: <VRHeadset />,
  },
];

const Devices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>
            We Provide you streaming experience across various devices.
          </h3>
          <div className={styles.paragraph}>
            <p>
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>
        </div>
        <div className={styles.devices}>
          {devices.map((device, index) => (
            <div key={index} className={styles.device}>
              <div className={styles.deviceContent}>
                <div className={styles.wrapper}>
                  <div className={styles.image}>{device.image}</div>
                  <h4 className={styles.deviceName}>{device.name}</h4>
                </div>
                <p className={styles.deviceDescription}>{device.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devices;
