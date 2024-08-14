import React from "react";
import { LinkedInEmbed } from "react-social-media-embed";
import GitHubCards from "./projects/GitHubCards";

const Blog = () => {
  return (
    <section className="bg-primary text-orange-950 px-5 py-32" style={{paddingTop:'0px'}} id="blog">
      <div style={{ display: "flex", justifyContent: "center", gap:"2rem" }}>
        <GitHubCards />
        <LinkedInEmbed
          url="https://www.linkedin.com/embed/feed/update/urn:li:share:7038566552702513152"
          postUrl="https://www.linkedin.com/posts/elise-frazier-89b356180_thank-you-to-girls-who-code-at-unc-charlotte-activity-7174925448118718464-PNvs?utm_source=share&utm_medium=member_desktop"
          width={600}
          height={650}
        />
      </div>
    </section>
  );
};

export default Blog;
