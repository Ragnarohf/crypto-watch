import Layout from "../components/Layout";

export default function Currency(res) {
  console.log(res);
  return (
    <Layout>
      <div>
        <h1>Currency</h1>
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ query }) {
  console.log(query.currency);
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies?key=a76a344ed6c9b0bb167f3b7efe6f6aaa&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`
    );
    const result = await res.json();

    return {
      props: { res: result[0] },
    };
  } catch (err) {
    console.error(err);
  }
}
