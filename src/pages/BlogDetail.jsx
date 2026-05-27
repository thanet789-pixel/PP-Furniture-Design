import { useParams } from "react-router-dom"

function BlogDetail() {

  const { id } = useParams()

  return (
    <section className="min-h-screen bg-black text-white pt-32 px-6">

      <h1 className="text-5xl font-bold mb-6">
        Blog ID : {id}
      </h1>

      <p className="text-gray-400 text-lg">
        หน้ารายละเอียดบทความ
      </p>

    </section>
  )
}

export default BlogDetail