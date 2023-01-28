import { useRouter } from "next/router";

function coffeeStore() {
  const router = useRouter();
  console.log("Router:", router);
  return <div>Coffee Store Page {router.query.id}</div>;
}

export default coffeeStore;
