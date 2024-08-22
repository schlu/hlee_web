import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
                As an experienced magazine designer, I can assist you with your project.
              </p>
              <Link to='mailto:hleeacp@gmail.com' class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Hire me
              </Link>
            </div>
          </div>
          <div class="mb-10">
            <h3 class="text-2xl font-bold mb-2">Skills</h3>
            <p>
            Crafting a visual identity for your project, combining both content and images throughout the project to deliver a print or digital product, and photo editing.
            </p>
          </div>
          <div class="mb-10">
            <h3 class="text-2xl font-bold mb-2">Tools</h3>
            <p>
            Adobe Creative Suite, Affinity, Google Workspace
            </p>
          </div>
        </div>
      </div>
    </main>
)

export default IndexPage
