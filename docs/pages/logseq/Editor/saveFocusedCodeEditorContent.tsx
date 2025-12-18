import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const saveFocusedCodeEditorContent: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="saveFocusedCodeEditorContent"
         />

        <Description
          ns="Editor"
          name="saveFocusedCodeEditorContent"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="saveFocusedCodeEditorContent"
       />
      </div>
  )
}

export default saveFocusedCodeEditorContent