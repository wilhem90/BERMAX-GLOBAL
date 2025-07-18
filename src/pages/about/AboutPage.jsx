import { useEffect } from "react"
import Header from "../../components/navbar/Header"

export default function AboutPage({ setLoading}) {
  useEffect(() => {
    setLoading(false)
    
  }, [setLoading])
  return (
    <>
    <Header />
    <main>
        <div>
            <h1>Estamos na pagina about</h1>
        </div>
    </main>
    </>
  )

}
