import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onTodayJournalCreated: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="onTodayJournalCreated"
         />

        <Description
          ns="App"
          name="onTodayJournalCreated"
          comment=""
        />

       <Discuss
          ns="App"
          name="onTodayJournalCreated"
       />
      </div>
  )
}

export default onTodayJournalCreated