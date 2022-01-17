import dynamic from "next/dynamic";

const DynamicStyledHeader = dynamic(() => import("./StyledHeader"), {
  ssr: false,
});
const DynamicStyledH2 = dynamic(() => import("./StyledH2"), { ssr: false });

export default function Header() {
  return (
    <DynamicStyledHeader>
      <DynamicStyledH2>
        Practical Learning Blog<span>|</span>
      </DynamicStyledH2>
    </DynamicStyledHeader>
  );
}
