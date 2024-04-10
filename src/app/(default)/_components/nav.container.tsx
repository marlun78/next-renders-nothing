import { Nav } from "./nav";

export async function NavContainer() {
  const routes = await Promise.resolve([`/test/xxx`, `/test/yyy`, `/test/zzz`]);

  return (
    <nav>
      <Nav routes={routes} />
    </nav>
  );
}
