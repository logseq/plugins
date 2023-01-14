import type { NextPage } from 'next'
import Head from 'next/head'
import { marked } from 'marked'
import { DescriptionHeader } from '@/components/Description'

const mdContent = marked.parse(`
## Logseq Plugin API docs

This is a community-driven documentation for Logseq plugin APIs.

Samples 👉  https://github.com/logseq/logseq-plugin-samples  
APIs 👉 https://logseq.github.io/plugins/

### How to contribute?

- The comments doc of plugin APIs is powered by [Typedoc](https://typedoc.org/guides/doccomments/). You can improve the corresponding 
documentation by following the links below.

![alt](/contribute_1.png)

- Another way is to provide some demo code or best practice instructions by the function of comments.

![alt](/contribute_2.png)
`)

const Home: NextPage = () => {
  return (
    <div>
      <DescriptionHeader />
      <Head>
        <title>Logseq Plugin API Docs</title>
        <meta name="title" content="Logseq Plugin API Docs"/>
        <meta name="description" content="Documentation for the Logseq Plugin API"/>
        <link rel="icon" href="/logo.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://plugins-doc.logseq.com/"/>
        <meta property="og:title" content="Logseq Plugin API Docs"/>
        <meta property="og:description" content="Documentation for the Logseq Plugin API"/>
      </Head>

      <div className={'py-8 px-10 markdown-body'}
           dangerouslySetInnerHTML={{ __html: mdContent }}
      ></div>
    </div>

  )
}

export default Home
