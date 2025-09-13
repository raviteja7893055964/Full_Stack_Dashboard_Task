'use client';
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SidebarNav() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="mr-2" />
      <Sidebar visible={visible} onHide={() => setVisible(false)} position="left" className="w-64">
        <h3>Menu</h3>
        <ul className="mt-2">
          <li className="py-1">Item 1</li>
          <li className="py-1">Item 2</li>
        </ul>
      </Sidebar>
    </>
  );
}
