import Img from "react-optimized-image";

import branchImg from "../../images/branch.png";

export function LeafDecoration() {
  return (
    <Img
      src={branchImg}
      alt=""
      width={150}
      height={70}
      webp
      style={{ height: "auto" }}
    />
  );
}
