import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getCurrentPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getCurrentPage"
          comment=""
        />
      </div>
  )
}

export default getCurrentPage