import { NextPage } from 'next'
import { Description } from '@/components/Description'

const setBlockCollapsed: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="setBlockCollapsed"
          comment=""
        />
      </div>
  )
}

export default setBlockCollapsed