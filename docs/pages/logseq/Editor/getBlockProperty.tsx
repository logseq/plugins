import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getBlockProperty"
          comment=""
        />
      </div>
  )
}

export default getBlockProperty