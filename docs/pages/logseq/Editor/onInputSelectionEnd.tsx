import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onInputSelectionEnd: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="onInputSelectionEnd"
          comment=""
        />
      </div>
  )
}

export default onInputSelectionEnd