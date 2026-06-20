import DashboardSidebar from '@/features/dashboard/components/DashboardSidebar';
// import DashboardNavbar from '@/features/dashboard/components/DashboardNavbar';
export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>
      
      <div className='flex h-screen'>
        <DashboardSidebar />
        <div className='flex-1 flex flex-col'>
        {/* <DashboardNavbar /> */}
        <main className='flex-1 overflow-y-auto p-4'>{children}</main>
        </div>
      </div>
    </>
  );
}