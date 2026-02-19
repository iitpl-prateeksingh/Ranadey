"use client";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Link from "next/link";

export default function BlogSidebar() {
    return (
        <div className="blog-silde">
            <div className="blog-serach">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Search ..."
                />
                <IoIosSearch />
            </div>

            <Tabs defaultActiveKey="home" className="mb-3">
                <Tab eventKey="home" title="Lorem Ipsum">
                    <div className="blog-related">
                        <div className="blog-listing-realted">
                            <Image alt=""
                                src="/img/lo-detailimg.png"
                                width={400}
                                height={200}
                                className="lo-detailimg"
                            />

                            <div className="blog-listing-c">
                                <p>Lorem ipsum dolor sit amet,  </p>
                                <Link href="/">Read more</Link>
                            </div>
                        </div>

                        <div className="blog-listing-realted">
                            <Image alt=""
                                src="/img/lo-detailimg.png"
                                width={400}
                                height={200}
                                className="lo-detailimg"
                            />

                            <div className="blog-listing-c">
                                <p>Lorem ipsum dolor sit amet,  </p>
                                <Link href="/">Read more</Link>
                            </div>
                        </div>

                        <div className="blog-listing-realted">
                            <Image alt=""
                                src="/img/lo-detailimg.png"
                                width={400}
                                height={200}
                                className="lo-detailimg"
                            />

                            <div className="blog-listing-c">
                                <p>Lorem ipsum dolor sit amet,  </p>
                                <Link href="/">Read more</Link>
                            </div>
                        </div>

                        <div className="blog-listing-realted">
                            <Image alt=""
                                src="/img/lo-detailimg.png"
                                width={400}
                                height={200}
                                className="lo-detailimg"
                            />

                            <div className="blog-listing-c">
                                <p>Lorem ipsum dolor sit amet,  </p>
                                <Link href="/">Read more</Link>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Lorem Ipsum">
                    <div className="blog-related">
                        <div className="blog-listing-realted">
                            <Image alt=""
                                src="/img/lo-detailimg.png"
                                width={400}
                                height={200}
                                className="lo-detailimg"
                            />

                            <div className="blog-listing-c">
                                <p>Lorem ipsum dolor sit amet,  </p>
                                <Link href="/">Read more</Link>
                            </div>
                        </div>

                        <div className="blog-listing-realted">
                            <Image alt=""
                                src="/img/lo-detailimg.png"
                                width={400}
                                height={200}
                                className="lo-detailimg"
                            />

                            <div className="blog-listing-c">
                                <p>Lorem ipsum dolor sit amet,  </p>
                                <Link href="/">Read more</Link>
                            </div>
                        </div>

                        <div className="blog-listing-realted">
                            <Image alt=""
                                src="/img/lo-detailimg.png"
                                width={400}
                                height={200}
                                className="lo-detailimg"
                            />

                            <div className="blog-listing-c">
                                <p>Lorem ipsum dolor sit amet,  </p>
                                <Link href="/">Read more</Link>
                            </div>
                        </div>

                        <div className="blog-listing-realted">
                            <Image alt=""
                                src="/img/lo-detailimg.png"
                                width={400}
                                height={200}
                                className="lo-detailimg"
                            />

                            <div className="blog-listing-c">
                                <p>Lorem ipsum dolor sit amet,  </p>
                                <Link href="/">Read more</Link>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
