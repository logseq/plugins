import { NextPage } from 'next'
import { Description } from '@/components/Description'

const datascriptQuery: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="DB"
          name="datascriptQuery"
          comment="
"
        />
      </div>
  )
}

export default datascriptQuery