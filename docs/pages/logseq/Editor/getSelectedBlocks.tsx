import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getSelectedBlocks: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getSelectedBlocks"
          comment=""
        />
      </div>
  )
}

export default getSelectedBlocks