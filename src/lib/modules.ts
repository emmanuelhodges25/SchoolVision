export type Workspace = "platform" | "school" | "staff" | "student";
export type ModuleItem = { slug: string; label: string; description: string; group: string };

const catalogs: Record<Workspace, ModuleItem[]> = {
  platform: [
    { slug: "institutions", label: "Institutions", description: "Review institution profiles and platform status.", group: "Platform" },
    { slug: "applications", label: "Applications", description: "Review requests to join School Vision.", group: "Platform" },
    { slug: "users", label: "Platform users", description: "Manage platform-level access and roles.", group: "Platform" },
    { slug: "security", label: "Security", description: "Review platform security controls.", group: "Governance" },
    { slug: "audit", label: "Audit log", description: "Review recorded platform events.", group: "Governance" },
    { slug: "settings", label: "Settings", description: "Configure platform-wide preferences.", group: "Governance" },
  ],
  school: [
    { slug: "students", label: "Students", description: "Review verified student records.", group: "People" },
    { slug: "enrollment", label: "Enrollment", description: "Manage applications and admission records.", group: "People" },
    { slug: "staff", label: "Staff", description: "Manage staff profiles and assignments.", group: "People" },
    { slug: "academic-sessions", label: "Academic sessions", description: "Configure the institution’s academic calendar structure.", group: "Academics" },
    { slug: "classes", label: "Classes & groups", description: "Configure institution-specific learning groups.", group: "Academics" },
    { slug: "subjects", label: "Subjects", description: "Configure subjects offered by this institution.", group: "Academics" },
    { slug: "exams", label: "Assessments", description: "Manage assessment periods and records.", group: "Academics" },
    { slug: "results", label: "Results", description: "Review approved academic results.", group: "Academics" },
    { slug: "attendance", label: "Attendance", description: "Review verified attendance records.", group: "Operations" },
    { slug: "finance", label: "Finance", description: "Review recorded charges, payments, and balances.", group: "Operations" },
    { slug: "inventory", label: "Inventory", description: "Review verified stock and movement records.", group: "Operations" },
    { slug: "library", label: "Library", description: "Manage library catalog and circulation records.", group: "Operations" },
    { slug: "activities", label: "Activities", description: "Manage school activities and participation.", group: "Community" },
    { slug: "discipline", label: "Discipline", description: "Manage authorized conduct records.", group: "Community" },
    { slug: "announcements", label: "Announcements", description: "Prepare and review institution notices.", group: "Community" },
    { slug: "documents", label: "Documents", description: "Manage institution documents and templates.", group: "Community" },
    { slug: "reports", label: "Reports", description: "View institution reports based on verified records.", group: "Insights" },
    { slug: "settings", label: "Settings", description: "Configure institution preferences and structure.", group: "Insights" },
  ],
  staff: [
    { slug: "classes", label: "Assigned classes", description: "Review classes assigned to your account.", group: "Teaching" },
    { slug: "students", label: "Students", description: "Review students in your authorized groups.", group: "Teaching" },
    { slug: "attendance", label: "Attendance", description: "Review attendance entry points and records.", group: "Teaching" },
    { slug: "assessments", label: "Assessments", description: "Review assessment entry points and records.", group: "Teaching" },
    { slug: "reports", label: "Reports", description: "Review available class-level summaries.", group: "Teaching" },
    { slug: "announcements", label: "Announcements", description: "Review school announcements shared with staff.", group: "Workspace" },
  ],
  student: [
    { slug: "profile", label: "My profile", description: "Review your verified profile details.", group: "My learning" },
    { slug: "academics", label: "Academics", description: "Review your current academic information.", group: "My learning" },
    { slug: "results", label: "Results", description: "Review results approved for release.", group: "My learning" },
    { slug: "attendance", label: "Attendance", description: "Review your attendance record.", group: "My learning" },
    { slug: "finance", label: "Finance", description: "Review charges and payments shared with you.", group: "My school" },
    { slug: "announcements", label: "Announcements", description: "Review notices shared with students.", group: "My school" },
    { slug: "documents", label: "Documents", description: "Review documents shared with you.", group: "My school" },
    { slug: "requests", label: "Requests", description: "Review available student request services.", group: "My school" },
  ],
};

export function getModules(workspace: Workspace) { return catalogs[workspace]; }
export function getModule(workspace: Workspace, slug: string) { return catalogs[workspace].find((item) => item.slug === slug); }
export const workspaceMeta: Record<Workspace, { title: string; context: string; role: string }> = {
  platform: { title: "Platform console", context: "Platform administration", role: "Super Administrator preview" },
  school: { title: "Institution workspace", context: "Institution administration", role: "Institution Administrator preview" },
  staff: { title: "Staff workspace", context: "Teaching workspace", role: "Staff preview" },
  student: { title: "Student workspace", context: "Student portal", role: "Student preview" },
};
