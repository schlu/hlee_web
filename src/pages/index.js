import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
    <main class="bg-gray-100">
      <div class="container mx-auto py-10 px-5 md:px-0">
        <div class="bg-white shadow-md rounded-lg p-10">
          <div class="flex flex-col md:flex-row items-center mb-10">
            <StaticImage
            class="rounded-full h-40 w-40 mb-5 md:mb-0 md:mr-10"
              src="../images/profile.jpeg"
              loading="eager"
              width={64}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
            <div>
              <h1 class="text-3xl font-bold mb-2">Heather Lee, ACP</h1>
              <h2 class="text-xl text-gray-600 mb-5">
                Digital Magazine Layout and Design Since 2014
              </h2>
              <p class="mb-5">
                As an experienced magazine designer, I can help with your project.
              </p>
              <Link to='mailto:hjleeacp@gmail.com' class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Hire me
              </Link>
            </div>
          </div>
          <div class="mb-10">
            <h3 class="text-2xl font-bold mb-2">Skills</h3>
            <p>
              
            </p>
          </div>
          <div class="mb-10">
            <h3 class="text-2xl font-bold mb-2">Tools</h3>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </main>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
