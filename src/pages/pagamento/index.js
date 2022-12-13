import axios from "axios";
import { createRouter } from "next-connect";

export default function Pagemento() {
  const handlePagamento = async () => {
    const response = await axios.post("/pagamento");
  };

  return <>pagamento</>;
}

const handlePayment = () => {};

const router = createRouter().post(handlePayment);
