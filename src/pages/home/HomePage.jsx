import { useEffect } from "react";
import Header from "../../components/navbar/Header";

export default function HomePage({ setLoading }) {
  useEffect(() => {
    setLoading(false)
  }, [setLoading])
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Home Page</h1>
        </div>
      </main>
    </>
  );
}
