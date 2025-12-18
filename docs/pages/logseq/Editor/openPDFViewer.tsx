import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const openPDFViewer: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="openPDFViewer"
         />

        <Description
          ns="Editor"
          name="openPDFViewer"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="openPDFViewer"
       />
      </div>
  )
}

export default openPDFViewer