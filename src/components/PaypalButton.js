import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { PAYPAL_CLIENT_ID } from "./../config";

const PaypalButton = (props) => {
  const [sdkReady, setSdkReady] = useState(false);

  const addPaypalSdk = useCallback(() => {
    try {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const createOrder = (data, actions) =>
    actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: props.amount,
          },
        },
      ],
    });

  const onApprove = (data, actions) =>
    actions.order
      .capture()
      .then((details) => props.onSuccess(data, details))
      .catch((err) => console.log(err));

  useEffect(() => {
    addPaypalSdk();

    return () => {
      addPaypalSdk();
    };
  }, [addPaypalSdk]);

  if (!sdkReady) {
    return <div>Loading...</div>;
  }

  const Button = window.paypal.Buttons.driver("react", { React, ReactDOM });

  return (
    <Button
      {...props}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PaypalButton;
