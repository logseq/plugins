import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getSelectedBlocks: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getSelectedBlocks"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getSelectedBlocks"
       />
      </div>
  )
}

export default getSelectedBlocks