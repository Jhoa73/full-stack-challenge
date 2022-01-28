import { ResponsiveCard } from "components/atoms/ResponsiveCard";
import { UsersPageProvider } from "context/UsersPageContext";
import { UsersPageHeader } from "components/organims/Users/UsersPageHeader";
import { UsersTable } from "components/organims/Users/UsersTable";

export const UsersPage = () => (
  <UsersPageProvider>
    <ResponsiveCard>
      <UsersPageHeader />
      <UsersTable />
    </ResponsiveCard>
  </UsersPageProvider>
);
