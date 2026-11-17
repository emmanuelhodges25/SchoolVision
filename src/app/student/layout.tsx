import { WorkspaceLayout } from "../../components/workspace";
export default function StudentLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <WorkspaceLayout workspace="student">{children}</WorkspaceLayout>; }
