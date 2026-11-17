import { WorkspaceModule } from "../../../components/workspace";
import { getModules } from "../../../lib/modules";
export function generateStaticParams() { return getModules("school").map(({ slug }) => ({ section: slug })); }
export default async function SchoolSectionPage({ params }: PageProps<"/school/[section]">) { const { section } = await params; return <WorkspaceModule workspace="school" slug={section}/>; }
