import { NextPage } from 'next'
import { Description } from '@/components/Description'

const exitEditingMode: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="exitEditingMode"
          comment=""
        />
      </div>
  )
}

export default exitEditingMode