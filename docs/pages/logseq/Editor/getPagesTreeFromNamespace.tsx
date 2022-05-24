import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPagesTreeFromNamespace: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPagesTreeFromNamespace"
          comment="
"
        />

       <Discuss
          ns="Editor"
          name="getPagesTreeFromNamespace"
       />
      </div>
  )
}

export default getPagesTreeFromNamespace