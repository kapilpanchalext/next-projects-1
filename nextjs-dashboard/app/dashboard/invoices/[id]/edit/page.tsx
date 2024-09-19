import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { customers } from '@/app/lib/placeholder-data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    // const [invoice, customers] = await Promise.all([
    //   fetchInvoiceById(id),
    //   fetchCustomers(),
    // ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${1}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={{id: "1", customer_id: "1", amount: 12345, status: 'pending'}} customers={customers} />
    </main>
  );
}