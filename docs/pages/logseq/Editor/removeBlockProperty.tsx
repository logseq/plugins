import { NextPage } from 'next'
import { Description } from '@/components/Description'

const removeBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="removeBlockProperty"
          comment=""
        />
      </div>
  )
}

export default removeBlockProperty