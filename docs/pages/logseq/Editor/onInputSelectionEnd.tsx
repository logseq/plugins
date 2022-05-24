import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onInputSelectionEnd: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="onInputSelectionEnd"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="onInputSelectionEnd"
       />
      </div>
  )
}

export default onInputSelectionEnd