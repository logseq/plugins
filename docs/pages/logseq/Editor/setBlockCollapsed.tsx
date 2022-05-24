import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setBlockCollapsed: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="setBlockCollapsed"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="setBlockCollapsed"
       />
      </div>
  )
}

export default setBlockCollapsed