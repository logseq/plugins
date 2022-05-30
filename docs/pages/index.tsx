import type { NextPage } from 'next'
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

      <div className={'py-8 px-10 markdown-body'}
           dangerouslySetInnerHTML={{ __html: mdContent }}
      ></div>
    </div>

  )
}

export default Home
