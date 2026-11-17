import { WorkspaceLayout } from "../../components/workspace";
export default function PlatformLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <WorkspaceLayout workspace="platform">{children}</WorkspaceLayout>; }
