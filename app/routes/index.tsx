import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import { SearchBar, UniversalResults, StandardCard } from "@yext/answers-react-components";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div>
      <SearchBar />
      <UniversalResults
        verticalConfigMap={{
          products: {
            CardComponent: ({ result }) => <StandardCard result={result} />,
          },
        }}
      />
    </div>
  );
}
