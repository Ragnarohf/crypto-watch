import Layout from "../components/Layout";
import Link from "next/link";

export default function Home({ res }) {
  console.log(res);
  return (
    <Layout page="Crypto Watch - Acceuil">
      <ul className="flex justify-around p-18">
        {res.map((crypto, index) => (
          <li
            key={index}
            className="relative hover:shadow-md p-8 border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5 "
          >
            <Link href="/">
              <a className="rounded-md">
                <div className="text-center">
                  <img
                    src={crypto.logo_url}
                    alt={crypto.name}
                    className="w-20 h-20 mx-auto mb-6"
                  />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">
                  {crypto.name}
                </h2>
                <h3 className="font-bold text-2xl mb-4">
                  {parseFloat(crypto.price).toFixed(3)} USD
                </h3>
                <p>
                  {" "}
                  1 jour :{" "}
                  <span className="font-bold">
                    {parseFloat(crypto["1d"].price_change_pct * 100).toFixed(
                      2
                    ) + "%"}
                    {crypto["1d"].price_change_pct < 0 ? (
                      <span className="text-red-500"> &#x2798;</span>
                    ) : (
                      <span className="text-green-500"> &#x279A;</span>
                    )}
                  </span>
                </p>
                <p>
                  {" "}
                  1 mois :{" "}
                  <span className="font-bold">
                    {parseFloat(crypto["30d"].price_change_pct * 100).toFixed(
                      2
                    ) + "%"}
                    {crypto["30d"].price_change_pct < 0 ? (
                      <span className="text-red-500"> &#x2798;</span>
                    ) : (
                      <span className="text-green-500"> &#x279A;</span>
                    )}
                  </span>
                </p>
                <p>
                  {" "}
                  1 ans :{" "}
                  <span className="font-bold">
                    {parseFloat(crypto["365d"].price_change_pct * 100).toFixed(
                      2
                    ) + "%"}
                    {crypto["365d"].price_change_pct < 0 ? (
                      <span className="text-red-500"> &#x2798;</span>
                    ) : (
                      <span className="text-green-500"> &#x279A;</span>
                    )}
                  </span>
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
// rendu coté serveur serversiderendering
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      " https://api.nomics.com/v1/currencies/ticker?key=237055b3b7d6d4e3816f880583da8578&ids=BTC,ETH,DOGE&interval=1d,30d,365d"
    ).then((res) => res.json());
    return {
      props: { res },
    };
  } catch (err) {
    console.log(err);
  }
}
