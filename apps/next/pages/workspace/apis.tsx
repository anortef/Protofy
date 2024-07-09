import ApisPage from 'protolib/bundles/apis/adminPages'
import Head from 'next/head'
import { useRedirectToEnviron } from 'protolib/lib/useRedirectToEnviron'
import { SiteConfig } from 'app/conf'

export default function Page(props: any) {
  useRedirectToEnviron()
  const projectName = SiteConfig.projectName

  return (
    <>
      <Head>
        <title>{projectName + " - Apis"}</title>
      </Head>
      <ApisPage.apis.component {...props} />
    </>
  )
}

export const getServerSideProps = ApisPage.apis.getServerSideProps
