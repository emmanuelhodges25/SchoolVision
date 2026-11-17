import { WorkspaceModule } from "../../../components/workspace";
import { getModules } from "../../../lib/modules";
export function generateStaticParams() { return getModules("platform").map(({ slug }) => ({ section: slug })); }
export default async function PlatformSectionPage({ params }: PageProps<"/platform/[section]">) { const { section } = await params; return <WorkspaceModule workspace="platform" slug={section}/>; }
