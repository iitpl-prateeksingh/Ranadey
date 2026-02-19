import React from "react";
import Image from "next/image";
import Link from "next/link";
function page() {
  const blogs = [
    {
      id: 1,
      title: "Lorem ispum lorem",
      slug: "lorem-ipsum-lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/blog1.png",
      content: "This is full blog detail content for first blog.",
    },
    {
      id: 2,
      title: "Lorem ispum lorem",
      slug: "lorem-ipsum-lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/blog1.png",
      content: "This is full blog detail content for first blog.",
    },
    {
      id: 3,
      title: "Lorem ispum lorem",
      slug: "lorem-ipsum-lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/blog1.png",
      content: "This is full blog detail content for first blog.",
    },
    {
      id: 4,
      title: "Lorem ispum lorem",
      slug: "lorem-ipsum-lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/blog1.png",
      content: "This is full blog detail content for first blog.",
    },
    {
      id: 5,
      title: "Lorem ispum lorem",
      slug: "lorem-ipsum-lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/blog1.png",
      content: "This is full blog detail content for first blog.",
    },
    {
      id: 6,
      title: "Lorem ispum lorem",
      slug: "lorem-ipsum-lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/blog1.png",
      content: "This is full blog detail content for first blog.",
    },
  ];

  return (
    <>
      <section className="contact-section">
        <h1>Blog</h1>
      </section>
      <section className="section-blog-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-8">
                      <div className="row">
                        <div className="col-12">
                          <Image
                            alt=""
                            src="/img/blog-hero1.png"
                            width={400}
                            height={200}
                            className="blog-hero1"
                          />
                        </div>
                        <div className="col-12">
                          <Image
                            alt=""
                            src="/img/blog-hero2.png"
                            width={400}
                            height={200}
                            className="blog-hero2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <Image
                        alt=""
                        src="/img/blog-hero3.png"
                        width={400}
                        height={200}
                        className="blog-hero3"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="hero-blog-c">
                    <h3>Lorem ipsum Has Been lorem</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <a href="">Read More </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-blogmain">
        <div className="container">
          <div className="row row-blog-card">
            {blogs.map((blog) => (
              <div className="col-md-6" key={blog.id}>
                <div className="blog-card">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="blog1-cardimg"
                  />

                  <h5>{blog.title}</h5>
                  <p>{blog.desc}</p>

                  {/* 👇 LINK TO DETAIL */}
                  <Link href={`/blog/${blog.slug}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-blog2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Lorem Ipsum Lorem Ipsum</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog-2-b">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-2-b">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-2-b">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-2-b">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-2-b">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-2-b">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
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
    </>
  );
}

export default page;
