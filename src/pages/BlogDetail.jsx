import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../blogContent";

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((blogPost) => blogPost.id === id);

  if (!post) {
    return (
      <main className="page">
        <section className="site-shell blog-detail-shell">
          <Link to="/blog" className="blog-back-link">
            <ArrowLeft size={18} />
            กลับไปหน้าบทความ
          </Link>
          <h1>ไม่พบบทความนี้</h1>
          <p>บทความที่คุณเปิดอาจถูกย้ายหรือยังไม่ได้เพิ่มลงในระบบ</p>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <article className="site-shell blog-detail-shell">
        <Link to="/blog" className="blog-back-link">
          <ArrowLeft size={18} />
          กลับไปหน้าบทความ
        </Link>

        <header className="blog-detail-header">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <div className="blog-detail-meta">
            <span>
              <CalendarDays size={16} />
              {post.date}
            </span>
            <span>
              <Clock size={16} />
              {post.read}
            </span>
          </div>
        </header>

        <img className="blog-detail-image" src={post.image} alt={post.title} />

        <div className="blog-detail-content">
          <p className="blog-detail-lead">{post.excerpt}</p>
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

export default BlogDetail;
