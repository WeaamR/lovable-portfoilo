import { describe, expect, it } from "vitest";
import { qkePolicy } from "@/content/portfolio";

const hp = (band: number) => qkePolicy.groups[qkePolicy.table["High-performance"]![band]!];

describe("AdaptiveQKE high-performance rules", () => {
  it("RTT < 50 ms → SecP384r1MLKEM1024", () => expect(hp(0)).toBe("SecP384r1MLKEM1024"));
  it("50 ms ≤ RTT ≤ 100 ms → X25519MLKEM768", () => expect(hp(1)).toBe("X25519MLKEM768"));
  it("RTT > 100 ms → x25519_mlkem512", () => expect(hp(2)).toBe("x25519_mlkem512"));
});
