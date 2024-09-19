import React, { Suspense } from 'react';
import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { revenue } from '../../lib/placeholder-data';
import Loading from './loading';
import { CardsSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

type Props = {}

const page = (props: Props) => {
  return (
    <main>
      {/* <Loading /> */}
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* <Card title="Collected" value={'$1,106.36'} type="collected" />
        <Card title="Pending" value={'1,339.11'} type="pending" />
        <Card title="Total Invoices" value={'15'} type="invoices" />
        <Card
          title="Total Customers"
          value={'8'}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices = {[
          {
            id: '1',
            name: 'Lee Robinson',
            image_url: '/customers/lee-robinson.png',
            email: 'email1@email1.com',
            amount: '$1,106.36',
          },{
            id: '2',
            name: 'Michael Novotny',
            image_url: '/customers/michael-novotny.png',
            email: 'email2@email2.com',
            amount: '$1,202.43',
          },{
            id: '3',
            name: 'Delba Oliveira',
            image_url: '/customers/delba-de-oliveira.png',
            email: 'email3@email3.com',
            amount: '$2,202.43',
          },{
            id: '4',
            name: 'Balazs Orban',
            image_url: '/customers/balazs-orban.png',
            email: 'email4@email4.com',
            amount: '$3,202.43',
          },{
            id: '5',
            name: 'Amy Burns',
            image_url: '/customers/amy-burns.png',
            email: 'email5@email5.com',
            amount: '$4,202.43',
          }
        ]} />
      </div>
    </main>
  )
}

export default page;