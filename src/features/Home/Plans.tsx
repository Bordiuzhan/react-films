import styles from "./Plans.module.scss";
import { useState } from "react";

const plans = {
  monthly: [
    {
      title: "Basic Plan",
      price: "$9.99",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    },
    {
      title: "Standard Plan",
      price: "$12.99",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    },
    {
      title: "Premium Plan",
      price: "$14.99",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    },
  ],
  yearly: [
    {
      title: "Basic Plan",
      price: "$99.99",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    },
    {
      title: "Standard Plan",
      price: "$129.99",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    },
    {
      title: "Premium Plan",
      price: "$149.99",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    },
  ],
};

const Plans = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.subscriptionPlans}>
          <div className={styles.wrapperText}>
            <h2>Choose the plan that's right for you</h2>
            <p className={styles.paragraph}>
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
          <div className={styles.billingToggle}>
            <button
              className={billingPeriod === "monthly" ? styles.active : ""}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button
              className={billingPeriod === "yearly" ? styles.active : ""}
              onClick={() => setBillingPeriod("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className={styles.planContainer}>
          {plans[billingPeriod].map((plan, index) => (
            <div key={index} className={styles.plan}>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <p className={styles.price}>
                {plan.price}
                <span>/{billingPeriod}</span>
              </p>
              <div className={styles.buttons}>
                <button className={styles.freeTrial}>Start Free Trial</button>
                <button className={styles.choosePlan}>Choose Plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
