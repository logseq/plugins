import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getBlock"
          comment=""
        />
      </div>
  )
}

export default getBlock