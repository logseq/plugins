import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const resolveThemeCssPropsVals: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="UI"
          name="resolveThemeCssPropsVals"
         />

        <Description
          ns="UI"
          name="resolveThemeCssPropsVals"
          comment=""
        />

       <Discuss
          ns="UI"
          name="resolveThemeCssPropsVals"
       />
      </div>
  )
}

export default resolveThemeCssPropsVals