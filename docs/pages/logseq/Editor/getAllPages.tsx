import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getAllPages: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getAllPages"
          comment=""
        />
      </div>
  )
}

export default getAllPages