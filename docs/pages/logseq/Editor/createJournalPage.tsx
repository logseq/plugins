import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const createJournalPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="createJournalPage"
         />

        <Description
          ns="Editor"
          name="createJournalPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="createJournalPage"
       />
      </div>
  )
}

export default createJournalPage