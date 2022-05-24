import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getPagesTreeFromNamespace: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPagesTreeFromNamespace"
          comment="
"
        />
      </div>
  )
}

export default getPagesTreeFromNamespace