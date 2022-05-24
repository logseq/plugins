import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getBlockProperties: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getBlockProperties"
          comment=""
        />
      </div>
  )
}

export default getBlockProperties