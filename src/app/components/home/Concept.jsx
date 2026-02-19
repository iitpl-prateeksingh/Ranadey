import { getImageUrl } from "../../../helper/getImageUrl";
import Image from "next/image";
import React from "react";

function Concept({ data }) {
  const sections = data || [];
  console.log("concept sections", sections);

  return (
    <section className="concept-section">
      <div className="container">
        <div className="row">
          {sections.map((section) => {
            const iconUrl = getImageUrl(section.image);
            console.log("concept iconUrl", iconUrl);
            return (
              <div className="col-md-4" key={section._id}>
                <div className="concept-card">
                  <div className="icon-c">
                    {iconUrl && (
                      <Image
                        src={iconUrl}
                        width={32}
                        height={32}
                        alt="icon"
                        loading="lazy"
                      />
                    )}
                  </div>

                  <h3>
                    {section.title} {section.detail}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Concept);
