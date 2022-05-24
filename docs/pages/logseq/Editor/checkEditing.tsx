import { NextPage } from 'next'
import { Description } from '@/components/Description'

const checkEditing: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="checkEditing"
          comment=""
        />
      </div>
  )
}

export default checkEditing