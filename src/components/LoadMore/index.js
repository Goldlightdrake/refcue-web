import React from "react";
import Button from "./../forms/Button";

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return <Button onClick={() => onLoadMoreEvt()}>Załaduj więcej</Button>;
};

export default LoadMore;
