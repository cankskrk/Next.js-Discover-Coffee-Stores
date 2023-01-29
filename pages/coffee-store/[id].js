import { useRouter } from "next/router";
import Link from "next/link";

function coffeeStore() {
  const router = useRouter();
  // console.log("Router:", router);
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/" scroll={true}>
        Back to home
      </Link>
    </div>
  );
}

export default coffeeStore;
