import { WorkspaceModule } from "../../../components/workspace";
import { getModules } from "../../../lib/modules";
export function generateStaticParams() { return getModules("staff").map(({ slug }) => ({ section: slug })); }
export default async function StaffSectionPage({ params }: PageProps<"/staff/[section]">) { const { section } = await params; return <WorkspaceModule workspace="staff" slug={section}/>; }
