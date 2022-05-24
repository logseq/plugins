import { NextPage } from 'next'
import { Description } from '@/components/Description'

const insertBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="insertBlock"
          comment=""
        />
      </div>
  )
}

export default insertBlock