import React from "react";
import Button from "elements/Button";

export default function IconText() {
  return (
    <Button className="brand-text-icon" href="/" type="link">
      Stay<span className="text-gray-900">cation.</span>{" "}
      {/*tambah class dari settingan utilities tambahan */}
    </Button>
  );
}
