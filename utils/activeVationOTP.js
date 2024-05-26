import axios from "axios";

export const sendSMS = async (to, msg) => {
  await axios.get(
    `http://bulksmsbd.net/api/smsapi?api_key=cxVzYEy04o7WVqpJOf77&type=text&number=${to}&senderid=8809612443880&message=${msg}`
  );
};
