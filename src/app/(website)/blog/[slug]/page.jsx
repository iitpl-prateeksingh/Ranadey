import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BlogSidebar from "./BlogSidebar";
import Blogtestimonail from "./Blogtestimonail";


export default function BlogDetail({ params }) {
  return (
    <>
      <section className="contact-section">
        <h1>Blog Detail</h1>
      </section>
      <section className="blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="blog-detail-img">
                <Image
                  alt=""
                  src="/img/lo-detailimg.png"
                  width={400}
                  height={200}
                  className="lo-detailimg"
                />
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="blogdetail-framer">
                <Image
                  alt=""
                  src="/img/Frame-2147239518.png"
                  width={400}
                  height={200}
                  className="lo-detailimg11"
                />
                <div className="content-framer">
                    <h2>Lorem Ipsum has been the industry's standard dummy</h2>
                    <a href="">Lorem Ipsum  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="related-log">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Lorem Ipsum Lorem Ipsum</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog-related-img">
                <Image
                  alt=""
                  src="/img/blogrelated.png"
                  width={400}
                  height={200}
                  className="lo-detailimg11"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-related-img">
                <Image
                  alt=""
                  src="/img/blogrelated.png"
                  width={400}
                  height={200}
                  className="lo-detailimg11"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-related-img">
                <Image
                  alt=""
                  src="/img/blogrelated.png"
                  width={400}
                  height={200}
                  className="lo-detailimg11"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blogtestimonail/>
    </>
  );
}

/* 🔥 STATIC GENERATION */
export function generateStaticParams() {
  return [{ slug: "lorem-ipsum-lorem" }, { slug: "second-blog-post" }];
}
