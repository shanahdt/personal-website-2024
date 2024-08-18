import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PublicationsLayout from '@/layouts/PublicationsLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Publications' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <PublicationsLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </PublicationsLayout>
    </>
  )
}
