import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPage"
          comment=""
        />
      </div>
  )
}

export default getPage