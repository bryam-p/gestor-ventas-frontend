import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { ClientForm } from './ClientForm';
import { SellForm } from './SellForm';

export const SalesRecord = () => {


    const data = [
        {
            label: "Datos de cliente",
            value: "datos_cliente",
            desc: <ClientForm />
        },
        {
            label: "Datos de venta",
            value: "datos_venta",
            desc: <SellForm />
        },
        {
            label: "Datos de campaña",
            value: "datos_capana",
            desc: "Datos de campaña"
        }
    ];

    return (
        <Tabs value="datos_cliente" className="container contTabs">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    )
}
