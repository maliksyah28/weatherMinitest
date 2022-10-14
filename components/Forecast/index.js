import { Flex } from "@chakra-ui/react";
import moment from "moment";

const ForecastList = ({ tanggal, temperature, location }) => {
  return (
    <Flex dir="column" rowGap={2} columnGap={2}>
      <div>{moment(tanggal).add(1, "days").format("LLL")}</div>:
      <div>{temperature.toFixed()}°F</div>
    </Flex>
  );
};
export default ForecastList;
