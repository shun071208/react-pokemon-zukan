//src/components/PageHeading.tsx
type PageHeadingProps = {
  title: string
}
<PageHeading title="ポケモン一覧" />
export default function PageHeading({ title }: PageHeadingProps) {
  return <h1 className="mb-4 text-2xl font-bold">{title}</h1>
}
