import { NextPage } from 'next'
import { Description } from '@/components/Description'

const prependBlockInPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="prependBlockInPage"
          comment=""
        />
      </div>
  )
}

export default prependBlockInPage