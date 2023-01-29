import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const DynamicRoute = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.dynamic}</title>
      </Head>
      Hi there I am dynamic route
      <br />
      {router.query.dynamic}
    </div>
  );
};

export default DynamicRoute;
