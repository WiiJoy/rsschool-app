import { NextPageContext } from 'next';
import { withSession } from 'components/withSession';
import { StudentRegistry } from 'modules/Registry/pages';
import { withGoogleMaps } from 'components/withGoogleMaps';

const StudentRegistryPage: any = withGoogleMaps(withSession(StudentRegistry));
StudentRegistryPage.getInitialProps = async (context: NextPageContext) => {
  try {
    const courseAlias = context.query.course;
    return { courseAlias };
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
    return { courseAlias: undefined };
  }
};

export default StudentRegistryPage;
