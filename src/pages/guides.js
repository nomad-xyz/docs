import React, {useState} from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import {Grid, Box} from '@site/src/components/Grid'

const GuideItems = [
  {
    title: <>Nomad 101: How to build a cross-chain app</>,
    href: '/guides/develop/how-to-build-simple-xapp',
    category: 'develop',
    description: (
      <>
        How to build a simple cross-chain application on top of the Nomad Protocol
      </>
    )
  },
]

const GuideCategories = [
  {
    label: 'develop',
    title: 'Develop on Nomad',
    description: <>Learn about building cross-chain applications using the Nomad Protocol</>,
  },
]

export default function Guides() {
  let itemsFiltered = GuideItems;
  let categoriesFiltered = GuideCategories;

  const [searchTerm, setSearchTerm] = useState(null);

  if (searchTerm) {
    let searchTerms = searchTerm.split(" ");
    itemsFiltered = itemsFiltered.filter(item => {
      let content = `${item.title.props.children.toLowerCase()} ${item.category.toLowerCase()}`;
      return searchTerms.every(term => {
        return content.includes(term.toLowerCase())
      })
    })

    if (itemsFiltered.length) {
      categoriesFiltered = GuideCategories.filter(category => {
        let match = itemsFiltered.filter(item => {
          return category.label.includes(item.category)
        })

        if (match.length) {
          return true
        }
      })
    } else {
      categoriesFiltered = []
    }
  }

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
      </Head>
      <Layout
        title={`Guides`}
        description="Thoughtful guides to help you learn more about building cross-chain applications with Nomad.">
        <header className="overflow-hidden bg-gradient-to-br from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900 py-16 mb-16">
          <div className="container relative">
            <div className="z-10 relative w-full md:w-3/4 lg:w-1/2">
              <h1 className="text-2xl lg:text-5xl text-text font-semibold mb-6 dark:text-gray-50">Guides</h1>
              <p className="prose text-lg lg:text-xl text-text mb-6 dark:text-gray-50">Thoughtful guides to help you learn more about building cross-chain applications with Nomad.</p>
              <input
                className="text-xl lg:text-2xl p-4 w-full dark:text-gray-200 dark:bg-gray-700"
                type="text"
                onChange={(event) => setSearchTerm(event.currentTarget.value)}
                placeholder="🔍 Search Nomad's guides..." />
            </div>
          </div>
        </header>
        <main className="container">
          {categoriesFiltered.map((props, idx) => (
            <>
              <div key={idx}>
                <div>
                  <h2 className="text-xl lg:text-3xl font-bold mb-2">{props.title}</h2>
                  <p className="lg:text-lg mb-6">{props.description}</p>
                </div>
              </div>
              <Grid columns="3" className="mb-24">
                {itemsFiltered.filter(item => item.category.includes(props.label)).map((props, idx) => (
                  <Box
                    key={idx}
                    to={props.href}
                    title={props.title}>
                    <p>{props.description}</p>
                  </Box>
                ))}
              </Grid>
            </>
          ))}

          {itemsFiltered.length == 0 &&
            <div className="">
              <div className="w-1/2 markdown">
                <p> ¯\_(ツ)_/¯  There is no guide matching matching your search. </p>
              </div>
            </div>
          }
        </main>
      </Layout>
    </>
  );
}


function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className="container">
        <Grid className="mb-16" columns="3">
          <Box
            to="/docs/get-started/"
            title="Get started"
            cta="Install now"
            image={true}>
            Install the open-source monitoring agent on physical/virtual systems running most Linux distributions (Ubuntu, Debian, CentOS, and more), container platforms (Kubernetes clusters, Docker), and many other operating systems, with no <code>sudo</code> required.
          </Box>
          <Box
            to="/docs/"
            title="Docs"
            cta="Read the docs"
            image={false}>
            Solution- and action-based docs for Nomad's many features and capabilities. Your table of contents to becoming an expert in using and building on Nomad.
          </Box>
          <Box
            to="/guides/" title="Guides"
            cta="Start learning"
            image={false}>
            Thoughtful guides to walk you through using the Nomad apps, building on the Nomad protocol and operating Nomad's Agents
          </Box>
        </Grid>
        <div id="updates" className="relative pb-8">
          <h2 className="z-10 relative text-xl lg:text-3xl font-semibold mb-6">What's new at Nomad?</h2>
          <div className="relative w-3/4">
            <div className="z-0 absolute -top-12 -bottom-8 left-1.5">
              <div className="z-10 relative w-4 h-16 top-0 bg-gradient-to-t from-transparent to-white dark:to-gray-900"></div>
              <div className="z-0 absolute top-0 w-1 h-full bg-grey-lighter bg-opacity-20"></div>
              <div className="z-10 absolute w-4 h-16 bottom-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
            </div>
            <ul>
              {News.map((props, idx) => (
                <li key={props.title} className="group">
                  <Link to={props.href} className="grid md:grid-cols-8 xl:grid-cols-9 items-start">
                    <div className="md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 p-8 rounded group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
                      <h3 className="text-lg lg:text-xl font-semibold mb-2">{props.title}</h3>
                      <p>{props.description}</p>
                    </div>
                    <div className="flex items-center md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 pt-8">
                      <div className="z-10 w-4 h-4 mr-8 bg-grey rounded-full group-hover:bg-blue" />
                      <time className="text-base text-gray-500 font-medium">{props.date}</time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
