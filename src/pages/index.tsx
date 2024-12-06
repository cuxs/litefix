import "./index.css";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={bebas.className}>
      <h1>Liteflix Challenge </h1>
      <p> Replace this page with your implementation </p>
    </div>
  );
}
