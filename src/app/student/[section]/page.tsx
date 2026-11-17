import { WorkspaceModule } from "../../../components/workspace";
import { getModules } from "../../../lib/modules";
export function generateStaticParams() { return getModules("student").map(({ slug }) => ({ section: slug })); }
export default async function StudentSectionPage({ params }: PageProps<"/student/[section]">) { const { section } = await params; return <WorkspaceModule workspace="student" slug={section}/>; }
