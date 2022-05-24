import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getPagesFromNamespace: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPagesFromNamespace"
          comment="
"
        />
      </div>
  )
}

export default getPagesFromNamespace