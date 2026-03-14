import HomePage from "@/components/pages/HomePage"
import { getDictionary } from "@/lib/getDictionary"

export default function Page() {
  const dict = getDictionary("es")

  return (
    <>
      <HomePage dict={dict} />
    </>
  )
}